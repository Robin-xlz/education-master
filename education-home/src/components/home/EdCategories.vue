<template>
  <main class="bg-light py-5 border-bottom">
    <div class="container py-4">
      <h3 class="pb-4 fw-bold text-black text-center">Courses By Category</h3>
      <div class="row gy-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-2">
        <div v-for="category in categories" :key="category.id" class="col">
          <router-link :to="`/courses?category=${category.slug}`" class="text-decoration-none">
            <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
              <img :src="require(`@/assets/images/category/${category.image}`)" class="img-fluid" :alt="category.name">
              <div class="card-body">
                <h6 class="card-title m-0">{{ category.name }}</h6>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'EdCategories',
  data() {
    return {
      categories: [
        { id: 1, name: 'Illustration', slug: 'illustration', image: 'category1.jpg' },
        { id: 2, name: 'Craft', slug: 'craft', image: 'category2.jpg' },
        { id: 3, name: 'Marketing & business', slug: 'marketing-business', image: 'category3.jpg' }
        // 可以添加更多分类
      ]
    }
  }
}
</script>
