from config import db

# 公司业务
class Business(db.Model):
    __tablename__ = "company_business"
    id = db.Column(db.Integer, primary_key=True)
    business = db.Column(db.TEXT)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    company = db.relationship('Company',
                              backref=db.backref('company', lazy='dynamic'))