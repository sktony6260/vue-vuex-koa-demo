<template>
  <div>
    <mt-header title="counter demo">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
    </mt-header>
    <div class="counter">
      <div class="count"><label>Count:</label>{{count}}</div>
      <vbutton type="primary" size="small" @click.native="increaseCount">increase-count</vbutton>
      <vbutton type="primary" size="small" @click.native="decreaseCount">decrease-count</vbutton>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapStates, mapGetters } from "vuex";
import { Button, Input, Header } from "mint-ui";
import vbutton from "@/components/Button";
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
export default {
  components: {
    vbutton
  },
  data() {
    return {
      loadingi: false,
      loadingd: false
    };
  },
  computed: {
    ...mapGetters("counter", ["count"])
  },
  methods: {
    ...mapActions("counter", ["increaseCount", "decreaseCount"])
  }
};
</script>
<style lang="less" scoped>
.counter {
  padding-top: 15px;
}
.count {
  margin-bottom: 10px;
}
</style>
