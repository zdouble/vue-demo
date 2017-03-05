<template>
  <div class="panel panel-warning">
      <div class="panel-heading">
          标题：
          <strong>{{data.title}}</strong><span class="badge pull-right">{{data.time}}</span>
          <br/>
          发布者：
          <a href="/msg?author=4545"><i>{{data.author}}</i></a>
          <div role="group" class="btn-group btn-group-xs pull-right">
              <button class="btn btn-primary btn-xs" @click="back">返回</button>
              <template v-if="userName == data.author">
                <router-link class="btn btn-warning" :to="`/msg/modify/${data.id}`">修改</router-link>
              <a href="javascript:;" class="btn btn-danger" @click="deleteMsg(data.id)">删除</a>
              </template>
          </div>
      </div>
      <div class="panel-body">{{data.content}}</div>
  </div>
</template>
<script type="text/javascript">
  export default {
    computed: {
      data () {
          return this.$store.state.msg.data.filter(item => item.id == this.$route.params.msgid)[0] || {}
      },
      userName () {
        return this.$store.state.user.userName
      }
    },
    methods: {
      deleteMsg (id) {
        this.$store.commit({
          type: 'delete',
          id:id
        })
        this.back()
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
