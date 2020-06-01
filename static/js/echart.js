<<<<<<< HEAD
// ---------------------eCharts----------------------------

// ---------------------组织分布----------------------------
var myMap = echarts.init(document.getElementById('map'));
// 自定义城市坐标菜单
// var data = [
//     {name: '海门', value: 9},
//     {name: '鄂尔多斯', value: 12},
//     {name: '招远', value: 12},
//     {name: '舟山', value: 12},
//     {name: '齐齐哈尔', value: 14},
// ];
var geoCoordMap = {
    "海门": [121.15, 31.89],
    "鄂尔多斯": [109.781327, 39.608266],
    "招远": [120.38, 37.35],
    "舟山": [122.207216, 29.985295],
    "齐齐哈尔": [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64]
};
// 拼接对象数组
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        // 获取坐标
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].name)
            });
        }
    }
    return res;
};
// option
var optionMap = {
    // title:{
    //     text:'组织分布',
    //     left:'10%',
    //     top:'2%',
    //     textStyle:{
    //         color:'#fff',
    //         fontSize:18,
    //         fontWeight:'normal',
    //         fontFamily:'Microsoft YaHei',
    //     }
    // },
    // 提示框组件
    tooltip: {
        show: true,
        trigger: 'item',
        // 自定义提示信息
        // "formatter":(p)=>{
        //     let dataBrief=p.data;
        //     txtCon:dataBrief.name+'<br>值'+dataBrief.value[2];
        //     return txtCon;
        // }
    },
    geo: {
        map: 'china',
        zoom: 1
    },
    series: [
        {
            name: 'PM2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                { name: "海门", value: 9 },
                { name: "鄂尔多斯", value: 12 },
                { name: "招远", value: 12 },
                { name: "舟山", value: 12 },
                { name: "齐齐哈尔", value: 14, },
                { name: "盐城", value: 15 },
                { name: "赤峰", value: 100 },
                { name: "青岛", value: 18 },
                { name: "乳山", value: 300 },
                { name: "金昌", value: 19 },
                { name: "南京", value: 500 }
            ]),
            symbol: 'circle'
        }
    ]
}
myMap.setOption(optionMap);

// ---------------------组织类型----------------------------
var myBar = echarts.init(document.getElementById('bar'));
var optionBar = {
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效
        axisPointer: {
            // 默认为直线，可选为：'line'|'shadow'
            type: 'shadow'
        },
        // formatter:function(params){
        //     var tar=params[1];
        //     return tar.name+'<br>'+tar.seriesName+':'+tar.value;
        // }
    },
    grid: {
        show: false,
        top: '10%',
        left: '16px',
        bottom: '4%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        // x轴
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        // x轴标签
        axisLabel: {
            show: true,
            interval: 0
        },
        data: ['总数量', '居家', '机构', '综合体', '残疾人之家']
    },
    yAxis: {
        type: 'value',
        // y轴
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        // y轴分隔线
        splitLine: {
            show: true,
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(255,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 30, 18, 12, 0]
        },
        {
            name: '组织类型',
            type: 'bar',
            stack: '总量',
            barWidth: '45px',
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#6699ff', '#04d2dd', '#02d4b0', '#ffcc00', '#aaae2e'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [59, 29, 18, 3, 8]
        }
    ]
}
myBar.setOption(optionBar);


// ---------------------组织等级----------------------------
var myPie1 = echarts.init(document.getElementById('pie1'));
var myPie2 = echarts.init(document.getElementById('pie2'));
var optionPie1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        itemWidth: 15,
        itemHeight: 8.5,
        data: ['居家1', '居家2', '居家3', '居家4', '居家5']
    },
    series: [
        {
            name: '饼图1',
            type: 'pie',
            avoidLabelOverLap: false,
            radius: ['25%', '35%'],
            center: ['50%', '50%'],
            clockwise: false,
            label: {
                show: true,
                position: 'outside',
                formatter: '{d}%'
            },
            labelLine: {
                show: true,
                lineStyle: {

                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#91c8ae', '#c23531', '#2f4554', '#61a0a8', '#d48265'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [
                { value: 65, name: '居家1' },
                { value: 12, name: '居家2' },
                { value: 10, name: '居家3' },
                { value: 8, name: '居家4' },
                { value: 5, name: '居家5' }
            ]
        }
    ]
}
var optionPie2 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        itemWidth: 15,
        itemHeight: 8.5,
        data: ['机构1', '机构2', '机构3', '机构4', '机构5']
    },
    series: [
        {
            name: '饼图2',
            type: 'pie',
            avoidLabelOverLap: false,
            radius: ['25%', '35%'],
            center: ['50%', '50%'],
            clockwise: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '13',
                        fontWeight: 'bold'
                    }
                },

            },
            labelLine: {
                show: true
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#91c8ae', '#c23531', '#2f4554', '#61a0a8', '#d48265'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [
                { value: 65, name: '机构1' },
                { value: 12, name: '机构2' },
                { value: 10, name: '机构3' },
                { value: 8, name: '机构4' },
                { value: 5, name: '机构5' }
            ]
        }
    ]
}
myPie1.setOption(optionPie1);
myPie2.setOption(optionPie2);


