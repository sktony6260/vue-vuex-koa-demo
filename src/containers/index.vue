<template>
  <div class="index">
    <router-link to="/counter"><vbutton type="primary" size="normal">counter demo</vbutton></router-link>
    <router-link to="/todo"><vbutton type="primary" size="normal">todo demo</vbutton></router-link>
  </div>
</template>

<script>
import vbutton from "@/components/Button";
export default {
  components: {
    vbutton
  }
};
</script>

<style lang="less" scoped>
.index {
  margin-top: 50px;
  a {
    text-decoration: none;
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
