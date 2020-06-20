import json


class CommonResult:

    def __init__(self,data,code):
        self.data = data
        self.code = code

    def getResult(self):
        view_data = {}
        view_data['data'] = self.data
        view_data['code'] = self.code
        return view_data

    def result(self):
        res = self.getResult()
        return json.dumps(res,ensure_ascii=False)