// ---------------------行业贡献----------------------------
var myContri = echarts.init(document.getElementById('contribution'));
var xAxisData = [];
var data1 = [];
var data2 = [];
for (let i = 15; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
var optionContri = {
    title: {},
    // legend:{},
    tooltip: {},
    xAxis: {
        show: true,
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#353f47'
            }
        }
    },
    grid: {
        left: '5%',
        bottom: '8%',
        right: '5%',
        top: '10%'
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            },
            itemStyle: {
                color: '#fbd55b'
            }
        },
        {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            },
            itemStyle: {
                color: '#359cd2'
            }
        }
    ],
    animationEasing: 'elasticout',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
}
myContri.setOption(optionContri);


// ---------------------人员类型----------------------------
var myType = echarts.init(document.getElementById('type'));
var dataType = [108, 65, 50, 9, 3, 1];
var yMax = 150;
var dataShadow = [];
for (let i = 0; i < dataType.length; i++) {
    dataShadow.push(yMax);
}
var optionType = {
    title: {},
    tooltip: {},
    grid: {
        left: '20%',
        bottom: '5%',
        top: '25%',
        right: '5%'
    },
    xAxis: {
        show: false,
        splitLine: {
            show: false
        },
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#dededf',
        },
        axisTick: {
            show: false
        },
        inverse: true,
        type: 'category',
        data: ['社工', '护理员', '志愿者', '护士', '医生', '心理咨询师']
    },
    series: [
        {
            type: 'bar',
            itemStyle: {
                color: '#263254'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            silent: true,
            data: dataShadow,
            animation: false
        },
        {
            name: '2011',
            type: 'bar',
            itemStyle: {
                color: '#c2c735'
            },
            label: {
                show: true,
                position: 'right',
                color: '#dededf'
            },
            data: dataType,
            animation: false
        }
    ]
}
myType.setOption(optionType);


// ---------------------性别|年龄---------------------------
var myGenderSvg = echarts.init(document.getElementById('svg-gender'));
var symbols = [
    'path://M804.571429 402.285714l0 237.714286q0 22.857143-16 38.857143t-38.857143 16-38.857143-16-16-38.857143l0-201.142857-36.571429 0 0 521.142857q0 26.285714-18.857143 45.142857t-45.142857 18.857143-45.142857-18.857143-18.857143-45.142857l0-265.142857-36.571429 0 0 265.142857q0 26.285714-18.857143 45.142857t-45.142857 18.857143-45.142857-18.857143-18.857143-45.142857l0-521.142857-36.571429 0 0 201.142857q0 22.857143-16 38.857143t-38.857143 16-38.857143-16-16-38.857143l0-237.714286q0-45.714286 32-77.714286t77.714286-32l365.714286 0q45.714286 0 77.714286 32t32 77.714286zm-164.571429-256q0 53.142857-37.428571 90.571429t-90.571429 37.428571-90.571429-37.428571-37.428571-90.571429 37.428571-90.571429 90.571429-37.428571 90.571429 37.428571 37.428571 90.571429z',
    'path://M877.714286 603.428571q0 22.857143-16 38.857143t-38.857143 16q-29.142857 0-45.714286-24.571429l-129.714286-194.857143-25.714286 0 0 75.428571 141.142857 234.857143q5.142857 8.571429 5.142857 18.857143 0 14.857143-10.857143 25.714286t-25.714286 10.857143l-109.714286 0 0 155.428571q0 26.285714-18.857143 45.142857t-45.142857 18.857143l-91.428571 0q-26.285714 0-45.142857-18.857143t-18.857143-45.142857l0-155.428571-109.714286 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286q0-10.285714 5.142857-18.857143l141.142857-234.857143 0-75.428571-25.714286 0-129.714286 194.857143q-16.571429 24.571429-45.714286 24.571429-22.857143 0-38.857143-16t-16-38.857143q0-16.571429 9.142857-30.285714l146.285714-219.428571q41.714286-61.142857 100.571429-61.142857l219.428571 0q58.857143 0 100.571429 61.142857l146.285714 219.428571q9.142857 13.714286 9.142857 30.285714zm-237.714286-457.142857q0 53.142857-37.428571 90.571429t-90.571429 37.428571-90.571429-37.428571-37.428571-90.571429 37.428571-90.571429 90.571429-37.428571 90.571429 37.428571 37.428571 90.571429z'
];
var optionGenderSvg = {
    legend: {},
    xAxis: {
        show: false
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            fontSize: 14,
            color: 'LightSlateGray'
            // color:function(params){
            //     let colorList=['#1296db','#d4237a'];
            //     return colorList[params.dataIndex];
            // },
            // formatter:function(data){

            // },
            // rich:{
            //     a:{
            //         color:'#1296db'
            //     },
            //     b:{
            //         color:'#d4237a'
            //     }
            // }
        },
        inverse: true,
        data: ['男性:', '女性:']
    },
    grid: {
        left: '12%',
        bottom: '1%',
        top: '35%'
    },
    barCategoryGap: '20%',
    barWidth: '60%',
    series: [
        {
            type: 'pictorialBar',
            symbolRepeat: 10,
            symbolSize: ['100%', '100%'],
            symbolMargin: '175%',
            // symbolBoundingData:true,
            symbolClip: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    // color:'#f00',
                    formatter: '{c}0%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
            },
            data: [
                {
                    value: 3,
                    itemStyle: {
                        color: '#1296db'
                    },
                    symbol: symbols[0]
                },
                {
                    value: 7,
                    itemStyle: {
                        color: '#d4237a',
                    },
                    symbol: symbols[1]
                }
            ]
        }
    ]
}
myGenderSvg.setOption(optionGenderSvg);


