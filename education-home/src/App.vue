<template>
  <div id="app">
    <!-- 全局导航栏 - 现在会固定在顶部 -->
    <EdNavbar />

    <!-- 主要内容区域，添加 padding-top 防止内容被导航栏遮挡 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 全局页脚 -->
    <EdFooter />
  </div>
</template>

<script>
import EdNavbar from '@/components/common/EdNavbar.vue'
import EdFooter from '@/components/common/EdFooter.vue'

export default {
  name: 'App',
  components: {
    EdNavbar,
    EdFooter
  },
  created() {
    console.log('Current route:', this.$route)
  }
}
</script>

<style>
body {
  font-size: 13px !important;
  font-family: "Readex Pro", sans-serif;
  color: #676767;
  margin: 0; /* 移除默认边距 */
}

/* 导航栏固定样式 */

/* 主要内容区域添加顶部内边距，防止内容被导航栏遮挡 */
.main-content {
  padding-top: 60px; /* 这个值应该等于或大于导航栏的高度 */
}
</style>
