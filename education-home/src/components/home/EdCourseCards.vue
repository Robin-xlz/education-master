<template>
  <section class="bg-light py-5 border-bottom">
    <div class="container py-4">
      <div class="pb-3">
        <h4 class="mb-2 fw-bold text-black">Learn by Doing</h4>
        <p class="text-muted">Get access to the best online courses for creatives. Interact with the best professionals and discover the creative world's best-kept secrets.</p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div v-for="course in courses" :key="course.id" class="col">
          <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item">
            <iframe :src="course.videoUrl" sandbox="" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <div class="card-body">
              <h6 class="card-title pb-3 fw-bold text-black mb-0">
                <span :class="course.badgeClass">{{ course.badgeText }}</span>
                {{ course.title }}
              </h6>
              <p class="card-text mb-0">{{ course.instructor }}</p>
              <div class="card-text text-muted small">{{ course.description }}</div>
              <div class="text-muted gap-2 pt-2 small d-flex">
                <span><i class="bi bi-person"></i> {{ course.students }}</span>
                <span><i class="bi bi-hand-thumbs-up"></i> {{ course.rating }} ({{ course.ratingCount }})</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-white border-top p-3">
              <span class="badge bg-dark text-white mb-2">{{ course.specialOffer }}</span>
              <div class="card-price text-danger mb-2">{{ course.discount }}<del>{{ course.originalPrice }}</del></div>
              <div class="d-grid">
                <button class="btn btn-primary btn-lg" @click="addToCart(course)">
                  <i class="bi bi-cart-fill"></i> {{ course.discountedPrice }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-3 pb-4">
        <router-link to="/courses" class="btn btn-danger btn-lg">
          See more sikshaa course &nbsp;<i class="bi bi-arrow-right"></i>
        </router-link>
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
          badgeText: 'BEST SELLER',
          title: 'Learn C language in 30 Minutes & Start Coding For Beginners in Hindi',
          instructor: 'A course by Arantxa & Guille',
          description: 'Learn to create campaigns on Google and Facebook to boost your brand or business',
          students: '23643',
          rating: '80%',
          ratingCount: '2.2k',
          specialOffer: 'BLACK FRIDAY',
          discount: '78% Disc.',
          originalPrice: '₹1,800',
          discountedPrice: '₹399'
        },
        {
          id: 2,
          videoUrl: '#',
          badgeClass: 'bg-primary badge me-2',
          badgeText: 'NEW',
          title: 'Learn C language in 30 Minutes & Start Coding For Beginners in Hindi',
          instructor: 'A course by Carlos "Zenzuke" Albarrán',
          description: 'Learn After Effects from scratch and master the leading motion graphics and post-',
          students: '23643',
          rating: '60%',
          ratingCount: '14k',
          specialOffer: 'BLACK FRIDAY',
          discount: '78% Disc.',
          originalPrice: '₹1,800',
          discountedPrice: '₹399'
        }
        // 可以添加更多课程
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
