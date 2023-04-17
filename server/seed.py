from app import app
from models import db, User #Cake, Content, CakeContent, Order, Option, OrderOption
import json

with app.app_context():

    static_db = open('../db.json')
    data = json.load(static_db)

    for u in data['users']:
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
                    email = u['email'])
        print(user)
    #     db.session.add(user)
    
    # db.session.commit()
    

    # User.query.delete()
    # Cake.query.delete()
    # Content.query.delete()
    # CakeContent.query.delete()
    # Order.query.delete()
    # Option.query.delete()
    # OrderOption.query.delete()

    # #  all options for the instances
    # days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    # hours = [ '9:00-10:00','10:00-11:00','11:00-12:00','12:00-1:00','1:00-2:00','2:00-3:00','3:00-4:00','4:00-5:00','5:00-6:00',
    #           '9:30-10:30','10:30-11:30','11:30-12:30','12:30-1:30','1:30-2:30','2:30-3:30','3:30-4:30','4:30-5:30','5:30-6:30',]
    
    # boats = [{'name': 'Kayak',            'capacity': 1, 'wkday_p': 20,  'wkend_p': 30 },
    #          {'name': 'Jet-Ski',          'capacity': 2, 'wkday_p': 150, 'wkend_p': 190}, 
    #          {'name': 'Catamaran',        'capacity': 4, 'wkday_p': 200, 'wkend_p': 250}, 
    #          {'name': 'Speed-Boat',       'capacity': 5, 'wkday_p': 210, 'wkend_p': 260},
    #          {'name': 'Fishing-Boat',     'capacity': 3, 'wkday_p': 215, 'wkend_p': 250},
    #          {'name': 'Swan-Paddle-Boat', 'capacity': 3, 'wkday_p': 25,  'wkend_p': 40 }]
    
    # # initial empty arrays for, to be added to db
    # boats_db = []
    # times_db = []
    # bts_db   = []
     
    # #  actually creates all instances
    # #
    # # instances of boats  
    # for b in boats:
    #     boat = Boat(name = b['name'], capacity = b['capacity'])
    #     boats_db.append(boat)
    # # instances of times
    # for day in days:
    #     for hour in hours:
    #         time = Time(hour = hour, day = day)
    #         times_db.append(time)
    # # instances of boatTimes
    # for boat in boats:
    #     for time in times_db:
    #         bt = BoatTime(boat_id = boats.index(boat) + 1,
    #                       time_id = times_db.index(time) + 1,
    #                       price = boat['wkend_p'] if time.day == 'Sunday' else boat['wkday_p'],
    #                       reserved = '')
    #         bts_db.append(bt)

    # #  adds all instances to the db and commits it
    # db.session.add_all(bts_db)
    # db.session.add_all(times_db)
    # db.session.add_all(boats_db)
    # db.session.commit()    