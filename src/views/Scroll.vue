<template>
  <div class="scroll">
    <div class="box box1">box1</div>
    <div class="box btn">来点击我</div>
    <div class="box box2">box2</div>
    <div class="box box3">box3</div>
    <!-- 滚动的视图元素 -->
    <div class="box box4">box4</div>
    <!--  -->
    <div class="box box5">box5</div>
    <div class="box box6">box6</div>
  </div>
</template>

<script>
export default {
  name: "scroll",
  components: {},
  data() {
    return {};
  },
  mounted() {
    document.body.addEventListener("click", () => {
      this.scrollToEle('.box5', 1000, 65);
    });
  },
  methods: {
    /**
     * Description: 滚动到 elem 位置
     * @Params: {String} class名称 需要滚动到 elem 的类名
     * @Params: {Number} duration 滚动时间
     * @Params: {Number} offset 滚动预留偏移距离
     * @author: luochun
     * @date: 2021-07-22
     * @return:
     */
    scrollToEle(elem, duration = 1000, offset = 0) {
      // 初始位置 - 滚动条的高度
      const startY = window.pageYOffset;
      // 滚动元素
      const elemDom = document.querySelector(elem);
      // 未查询到dom节点
      if (!elemDom) {
        return;
      }
      // 需要滚动到的元素的高度
      const elementY = elemDom.getBoundingClientRect().top + startY;

      // 需要滚动的高度
      const diff = elementY - startY - offset;

      // 无需滚动
      if (!diff) {
        return;
      }

      // 有高度 - 需要滚动

      // easing 函数
      const easing = (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

      let start;
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) {
          start = timestamp;
        }

        // 计算时间差，根据差值计算偏移量
        const time = timestamp - start;

        let persent = Math.min(time / duration, 1);
        persent = easing(persent);
        window.scrollTo(0, startY + diff * persent);
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  .box {
    margin-bottom: 20px;
    @include flex-center;
    &.box1 {
      height: 100px;
      background-color: #eee;
    }
    &.box2 {
      height: 200px;
      background-color: #eff;
    }
    &.box3 {
      height: 300px;
      background-color: #efefef;
    }
    &.box4 {
      height: 400px;
      background-color: #eff;
    }
    &.box5 {
      height: 500px;
      background-color: #efefef;
    }
    &.box6 {
      height: 300px;
      background-color: #aaa;
    }
    &.btn {
      height: 200px;
      background-color: aqua;
    }
  }
}
</style>
