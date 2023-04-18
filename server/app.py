from flask import Flask, make_response, jsonify, request, session
from flask_migrate import Migrate
from models import db, User, Cake, Content, CakeContent, Order, Option

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cakecity.db'
app.secret_key = 'kijuna4rg9ha34oiward89034onmd903w409m0909b'

migrate = Migrate(app, db)

db.init_app(app)

# default route
@app.route("/")
def default_route():
    return make_response(jsonify(dict({"status": "Default route"})), 200)

# website registration with validation against duplicate users
@app.route("/register", methods = ['POST'])
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
@app.route("/login", methods = ['GET', 'POST'])
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
@app.route("/logout", methods = ['DELETE'])
def logout():
    session['user_id'] = None
    return make_response(jsonify(dict({"message": "No Content"})), 204)

@app.route("/orders/<id>", methods = ['GET', 'DELETE'])
def orders_by_id(id):
    
    order = Order.query.get(id)

     # validates if order exists
    if not order:
        return make_response(jsonify(dict({"error": "Order not found"})), 404)
    
    else:
        if request.method == 'GET':
            return make_response(jsonify(order.to_dict()), 200)
        
        elif request.method == 'DELETE':

            db.session.delete(order)
            db.session.commit()

            return make_response(jsonify(dict({"message": "Order deleted"})), 200)

@app.route("/orders", methods = ['POST'])
def new_order():
        body = request.get_json()
        
        new_order = Order()

        for key, value in body.items():
            setattr(new_order, key, value)

        db.session.add(new_order)
        db.session.commit()

        return make_response(jsonify(new_order.to_dict()), 201)

# get all cakes
@app.route("/cakes")
def get_cakes():
    cakes = Cake.query.all()
    cakes_dict = [cake.to_dict() for cake in cakes]
    return make_response(jsonify(cakes_dict), 200)
