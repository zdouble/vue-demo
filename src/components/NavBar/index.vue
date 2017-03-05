<template>
    <div class="row clearfix">
        <div class="col-md-12 column">
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <router-link to="/" class="navbar-brand">vue Demo</router-link>
                </div>
                <div class="collapse navbar-collapse" id="nav-collapse">
                    <ul class="nav navbar-nav">
                        <li :class="{'active':pathname === '/'}">
                            <router-link :to="{name:'index'}">欢迎页</router-link>
                        <li :class="{'active':pathname.startsWith('/msg')}">
                            <router-link :to="{name:'msg'}">留言板</router-link>
                        <li :class="{'active':pathname.startsWith('/todo')}">
                            <router-link to="/todo">待办事项</router-link>
                        </li>
                    </ul>
                    <login-form v-if="!userName"></login-form>
                    <drop-down-menu :userName="userName" v-else></drop-down-menu>
                </div>
            </nav>
        </div>
    </div>
</template>
<script type="text/javascript">
import LoginForm from './LoginForm'
import DropDownMenu from './DropDownMenu'
export default {
  name: 'NavBar',
  computed: {
    pathname () {
      return this.$route.path
    },
    userName () {
      return this.$store.state.user.userName
    }
  },
  components: {
    LoginForm,
    DropDownMenu
  }
}
</script>
