(function (func) {
    $.ajax({
        url: "/data/getCompany",
        type: "GET",
        dataType: "json",
        success: function (data) {
            const _data = data.data;
            let names = [];
            let values = [];
            _data.forEach((el)=>{
                names.push(el.name);
                values.push(el.flight_count)
            })
            let temp = {
                names:names,
                values:values
            }
            func(temp);
        },

    });
})(function (data) {
    var myChart = echarts.init(document.getElementById('chart_16'), 'infographic');

    var option = {
        title: {
            text: '各个行洪公司的航班数量对比',
            subtext: '数据来自网络'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: [ '2016年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: data.names
        },
        series: [
            {
                name: '2016年',
                type: 'bar',
                data: data.values
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

});