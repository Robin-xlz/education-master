<template>
  <div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-1">
          <img src="@/assets/images/homepage.svg" class="img-fluid" alt="儿童学习" loading="lazy">
        </div>
        <div class="col-lg-6 order-lg-0">
          <h1 class="display-5 fw-bold mb-4 text-dark">
            <span class="text-primary">童学汇</span> - 开启孩子的无限潜能
          </h1>
          <p class="lead text-muted mb-4">
            我们提供10,000+精选早教资源，涵盖语言、数学、科学、艺术等多个领域，让学习像玩耍一样自然有趣。
          </p>

          <form @submit.prevent="searchCourses" class="mb-4">
            <div class="input-group shadow-sm rounded-pill overflow-hidden">
              <div class="form-floating flex-grow-1">
                <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control border-0 rounded-0"
                    id="sservice"
                    placeholder="搜索学习资源..."
                >
                <label for="sservice" class="text-muted">
                  <i class="bi bi-search me-2"></i>你想学习什么？
                </label>
              </div>
              <button class="btn btn-primary px-4 rounded-0" type="submit">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </form>

          <div class="popular-tags">
            <span class="small fw-semibold text-muted me-3">热门搜索：</span>
            <a
                v-for="tag in popularTags"
                :key="tag"
                href="#"
                class="small px-3 py-1 rounded-pill bg-white text-decoration-none border text-muted me-2 mb-2 d-inline-block"
            >
              {{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdHeroBanner',
  data() {
    return {
      searchQuery: '',
      searchLocation: '',
      popularTags: ['汉字启蒙', '数学游戏', '英语字母', '科学实验', '创意美术', '逻辑思维']
    }
  },
  methods: {
    searchCourses() {
      // 处理搜索逻辑
      this.$router.push({
        path: '/courses',
        query: {
          q: this.searchQuery,
          location: this.searchLocation
        }
      })
    }
  }
}
</script>

<style scoped>
.banner-search {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  background-color: #f8f9fa;
}

h1 .text-primary {
  color: #2c7be5 !important;
}

.input-group {
  transition: box-shadow 0.3s ease;
}

.input-group:focus-within {
  box-shadow: 0 0 0 0.25rem rgba(44, 123, 229, 0.25);
}

.form-control {
  height: 56px;
  padding-top: 1.5rem;
}

.form-control:focus {
  box-shadow: none;
}

.btn-primary {
  background-color: #2c7be5;
  border-color: #2c7be5;
  height: 56px;
}

.popular-tags a:hover {
  background-color: #e9f0fd !important;
  color: #2c7be5 !important;
  border-color: #2c7be5 !important;
}

@media (min-width: 992px) {
  .banner-search {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
}
</style>
