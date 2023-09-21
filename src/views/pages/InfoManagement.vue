<template>
  <div>
    <div class="toubu">
      <!-- 返回键 -->
      <div><el-button round icon="el-icon-arrow-left" class="fanhui" @click="back"></el-button></div>
    </div>
    <div class="gonggao">
      <!-- 公告信息,可点击查看,可关闭 -->
      <!-- <el-alert type="info">
        <div><el-button round icon="el-icon-warning" class="tishi"
            @click="gonggao">这里是公告信息!!!!!!!!!!!!!!!!!!</el-button>
        </div>
      </el-alert> -->
    </div>
    <div class="box">
      <el-container>
          <el-tabs tabPosition="left" id="left">
            <el-tab-pane label="信息管理">
              <el-main class="xxgl">
                <!-- 输入关键字,查询 -->
                <div style="margin-top:2px; margin: 5%;">
                  <el-input v-model="input" placeholder="请输入内容" style="width: 30%; margin-right: 3%"></el-input>
                  <el-button icon="el-icon-search" circle @click="searchContent"></el-button>
                </div>
                <!-- 选择视频资源 或者文档资源跳转页面 -->
                <div style="margin: 5%;">
                  <el-radio v-model="radio" label="视频资源" @change="chooseRadio()" >视频资源</el-radio>
                  <el-radio v-model="radio" label="文档资源" @change="chooseRadio()" >文档资源</el-radio>
                </div>
                <!-- 由上一次的选择跳转出的资源信息 -->
                <div style="width: 80%; margin: 5%;">
                    <el-card class="box-card" v-for="item in paginatedData" :key="item.id" style="margin: 5%">
                      <div slot="header" class="clearfix">
                        <span>{{ item.title }}</span>
                        <span>{{ item.id }}</span>
                        <span>{{ item.type}}</span>
                        <el-button type="primary" icon="el-icon-edit" circle style="margin-left: 2%;" @click="opencontent()"></el-button>
                        <el-dialog title="修改内容" :visible.sync="editcontent" width="50%">
                          <el-form :model="formdata" ref="searchDataRef" label-width="70px">
                            <el-form-item label="标题">
                              <el-input v-model="titleinput"></el-input>
                            </el-form-item>
                            <el-form-item label="内容">
                              <el-input v-model="contentinput"></el-input>
                            </el-form-item>
                          </el-form>
                          <span slot="footer" class="dialog-footer">
                            <template>
                              <el-button @click="editcontent = false">取 消</el-button>
                              <el-button type="primary" @click="submit(item.id, item.url, item.type, item.directiontype, item.title, item.content)">确 定</el-button>
                            </template>
                          </span>
                        </el-dialog>
                        <el-button type="danger" icon="el-icon-delete" circle style="float: right;" slot="reference" @click="deletecontent(item.id)"></el-button>
                      </div>
                      <div class="text item">
                        {{ item.content }}
                      </div>
                    </el-card>
                </div>
                <!-- 资源信息的分页 -->
                <div style="margin-top: auto; text-align: center;">
                  <el-pagination
                  @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="totalItems">
                </el-pagination>
                </div>
              </el-main>
            </el-tab-pane>
            <!-- 发布 -->
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
                      <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                          <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                              <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                              <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
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
                    <el-button type="primary" style="margin-top:100px" @click="onSubmit()">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
      </el-container>
      <div class="finally" style="margin-left:20%">
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
      input: '',
      titleinput: '',
      contentinput: '',
      dialogVisible: false,
      disabled: false,
      visible: false,
      radio: '',
      searchDataRules: '',
      editcontent: false, // 控制修改内容对话框的显示和隐藏
      searchData: [], // 用于存储查询结果的数组
      formdata: {
        content: '',
        title: ''
      },
      id: '',
      url: '',
      type: '',
      directiontype: '',
      title: '',
      content: '',
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
      totalItems: 0, // 总条目数
      currentPage1: 1, // 当前页码
      pageSize: 2, // 每页显示的条目数
      tabPosition: 'left'
    }
  },
  computed: {
    // 计算属性，用于根据当前页码和每页显示条目数获取分页后的数据
    paginatedData () {
      const start = (this.currentPage1 - 1) * this.pageSize
      const end = start + this.pageSize
      return this.searchData.slice(start, end)
    }
  },
  methods: {
    async searchContent () {
      console.log(this.input)
      this.searchData = []
      const { data: res } = await this.$http.post('/api/users/SearchResouce', {
        content: this.input
      })
      console.log(res)
      this.searchData = res.data // 存储查询结果
      this.totalItems = this.searchData.length
    },
    async chooseRadio () {
      console.log(this.radio)
      this.searchData = []
      const { data: res } = await this.$http.post('/api/users/Find_Resouce', {
        type: this.radio
      })
      console.log(res)
      this.searchData = res.data
      this.totalItems = this.searchData.length
    },
    async submit (id, url, type, directiontype, title, content) {
      console.log(title)
      const { data: res } = await this.$http.post('/api/users/revise_Rsouce', {
        id: id,
        url: url,
        type: type,
        directiontype: directiontype,
        title: this.titleinput,
        content: this.contentinput
      })
      console.log(res)
      this.searchContent()
    },
    async deletecontent (id) {
      console.log(id)
      const { data: res } = await this.$http.post('/api/users/Delete_Rsouce', {
        id: id
      })
      console.log(res)
      this.searchContent()
    },
    // 展示编辑内容的修改框
    opencontent () {
      this.editcontent = true
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
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
    },
    back () {
      this.$router.push('/HomePage')
    }
  }
}
</script>

<style scoped>
  div {
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
  #left {
    width: 1215px;
    height: 750px;
  }

  .xxgl {
    width: 1215px;
    height: 750px;
    background: #fff;
  }

  .el-icon-delete {
    color: #ffffff;
  }

  .item {
    margin-bottom: 18px;
  }
</style>
