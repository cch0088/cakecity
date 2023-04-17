from app import app
from models import db, User, Cake, Content, CakeContent, Order, Option
from datetime import date
import json

with app.app_context():

    User.query.delete()
    Cake.query.delete()
    Content.query.delete()
    CakeContent.query.delete()
    Order.query.delete()
    Option.query.delete()

    static_db = open('../db.json')
    data = json.load(static_db)

    for u in data['users']:

        created = date(int(u['created_at'][6:10]), int(u['created_at'][0:2]), int(u['created_at'][3:5]))
        updated = date(int(u['updated_at'][6:10]), int(u['updated_at'][0:2]), int(u['updated_at'][3:5]))

        user = User(username = u['username'], 
                    password_hash = u['password'],
                    firstname = u['firstname'],
                    lastname = u['lastname'],
                    address1 = u['address1'],
                    address2 = u['address2'],
                    city = u['city'],
                    state = u['state'],
                    zipcode = u['zipcode'],
                    phone = u['phone'],
                    email = u['email'],
                    created_at = created,
                    updated_at = updated)
        
        db.session.add(user)
    
    for i, o in enumerate(data['orders']):

        created = date(int(o['created_at'][6:10]), int(o['created_at'][0:2]), int(o['created_at'][3:5]))
        updated = date(int(o['updated_at'][6:10]), int(o['updated_at'][0:2]), int(o['updated_at'][3:5]))
        ready = date(int(o['ready_date'][6:10]), int(o['ready_date'][0:2]), int(o['ready_date'][3:5]))

        orders = Order(cake_id = o['cake_id'],
                       user_id = o['user_id'],
                       total_price = o['total_price'],
                       ready_date = ready,
                       delivery = o['delivery'],
                       bday_age = o['bday_age'],
                       created_at = created,
                       updated_at = updated)
        
        db.session.add(orders)

        for opt in o['options']:
            options = Option(name = opt, order_id = i + 1)
            
            db.session.add(options)

    # for c in data['cakes']:
    #     cakes = Cake(name = c['name'],
    #                  size = c['size'],
    #                  image = c['image'],
    #                  contents = c['contents'],
    #                  base_type = c['base_type'],
    #                  base_price = c['base_price'])
        # db.session.add(cakes)

    db.session.commit()
