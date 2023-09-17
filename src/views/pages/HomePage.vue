<template>
  <el-container>
    <el-header style="padding: 0;">
      <div style="background-color: #014a6d; height: 100%; padding: 0;">
        <el-dropdown style="float: left; line-height: 60px; margin-left: 1%;">
          <span class="el-dropdown-link">
            这是一个昵称<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toInfoManagement">信息管理</el-dropdown-item>
            <el-dropdown-item @click.native="toAnnouncementPage">发布</el-dropdown-item>
            <el-dropdown-item @click.native="tologout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input v-model="sousuo" placeholder="请输入内容" style="width: 20%; margin-top: 10px;"></el-input>
        <el-button icon="el-icon-search" circle style="margin-left: 0.5%;"></el-button>
      </div>
    </el-header>
    <el-alert
      background-color="#fff"
      title="这里是公告信息！！！！！！！！！！"
      type="warning"
      show-icon
    ></el-alert>
    <el-main style="text-align: left;"> <!-- 修改样式为左对齐 -->
      <div style="width: 50%;margin: 0 auto;">
        <div style="margin-top: 1%;">
          <el-radio v-model="radio" label="1">视频资源</el-radio>
          <el-radio v-model="word" label="2">文档资源</el-radio>
        </div>
        <div style="margin-top: 1%;">
          <el-select v-model="value" placeholder="请选择方向">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div style="margin-top: 1%;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">点击查看</el-button>
            </div>
            <div class="text item">
             内容
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
    <div style="margin-top: auto; text-align: center;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      sousuo: '',
      radio: '',
      word: '',
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
      value: ''
    }
  },
  methods: {
    tologout () {
      this.$router.push('/LogIn')
    },
    toInfoManagement () {
      this.$router.push('/InfoManagement')
    },
    toAnnouncementPage () {
      this.$router.push('/AnnouncementPage')
    }
  }
}
</script>

<style scoped>

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 20px;
}
.el-alert--warning.is-light {
  height: 30px;
  background-color: #ffffff;
  color: #e6a23c;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.text {
  font-size: 14px;
}

.el-radio__label {
  color: #000;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.el-dropdown-item {
  text-decoration: none !important;
}
</style>
