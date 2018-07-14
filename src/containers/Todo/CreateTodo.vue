<template>
  <div>
    <input class="input" v-model="name" />
    <vbutton size="small" type="primary" :loading="loading" @click.native="create">create</vbutton>
    <vbutton size="small" type="primary"  @click.native="getTodoList">refresh</vbutton>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Toast } from "mint-ui";
import vbutton from "@/components/Button";
import { mapActions } from "vuex";
Vue.component(Field.name, Field);
export default {
  components: {
    vbutton
  },
  data() {
    return {
      name: "",
      loading: false
    };
  },
  methods: {
    ...mapActions("todo", ["createTodo", "getTodoList"]),
    check() {
      const { name } = this;
      let bo = true;
      if (!name) {
        Toast({
          message: "todo name must be not empty!",
          duration: 1000
        });
        bo = false;
      }
      return bo;
    },
    create() {
      const isCorrect = this.check();
      if (isCorrect) {
        this.loading = true;
        this.createTodo({
          name: this.name
        }).then(() => {
          this.loading = false;
          Toast("create successfully");
          this.name = "";
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.input {
  background: #f6f8fa;
  border-radius: 3px;
  padding: 8px 0;
  height: 12px;
  width: 150px;
  border: 1px solid #eee;
  outline: none;
  transition: all 0.3s linear;
  &:focus {
    box-shadow: inset 0 0 5px #e1f0ff;
  }
}
</style>
