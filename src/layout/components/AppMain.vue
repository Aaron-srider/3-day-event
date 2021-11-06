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
  background: url('https://mat1.gtimg.com/qqcdn/bj2022/common/copyright-bg.jpg');
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
