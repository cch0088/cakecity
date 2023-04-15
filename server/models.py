from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
   __tablename__ = 'users'

   id = db.Column(db.Integer, primary_key = True)
   username = db.Column(db.String, unique = True, nullable = False)
   password = db.Column(db.String, nullable = False)
   firstname = db.Column(db.String)
   lastname = db.Column(db.String)
   address1 = db.Column(db.String)
   address2 = db.Column(db.String)
   city = db.Column(db.String)
   state = db.Column(db.String)
   zipcode = db.Column(db.String)
   phone = db.Column(db.String)
   email = db.Column(db.String)

   def to_dict(self):
      return {
         "id": self.id,
         "username": self.username,
         "firstname": self.firstname,
         "lastname": self.lastname,
         "address1": self.address1,
         "address2": self.address2,
         "city": self.city,
         "state": self.state,
         "zipcode": self.zipcode,
         "phone": self.phone,
         "email": self.email
      }
   
   def hash(self, password):
      self.password = bcrypt.generate_password_hash(password.encode('utf-8'))
   
   def authenticate(self, password):
      return bcrypt.check_password_hash(self.password, password.encode('utf-8'))

   password_hash = property(authenticate, hash)

class Cake(db.Model):
   __tablename__ = 'cakes'
   
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String, nullable = False)
   size = db.Column(db.Integer)
   image = db.Column(db.String)
   base_type = db.Column(db.Integer)
   base_price = db.Column(db.Float)

   contents = db.relationship('CakeContents', backref = 'cake')

   def to_dict(self):
      return {
         "id": self.id,
         "name": self.name,
         "size": self.size,
         "image": self.image,
         # "contents": [content.to_dict() for content in contents],
         "base_type": self.base_type,
         "base_price": self.base_price
      }
   
class Content(db.Model):
   __tablename__ = 'contents'

   id = db.Column(db.Integer)
   name = db.Column(db.String)

   def to_dict(self):
      return {
         "id": self.id,
         "name": self.name
      }
   
class CakeContent(db.Model):
   __tablename__ = 'cakecontents'

   id = db.Column(db.Integer)
   cake_id = db.Column(db.Integer)
   content_id = db.Column(db.Integer)
   name = db.Column(db.String)

   def to_dict(self):
      return {
         "id": self.id,
         "cake_id": self.cake_id,
         "content_id": self.content_id,
         "name": self.name
      }
   
class Order(db.Model):
   __tablename__ = 'orders'

   id = db.Column(db.Integer)
   cake_id = db.Column(db.Integer)
   user_id = db.Column(db.Integer)
   total_price = db.Column(db.Float)
   ready_date = db.Column(db.DateTime)
   delivery = db.Column(db.String)
   bday_age = db.Column(db.Integer)
   created_at = db.Column(db.DateTime)
   updated_at = db.Column(db.DateTime)

   def to_dict(self):
      return {
         "id": self.id,
         "cake_id": self.cake_id,
         "user_id": self.user_id,
         "total_price": self.total_price,
         "ready_date": self.ready_date,
         "delivery": self.delivery,
         # "options": [option.to_dict() for option in options],
         "bday_age": self.bday_age,
         "created_at": self.created_at,
         "updated_at": self.updated_at
      }
   
class Option(db.Model):
   __tablename__ = 'options'

   id = db.Column(db.Integer)
   name = db.Column(db.String)

   def to_dict(self):
      return {
         "id": self.id,
         "name": self.name
      }

class OrderOption(db.Model):
   __tablename__ = 'orderoptions'

   id = db.Column(db.Integer)
   
   def to_dict(self):
      return {
         "id": self.id
      }
   
   