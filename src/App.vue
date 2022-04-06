<template>
  <div>
    <Header ref="ref2"></Header>
    <div ref="ref1">123</div>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  methods: {
    go() {
      console.log(this.$refs);
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
</style>