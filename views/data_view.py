# -*- coding:utf-8 -*-
import json

from flask import Blueprint, jsonify, request

from config import db
from dbmodel.company import Company
from dbmodel.flight_route import FlightRoute
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