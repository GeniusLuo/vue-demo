<template>
  <div
    class="d-flex"
    :class="{
      'flex-center': align === 'center',
      'flex-start': align === 'left',
      'flex-end': align === 'right',
    }"
  >
    <div class="layui-box layui-laypage layui-laypage-default">
      <a href="javascript:;" v-show="showEnd" :class="{ 'layui-disabled': current === 1 }">
        <i class="layui-icon layui-icon-prev" v-if="showType === 'icon'" />
        <template v-else>首页</template>
      </a>
      <a
        href="javascript:;"
        class="layui-laypage-prev"
        :class="{ 'layui-disabled': current === 1 }"
      >
        <i class="layui-icon layui-icon-left" v-if="showType === 'icon'"></i>
        <template v-else>上一页</template>
      </a>
      <!-- 
        1. v-for 和 v-if 不能同时在一个dom元素上
        2. template 不生成标签
        3. key属性一定要放在真实dom元素上
       -->
      <a v-if="pages.length > 5 && current - 2 > 1" href="javascript:;">...</a>
      <template v-for="(item, index) in pages">
        <a
          v-if="item >= current - 2 && item <= current + 2"
          href="javascript:;"
          :key="'page' + index"
          :class="[
            current - 1 === index ? theme : '',
            current - 1 === index ? 'active' : '',
          ]"
          >{{ item }}</a
        >
      </template>
      <a
        v-if="pages.length > 5 && current + 2 < pages.length"
        href="javascript:;"
        >...</a
      >
      <a href="javascript:;" :class="{ 'layui-disabled': current === pages.length }">
        <i class="layui-icon layui-icon-right" v-if="showType === 'icon'" />
        <template v-else>下一页</template>
      </a>
      <a href="javascript:;" class="layui-laypage-next" v-show="showEnd" :class="{ 'layui-disabled': current === pages.length }">
        <i v-if="showType === 'icon'" class="layui-icon layui-icon-next"></i>
        <template v-else>尾页</template>
      </a>
    </div>
    <div class="total" v-if="hasTotal">
      到第<input class="input" />页 共 total 页
    </div>
    <div class="selectBox">
      <select v-model.number="selectVal">
        <option v-for="item in options" :key="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "pagination",
  props: {
    align: {
      type: String,
      default: "center",
    },
    showType: {
      type: String,
      default: "icon",
    },
    showEnd: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      default: "layui-bg-green",
    },
    hasTotal: {
      type: Boolean,
      default: false,
    },
    hasSelect: {
      type: Boolean,
      default: false,
    },
    total: {
      type: Number,
      default: 101,
    },
    current: {
      type: Number,
      default: 7,
    },
    size: {
      type: Number,
      default: 15,
    },
  },
  components: {},
  data() {
    return {
      options: [10, 20, 30, 50, 100],
      selectVal: 10,
      pages: [],
      limit: 10,
    };
  },
  mounted() {
    // 初始化分页的长度
    this.initPages();
    // 设置select的内容
    this.limit = this.size;
    this.options = _.uniq(_.sortBy(_.concat(this.options, this.size)));
    this.selectVal = this.size;
  },
  methods: {
    initPages() {
      const len = Math.ceil(this.total / this.size);
      this.pages = _.range(1, len + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.layui-laypage {
  a {
    margin-left: -1px;
    &.active {
      border-radius: 2px;
      position: relative;
      z-index: 100;
    }
  }
  .layui-bg-green {
    border-color: #009688;
  }
}
.total {
  position: relative;
  top: -2px;
  margin-left: 20px;
  color: rgb(51, 51, 51);
  .input {
    width: 30px;
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
  }
}
</style>
