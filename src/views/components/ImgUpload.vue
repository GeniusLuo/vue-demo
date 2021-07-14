<template>
  <transition name="fade">
    <div class="img-upload" v-show="isShow">
      <div class="header">插入图片</div>
      <div class="container">
        <div>url</div>
        <input v-model="pic" placeholder="粘贴图片地址或者点击上传" />
        <label for="uploadImg">
          <span class="upload-btn">上传图片</span>
        </label>
        <input type="file" id="uploadImg" @change="upload" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ImgUpload",
  props: ["isShow", "ctrl"],
  components: {},
  data() {
    return {
      pic: "",
      formData: "",
    };
  },
  mounted() {},
  methods: {
    upload(e) {
      let file = e.target.files;
      let formData = new FormData()
      if (file.length > 0) {
          formData.append('file', file[0])
          this.formData = formData;
          console.log(formData.get('file'))
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img-upload {
  position: absolute;
  width: 500px;
  height: 200px;
  border: 1px solid #ddd;
  padding: 10px;

  .header {
    background-color: #eee;
    text-align: left;
    padding: 5px;
  }

  .container {
    display: flex;
  }

  #uploadImg {
    display: none;
  }

  .upload-btn {
      cursor: pointer;
      font-size: 12px;
      border: 1px solid #ddd;
      padding: 5px;
  }
}
</style>
