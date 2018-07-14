<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li class="test">
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          
        >
        
          awesome-vue
        </a>
      </li>
    </ul>
    <div>{{ count }}</div>
    <div><mt-button type="primary" size="small" @click.native="increaseCount">increaseCount</mt-button></div><br>
    <div><mt-button type="primary" size="small" @click.native="decreaseCount">decreaseCount</mt-button></div>
    <div class="mint-swipe">
      <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>      
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapState, mapActions } from "vuex";
import { Button, Cell, Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
export default {
  name: "HelloWorld",
  data() {
    return {
      increaseLoding: false,
      decreadeLoding: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // console.log(this.count);
    //this.increaseCount();
    console.log(this.count);
  },
  computed: {
    ...mapGetters("counter", ["count"])
  },
  methods: {
    ...mapActions("counter", ["increaseCount", "decreaseCount"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mint-swipe {
  height: 200px;
  & div {
    height: 100%;
  }
}
</style>
