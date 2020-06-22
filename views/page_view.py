# -*- coding:utf-8 -*-
from flask import Blueprint, render_template
from config import db
from dbmodel.company import Company
"""
本视图专门用于处理页面
"""
page = Blueprint('page', __name__)

@page.route('/',endpoint='index')
def index():
    return render_template("index.html")

@page.route('/modular3',endpoint='modular3')
def modular3():
    data = db.session.query(Company).all()

    return render_template("modulars/modular3.html",companys = data)

@page.route('/modular3/detail',endpoint='modular3/detail')
def modular3_detail():
    data = db.session.query(Company).all()
    return render_template("modulars/modular3/detail.html", companys=data)