<template>
  <div class="breadcrumb-container py-3">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">
              <i class="bi bi-house"></i> 全类字帖
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ currentPage }}
          </li>
        </ol>
      </nav>
    </div>
    <hr class="m-0">
  </div>
</template>

<script>
export default {
  name: 'EdBreadcrumb',
  props: {
    currentPage: {
      type: String,
      default: '汉字字帖'
    }
  }
}
</script>

<style scoped>
.breadcrumb-container {
  background-color: #f8f9fa;
}
/* 其他样式... */
</style>