var myGenderBar = echarts.init(document.getElementById('bar-gender'));
var optionGenderBar = {
    legend: {
        show: true,
        textStyle: {
            color: 'LightSlateGray'
        },
        data: ['男', '女']
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#FFF'
        },
        data: ['35周岁以下', '36~39周岁', '40~44周岁', '45~49周岁', '50~54周岁', '455周岁及以上']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: '#353f47'
            }
        },
        axisLabel: {
            color: '#FFF'
        }
    },
    grid: {
        left: '10%',
        bottom: '15%',
        top: '15%',
        right: '5%'
    },
    series: [
        {
            type: 'bar',
            name: '男',
            barWidth: '25%',
            itemStyle: {
                color: '#adad7e'
            },
            data: [92, 64, 117, 80, 70, 10]
        }, {
            type: 'bar',
            name: '女',
            barWidth: '25%',
            itemStyle: {
                color: '#c2c735'
            },
            data: [60, 40, 50, 70, 35, 8]
        }
    ]
}
myGenderBar.setOption(optionGenderBar);
// ---------------------服务数据分布-------------------------
var myServerData = echarts.init(document.getElementById('serverData'));
var serverData = [
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 }, { name: '盐城', value: 15 },
    { name: '赤峰', value: 16 },
    { name: '青岛', value: 18 },
    { name: '乳山', value: 18 },
    { name: '金昌', value: 19 },
    { name: '泉州', value: 21 },
    { name: '莱西', value: 21 },
    { name: '日照', value: 21 },
    { name: '胶南', value: 22 },
    { name: '南通', value: 23 },
    { name: '拉萨', value: 24 },
    { name: '云浮', value: 24 },
    { name: '梅州', value: 25 },
    { name: '文登', value: 25 },
    { name: '上海', value: 25 },
    { name: '攀枝花', value: 25 },
    { name: '威海', value: 25 },
    { name: '承德', value: 25 },
    { name: '厦门', value: 26 },
    { name: '汕尾', value: 26 },
    { name: '潮州', value: 26 },
    { name: '丹东', value: 27 },
    { name: '太仓', value: 27 },
    { name: '曲靖', value: 27 },
    { name: '烟台', value: 28 },
    { name: '福州', value: 29 },
    { name: '瓦房店', value: 30 },
    { name: '即墨', value: 30 },
    { name: '抚顺', value: 31 },
    { name: '玉溪', value: 31 },
    { name: '张家口', value: 31 },
    { name: '阳泉', value: 31 },
    { name: '莱州', value: 32 },
    { name: '湖州', value: 32 },
    { name: '汕头', value: 32 },
    { name: '昆山', value: 33 },
    { name: '宁波', value: 33 },
    { name: '湛江', value: 33 },
    { name: '揭阳', value: 34 },
    { name: '荣成', value: 34 },
    { name: '连云港', value: 35 },
    { name: '葫芦岛', value: 35 },
    { name: '常熟', value: 36 },
    { name: '东莞', value: 36 },
    { name: '河源', value: 36 },
    { name: '淮安', value: 36 },
    { name: '泰州', value: 36 },
    { name: '南宁', value: 37 },
    { name: '营口', value: 37 },
    { name: '惠州', value: 37 },
    { name: '江阴', value: 37 },
    { name: '蓬莱', value: 37 },
    { name: '韶关', value: 38 },
    { name: '嘉峪关', value: 38 },
    { name: '广州', value: 38 },
    { name: '延安', value: 38 },
    { name: '太原', value: 39 },
    { name: '清远', value: 39 },
    { name: '中山', value: 39 },
    { name: '昆明', value: 39 },
    { name: '寿光', value: 40 },
    { name: '盘锦', value: 40 },
    { name: '长治', value: 41 },
    { name: '深圳', value: 41 },
    { name: '珠海', value: 42 },
    { name: '宿迁', value: 43 },
    { name: '咸阳', value: 43 },
    { name: '铜川', value: 44 },
    { name: '平度', value: 44 },
    { name: '佛山', value: 44 },
    { name: '海口', value: 44 },
    { name: '江门', value: 45 },
    { name: '章丘', value: 45 },
    { name: '肇庆', value: 46 },
    { name: '大连', value: 47 },
    { name: '临汾', value: 47 },
    { name: '吴江', value: 47 },
    { name: '石嘴山', value: 49 },
    { name: '沈阳', value: 50 },
    { name: '苏州', value: 50 },
    { name: '茂名', value: 50 },
    { name: '嘉兴', value: 51 },
    { name: '长春', value: 51 },
    { name: '胶州', value: 52 },
    { name: '银川', value: 52 },
    { name: '张家港', value: 52 },
    { name: '三门峡', value: 53 },
    { name: '锦州', value: 54 },
    { name: '南昌', value: 54 },
    { name: '柳州', value: 54 },
    { name: '三亚', value: 54 },
    { name: '自贡', value: 56 },
    { name: '吉林', value: 56 },
    { name: '阳江', value: 57 },
    { name: '泸州', value: 57 },
    { name: '西宁', value: 57 },
    { name: '宜宾', value: 58 },
    { name: '呼和浩特', value: 58 },
    { name: '成都', value: 58 },
    { name: '大同', value: 58 },
    { name: '镇江', value: 59 },
    { name: '桂林', value: 59 },
    { name: '张家界', value: 59 },
    { name: '宜兴', value: 59 },
    { name: '北海', value: 60 },
    { name: '西安', value: 61 },
    { name: '金坛', value: 62 },
    { name: '东营', value: 62 },
    { name: '牡丹江', value: 63 },
    { name: '遵义', value: 63 },
    { name: '绍兴', value: 63 },
    { name: '扬州', value: 64 },
    { name: '常州', value: 64 },
    { name: '潍坊', value: 65 },
    { name: '重庆', value: 66 },
    { name: '台州', value: 67 },
    { name: '南京', value: 67 },
    { name: '滨州', value: 70 },
    { name: '贵阳', value: 71 },
    { name: '无锡', value: 71 },
    { name: '本溪', value: 71 },
    { name: '克拉玛依', value: 72 },
    { name: '渭南', value: 72 },
    { name: '马鞍山', value: 72 },
    { name: '宝鸡', value: 72 },
    { name: '焦作', value: 75 },
    { name: '句容', value: 75 },
    { name: '北京', value: 79 },
    { name: '徐州', value: 79 },
    { name: '衡水', value: 80 },
    { name: '包头', value: 80 },
    { name: '绵阳', value: 80 },
    { name: '乌鲁木齐', value: 84 },
    { name: '枣庄', value: 84 },
    { name: '杭州', value: 84 },
    { name: '淄博', value: 85 },
    { name: '鞍山', value: 86 },
    { name: '溧阳', value: 86 },
    { name: '库尔勒', value: 86 },
    { name: '安阳', value: 90 },
    { name: '开封', value: 90 },
    { name: '济南', value: 92 },
    { name: '德阳', value: 93 },
    { name: '温州', value: 95 },
    { name: '九江', value: 96 },
    { name: '邯郸', value: 98 },
    { name: '临安', value: 99 },
    { name: '兰州', value: 99 },
    { name: '沧州', value: 100 },
    { name: '临沂', value: 103 },
    { name: '南充', value: 104 },
    { name: '天津', value: 105 },
    { name: '富阳', value: 106 },
    { name: '泰安', value: 112 },
    { name: '诸暨', value: 112 },
    { name: '郑州', value: 113 },
    { name: '哈尔滨', value: 114 },
    { name: '聊城', value: 116 },
    { name: '芜湖', value: 117 },
    { name: '唐山', value: 119 },
    { name: '平顶山', value: 119 },
    { name: '邢台', value: 119 },
    { name: '德州', value: 120 },
    { name: '济宁', value: 120 },
    { name: '荆州', value: 127 },
    { name: '宜昌', value: 130 },
    { name: '义乌', value: 132 },
    { name: '丽水', value: 133 },
    { name: '洛阳', value: 134 },
    { name: '秦皇岛', value: 136 },
    { name: '株洲', value: 143 },
    { name: '石家庄', value: 147 },
    { name: '莱芜', value: 148 },
    { name: '常德', value: 152 },
    { name: '保定', value: 153 },
    { name: '湘潭', value: 154 },
    { name: '金华', value: 157 },
    { name: '岳阳', value: 169 },
    { name: '长沙', value: 175 },
    { name: '衢州', value: 177 },
    { name: '廊坊', value: 193 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
];
var serverGeoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};
var serverConvertData = function (serverData) {
    var res = [];
    for (var i = 0; i < serverData.length; i++) {
        var geoCoord = serverGeoCoordMap[serverData[i].name];
        if (geoCoord) {
            res.push({
                name: serverData[i].name,
                value: geoCoord.concat(serverData[i].value)
            });
        }
    }
    return res;
};
var optionServerData = {
    tooltip: {
        trigger: 'item'
    },
    bmap: {
        center: [118.799907, 32.038109],
        zoom: 5,
        roam: true,
        mapStyle: {
            style: 'dark',
            styleJson: []
        },
        enableMapClick: false
    },
    series: [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: serverConvertData(serverData),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'green'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: serverConvertData(serverData.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
=======
// ---------------------eCharts----------------------------

// ---------------------组织分布----------------------------
var myMap = echarts.init(document.getElementById('map'));
// 自定义城市坐标菜单
// var data = [
//     {name: '海门', value: 9},
//     {name: '鄂尔多斯', value: 12},
//     {name: '招远', value: 12},
//     {name: '舟山', value: 12},
//     {name: '齐齐哈尔', value: 14},
// ];
var geoCoordMap = {
    "海门": [121.15, 31.89],
    "鄂尔多斯": [109.781327, 39.608266],
    "招远": [120.38, 37.35],
    "舟山": [122.207216, 29.985295],
    "齐齐哈尔": [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64]
};
// 拼接对象数组
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        // 获取坐标
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].name)
            });
        }
    }
    return res;
};
// option
var optionMap = {
    // title:{
    //     text:'组织分布',
    //     left:'10%',
    //     top:'2%',
    //     textStyle:{
    //         color:'#fff',
    //         fontSize:18,
    //         fontWeight:'normal',
    //         fontFamily:'Microsoft YaHei',
    //     }
    // },
    // 提示框组件
    tooltip: {
        show: true,
        trigger: 'item',
        // 自定义提示信息
        // "formatter":(p)=>{
        //     let dataBrief=p.data;
        //     txtCon:dataBrief.name+'<br>值'+dataBrief.value[2];
        //     return txtCon;
        // }
    },
    geo: {
        map: 'china',
        zoom: 1
    },
    series: [
        {
            name: 'PM2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                { name: "海门", value: 9 },
                { name: "鄂尔多斯", value: 12 },
                { name: "招远", value: 12 },
                { name: "舟山", value: 12 },
                { name: "齐齐哈尔", value: 14, },
                { name: "盐城", value: 15 },
                { name: "赤峰", value: 100 },
                { name: "青岛", value: 18 },
                { name: "乳山", value: 300 },
                { name: "金昌", value: 19 },
                { name: "南京", value: 500 }
            ]),
            symbol: 'circle'
        }
    ]
}
myMap.setOption(optionMap);

