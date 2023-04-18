from flask import Flask, make_response, jsonify, request, session
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, User, Cake, Content, CakeContent, Order, Option, OrderOption
from datetime import date

app = Flask(__name__)
cors = CORS(app, resources={r"/cakecity/api/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cakecity.db'
app.secret_key = 'kijuna4rg9ha34oiward89034onmd903w409m0909b'

migrate = Migrate(app, db)

db.init_app(app)

# default route
@app.route("/cakecity/api")
def default_route():
    return make_response(jsonify(dict({"status": "Default route"})), 200)

# website registration with validation against duplicate users
@app.route("/cakecity/api/register", methods = ['POST'])
def register():
    data = request.get_json()
    un = data.get('username')
    pw = data.get('password')

    if User.query.filter(User.username == un).first():
        return make_response(jsonify(dict({"error": "This user already exists!"})), 400)
    else:
        new_user = User(username=un, password_hash=pw)
        db.session.add(new_user)
        db.session.commit()
        return make_response(jsonify(new_user.to_dict()), 201)

# website login with authentication
@app.route("/cakecity/api/login", methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        un = data.get('username')
        pw = data.get('password')

        user = User.query.filter(User.username == un).first()

        if not user or user.authenticate(pw) == False:
            return make_response(jsonify(dict({"error": "The username or password is incorrect."})), 401)
        else:
            session['user_id'] = user.id
            return make_response(jsonify(user.to_dict()), 200)
        
    elif request.method == 'GET':
        user = User.query.filter(User.id == session.get('user_id')).first()

        if not user:
            return make_response(jsonify(dict({"message": "Not Authorized"})), 401)
        else:
            return make_response(jsonify(user.to_dict()), 200)

# website logout    
@app.route("/cakecity/api/logout", methods = ['DELETE'])
def logout():
    session['user_id'] = None
    return make_response(jsonify(dict({"message": "No Content"})), 204)

# get orders by user id
@app.route("/cakecity/api/orders/<userID>")
def orders_by_id(userID):
    
    orders = Order.query.filter(Order.user_id == userID).all()

     # validates if orders exist
    if not orders:
        return make_response(jsonify(dict({"error": "No orders for this user"})), 404)
    
    else:
        orders_dict = [order.to_dict() for order in orders]
        return make_response(jsonify(orders_dict), 200)

# delete order by id        
@app.route("/cakecity/api/orders/<ID>", methods = ['DELETE'])
def delete_order_by_id(ID):
    order = Order.query.get(ID)

     # validates if order exists
    if not order:
        return make_response(jsonify(dict({"error": "Order not found"})), 404)
    
    else:
        db.session.delete(order)
        db.session.commit()

        return make_response(jsonify(dict({"message": "Order deleted"})), 200)

# create new order
@app.route("/cakecity/api/orders", methods = ['POST'])
def new_order():
        body = request.get_json()
        new_order = Order()
        last_order = Order.query.order_by(-Order.id).first()

        for key, value in body.items():
            if key == 'options':
                for option in value:
                    option_query = Option.query.filter(Option.name == option).first()
                    new_order_options = OrderOption(order_id = last_order.id + 1, option_id = option_query.id)
                    db.session.add(new_order_options)
            elif key == 'ready_date':
                ready = date(int(value[6:10]), int(value[0:2]), int(value[3:5]))
                setattr(new_order, key, ready)
            else:
                setattr(new_order, key, value)

        db.session.add(new_order)
        db.session.commit()

        return make_response(jsonify(new_order.to_dict()), 201)

# get all cakes
@app.route("/cakecity/api/cakes")
def get_cakes():
    cakes = Cake.query.all()
    cakes_dict = [cake.to_dict() for cake in cakes]
    return make_response(jsonify(cakes_dict), 200)
