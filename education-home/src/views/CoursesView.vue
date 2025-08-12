<!-- src/views/CoursesView.vue -->
<template>
  <div class="courses-view">
    <!-- 移除 EdNavbar 和 EdFooter -->
    <EdBreadcrumb />
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <EdSidebarFilter @filter-change="handleFilterChange" />
        </div>
        <div class="col-lg-9 col-sm-12">
          <EdCourseListSection
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
import EdBreadcrumb from '@/components/courses/EdBreadcrumb.vue'
import EdSidebarFilter from '@/components/courses/EdSidebarFilter.vue'
import EdCourseListSection from '@/components/courses/EdCourseListSection.vue'

export default {
  name: 'CoursesView',
  components: { EdBreadcrumb, EdSidebarFilter, EdCourseListSection },
  data() {
    return { activeFilters: {} }
  },
  mounted() {
    console.log('CoursesView 已挂载', this.$route)
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