// ---------------------组织类型----------------------------
var myBar = echarts.init(document.getElementById('bar'));
var optionBar = {
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效
        axisPointer: {
            // 默认为直线，可选为：'line'|'shadow'
            type: 'shadow'
        },
        // formatter:function(params){
        //     var tar=params[1];
        //     return tar.name+'<br>'+tar.seriesName+':'+tar.value;
        // }
    },
    grid: {
        show: false,
        top: '10%',
        left: '16px',
        bottom: '4%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        // x轴
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        // x轴标签
        axisLabel: {
            show: true,
            interval: 0
        },
        data: ['总数量', '居家', '机构', '综合体', '残疾人之家']
    },
    yAxis: {
        type: 'value',
        // y轴
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        // y轴分隔线
        splitLine: {
            show: true,
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(255,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 30, 18, 12, 0]
        },
        {
            name: '组织类型',
            type: 'bar',
            stack: '总量',
            barWidth: '45px',
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#6699ff', '#04d2dd', '#02d4b0', '#ffcc00', '#aaae2e'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [59, 29, 18, 3, 8]
        }
    ]
}
myBar.setOption(optionBar);


// ---------------------组织等级----------------------------
var myPie1 = echarts.init(document.getElementById('pie1'));
var myPie2 = echarts.init(document.getElementById('pie2'));
var optionPie1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        itemWidth: 15,
        itemHeight: 8.5,
        data: ['居家1', '居家2', '居家3', '居家4', '居家5']
    },
    series: [
        {
            name: '饼图1',
            type: 'pie',
            avoidLabelOverLap: false,
            radius: ['25%', '35%'],
            center: ['50%', '50%'],
            clockwise: false,
            label: {
                show: true,
                position: 'outside',
                formatter: '{d}%'
            },
            labelLine: {
                show: true,
                lineStyle: {

                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#91c8ae', '#c23531', '#2f4554', '#61a0a8', '#d48265'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [
                { value: 65, name: '居家1' },
                { value: 12, name: '居家2' },
                { value: 10, name: '居家3' },
                { value: 8, name: '居家4' },
                { value: 5, name: '居家5' }
            ]
        }
    ]
}
var optionPie2 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        itemWidth: 15,
        itemHeight: 8.5,
        data: ['机构1', '机构2', '机构3', '机构4', '机构5']
    },
    series: [
        {
            name: '饼图2',
            type: 'pie',
            avoidLabelOverLap: false,
            radius: ['25%', '35%'],
            center: ['50%', '50%'],
            clockwise: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '13',
                        fontWeight: 'bold'
                    }
                },

            },
            labelLine: {
                show: true
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = ['#91c8ae', '#c23531', '#2f4554', '#61a0a8', '#d48265'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [
                { value: 65, name: '机构1' },
                { value: 12, name: '机构2' },
                { value: 10, name: '机构3' },
                { value: 8, name: '机构4' },
                { value: 5, name: '机构5' }
            ]
        }
    ]
}
myPie1.setOption(optionPie1);
myPie2.setOption(optionPie2);


