<template>
  <div>
    <mt-header title="ddd">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
    </mt-header>
    <div class="todo">
      <CreateTodo />
      <h2>Todo list</h2>
      <TodoItem v-for="(_todo) in todos" :item="_todo" :key='_todo.id'/>
      <h2>Completed list</h2>
      <TodoItem v-for="(_completeds) in completeds" :item="_completeds" :key='_completeds.id'/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TodoItem from "./TodoItem";
import { mapActions, mapGetters } from "vuex";
import { Header } from "mint-ui";
import CreateTodo from "./CreateTodo";
Vue.component(Header.name, Header);
export default {
  components: {
    TodoItem,
    CreateTodo
  },
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.getTodoList();
    // Indicator.open();
  },
  computed: {
    ...mapGetters("todo", ["todos", "todoList", "completeds"]),
    ...mapGetters(["loading"])
  },
  methods: {
    ...mapActions("todo", ["getTodoList"])
  }
};
</script>

<style lang="less" scoped>
.todo {
  padding-top: 15px;
}
</style>
