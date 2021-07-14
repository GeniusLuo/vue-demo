<template>
  <transition name="fade">
    <div class="face" v-show="isShow">
      <ul>
        <li
          v-for="(value, key) in list"
          :key="key"
          @click="handleFaceClick(key)"
        >
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
  props: ["isShow", "ctrl"],
  components: {},
  data() {
    return {
      list: faces,
    };
  },
  mounted() {
    this.$nextTick(() => {
      document
        .querySelector("body")
        .addEventListener("click", this.handleBodyClick);
    });
  },
  methods: {
    handleFaceClick(key) {
      this.$emit("addEvent", key);
    },
    handleBodyClick(e) {
      // hide face component, modify isShow status
      // 判断是否点击到了 face 组件以外的地方
      if (this.ctrl && !this.ctrl.contains(e.target)) {
        this.$emit("closeEvent");
      }
    },
  },
  beforeDestroy() {
    document
      .querySelector("body")
      .removeEventListener("click", this.handleBodyClick);
  },
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
      padding: 4px 2px;
      text-align: center;
      &:hover {
        border-color: red;
      }
    }
  }
}
</style>
