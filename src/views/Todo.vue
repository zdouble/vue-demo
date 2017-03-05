<template>
  <div class="center-block">
      <div>
          <ul>
              <li :key="d.id" v-for="d in data">
                  <span :style="{textDecoration:d.completed?'line-through':'none'}" @click="toggle(d.id)">{{d.content}}</span>
                  <a href="javascript:;" class="pull-right" @click="deleteTodo(d.id)">⊗</a>
                  <span class="label label-default pull-right">{{d.time}}</span>
              </li>
          </ul>
          <form @submit.prevent="submit">
              <div class="form-group">
                  <input type="text" class="form-control" name="inputVal" placeholder="请输入待办事项，敲回车确认添加" required v-model="content"/>
              </div>
          </form>
      </div>
  </div>
</template>

<script type="text/javascript">
  import { timeFormt } from '../utils'
  export default {
    name: 'todo',
    data () {
      return {
        data: [],
        content: ''
      }
    },
    methods: {
      submit () {
        this.data.push({
          content: this.content,
          id: Date.now(),
          time: timeFormt(Date.now()),
          completed: false
        })
        this.content = ''
      },
      toggle (id) {
        this.data = this.data.map(item => {
          if(item.id == id){
            return {
              ...item,
              completed: !item.completed
            }
          }else {
            return item
          }
        })
      },
      deleteTodo (id) {
        this.data = this.data.filter(item => item.id != id)
      }
    }
  }
</script>
