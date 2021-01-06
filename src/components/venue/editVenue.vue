<template>
  <div class="venue-create">

    <el-form :model="ruleForm" label-width="120px" class="demo-form">
      <el-form-item class="form-row">
        <h3>编辑场馆</h3>
      </el-form-item>
      <el-form-item class="form-row">
        <el-button type="primary" icon="el-icon-edit" plain @click.stop="addSubs(id)">为该场馆添加运动馆</el-button>
      </el-form-item>
      <el-form-item label="场馆名" class="form-row">
        <el-input
          placeholder="场馆名"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="场馆地址" class="form-row">
        <el-input
          placeholder="场馆地址"
          v-model="ruleForm.position">
        </el-input>
      </el-form-item>

      <el-form-item label="场馆电话" class="form-row">
        <el-input
          placeholder="场馆名"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="开放日期" class="form-row">
        <el-checkbox-group v-model="ruleForm.openDate">
          <el-checkbox v-for="o in openDateOptions" :label="o" :key="o"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="开放时间" class="form-row">
        <el-time-picker
          is-range
          v-model="ruleForm.openTime"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-form-item>

      <el-form-item label="交通信息" class="form-row">
        <div v-for="(i, index) in ruleForm.travelInformation">
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
          <el-button icon="el-icon-delete" @click="deleteTravelInformation(index)"></el-button>
        </div>
        <el-button type="primary" plain style="margin-top: 10px" @click="addTravelInformation">增加条目</el-button>
      </el-form-item>

      <el-form-item label="人均价格" class="form-row">
        <el-input
          placeholder="人均价格"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="缩略图" class="form-row">
        <div :class="[{'avatar-uploader': !imageUrl},'avatar-container']">
          <input ref="upload" type="file" accept="image/*" class="avatar-input" @change="changeAvatar"/>
          <img v-if="imageUrl" :src="imageUrl" alt="">
          <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
        </div>
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
    props: {
      imageUrl: {
        default: ''
      },

      displayImageUrl: {
        default: []
      },
      id: {
        default: -1
      },
      ruleForm: {
        default: {
          title: '',
          position: '',
          dimensions: '',
          buildTime: '',
          openDate: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          openTime: [new Date(2016, 9, 10, 8, 0), new Date(2016, 9, 10, 23, 40)],
          travelInformation: [{key: '', value: ''}],
        }
      }
    },
    components: {
      imgList
    },
    watch: {
      id(val) {
        this.id = val;
        this.ruleForm.title = val;
      }
    },
    data() {
      return {
        openDateOptions: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        dimensionsUnit: '公顷',
        unitOption: ['公顷', '平方米'],
        isQuerying: false,

      }
    },
    methods: {
      addSubs(venueId) {
        this.$store.commit('setVenueOption', venueId);
        this.$router.push('/venue/management/addSubVenue');
      },
      addTravelInformation() {
        this.ruleForm.travelInformation.push({key: '', value: ''});
      },
      deleteTravelInformation(index) {
        this.ruleForm.travelInformation.splice(index, 1);
      },
      checkForm() {
        let errorMsg;
        let e = {
          title: '',
          position: '',
          dimensions: '',
          buildTime: '',
        };
        if (this.ruleForm === e) {
          errorMsg = "请填写完整"
        }

        if (this.displayImageUrl.length === 0) {
          errorMsg = "至少选择一张场馆展示图"
        }

        if (imageUrl) {
          errorMsg = "至少选择一张缩略图"
        }

        if (errorMsg) {
          this.$notify.error({
            title: '错误的提交',
            message: errorMsg,
            duration: 10000
          });
          return false
        }
        return true;
      },

      remote_api() {

      },

      submit() {
        console.log(this.displayImageUrl)
        this.$confirm('确认提交？').then(_ => {
          if (this.checkForm()) {
            this.isQuerying = true;
            this.$notify('正在提交，请稍后');
            this.remote_api();
          }
        }).catch(_ => {
        });
      },
      handleRemoveImg(index) {
        this.displayImageUrl.splice(index, 1);
      },
      addDisplayImg(name, url) {
        this.displayImageUrl.push({
          name: name,
          url: url,
          file: this.$refs.display.files[0]
        })
      },

      changeDisplay() {
        let previewFile = this.$refs.display.files[0];
        if (this.checkImg(previewFile)) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.addDisplayImg(this.$refs.display.files[0].name, e.target.result);
          };
          reader.readAsDataURL(previewFile);
        }
      },
      checkImg(file) {
        let errorMsg;
        if (!file) {
          return false;
        }
        if (file.type.split('/')[0] !== 'image') {
          errorMsg = '不支持的图片格式';
        }

        if (file.size / 1024 / 1024 > 10) {
          errorMsg = '上传图片大小不能超过 10MB!';
        }

        if (errorMsg) {
          this.$notify.error({
            title: '请更换图片',
            message: errorMsg,
            duration: 10000
          });
          return false;
        }
        return true;
      },
      changeAvatar() {
        let previewFile = this.$refs.upload.files[0];
        if (this.checkImg(previewFile)) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(previewFile);
        }
      },
    },

    mounted() {
      this.ruleForm.title = this.id;
    },

  }
</script>

<style scoped>
  .venue-create .demo-form {
    width: 100%;
  }

  .venue-create .form-row {
    width: 100%;
    max-width: 660px;
  }

  .venue-create .avatar-container {
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    max-width: 100%;
  }

  .venue-create .avatar-container img {
    max-width: 100%;
  }

  .venue-create .avatar-input {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .venue-create .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
  }

  .venue-create .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .venue-create .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    text-align: center;
    width: 316px;
    height: 178px;
    line-height: 178px;
  }

  .venue-create .tags {
    width: 100%;
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .venue-create .button-container {
    cursor: pointer;
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .venue-create input {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
</style>
