<template>
  <div class="breadcrumb-container py-4">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">
              <i class="bi bi-house"></i> 趣味游戏
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ currentPage }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdBreadcrumb',
  props: {
    currentPage: {
      type: String,
      default: '迷宫类'
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1500px;
    font-size: 14px;
  }
</style>
