<template>
  <section class="bg-light py-5 border-bottom">
    <div class="container py-4">
      <!-- 会员优惠区块 -->
      <div class="row mb-5 g-4">
        <div class="col-12">
          <h4 class="mb-4 fw-bold text-black">会员超值特权</h4>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm rounded-3">
            <div class="card-body text-center p-4">
              <div class="bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto" style="width: 60px; height: 60px;">
                <i class="bi bi-person fs-4 text-primary"></i>
              </div>
              <h5 class="fw-bold mb-3">游客体验</h5>
              <p class="text-muted small mb-4">免费下载30张学习资源</p>
              <div class="fs-4 fw-bold text-dark mb-3">免费</div>
              <div class="badge bg-dark mb-3">完全免费</div>
              <button class="btn btn-outline-primary w-100">立即体验</button>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm rounded-3">
            <div class="card-body text-center p-4">
              <div class="bg-success bg-opacity-10 rounded-circle p-3 mb-3 mx-auto" style="width: 60px; height: 60px;">
                <i class="bi bi-star fs-4 text-success"></i>
              </div>
              <h5 class="fw-bold mb-3">月会员</h5>
              <p class="text-muted small mb-4">每天100张资源+个性化功能</p>
              <div class="fs-4 fw-bold text-dark mb-3">¥39<span class="fs-6 fw-normal text-muted">/月</span></div>
              <div class="badge bg-danger mb-3">立省¥10</div>
              <button class="btn btn-success w-100">立即开通</button>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm rounded-3">
            <div class="card-body text-center p-4">
              <div class="bg-warning bg-opacity-10 rounded-circle p-3 mb-3 mx-auto" style="width: 60px; height: 60px;">
                <i class="bi bi-award fs-4 text-warning"></i>
              </div>
              <h5 class="fw-bold mb-3">年会员</h5>
              <p class="text-muted small mb-4">无限下载+专属内容+离线使用</p>
              <div class="fs-4 fw-bold text-dark mb-3">¥299<span class="fs-6 fw-normal text-muted">/年</span></div>
              <div class="badge bg-danger mb-3">立省¥169</div>
              <button class="btn btn-warning w-100">超值优惠</button>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm rounded-3">
            <div class="card-body text-center p-4">
              <div class="bg-danger bg-opacity-10 rounded-circle p-3 mb-3 mx-auto" style="width: 60px; height: 60px;">
                <i class="bi bi-gem fs-4 text-danger"></i>
              </div>
              <h5 class="fw-bold mb-3">终身会员</h5>
              <p class="text-muted small mb-4">全站资源+所有功能+永久更新</p>
              <div class="fs-4 fw-bold text-dark mb-3">¥999</div>
              <div class="badge bg-dark mb-3">一次购买 永久使用</div>
              <button class="btn btn-danger w-100">尊享特权</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EdCourseCards',
  data() {
    return {
      courses: [
        {
          id: 1,
          videoUrl: '#',
          badgeClass: 'bg-warning badge text-black me-2',
          badgeText: '畅销课程',
          title: '30分钟学会C语言 - 零基础入门教程(中文)',
          instructor: '讲师: 王老师',
          description: '学习在Google和Facebook上创建广告活动来推广您的品牌或业务',
          students: '23643',
          rating: '80%',
          ratingCount: '2.2k',
          specialOffer: '限时优惠',
          discount: '78折',
          originalPrice: '¥1,800',
          discountedPrice: '¥399'
        },
        {
          id: 2,
          videoUrl: '#',
          badgeClass: 'bg-primary badge me-2',
          badgeText: '新课上线',
          title: '30分钟学会C语言 - 零基础入门教程(中文)',
          instructor: '讲师: 张教授',
          description: '从零开始学习After Effects，掌握领先的动态图形和后期制作技术',
          students: '23643',
          rating: '60%',
          ratingCount: '14k',
          specialOffer: '限时优惠',
          discount: '78折',
          originalPrice: '¥1,800',
          discountedPrice: '¥399'
        }
      ]
    }
  },
  methods: {
    addToCart(course) {
      this.$emit('add-to-cart', course)
      // 或者使用 Vuex 管理购物车状态
    }
  }
}
</script>

<style scoped>
.video-card-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card-price del {
  color: #6c757d;
  font-size: 0.8em;
  margin-left: 0.5em;
}
</style>
