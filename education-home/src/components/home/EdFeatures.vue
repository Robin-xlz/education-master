<template>
  <div class="feature-list py-5 border-bottom bg-white">
    <div class="container py-4">
      <heading>
        <h3 class="text-center pb-4 mb-4 fw-bold text-black">童学汇核心功能</h3>
      </heading>
      <div class="row">
        <div v-for="feature in features" :key="feature.id" class="col-md-6 gap-4 d-flex mb-4">
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
          icon: 'bi bi-pencil-square text-primary display-6',
          title: '智能字帖生成',
          description: '支持中文、英文、拼音、数字、控笔练习，可自定义文字内容、大小和笔画顺序，满足不同学习需求'
        },
        {
          id: 2,
          icon: 'bi bi-puzzle text-primary display-6',
          title: '益智游戏资源',
          description: '提供迷宫、数独、绘画等游戏，可自动生成不同难度级别的迷宫和数独，培养孩子逻辑思维能力'
        },
        {
          id: 3,
          icon: 'bi bi-journal-bookmark text-primary display-6',
          title: '全科教材下载',
          description: '涵盖语文、数学、英语等全科教材资源，全部免费下载，助力孩子全面发展'
        },
        {
          id: 4,
          icon: 'bi bi-book text-primary display-6',
          title: '世界名著文库',
          description: '精选世界经典名著电子书(PDF格式)，随时随地培养孩子阅读习惯'
        },
        {
          id: 5,
          icon: 'bi bi-file-earmark-text text-primary display-6',
          title: '试卷题库资源',
          description: '各类学科试卷资源库，包含单元测试、期中期末试卷等，帮助巩固学习成果'
        },
        {
          id: 6,
          icon: 'bi bi-magic text-primary display-6',
          title: '个性化学习',
          description: '根据孩子年龄和学习进度智能推荐适合的学习内容和游戏，让学习更高效'
        }
      ]
    }
  }
}
</script>

<style scoped>
.feature-list i {
  font-size: 2.5rem;
}
.row {
  row-gap: 1.5rem;
}
</style>
