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
      <a href="javascript:;" v-show="showEnd">
        <i class="layui-icon layui-icon-prev" v-if="showType === 'icon'" />
        <template v-else>首页</template>
      </a>
      <a href="javascript:;" class="layui-laypage-prev" data-page="4">
        <i class="layui-icon layui-icon-left" v-if="showType === 'icon'"></i>
        <template v-else>上一页</template>
      </a>
      <a href="javascript:;" :class="[true ? theme : '', true ? 'active' : '']"
        >1</a
      >
      <a href="javascript:;">2</a>
      <a href="javascript:;">3</a>
      <a href="javascript:;">4</a>
      <a href="javascript:;">5</a>
      <a href="javascript:;">
        <i class="layui-icon layui-icon-right" v-if="showType === 'icon'" />
        <template v-else>下一页</template>
      </a>
      <a href="javascript:;" class="layui-laypage-next" v-show="showEnd">
        <i v-if="showType === 'icon'" class="layui-icon layui-icon-next"></i>
        <template v-else>尾页</template>
      </a>
    </div>
    <div class="total" v-if="hasTotal">
      到第<input class="input" />页 共 total 页
    </div>
    <div class="selectBox">
      <select v-model="selectVal">
        <option v-for="item in options" :key="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    align: {
      type: String,
      default: "center",
    },
    showType: {
      type: String,
      default: "text",
    },
    showEnd: {
      type: Boolean,
      default: false,
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
  },
  components: {},
  data() {
    return {
      options: ['10', '20', '30', '50', '100'],
      selectVal: '10',
    };
  },
  mounted() {},
  methods: {},
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
