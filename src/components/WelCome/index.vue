<template>
  <div class="jumbotron">
      <h1>欢迎使用 <br/> React Demo</h1>
      <p>
          <router-link role="button" class="btn btn-success btn-lg" :to="{name:'msg'}">前往留言板 &gt;</router-link>
          <router-link role="button" class="btn btn-success btn-lg" to="/todo">前往待办事项 &gt;</router-link>
      </p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'WelCome'
  }
</script>
