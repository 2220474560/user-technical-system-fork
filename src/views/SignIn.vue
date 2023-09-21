<template>
  <div>
    <div>
      <img class="backgroundimage" alt="signin" src="../assets/images/background.jpg">
      <h1 class="title">信 息 分 享 中 心</h1>
    </div>
    <div class="exchange">
      <input type="radio" v-model="selectedOption" name="option" value="login" id="show1" class="custom-checkbox">
      <label for="show1" style="margin-right: 20px;">登录</label>
      <input type="radio" v-model="selectedOption" name="option" value="register" id="show2" class="custom-checkbox">
      <label for="show2">注册</label>
    </div>
    <div v-if="selectedOption === 'register'">
    <!-- 按钮 -->
      <div id="input_box">
          <input class="box_1"  type="text" v-model="account"  placeholder="请输入邮箱" autofocus>
      </div>
      <!-- 按钮 -->
        <div id="input_box">
            <input class="box_2 box"  type="text" v-model="account"  placeholder="请输入姓名" autofocus>
        </div>
        <!-- 按钮 -->
        <div id="input_box">
            <input class="box_3 box"  type="text" v-model="account"  placeholder="请输入专业班级" autofocus>
        </div>
        <!-- 下拉选择框 -->
        <select class="select_1" value="选项">
            <option selected disabled hidden>请选择</option>
          <option value="option1">计算机类22201</option>
    <option value="option2">计算机类22202</option>
    <option value="option3">计算机类22203</option>
  </select>
        <!-- 按钮 -->
        <div id="input_box">
            <input class="box_4 box"  type="text" v-model="account"  placeholder="请输入密码" autofocus>
        </div>
        <!-- 按钮 -->
        <div class="button_1">注 册</div>
         <img class="image1" alt="signin" src="../assets/images/copy-right.png">
      </div>
    <!-- <div v-if="selectedOption === 'register'"> -->
      <!-- 添加注册页面内容 -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedOption: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/LogIn')
    }
  }
}
</script>

<style scoped>
@import "../assets/css/sigin.css";
</style>
