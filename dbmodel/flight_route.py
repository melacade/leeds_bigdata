from config import db

# 飞行航线
class FlightRoute(db.Model):
    __tablename__ = "flight_route"
    id = db.Column(db.Integer, primary_key=True)
    start_city = db.Column(db.String)
    destination = db.Column(db.String)
    punctuality_rate = db.Column(db.String)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    company = db.relationship('Company',
        backref=db.backref('company', lazy='dynamic'))

