<template>
  <div>
    <!-- <button @click="add">+1</button>
    <span>仓库的数据:{{ count }}</span>
    <button @click="dec">-1</button> -->
    <typeNav />
    <listContainer />
    <todayRecommend />
    <rank />
    <like />
    <floor />
    <floor />
    <brand />
  </div>
</template>

<script>
//注册静态组件
import listContainer from "./ListContainer";
import TypeNav from "./TypeNav";
import todayRecommend from "./todayRecommend";
import rank from "./rank";
import like from "./like";
import floor from "./floor";
import brand from "./brand";

import { mapState } from "vuex";

export default {
  name: "",
  components: {
    listContainer: listContainer,
    TypeNav: TypeNav,
    todayRecommend: todayRecommend,
    rank: rank,
    like: like,
    floor: floor,
    brand: brand,
  },
  computed: {
    // ...mapState(["count"]),
  },
  methods: {
    // add() {
    //   this.$store.dispatch("add");
    // },
    // dec() {
    //   this.$store.dispatch("dec");
    // },
  },
};
</script>

<style lang="less" scoped>
</style>