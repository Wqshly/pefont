<template>
  <div>
    <div class="main-nav">
      <div class="main">
        <div ref="main" style="width: 600px;height:400px;"></div>
      </div>

    </div>
  </div>
</template>
<script>

import echarts from 'echarts'
import {api} from "@/api/ajax"
export default {
  //活动中心的父级组件
  name: 'theory_page',
    data() {
        return {
            mark:60,
            option:{
                title: {
                    text: '学分情况',
                    show:false,
                },
                tooltip: {},
                toolbox:{
                  show:true,
                  feature: {
                      dataView: {readOnly: false},
                      saveAsImage: {}
                  }
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['30%', '55%'],
                        data: [
                          {
                              value: 0,
                              name: '理论知识得分'
                          },
                          {
                              value: 0,
                              name: '体育活动得分'
                          },
                          {
                              value: 0,
                              name: '还需得分'
                          },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal:{
                                color:function(params) {
                                    //自定义颜色
                                    var colorList = [
                                        '#67C23A','#409EFF', '#FE8463',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            }
        }
    },
    mounted() {
        this.getEchartData();
    },
    methods: {
        getEchartData() {
            const chart = this.$refs.main;
            const myChart = echarts.init(chart);

            myChart.setOption(this.option);
        }
    },
    created() {
        //理论
        let temp = this.option.series[0].data[0].value = 20;
        //活动
        let temp2 = this.option.series[0].data[1].value = 30;
        let temp3 = temp+temp2;
        if(temp3 <= this.mark){
            this.option.series[0].data[2].value = this.mark - temp3;
        }

    },
}
</script>

<style scoped>

  .main-nav {
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

  }
  .main-nav h3{
    font-size: 24px;
    font-weight: 400;
    line-height: 48px ;
  }

  .box-card{
    margin-bottom: 20px;
  }



</style>
