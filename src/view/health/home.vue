<template>
  <div  class="main-nav">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item,index) in items" :title="item.title" :name="item.title">
        <div> {{item.value}}</div>
      </el-collapse-item>

      <el-collapse-item title="评分标准" name="100">
      <n-fitness></n-fitness>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
    import nFitness from '@/components/fitness'
export default {

    components: {
        nFitness
    },
    data() {
        return {
            activeNames: ['100'],
            items:[
                {
                    title:'姓名',
                    value:'张三',
                },
                {
                    title:'肺活量体重指数',
                    value:'84',
                },
                {
                    title:'1000米(分.秒)',
                    value:'3.27',
                },
                {
                    title:'台阶试验',
                    value:'82',
                },
                {
                    title:'50米跑（秒）',
                    value:'6',
                },
                {
                    title:'立定跳远（米）',
                    value:'2.66',
                },{
                    title:'掷实心球（米）',
                    value:'15.7',
                },
                {
                    title:'握力体重指数',
                    value:'92',
                },
                {
                    title:'引体向上(次)',
                    value:'26',
                },
                {
                    title:'坐位体前屈(厘米)',
                    value:'23',
                },
                {
                    title:'跳绳（次/1分钟）',
                    value:'198',
                },
                {
                    title:'篮球运球(秒)',
                    value:'8.6',
                },
                {
                    title:'足球运球 (秒)',
                    value:'6.3',
                },
                {
                    title:'排球垫球(次)',
                    value:'50',
                },

            ],
        }
    },
    methods: {
        handleChange(val) {

        }
    },
    mounted() {
      for(let i = 0 ;i < this.items.length; ++i){
          this.activeNames.push(this.items[i].title);
      }
    },
    created() {

    },
}
</script>

<style scoped>

  .main-nav {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

</style>
