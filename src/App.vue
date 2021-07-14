<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/animation">Animation</router-link> |
      <router-link to="/pagination">分页组件</router-link>
    </div>
    <router-view />
    <div id="footer">footer</div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  position: fixed;
  bottom: 0;
  left: 48%;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.d-flex {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &.flex-start {
    justify-content: flex-start;
  }
  &.flex-end {
    justify-content: flex-end;
  }
  &.flex-center {
    justify-content: center;
  }
}
</style>
