<template>
  <el-container>
    <el-header style="display: flex; justify-content: flex-start; align-items: center;height: 10vh;">
      <el-dropdown>
        <span class="el-dropdown-link">
          昵称<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  <el-main>
   <el-tabs :tab-position="tabPosition" style="height:900px;">
    <el-tab-pane label="信息管理">信息管理</el-tab-pane>
    <el-tab-pane label="发布">
      <div class="box-main">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标签">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
 <el-form-item label="内容简述">
    <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
  </el-form-item>
<el-form-item label="上传">
  <div style="float: left">
    <el-radio-group v-model="form.resource">
      <el-radio label="视频资源"></el-radio>
      <el-radio label="文档资源"></el-radio>
    </el-radio-group>
    <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
  </div>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  <el-form-item style="margin-top: 10%">
    <el-button type="primary" style="magrin-top:100px" @click="onSubmit()">提交</el-button>
  </el-form-item>
</el-form>
      </div>
    </el-tab-pane>
  </el-tabs>
  <div>
    <img src="../../assets/images/copy-right.png"/>
  </div>
</el-main>
  </el-container>

</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: ' ',
      dialogVisible: false,
      disabled: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      methods: {
        onSubmit () {
          console.log('submit!')
        },
        handleRemove (file) {
          console.log(file)
        },
        handlePictureCardPreview (file) {
          this.dialogImageUrl = file.url
          this.dialogVisible = true
        },
        handleDownload (file) {
          console.log(file)
        }
      },
      // eslint-disable-next-line no-dupe-keys, vue/no-dupe-keys
      dialogVisible: false,
      tabPosition: 'left'
    }
  }
}

</script>

<style scoped>
.el-header {
  background-color: #8cb3e6;
  color: #333;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 1200px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 90vh;
  font-size: 60px;
}
.el-dropdown {
  font-size: 30px;
  float: left
  ;
}
.el-tabs__item{
  font-size: 30px;
  font-weight: 600;
}
.el-form-item__label{
  font-size: 17px;
  font-weight:bolder;
}
.el-textarea__inner {
  font-size: 17px;
  font-weight: 600;
}
.el-radio{
  font-weight: 600;
}
.el-form-item{
  margin-left: 135px;
}
.box-main{
  width: 800px;
  margin: 31px 0 0 200px;
}
</style>
