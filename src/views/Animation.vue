<template>
  <div class="animation">
    <div class="top1">
      <header>
        <button @click="faceStatus = !faceStatus">表情</button>
      </header>
      <div class="wrap">
        <face :isShow="faceStatus"></face>
      </div>
    </div>
  </div>
</template>

<script>
import Face from "./components/Face";

export default {
  name: "Animation",
  data() {
    return {
      faceStatus: false,
    };
  },
  components: {
    Face,
  },
  mounted() {},
};
</script>

<style lang="scss">
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounceOut {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.fade-leave-active {
  animation: bounceOut .5s;
}

.fade-enter-active {
  animation: bounceIn .5s;;
}
.animation {
  .top1 {
    width: 700px;
    height: 300px;
    padding-left: 20px;
    header {
      background-color: #aaa;
      text-align: left;
    }
  }
  .wrap {
    position: relative;
  }
}
</style>
