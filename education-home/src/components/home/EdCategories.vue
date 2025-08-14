<template>
  <main class="bg-light py-5 border-bottom">
    <div class="container py-4">
      <h3 class="pb-4 fw-bold text-black text-center">学习资源分类</h3>
      <div class="row gy-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-2">
        <div v-for="category in categories" :key="category.id" class="col">
          <router-link :to="`/courses?category=${category.slug}`" class="text-decoration-none">
            <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
              <img :src="require(`@/assets/images/category/${category.image}`)" class="img-fluid" :alt="category.name">
              <div class="card-body text-center">
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
        {id: 1, name: '汉字字帖', slug: 'chinese-writing', image: 'category1.jpg'},
        {id: 2, name: '拼音练习', slug: 'pinyin', image: 'category2.jpg'},
        {id: 3, name: '数字描红', slug: 'number-writing', image: 'category3.jpg'},
        {id: 4, name: '英文书写', slug: 'english-writing', image: 'category4.jpg'},
        {id: 5, name: '益智迷宫', slug: 'maze', image: 'category5.jpg'},
        {id: 6, name: '趣味数独', slug: 'sudoku', image: 'category6.jpg'},
        {id: 7, name: '创意涂鸦', slug: 'drawing', image: 'category7.jpg'},
        {id: 8, name: '语文教材', slug: 'chinese-textbook', image: 'category8.jpg'},
        {id: 9, name: '数学教材', slug: 'math-textbook', image: 'category9.jpg'},
        {id: 10, name: '英语教材', slug: 'english-textbook', image: 'category10.jpg'},
        {id: 11, name: '考试试卷', slug: 'exam-papers', image: 'category11.jpg'},
        {id: 12, name: '世界名著', slug: 'classic-books', image: 'category12.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
.cat-itemm {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cat-itemm:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
