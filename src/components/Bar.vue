<template>
  <div>
    <h2 @click="onClick">Bar</h2>
    <h4>异步数据：{{msg}}</h4>
  </div>
</template>
<script>
const fetchInitialData = ({ store }) => {
  return store.dispatch("ajaxBar");
};
export default {
  data() {
    return {};
  },
  asyncData: fetchInitialData,
  methods: {
    onClick() {
      alert("Bar");
    }
  },
  computed: {
    msg() {
      return this.$store.state.bar;
    }
  },
  mounted() {
    // 因为服务端渲染只有 beforeCreate 和 created 两个生命周期，不会走这里
    // 所以把调用 Ajax 初始化数据也写在这里，是为了供单独浏览器渲染使用
    if (!this.msg) {
      //服务端渲染也会进mounted 所以判断一下。
      let store = this.$store;
      fetchInitialData({ store });
    }
  }
};
</script>
