<template>
  <div class="animation">
    <div class="top1">
      <header>
        <button @click="faceStatus = !faceStatus" ref="face">表情</button>
        <button @click="imgStatus = !imgStatus" ref="img">上传图片</button>
      </header>
      <div class="wrap">
        <face
          :isShow="faceStatus"
          @closeEvent="faceStatus = false"
          :ctrl="this.$refs.face"
        ></face>
        <img-upload :isShow="imgStatus"
          @closeEvent="imgStatus = false"
          :ctrl="this.$refs.img"></img-upload>
      </div>
    </div>
  </div>
</template>

<script>
import Face from "./components/Face";
import ImgUpload from './components/ImgUpload';


export default {
  name: "Animation",
  data() {
    return {
      faceStatus: false,
      imgStatus: true,
    };
  },
  components: {
    Face,
    ImgUpload,
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
  animation: bounceOut 0.5s;
}

.fade-enter-active {
  animation: bounceIn 0.5s;
}
.animation {
  .top1 {
    width: 700px;
    height: 300px;
    margin-left: 20px;
    border: 1px solid #ddd;
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
