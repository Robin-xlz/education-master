<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-0 main-header-nav" id="nav-bar">
    <div class="container">
      <router-link to="/" class="brand d-flex align-items-center mb-0 text-decoration-none me-4">
        <img src="@/assets/images/logo.png" class="img-fluid" alt="儿童教育" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto gap-2 mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" :class="{ active: $route.path === '/' }" to="/">首页</router-link>
          </li>
          <li class="nav-item mx-2 dropdown">
            <a class="nav-link dropdown-toggle px-0 py-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              全类字帖
            </a>
            <ul class="dropdown-menu m-0 border-0 shadow-sm p-2">
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/courses">汉字帖</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/courses-detail">拼音贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/successful">数字贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/successful">英文贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/successful">练控笔</router-link></li>
            </ul>
          </li>
          <li class="nav-item mx-2 dropdown">
            <a class="nav-link dropdown-toggle px-0 py-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              趣味游戏
            </a>
            <ul class="dropdown-menu m-0 border-0 shadow-sm p-2">
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/edMaze">迷宫类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/my-courses">数独类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/my-courses">绘画类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded" to="/my-courses">数独类</router-link></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" to="/about">全科教材</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" to="/about">试卷大全</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" to="/about">世界名著</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" to="/about">关于我们</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link px-0 py-4" to="/contact">更多资源</router-link>
          </li>
        </ul>
        <div class="d-flex gap-4 align-items-center">
          <router-link to="/signin" class="text-decoration-none text-black fw-bold">登陆</router-link>
          <router-link to="/signup" type="button" class="btn btn-danger btn-sm fw-bold">注册</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'EdNavbar'
}
</script>

<style scoped>
#nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 确保导航栏在其他内容之上 */
}
</style>
