<template>
  <mt-button :loading="loading" :size="size" :type="type" :disabled="loading?true:false"><span v-if="loading">{{loadingText}}</span><slot v-else></slot></mt-button>
</template>
<script>
import { Button } from "mint-ui";
export default {
  name: "vbutton",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: "loading..."
    },
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>