// ---------------------行业贡献----------------------------
var myContri = echarts.init(document.getElementById('contribution'));
var xAxisData = [];
var data1 = [];
var data2 = [];
for (let i = 15; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
var optionContri = {
    title: {},
    // legend:{},
    tooltip: {},
    xAxis: {
        show: true,
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: 'LightSlateGray'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#353f47'
            }
        }
    },
    grid: {
        left: '5%',
        bottom: '8%',
        right: '5%',
        top: '10%'
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            },
            itemStyle: {
                color: '#fbd55b'
            }
        },
        {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            },
            itemStyle: {
                color: '#359cd2'
            }
        }
    ],
    animationEasing: 'elasticout',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
}
myContri.setOption(optionContri);


// ---------------------人员类型----------------------------
var myType = echarts.init(document.getElementById('type'));
var dataType = [108, 65, 50, 9, 3, 1];
var yMax = 150;
var dataShadow = [];
for (let i = 0; i < dataType.length; i++) {
    dataShadow.push(yMax);
}
var optionType = {
    title: {},
    tooltip: {},
    grid: {
        left: '20%',
        bottom: '5%',
        top: '25%',
        right: '5%'
    },
    xAxis: {
        show: false,
        splitLine: {
            show: false
        },
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#dededf',
        },
        axisTick: {
            show: false
        },
        inverse: true,
        type: 'category',
        data: ['社工', '护理员', '志愿者', '护士', '医生', '心理咨询师']
    },
    series: [
        {
            type: 'bar',
            itemStyle: {
                color: '#263254'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            silent: true,
            data: dataShadow,
            animation: false
        },
        {
            name: '2011',
            type: 'bar',
            itemStyle: {
                color: '#c2c735'
            },
            label: {
                show: true,
                position: 'right',
                color: '#dededf'
            },
            data: dataType,
            animation: false
        }
    ]
}
myType.setOption(optionType);


