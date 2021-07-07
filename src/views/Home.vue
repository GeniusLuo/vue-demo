<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="txt">
      Home page
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.txt {
  text-align: center;
  @include bg-blue;
}
</style>
