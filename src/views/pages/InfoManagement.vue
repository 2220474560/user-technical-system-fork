<template>
  <div>
    <div class="toubu">
      <div><el-button round icon="el-icon-arrow-left" class="fanhui" @click="back"></el-button></div>
    </div>
    <div class="gonggao">
      <el-alert type="info">
        <div><el-button round icon="el-icon-warning" class="tishi">这里是公告信息!!!!!!!!!!!!!!!!!!</el-button></div>
      </el-alert>
    </div>
    <div class="box">
      <el-container>
        <template>
          <el-tabs tabPosition="left" id="left">
            <el-tab-pane label="信息管理">
              <el-main class="xxgl">
                <div style="margin-top:2px" class="input">
                  <input type="text" value="请输入关键字" class="input-with-select" size="29" />
                  <div class="button3"><el-button round slot="append" icon="el-icon-search"></el-button></div>
                </div>
                <div class="choose">
                  <label>
                    <input type="radio" name="value" value="shiping" checked="checked">视频资源
                  </label>
                  <label>
                    <input type="radio" name="value" value="wendang">文档资源
                  </label>
                </div>
                <div class="kuang">
                  <input type="text" value="标题" disabled class="biaoti" size="110" />
                  <input type="text" value="这是一段内容" class="bianji" size="110" />
                </div>
                <el-button icon="el-icon-edit" round class="icon1"></el-button>
                <el-button icon="el-icon-delete" round class="icon2"></el-button>
                <div class="kuang">
                  <input type="text" value="标题" disabled class="biaoti" size="110" />
                  <input type="text" value="这是一段内容" class="bianji" size="110" />
                </div>
                <el-button icon="el-icon-edit" round class="icon1"></el-button>
                <el-button icon="el-icon-delete" round class="icon2"></el-button>
                <div class="page">
                  <el-pagination layout="prev, pager, next" :page-size="1" :pager-count="7" :total="1000"
                    background></el-pagination>
                </div>
              </el-main>
            </el-tab-pane>
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
        </template>
      </el-container>
      <div class="finally">
        <img src="../../assets/images/copy-right.png">
      </div>
    </div>
  </div>
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
  },
  methods: {
    back () {
      this.$router.push('/HomePage')
    }
  }
}
</script>

<style scoped>
div {
  width: "1366px";
  height: "768px";
  margin: 0 auto;
}

.toubu {
  width: 1366px;
  height: 80px;
  background: #025478;
  border-radius: 0px;
}

.fanhui {
  float: left;
  margin-top: 28px;
  margin-left: 39px;
  border: none;
}

.gonggao {
  width: 1365px;
  height: 50px;
  background: #fff;
  border: none;
  outline: none;
}

.tishi {
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0);
  letter-spacing: 8px;
  height: 20px;
  display: flex;
  align-items: center;
}

.el-icon-warning {
  color: rgb(255, 132, 0);
}

#left {
  width: 1215px;
  height: 556px;
}

.xxgl {
  width: 1215px;
  height: 556px;
  background: #fff;
}

.input-with-select {
  float: left;
  background-color: #fff;
  margin-left: 83px;
  width: 240px;
  height: 40px;
  border: 2px solid #f4f4f5;
}

.button3 {
  float: left;
  margin-left: 17px;
  margin-right: 710px;
}

.choose {
  float: left;
  margin-top: 15px;
  margin-left: 80px;
  margin-right: 710px;
}

.kuang {
  float: left;
  margin-top: 15px;
  margin-left: 83px;
  margin-right: 710px;
  border: 2px solid #f4f4f5;
}

.icon1 {
  float: left;
  margin-left: 920px;
  border: none;
  outline: none;
  height: 5px;
  display: flex;
  align-items: center;
  background-color: #009dff;
}

.icon2 {
  float: left;
  margin-left: 920px;
  border: none;
  outline: none;
  height: 5px;
  display: flex;
  align-items: center;
  background-color: #f56c6c;
}

.biaoti {
  height: 30px;
  float: left;
  background-color: #fff;
  border: 1px solid #f4f4f5;
}

.bianji {
  height: 110px;
  float: left;
  background-color: #fff;
  border: 1px solid #f4f4f5;
}

.el-icon-edit {
  color: #ffffff;
}

.el-icon-delete {
  color: #ffffff;
}

.page {
  float: left;
  margin-left: 306px;
  margin-top: 5px;
}

.finally {
  margin-top: 20px;
}

.el-tabs {
  border: 2px solid #f4f4f5;
}</style>
