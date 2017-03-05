<template>
  <form role="search" class="navbar-form navbar-right" @submit.prevent="handleSubmit">
    <div class="form-group">
        <input type="text" class="form-control" placeholder="请输入您的用户名" required v-model="userName" />
    </div>
    <button type="submit" class="btn btn-success">登录</button>
  </form>
</template>

<script type="text/javascript">
  export default {
    name: 'LoginForm',
    data () {
      return {
        userName: ''
      }
    },
    methods: {
      handleSubmit () {
        this.$store.commit({
          type: 'login',
          userName: this.userName
        })
      }
    }

  }
</script>