// ---------------------性别|年龄---------------------------
var myGenderSvg = echarts.init(document.getElementById('svg-gender'));
var symbols = [
    'path://M804.571429 402.285714l0 237.714286q0 22.857143-16 38.857143t-38.857143 16-38.857143-16-16-38.857143l0-201.142857-36.571429 0 0 521.142857q0 26.285714-18.857143 45.142857t-45.142857 18.857143-45.142857-18.857143-18.857143-45.142857l0-265.142857-36.571429 0 0 265.142857q0 26.285714-18.857143 45.142857t-45.142857 18.857143-45.142857-18.857143-18.857143-45.142857l0-521.142857-36.571429 0 0 201.142857q0 22.857143-16 38.857143t-38.857143 16-38.857143-16-16-38.857143l0-237.714286q0-45.714286 32-77.714286t77.714286-32l365.714286 0q45.714286 0 77.714286 32t32 77.714286zm-164.571429-256q0 53.142857-37.428571 90.571429t-90.571429 37.428571-90.571429-37.428571-37.428571-90.571429 37.428571-90.571429 90.571429-37.428571 90.571429 37.428571 37.428571 90.571429z',
    'path://M877.714286 603.428571q0 22.857143-16 38.857143t-38.857143 16q-29.142857 0-45.714286-24.571429l-129.714286-194.857143-25.714286 0 0 75.428571 141.142857 234.857143q5.142857 8.571429 5.142857 18.857143 0 14.857143-10.857143 25.714286t-25.714286 10.857143l-109.714286 0 0 155.428571q0 26.285714-18.857143 45.142857t-45.142857 18.857143l-91.428571 0q-26.285714 0-45.142857-18.857143t-18.857143-45.142857l0-155.428571-109.714286 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286q0-10.285714 5.142857-18.857143l141.142857-234.857143 0-75.428571-25.714286 0-129.714286 194.857143q-16.571429 24.571429-45.714286 24.571429-22.857143 0-38.857143-16t-16-38.857143q0-16.571429 9.142857-30.285714l146.285714-219.428571q41.714286-61.142857 100.571429-61.142857l219.428571 0q58.857143 0 100.571429 61.142857l146.285714 219.428571q9.142857 13.714286 9.142857 30.285714zm-237.714286-457.142857q0 53.142857-37.428571 90.571429t-90.571429 37.428571-90.571429-37.428571-37.428571-90.571429 37.428571-90.571429 90.571429-37.428571 90.571429 37.428571 37.428571 90.571429z'
];
var optionGenderSvg = {
    legend: {},
    xAxis: {
        show: false
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            fontSize: 14,
            color: 'LightSlateGray'
            // color:function(params){
            //     let colorList=['#1296db','#d4237a'];
            //     return colorList[params.dataIndex];
            // },
            // formatter:function(data){

            // },
            // rich:{
            //     a:{
            //         color:'#1296db'
            //     },
            //     b:{
            //         color:'#d4237a'
            //     }
            // }
        },
        inverse: true,
        data: ['男性:', '女性:']
    },
    grid: {
        left: '12%',
        bottom: '1%',
        top: '35%'
    },
    barCategoryGap: '20%',
    barWidth: '60%',
    series: [
        {
            type: 'pictorialBar',
            symbolRepeat: 10,
            symbolSize: ['100%', '100%'],
            symbolMargin: '175%',
            // symbolBoundingData:true,
            symbolClip: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    // color:'#f00',
                    formatter: '{c}0%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
            },
            data: [
                {
                    value: 3,
                    itemStyle: {
                        color: '#1296db'
                    },
                    symbol: symbols[0]
                },
                {
                    value: 7,
                    itemStyle: {
                        color: '#d4237a',
                    },
                    symbol: symbols[1]
                }
            ]
        }
    ]
}
myGenderSvg.setOption(optionGenderSvg);


