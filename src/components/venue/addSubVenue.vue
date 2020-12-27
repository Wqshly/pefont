<template>
  <div id="venue_sub_add_container">
    <el-form :model="ruleForm" label-width="120px" class="demo-form">

      <el-form-item label="场馆" class="form-row">
        {{ruleForm.venueOption}}
      </el-form-item>

      <el-form-item label="运动名" class="form-row">
        <el-input
          placeholder="运动名"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="场地设施" class="form-row">
        <div v-for="(i, index) in ruleForm.facilities">
          <el-input
            style="width: 150px"
            placeholder="条目"
            v-model="i.key">
          </el-input>
          <el-input
            style="width: calc(100% - 220px)"
            placeholder="描述"
            v-model="i.value">
          </el-input>
          <el-button icon="el-icon-delete" @click="deleteFacilities(index)"></el-button>
        </div>
        <el-button type="primary" plain style="margin-top: 10px" @click="addFacilities">增加条目</el-button>
      </el-form-item>

      <el-form-item label="场馆服务" class="form-row">
        <div v-for="(i, index) in ruleForm.venueService">
          <el-input
            style="width: 150px"
            placeholder="条目"
            v-model="i.key">
          </el-input>
          <el-input
            style="width: calc(100% - 220px)"
            placeholder="描述"
            v-model="i.value">
          </el-input>
          <el-button icon="el-icon-delete" @click="deleteVenueService(index)"></el-button>
        </div>
        <el-button type="primary" plain style="margin-top: 10px" @click="addVenueService">增加条目</el-button>
      </el-form-item>

      <el-form-item label="场地规模" class="form-row">
        <el-input
          placeholder="场地规模"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="场地编号" class="form-row">
        <el-input
          style="width:50%"
          placeholder="场地编号"
          v-model="ruleForm.title">
        </el-input>
        <el-input-number placeholder="场地编号" v-model="ruleForm.num" controls-position="right" @change="handleChange" :min="1"></el-input-number>
      </el-form-item>

      <el-form-item label="场地数" class="form-row">
        <el-input
          placeholder="场地数"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="总占地面积" class="form-row">
        <el-input
          placeholder="总占地面积"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="建成时间" class="form-row">
        <el-date-picker
          v-model="ruleForm.buildTime"
          type="month"
          placeholder="选择修建时间">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="其他信息" class="form-row">
        <el-input v-model="title"
                  type="textarea"
                  :rows="3"
                  maxlength="150"
                  placeholder="其他信息"
                  show-word-limit>
        </el-input>
      </el-form-item>

      <el-form-item label="展示图" class="form-row">
        <img-list :display-image-url="displayImageUrl"/>
      </el-form-item>

      <el-form-item class="form-row">
        <el-button type="success" plain style="cursor: pointer" @click="submit" :disabled="isQuerying">确认</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import imgList from "../common/imgList";
  export default {
    components: {
      imgList
    },
    data() {
      return {
        displayImageUrl: [],
        ruleForm: {
          venueOption:'',
          title: '',
          num: 1,
          buildTime: '',
          facilities: [{key: '', value: ''}],
          travelInformation: [{key: '', value: ''}],
          venueService: [{key: '', value: ''}],
        }
      }
    },
    methods: {
      addFacilities() {
        this.ruleForm.facilities.push({key: '', value: ''});
      },
      deleteFacilities(index) {
        this.ruleForm.facilities.splice(index, 1);
      },
      addVenueService() {
        this.ruleForm.venueService.push({key: '', value: ''});
      },
      deleteVenueService(index) {
        this.ruleForm.venueService.splice(index, 1);
      },
    },
    mounted() {
      if(!this.$store.state.venueOption) {
        this.$message('选择一个场馆，为其添加运动馆');
        this.$router.push("/venue/management/management");
      } else {
        this.ruleForm.venueOption = this.$store.state.venueOption;
      }
    },
    created() {

    },
  }
</script>

<style scoped>
  #venue_sub_add_container {
    width: 100%;
    margin: 0 auto;
  }

  .demo-form {
    width: 100%;
    padding-top: 15px;
  }

  .form-row {
    width: 100%;
    max-width: 660px;
  }

</style>
