<!-- src/views/CoursesView.vue -->
<template>
  <div class="courses-view">
    <!-- 移除 EdNavbar 和 EdFooter -->
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <EdSidebarFilter v-model:filters="activeFilters" @filter-change="handleFilterChange" />
        </div>
        <div class="col-lg-9 col-sm-12">
          <EdCourseListSection
              v-if="activeFilters.sourceType === 'library'"
              :filters="activeFilters"
              @update:filters="activeFilters = $event"
              @add-to-cart="handleAddToCart"
              @page-change="handlePageChange"
          />
          <EdMazeCreate
              v-else
              :filters="activeFilters"
              @add-to-cart="handleAddToCart"
              @page-change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 只保留课程页专属组件
import EdSidebarFilter from '@/components/maze/EdMazeSidebarFilter.vue'
import EdMazeCreate from '@/components/maze/EdMazeCreate.vue'
import EdCourseListSection from '@/components/maze/EdCourseListSection.vue'

export default {
  name: 'MazeView',
  components: { EdSidebarFilter, EdMazeCreate, EdCourseListSection },
  data() {
    return {
      activeFilters: {
        sourceType: 'library',
        courseType: '',
        sizes: [],
        themes: []// 默认选择资源库
      }
    }
  },
  mounted() {
    console.log('MazeView 已挂载', this.$route)
  },
  beforeRouteEnter(to, from, next) {
    console.log('路由进入前', to)
    next()
  },
  methods: {
    handleFilterChange(filters) {
      this.activeFilters = filters
    },
    handleAddToCart() {
      // 添加到购物车逻辑
    },
    handlePageChange() {
      // 分页逻辑
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 1500px;
  font-size: 12px;
}
</style>
