<!--
 * @FileDescription: 用户端登录
 * @Author: 郑仪登录、陈思羽注册
 * @Date: ——
 * @LastEditors: 李思佳
 * @EditDescription: 外联的css应该写在<style></style>标签里面嗷，<script></script>标签里是写js操作的。
 * @LastEditTime: ——
-->
<template>
  <div class="out">
    <div class="h11">
      <h1 class="title">信 息 分 享 中 心</h1>
    </div>
    <div class="radio1">
      <el-radio v-model="radio" label="1" @change="toggleContent" >登录</el-radio>
      <el-radio v-model="radio" label="2" @change="toggleContent">注册</el-radio>
    </div>
    <!-- 登录 -->
    <div class="wz" v-if="showLogin">
    </div>
    <!-- 注册 -->
    <div class="wz" v-else>
      <el-input class="rounded-input" v-model="input1" placeholder="请输入邮箱">
      </el-input>
      <el-input class="rounded-input" v-model="input2" placeholder="请输入姓名">
      </el-input>
      <el-input class="rounded-input" v-model="input3" placeholder="请输入专业班级">
      </el-input>
      <el-select class="selectStyle" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <!-- 密码 -->
  <el-input class="rounded-input" v-model="input5" placeholder="请输入密码">
      </el-input>
      <button class="rounded-button" type="primary" plain @click="login">注册</button>
      </div>
    <div class="tuu">
      <img src="../assets/images/copy-right.png">
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data () {
    return {
      options: [{
        value: '前端',
        label: '前端'
      }, {
        value: '后端',
        label: '后端'
      }, {
        value: '设计',
        label: '设计'
      }, {
        value: '人工智能',
        label: '人工智能'
      }],
      value: '',
      radio: '1',
    toggleContent () {
      // 点击注册按钮时切换显示的内容
      this.showLogin = !this.showLogin
    }
    // signin () {
    //   this.$router.push('/SignIn')
    // }
  }
}

</script>

<style scoped>
@import '../assets/css/loginIn.css';
.el-radio__label {
  color: #fff;
}

</style>
