<template>
  <div>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key"/>
      </transition>
    </section>

    <!--页脚图片-->
    <div class="page-footer">
    </div>
  </div>

</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

.page-footer {
  background: url('http://47.111.5.149:10081/%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%A1%B5%E8%84%9A%E5%9B%BE%E7%89%87.jpg');
  height: 100px;
  background-position: bottom center;
  margin-top: 80px;
}

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
