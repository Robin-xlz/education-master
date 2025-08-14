<template>
  <section class="bg-light py-5 feature-list border-bottom">
    <div class="container py-4">
      <div class="pb-2">
        <h4 class="fw-bold text-black">热门学习资源</h4>
        <p class="mb-4 text-muted">最受家长和孩子欢迎的教育资源，每日更新精选内容</p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-4">
        <div v-for="resource in popularResources" :key="resource.id" class="col">
          <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item">
            <img :src="require(`@/assets/images/communities/${resource.image}`)" class="card-img-top" :alt="resource.name">
            <div class="card-body">
              <h5 class="card-title mb-1 h6 text-dark">{{ resource.name }}</h5>
              <p class="card-text text-muted">{{ resource.category }}</p>
            </div>
            <div class="card-footer bg-white border-0 d-flex align-items-center justify-content-between p-3 border-top">
              <p class="text-muted small mb-0">
                <i class="bi bi-download"></i> {{ resource.downloads }}次下载
              </p>
              <button type="button" class="btn btn-primary btn-sm px-2 py-0">
                <i class="bi bi-download"></i> 下载
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EdCommunity',
  data() {
    return {
      popularResources: [
        {
          id: 1,
          name: '汉字基础练习册',
          category: '汉字字帖',
          downloads: '3512',
          image: 'communities1.jpg'
        },
        {
          id: 2,
          name: '拼音入门卡片',
          category: '拼音练习',
          downloads: '2845',
          image: 'communities2.jpg'
        },
        {
          id: 3,
          name: '数字描红本',
          category: '数字练习',
          downloads: '2678',
          image: 'communities3.jpg'
        },
        {
          id: 4,
          name: '趣味动物迷宫',
          category: '益智迷宫',
          downloads: '1983',
          image: 'communities4.jpg'
        },
        {
          id: 5,
          name: '儿童数独游戏',
          category: '趣味数独',
          downloads: '1756',
          image: 'communities5.jpg'
        },
        {
          id: 6,
          name: '小学语文第一册',
          category: '语文教材',
          downloads: '3421',
          image: 'communities6.jpg'
        },
        {
          id: 7,
          name: '数学口算练习',
          category: '数学教材',
          downloads: '2897',
          image: 'communities7.jpg'
        },
        {
          id: 8,
          name: '安徒生童话集',
          category: '世界名著',
          downloads: '2314',
          image: 'communities8.jpg'
        }
      ]
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

.btn-primary {
  background-color: #2c7be5;
  border-color: #2c7be5;
}

.btn-primary:hover {
  background-color: #1a68d1;
  border-color: #1a68d1;
}
</style>
