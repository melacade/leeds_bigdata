(function (func) {
    $.ajax({
        url: "/data/getBankTrend",
        type: "GET",
        dataType: "json",
        success: function (data) {
            // alert(data);
            // alert(data.year);
            // alert(data.amount);
            func(data);
        }
    });
})(function (data) {

    var myChart = echarts.init(document.getElementById('chart_16'), 'infographic');

    var option = {
        title: {
            text: '折线图堆叠'
        },
        legend: {
            data: ['管理资金'],
            textStyle: {
                color: '#fff'
            },
            top: '8%'
        },
        grid: {
            top: '40%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.year,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '管理资金',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '管理资金',
                type: 'line',
                data: data.amount
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

});