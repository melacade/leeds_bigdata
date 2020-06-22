# -*- coding:utf-8 -*-
import json

from flask import Blueprint, jsonify, request

from config import db
from dbmodel.company import Company
from dbmodel.company_business import Business
from utils.common_result import CommonResult
from utils.model_to_dict import model_to_dict
"""
本视图专门用于处理ajax数据
"""
data = Blueprint('data', __name__)


@data.route('/getCompany', methods=['GET'])
def get_company():
    data = db.session.query(Company).all()
    dict_data = model_to_dict(data)
    res = CommonResult(dict_data,0)
    return res.result()

@data.route('/getBusiness',methods=['GET'])
def get_business():
    company_id = request.args.get('company_id')
    data = db.session.query(Business)\
        .filter(Business.company_id == company_id).all()
    dict_data = model_to_dict(data)
    res = CommonResult(dict_data,0)
    return res.result()