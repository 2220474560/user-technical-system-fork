<template>
  <el-container>
    <el-header style="display: flex; justify-content: flex-start; align-items: center;height: 10vh;">
      <el-dropdown>
        <span class="el-dropdown-link">
          昵称<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toMyCenter">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="tologout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
   <el-alert
      background-color="#fff"
      title="这里是公告信息！！！！！！！！！！"
      type="warning"
      show-icon
    ></el-alert>
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
  <el-form-item label="资源方向">
              <el-select v-model="form.direction" placeholder="请选择方向" style="width: 100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
  </el-form-item>
<el-form-item label="上传">
  <div style="float: left">
    <el-radio-group v-model="form.resource">
      <el-radio label="视频资源"></el-radio>
      <el-radio label="文档资源"></el-radio>
    </el-radio-group>
    <el-upload
    class="upload-demo"
    drag
    ref="upload"
    v-model="form.imgurl"
    :on-success="handleAvatarSuccess"
    action="http://150.158.53.178:6290/api/Oss"
    name="file"
    :data="{lee:'lll'}"
    multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>

  </div>
<!-- <el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog> -->
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        direction: '',
        imgurl: ''
      },
      options: [
        {
          value: '前端',
          label: '前端'
        },
        {
          value: '后端',
          label: '后端'
        },
        {
          value: '人工智能',
          label: '人工智能'
        },
        {
          value: '设计',
          label: '设计'
        }
      ],
      value: '',
      dialogVisible: false,
      tabPosition: 'left'
    }
  },
  methods: {
    handleAvatarSuccess (res) {
      // console.log(res.data)
      this.form.imgurl = res.data
      // sessionStorage.setItem('docURL', res.data)
    },
    async onSubmit () {
      // console.log(this.form.imgurl)
      // console.log(this.form.name)
      // console.log(this.form.desc)
      // console.log(this.form.direction)
      // console.log(this.form.resource)
      const { data: res } = await this.$http.post('/api/users/publish_Rsouce', {
        title: this.form.name,
        content: this.form.desc,
        directiontype: this.form.direction,
        type: this.form.resource,
        url: this.form.imgurl
      })
      console.log(res)
      if (res.code === 200) {
        this.$message({
          message: '提交成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: '提交失败，请重试！',
          type: 'warning'
        })
      }
      this.form.name = ''
      this.form.desc = ''
      this.form.direction = ''
      this.form.resource = ''
      this.form.imgurl = ''
      this.$refs.upload.clearFiles()
      // this.form = {}
      // const fileInput = document.querySelector('#fileInput')
      // const file = fileInput.files[0]

      // // 使用FormData对象上传文件
      // const formData = new FormData()
      // formData.append('file', file)

      // // eslint-disable-next-line no-undef
      // axios.post('http://150.158.53.178:6290/api/users/publish_Rsouce', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }).then(response => {
      //   console.log('上传成功', response.data)
      // }).catch(error => {
      //   console.error('上传失败', error)
      // })
    },
    tologout () {
      this.$router.push('/LogIn')
    },
    toMyCenter () {
      this.$router.push('/HomePage')
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
