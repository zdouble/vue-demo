<template>
  <ul class="list-group">
      <li class="list-group-item" v-for="d in data" :key="d.id">
          <router-link :to="`/msg/detail/${d.id}`">
              <b>{{d.title}}</b>
          </router-link>
          <span class="badge">{{d.time}}</span>
          <br/>
          <span class="text-muted">by&nbsp;</span>
          <a href="javascript:;">
              <i>{{d.author}}</i>
          </a>
          <div role="group" class="btn-group btn-group-xs pull-right">
              <router-link class="btn btn-info" :to="`/msg/detail/${d.id}`">查看详情</router-link>
              <template v-if="userName == d.author">
                <router-link class="btn btn-warning" :to="`/msg/modify/${d.id}`">修改</router-link>
                <a href="javascript:;" class="btn btn-danger" @click="deleteMsg(d.id)">删除</a>
              </template>
          </div>
      </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    name: 'list',
    props: ['data'],
    computed: {
      userName () {
        return this.$store.state.user.userName
      }
    },
    methods: {
      deleteMsg (id) {
        this.$emit('deleteMsg',id)
      }
    }
  }
</script>