var myGenderBar = echarts.init(document.getElementById('bar-gender'));
var optionGenderBar = {
    legend: {
        show: true,
        textStyle: {
            color: 'LightSlateGray'
        },
        data: ['男', '女']
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#FFF'
        },
        data: ['35周岁以下', '36~39周岁', '40~44周岁', '45~49周岁', '50~54周岁', '455周岁及以上']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: '#353f47'
            }
        },
        axisLabel: {
            color: '#FFF'
        }
    },
    grid: {
        left: '10%',
        bottom: '15%',
        top: '15%',
        right: '5%'
    },
    series: [
        {
            type: 'bar',
            name: '男',
            barWidth: '25%',
            itemStyle: {
                color: '#adad7e'
            },
            data: [92, 64, 117, 80, 70, 10]
        }, {
            type: 'bar',
            name: '女',
            barWidth: '25%',
            itemStyle: {
                color: '#c2c735'
            },
            data: [60, 40, 50, 70, 35, 8]
        }
    ]
}
myGenderBar.setOption(optionGenderBar);
// ---------------------服务数据分布-------------------------
var myServerData = echarts.init(document.getElementById('serverData'));
var serverData = [
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 }, { name: '盐城', value: 15 },
    { name: '赤峰', value: 16 },
    { name: '青岛', value: 18 },
    { name: '乳山', value: 18 },
    { name: '金昌', value: 19 },
    { name: '泉州', value: 21 },
    { name: '莱西', value: 21 },
    { name: '日照', value: 21 },
    { name: '胶南', value: 22 },
    { name: '南通', value: 23 },
    { name: '拉萨', value: 24 },
    { name: '云浮', value: 24 },
    { name: '梅州', value: 25 },
    { name: '文登', value: 25 },
    { name: '上海', value: 25 },
    { name: '攀枝花', value: 25 },
    { name: '威海', value: 25 },
    { name: '承德', value: 25 },
    { name: '厦门', value: 26 },
    { name: '汕尾', value: 26 },
    { name: '潮州', value: 26 },
    { name: '丹东', value: 27 },
    { name: '太仓', value: 27 },
    { name: '曲靖', value: 27 },
    { name: '烟台', value: 28 },
    { name: '福州', value: 29 },
    { name: '瓦房店', value: 30 },
    { name: '即墨', value: 30 },
    { name: '抚顺', value: 31 },
    { name: '玉溪', value: 31 },
    { name: '张家口', value: 31 },
    { name: '阳泉', value: 31 },
    { name: '莱州', value: 32 },
    { name: '湖州', value: 32 },
    { name: '汕头', value: 32 },
    { name: '昆山', value: 33 },
    { name: '宁波', value: 33 },
    { name: '湛江', value: 33 },
    { name: '揭阳', value: 34 },
    { name: '荣成', value: 34 },
    { name: '连云港', value: 35 },
    { name: '葫芦岛', value: 35 },
    { name: '常熟', value: 36 },
    { name: '东莞', value: 36 },
    { name: '河源', value: 36 },
    { name: '淮安', value: 36 },
    { name: '泰州', value: 36 },
    { name: '南宁', value: 37 },
    { name: '营口', value: 37 },
    { name: '惠州', value: 37 },
    { name: '江阴', value: 37 },
    { name: '蓬莱', value: 37 },
    { name: '韶关', value: 38 },
    { name: '嘉峪关', value: 38 },
    { name: '广州', value: 38 },
    { name: '延安', value: 38 },
    { name: '太原', value: 39 },
    { name: '清远', value: 39 },
    { name: '中山', value: 39 },
    { name: '昆明', value: 39 },
    { name: '寿光', value: 40 },
    { name: '盘锦', value: 40 },
    { name: '长治', value: 41 },
    { name: '深圳', value: 41 },
    { name: '珠海', value: 42 },
    { name: '宿迁', value: 43 },
    { name: '咸阳', value: 43 },
    { name: '铜川', value: 44 },
    { name: '平度', value: 44 },
    { name: '佛山', value: 44 },
    { name: '海口', value: 44 },
    { name: '江门', value: 45 },
    { name: '章丘', value: 45 },
    { name: '肇庆', value: 46 },
    { name: '大连', value: 47 },
    { name: '临汾', value: 47 },
    { name: '吴江', value: 47 },
    { name: '石嘴山', value: 49 },
    { name: '沈阳', value: 50 },
    { name: '苏州', value: 50 },
    { name: '茂名', value: 50 },
    { name: '嘉兴', value: 51 },
    { name: '长春', value: 51 },
    { name: '胶州', value: 52 },
    { name: '银川', value: 52 },
    { name: '张家港', value: 52 },
    { name: '三门峡', value: 53 },
    { name: '锦州', value: 54 },
    { name: '南昌', value: 54 },
    { name: '柳州', value: 54 },
    { name: '三亚', value: 54 },
    { name: '自贡', value: 56 },
    { name: '吉林', value: 56 },
    { name: '阳江', value: 57 },
    { name: '泸州', value: 57 },
    { name: '西宁', value: 57 },
    { name: '宜宾', value: 58 },
    { name: '呼和浩特', value: 58 },
    { name: '成都', value: 58 },
    { name: '大同', value: 58 },
    { name: '镇江', value: 59 },
    { name: '桂林', value: 59 },
    { name: '张家界', value: 59 },
    { name: '宜兴', value: 59 },
    { name: '北海', value: 60 },
    { name: '西安', value: 61 },
    { name: '金坛', value: 62 },
    { name: '东营', value: 62 },
    { name: '牡丹江', value: 63 },
    { name: '遵义', value: 63 },
    { name: '绍兴', value: 63 },
    { name: '扬州', value: 64 },
    { name: '常州', value: 64 },
    { name: '潍坊', value: 65 },
    { name: '重庆', value: 66 },
    { name: '台州', value: 67 },
    { name: '南京', value: 67 },
    { name: '滨州', value: 70 },
    { name: '贵阳', value: 71 },
    { name: '无锡', value: 71 },
    { name: '本溪', value: 71 },
    { name: '克拉玛依', value: 72 },
    { name: '渭南', value: 72 },
    { name: '马鞍山', value: 72 },
    { name: '宝鸡', value: 72 },
    { name: '焦作', value: 75 },
    { name: '句容', value: 75 },
    { name: '北京', value: 79 },
    { name: '徐州', value: 79 },
    { name: '衡水', value: 80 },
    { name: '包头', value: 80 },
    { name: '绵阳', value: 80 },
    { name: '乌鲁木齐', value: 84 },
    { name: '枣庄', value: 84 },
    { name: '杭州', value: 84 },
    { name: '淄博', value: 85 },
    { name: '鞍山', value: 86 },
    { name: '溧阳', value: 86 },
    { name: '库尔勒', value: 86 },
    { name: '安阳', value: 90 },
    { name: '开封', value: 90 },
    { name: '济南', value: 92 },
    { name: '德阳', value: 93 },
    { name: '温州', value: 95 },
    { name: '九江', value: 96 },
    { name: '邯郸', value: 98 },
    { name: '临安', value: 99 },
    { name: '兰州', value: 99 },
    { name: '沧州', value: 100 },
    { name: '临沂', value: 103 },
    { name: '南充', value: 104 },
    { name: '天津', value: 105 },
    { name: '富阳', value: 106 },
    { name: '泰安', value: 112 },
    { name: '诸暨', value: 112 },
    { name: '郑州', value: 113 },
    { name: '哈尔滨', value: 114 },
    { name: '聊城', value: 116 },
    { name: '芜湖', value: 117 },
    { name: '唐山', value: 119 },
    { name: '平顶山', value: 119 },
    { name: '邢台', value: 119 },
    { name: '德州', value: 120 },
    { name: '济宁', value: 120 },
    { name: '荆州', value: 127 },
    { name: '宜昌', value: 130 },
    { name: '义乌', value: 132 },
    { name: '丽水', value: 133 },
    { name: '洛阳', value: 134 },
    { name: '秦皇岛', value: 136 },
    { name: '株洲', value: 143 },
    { name: '石家庄', value: 147 },
    { name: '莱芜', value: 148 },
    { name: '常德', value: 152 },
    { name: '保定', value: 153 },
    { name: '湘潭', value: 154 },
    { name: '金华', value: 157 },
    { name: '岳阳', value: 169 },
    { name: '长沙', value: 175 },
    { name: '衢州', value: 177 },
    { name: '廊坊', value: 193 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
];
var serverGeoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};
var serverConvertData = function (serverData) {
    var res = [];
    for (var i = 0; i < serverData.length; i++) {
        var geoCoord = serverGeoCoordMap[serverData[i].name];
        if (geoCoord) {
            res.push({
                name: serverData[i].name,
                value: geoCoord.concat(serverData[i].value)
            });
        }
    }
    return res;
};
var optionServerData = {
    tooltip: {
        trigger: 'item'
    },
    bmap: {
        center: [118.799907, 32.038109],
        zoom: 5,
        roam: true,
        mapStyle: {
            style: 'dark',
            styleJson: []
        },
        enableMapClick: false
    },
    series: [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: serverConvertData(serverData),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'green'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: serverConvertData(serverData.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
>>>>>>> 52cd9babf1d67fca74aa1094b5942190e0d025da
myServerData.setOption(optionServerData);