<template>
  <div class="item">
    <span :class="{completed:item.status == 1}" v-if="!isEditable">{{item.name}}</span>
    <input class="input" v-model="name" :disabled="updateLoading" value="name" v-show="isEditable" ref="name" />
    <vbutton size="small" type="primary" v-if="item.status == 0" @click.native="update(item)" :loading="completeLoading">done</vbutton>
    <vbutton size="small" type="primary" v-if="item.status == 0" @click.native="fullUpdate(item)" :loading="updateLoading">{{this.isEditable?'save':'update'}}</vbutton>
    <vbutton size="small" type="primary" v-if="item.status == 1" @click.native="update(item)" :loading="reverseLoading">reverse</vbutton>
    <vbutton size="small" type="primary" @click.native="deletes(item.id)" :loading="deleteLoading">del</vbutton>
  </div>
</template>
<script>
import vbutton from "@/components/Button";
import { mapActions } from "vuex";
import { Toast } from "mint-ui";
export default {
  components: {
    vbutton
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    onFinish: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      completeLoading: false,
      reverseLoading: false,
      deleteLoading: false,
      isEditable: false,
      updateLoading: false,
      name: this.item.name
    };
  },
  mounted() {
    const _this = this;
    document.addEventListener("click", function(e) {
      // console.log(e.target);
      // _this.toggleEditable(false);
    });
  },
  methods: {
    ...mapActions("todo", ["updateTodo", "deleteTodo"]),
    update(params) {
      this.completeLoading = true;
      let _params = {
        ...params,
        status: params.status == 0 ? 1 : 0
      };
      this.updateTodo(_params).then(() => {
        this.completeLoading = false;
        this.isEditable = false;
      });
    },
    deletes(id) {
      this.deleteLoading = true;
      this.deleteTodo({ id }).then(() => {
        this.deleteLoading = false;
      });
    },
    fullUpdate(params) {
      const isEditable = !this.isEditable;
      if (this.isEditable) {
        this.$refs.name.focus();
        if (this.name == "") {
          Toast({
            message: "todo name must be not empty!",
            duration: 1000
          });
          this.$refs.name.focus();
          return false;
        }
        this.updateLoading = true;
        this.updateTodo({
          ...params,
          name: this.name
        }).then(() => {
          this.updateLoading = false;
          Toast({
            message: "update sucessfully!",
            duration: 1000
          });
          this.isEditable = isEditable;
        });
      } else {
        this.isEditable = isEditable;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  & > span {
    width: 150px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    text-align: left;
    margin-right: 5px;
  }
  .mint-button--small {
    height: 20px;
    vertical-align: top;
  }
  .completed {
    text-decoration: line-through;
    color: #ccc;
  }
  .input {
    background: #f6f8fa;
    border-radius: 3px;
    padding: 4px 0;
    height: 12px;
    width: 150px;
    border: 1px solid #eee;
    outline: none;
    transition: all 0.3s linear;
    &:focus {
      box-shadow: inset 0 0 5px #e1f0ff;
    }
  }
}
</style>
