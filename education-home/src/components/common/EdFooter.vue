<template>
  <div>
    <!-- 热门资源分类 -->
    <div class="bg-white border-top border-bottom cities-footer">
      <div>
        <div class="container">
          <a class="w-100 text-body text-decoration-none py-3 d-block" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex flex-wrap justify-content-between align-items-center py-1">
              <h6 class="m-0 text-body fw-bold">热门资源分类</h6>
              <span>查看全部分类 <i class="bi bi-chevron-down border p-1 ms-2 rounded-3"></i> </span>
            </div>
          </a>
        </div>
      </div>
      <div class="collapse border-top" id="collapseExample">
        <div class="container py-4">
          <div class="row">
            <div v-for="category in footerCategories" :key="category" class="col-6 col-lg-3 col-md-3">
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" :to="`/courses?category=${category.slug}`">
                {{ category.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚主体 -->
    <div class="py-5 footer">
      <div>
        <div class="container py-3">
          <div class="row">
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">关于我们</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/about">公司简介</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/team">团队介绍</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/contact">联系我们</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">学习资源</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">汉字字帖</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">拼音练习</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">数字描红</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">益智游戏</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">趣味迷宫</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">儿童数独</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">创意涂鸦</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">快速链接</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">最新资源</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">热门下载</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">会员特权</router-link>
            </div>
            <div class="col-6 col-lg-4 col-md-3 ps-lg-5">
              <router-link to="/" class="brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <img src="@/assets/images/logo.png" class="img-fluid" alt="童学汇">
              </router-link>
              <h6 class="mb-2 text-body mt-5 fw-bold">下载童学汇APP</h6>
              <p class="text-muted">随时随地学习，陪伴孩子成长</p>
<!--              <a class="me-2" href="#"><img src="@/assets/images/google.png" class="img-fluid app-icon" alt="Google Play" loading="lazy"></a>-->
<!--              <a href="#"><img src="@/assets/images/apple.png" class="img-fluid app-icon" alt="App Store" loading="lazy"></a>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="py-4 bg-white footer-copyright">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <span class="me-3 small">©2025 童学汇 版权所有</span>
            <router-link class="text-black-50 small mx-3 text-decoration-none" to="/terms-and-conditions">使用条款</router-link>
            <router-link class="text-black-50 small mx-3 text-decoration-none" to="/privacy-policy">隐私政策</router-link>
          </div>
          <div class="col-md-4 text-end">
            <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><i class="bi bi-facebook"></i></a>
            <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><i class="bi bi-twitter"></i></a>
            <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><i class="bi bi-wechat"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdFooter',
  data() {
    return {
      footerCategories: [
        { name: '汉字字帖', slug: 'chinese-writing' },
        { name: '拼音练习', slug: 'pinyin' },
        { name: '数字描红', slug: 'number-writing' },
        { name: '英文书写', slug: 'english-writing' },
        { name: '趣味迷宫', slug: 'maze' },
        { name: '儿童数独', slug: 'sudoku' },
        { name: '创意涂鸦', slug: 'drawing' },
        { name: '全科教材', slug: 'textbooks' }
      ]
    }
  }
}
</script>

<style scoped>
.cities-footer a[data-bs-toggle="collapse"]:hover {
  color: #2c7be5 !important;
}

.social-btn {
  color: #6c757d;
  border: 1px solid #dee2e6;
  margin-left: 0.5rem;
}

.social-btn:hover {
  color: #2c7be5;
  border-color: #2c7be5;
}

.app-icon {
  height: 40px;
  width: auto;
}
</style>
