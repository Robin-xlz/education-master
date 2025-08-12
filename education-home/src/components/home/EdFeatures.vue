<template>
  <div class="feature-list py-5 border-bottom bg-white">
    <div class="container py-4">
      <heading>
        <h3 class="text-center pb-4 mb-4 fw-bold text-black">What to expect from a Sikshaa course</h3>
      </heading>
      <div class="row">
        <div v-for="feature in features" :key="feature.id" class="col-md-6 gap-4 d-flex">
          <div><i :class="feature.icon"></i></div>
          <div>
            <h5 class="card-title fw-bold text-black">{{ feature.title }}</h5>
            <p class="fs-14 mb-4">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdFeatures',
  data() {
    return {
      features: [
        {
          id: 1,
          icon: 'bi bi-emoji-smile text-muted display-6',
          title: 'Learn at your own pace',
          description: '1em Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
        },
        {
          id: 2,
          icon: 'bi bi-laptop text-muted display-6',
          title: 'Get front row seats',
          description: '1default model text'
        }
        // 可以添加更多特性
      ]
    }
  }
}
</script>
