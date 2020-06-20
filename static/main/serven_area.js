(function (func) {
    $.ajax({
        url: "/data/getServenArea",
        type: "GET",
        dataType: "json",
        success: function (data) {
            func(data.series_data);
        }
    });
})(function (data) {

    var myChart = echarts.init(document.getElementById('serven_area'), 'infographic');
    var data1 = [];
    var data2 = [];
    $(data).each(function (k, v) {
        data1.push(v.city);
        data2.push(v.price);
    });

    option = {
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: data1
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '房价',
                type: 'bar',
                data: data2
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

});