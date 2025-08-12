<template>
  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item">
    <iframe :src="videoUrl" sandbox title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    <div class="card-body">
      <h6 class="card-title pb-3 fw-bold text-black mb-0">
        <span :class="badgeClass">{{ badgeText }}</span>{{ title }}
      </h6>
      <p class="card-text mb-0">{{ instructor }}</p>
      <div class="card-text text-muted small">{{ description }}</div>
      <div class="text-muted gap-2 pt-2 small d-flex">
        <span><i class="bi bi-person"></i> {{ students }}</span>
        <span><i class="bi bi-hand-thumbs-up"></i> {{ rating }}% ({{ votes }}) rating }}% ({{ votes }})</span>
      </div>
    </div>
    <div class="card-footer border-0 bg-white border-top p-3">
      <span class="badge bg-dark text-white mb-2" v-if="showSale">BLACK FRIDAY</span>
      <div class="card-price text-danger mb-2" v-if="discount">78% Disc.<del>₹1,800</del></div>
      <div class="d-grid">
        <button class="btn btn-primary btn-lg">
          <i class="bi bi-cart-fill"></i> ₹399
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    videoUrl: String,
    badgeClass: {
      type: String,
      default: 'bg-warning badge text-black me-2'
    },
    badgeText: String,
    title: String,
    instructor: String,
    description: String,
    students: Number,
    rating: Number,
    votes: String,
    showSale: Boolean,
    discount: Boolean
  }
}
</script>
