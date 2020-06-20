from config import db

# 公司
class Company(db.Model):
    __tablename__ = "company"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    average_punctuality_rate  = db.Column(db.String)
    flight_count = db.Column(db.Integer)