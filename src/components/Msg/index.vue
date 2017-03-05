<template>
  <div>
      <router-link to="/msg/add" class="btn btn-default btn-lg btn-block">
          添加消息
          <span class="glyphicon glyphicon-plus"></span>
      </router-link>
      <br/>
      <div>
          <div role="alert" class="alert alert-warning alert-dismissible" v-if="data.length==0">
              <button type="button" class="close" data-dismiss="alert">
                <span aria-hidden="true">×</span>
              </button>
              <strong>暂无更多信息</strong>
          </div>
          <List v-else @deleteMsg="deleteMsg" :data="data"/>
      </div>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex'
  import List from './List'
  export default {
    name: 'MsgIndex',
    components: {
      List
    },
    computed: mapState({
      data: state => state.msg.data
    }),
    methods: {
      deleteMsg (id) {
        this.$store.commit({
          type: 'delete',
          id:id
        })
      }
    }
  }
</script>
