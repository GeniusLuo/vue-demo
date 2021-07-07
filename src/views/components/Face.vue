<template>
  <transition name="fade">
    <div class="face" v-show="isShow">
      <ul>
        <li v-for="(value, key) in list" :key="key">
          <img :src="value" alt="" />
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import faces from "@/assets/js/face";
export default {
  name: "Face",
  props: ['isShow'],
  data() {
    return {
      list: faces,
    };
  },
  components: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.face {
  position: absolute;
  ul {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid #ddd;
    li {
      cursor: pointer;
      border: 1px solid #e8e8e8;
      height: 22px;
      width: 26px;
      overflow: hidden;
      margin: -1px 0 0 -1px;
      padding: 4px 2px;
      text-align: center;
    }
  }
}
</style>
