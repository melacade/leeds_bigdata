(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
(function (func) {
    let company_id = $.getUrlParam('company_id')
    $.ajax({
        url: "/data/getBusiness?company_id=" + company_id,
        type: "GET",
        dataType: "json",
        success: function (data) {
            const _data = data.data;
            var temp = [];
            var names = [];
            _data.forEach((el) => {
                let arr = el.business.split(';');
                arr.forEach((el2) => {

                    let instance = el2.split(':');
                    names.push(instance[0]);
                    temp.push({
                        value: instance[1], name: instance[0]
                    })
                })

            });
            func(temp,names);
        },

    });
})(function (data,names) {
    console.log(data)
    var myChart = echarts.init(document.getElementById('chart_16'), 'infographic');

    option = {
        //改变图表样式
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show: true,
            type: 'scroll',
            orient: 'horizontal',
            left: 120,
            top: 20,
            bottom: 20,
            data: names,
            textStyle: {
                color: 'black'
            }
        },
        //设置饼状图每个颜色块的颜色
        color: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'],
        series: [{
            name: '出发城市',
            type: 'pie',
            radius: '55%',
            center: ['53%', '50%'],
            label: {
                normal: {
                    //饼形图显示格式
                    formatter: '{b|{b}}  {per|{d}%}  ',
                    rich: {
                        b: {
                            color: 'black',
                            fontSize: 14,
                            lineHeight: 33
                        },
                        //设置百分比数字颜色
                        per: {
                            color: '#00B4FB',
                            fontSize: 14,
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

});