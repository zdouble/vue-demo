<template>
  <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              欢迎您，{{userName}}<strong class="caret"></strong></a>
          <ul class="dropdown-menu">
              <li><a href="javascript:;" @click="logout">注销登录</a></li>
          </ul>
      </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    name: 'DropDownMenu',
    props: ['userName'],
    methods: {
      logout () {
        this.$store.commit('logout')
        this.$router.push('/')
      }
    }
  }
</script>
