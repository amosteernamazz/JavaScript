//柱状图模块1
(function(){
  //实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //指定配置项和数据
   var option = {
     color:["#2f89cf"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        top: '10px',
        right: '5%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签相关设置
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            //不显示x坐标轴的样式
            axisLine:{
              show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            //修改刻度标签相关设置
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            axisLine:{
              lineStyle:{
                color: "rgba(255,255,255,.1)",
                width:0.01
               }   
            },
            //y轴分割线
            splitLine:{
              lineStyle:{
                color: "rgba(255,255,255,.1)"
              }
            }
        }
    ],
    series: [
        {
            name: '数值',
            type: 'bar',
            barWidth: '35%',
            data: [400, 520, 1100, 1400, 1000, 420, 220],
            itemStyle:{
              barBorderRadius: 5
            }
        }
    ]
};
//将配置项给实例对象
myChart.setOption(option);
//让图标跟随屏幕自动自适应
window.addEventListener('resize',function(){
  myChart.resize();
})
})();
//柱状图2 
(function(){
  var myColor = ["#1089E7", "#f57474","#56D0E3","#F8b448","#8b67f6"];
  //实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));

  //指定配置和数据
  var option = {
    
    grid: {
        top: '8%',
        left: '8%',
        right: '8%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
      //不显示x轴相关信息
      show: false
        },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
        axisLine:{
          show: false
        },
        axisTick:{
          show: false
        },
        //将刻度标签的文字设置为白色
        axisLabel:{
          color: "#fff"
        }
      },
      {
        show: true,
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false
        },
        axisTick:{
          show: false
        },
        axisLabel:{
          textStyle:{
            fontSize:12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            // 实现重叠
            yAxisIndex: 0,
            itemStyle: {
              barBorderRadius: 20,
              //修改不同的色彩
              color:function(params){
                //console.log(params);
                //dataIndex是索引号
                return myColor[params.dataIndex];
              }
            },
            barCategoryGap: 50,
            barWidth: 10, 
            label:{
              //显示柱子内部的文字
              show: true,
              position: 'inside',
              // {c}会自动解析为data的数据值
              // a 为name
              // b 为数据名
              formatter: "{c}%"
            }
        
          },
        {
            name: '框',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 15,
            //实现重叠
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle:{
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
            }
        }
    ]
};
  //配置给实例对象
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();