<template>
  <div>
    <br/>
      <form @submit.prevent="submit">
        <div class="form-group">
            <label for="title">标题</label>
            <input type="text" class="form-control" name="title" placeholder="请输入标题..." v-model="title"/>
        </div>
        <div class="form-group">
            <label for="content">内容</label>
            <textarea name="content" class="form-control" rows="3" placeholder="请输入内容..." v-model="content"></textarea>
        </div>
        <div role="group" class="btn-group btn-group-justified">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-warning" @click="cancel"><span class="glyphicon glyphicon-arrow-left"></span>
                    &nbsp;取消
                </button>
            </div>
            <div class="btn-group" role="group">
                <button type="submit" class="btn btn-success">
                    提交&nbsp;
                    <span class="glyphicon glyphicon-ok"></span></button>
            </div>
        </div>
    </form>
  </div>
</template>
<script type="text/javascript">
  import { timeFormt } from '../../utils'
  import store from '../../vuex/store'
  export default {
    name: 'Edit',
    created () {
      this.title = this.data.title
      this.content = this.data.content
    },
    beforeRouteEnter (to, from, next) {
      if(store.state.user.userName){
        next()
      }else {
        alert('请先登录后再访问')
        next('/')
      }
    },
    computed: {
      data () {
        return this.$route.params.msgid ? this.$store.state.msg.data.filter(item => item.id == this.$route.params.msgid)[0] : {}
      },
      author () {
        return this.$store.state.user.userName
      },
      method () {
        return this.$route.params.msgid ? 'modify' : 'add'
      }
    },
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      submit () {
        this.$store.commit({
          type: this.method,
          msg: {
            author: this.author,
            content: this.content,
            id: this.data.id?this.data.id:Date.now(),
            time: timeFormt(Date.now()),
            title: this.title
          }
        })

        this.$router.push({name:'msg'})
      },
      cancel () {
        this.title = ''
        this.content = ''
        this.$router.go(-1)
      }
    }
  }
</script>
