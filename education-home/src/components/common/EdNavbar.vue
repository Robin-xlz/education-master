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
        <ul class="navbar-nav me-auto gap-1 mb-2 mb-lg-0">
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" :class="{ 'active-nav': $route.path === '/' }" to="/">
              <span class="nav-text">首页</span>
            </router-link>
          </li>
          <li class="nav-item mx-1 dropdown">
            <a class="nav-link dropdown-toggle px-2 py-3 fw-semibold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-journal-bookmark-fill text-primary me-1"></i>
              <span class="nav-text">全类字帖</span>
            </a>
            <ul class="dropdown-menu m-0 border-0 shadow-sm p-2" style="min-width: 200px;">
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/courses"><i class="bi bi-type text-primary me-2"></i>汉字帖</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/courses-detail"><i class="bi bi-fonts text-primary me-2"></i>拼音贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/successful"><i class="bi bi-123 text-primary me-2"></i>数字贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/successful"><i class="bi bi-translate text-primary me-2"></i>英文贴</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/successful"><i class="bi bi-pencil text-primary me-2"></i>练控笔</router-link></li>
            </ul>
          </li>
          <li class="nav-item mx-1 dropdown">
            <a class="nav-link dropdown-toggle px-2 py-3 fw-semibold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-joystick text-primary me-1"></i>
              <span class="nav-text">趣味游戏</span>
            </a>
            <ul class="dropdown-menu m-0 border-0 shadow-sm p-2" style="min-width: 200px;">
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/edMaze"><i class="bi bi-puzzle text-primary me-2"></i>迷宫类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/my-courses"><i class="bi bi-grid-3x3 text-primary me-2"></i>数独类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/my-courses"><i class="bi bi-brush text-primary me-2"></i>绘画类</router-link></li>
              <li><router-link class="dropdown-item px-3 py-2 rounded fw-medium text-dark" to="/my-courses"><i class="bi bi-grid-3x3 text-primary me-2"></i>数独类</router-link></li>
            </ul>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" to="/about">
              <i class="bi bi-journals text-primary me-1"></i>
              <span class="nav-text">全科教材</span>
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" to="/about">
              <i class="bi bi-file-earmark-text text-primary me-1"></i>
              <span class="nav-text">试卷大全</span>
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" to="/about">
              <i class="bi bi-book text-primary me-1"></i>
              <span class="nav-text">世界名著</span>
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" to="/about">
              <i class="bi bi-info-circle text-primary me-1"></i>
              <span class="nav-text">关于我们</span>
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link px-2 py-3 fw-semibold text-dark" to="/contact">
              <i class="bi bi-collection text-primary me-1"></i>
              <span class="nav-text">更多资源</span>
            </router-link>
          </li>
        </ul>
        <div class="d-flex gap-3 align-items-center">
          <router-link to="/signin" class="text-decoration-none fw-semibold text-dark">
            <i class="bi bi-box-arrow-in-right text-primary me-1"></i>
            <span class="nav-text">登陆</span>
          </router-link>
          <router-link to="/signup" type="button" class="btn btn-primary btn-sm fw-semibold px-3 py-2">
            <i class="bi bi-person-plus me-1"></i>
            <span class="nav-text">注册</span>
          </router-link>
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
  z-index: 1030;
  border-bottom: 1px solid #e0e0e0;
}

.nav-link {
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover, .nav-link:focus {
  color: #2c7be5 !important;
}

.nav-link:hover .nav-text {
  color: #2c7be5;
}

.active-nav {
  color: #2c7be5 !important;
}

.active-nav .nav-text {
  color: #2c7be5;
}

.active-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  height: 3px;
  background-color: #2c7be5;
  border-radius: 3px 3px 0 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}

.dropdown-item {
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.dropdown-item:hover, .dropdown-item:focus {
  background-color: #2c7be5 !important;
  color: white !important;
}

.dropdown-item:hover i, .dropdown-item:focus i {
  color: white !important;
}

.btn-primary {
  background-color: #2c7be5;
  border-color: #2c7be5;
}

.btn-primary:hover {
  background-color: #1a68d1;
  border-color: #1a68d1;
}

.nav-text {
  transition: color 0.2s ease;
}
</style>
