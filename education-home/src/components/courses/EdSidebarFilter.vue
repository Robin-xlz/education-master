<template>
  <aside class="sidebar-fixed">
    <div class="side-nav">
      <p class="fw-bold text-uppercase text-dark">形状</p>
      <div class="form-check" v-for="(option, index) in courseOptions" :key="'course'+index">
        <input class="form-check-input" type="radio" v-model="selectedCourse" :value="option.value" :id="'courseOpt'+index">
        <label class="form-check-label" :for="'courseOpt'+index">
          {{ option.label }}
          <small v-if="option.badge"><span :class="'badge bg-'+option.badge.type">{{ option.badge.text }}</span></small>
        </label>
      </div>

      <hr>

      <div class="d-flex flex-column gap-2">
        <a href="#" class="text-decoration-none"><i class="bi bi-gift"></i> Gift ideas</a>
        <a href="#" class="text-decoration-none"><i class="bi bi-card-list"></i> Gift cards</a>
      </div>

      <hr>

      <div v-for="filterGroup in filterGroups" :key="filterGroup.title">
        <p class="fw-bold text-uppercase text-dark">{{ filterGroup.title }}</p>
        <div class="form-check" v-for="(item, idx) in filterGroup.items" :key="idx">
          <input class="form-check-input" type="checkbox" v-model="selectedFilters[filterGroup.key]" :value="item.value" :id="item.value">
          <label class="form-check-label" :for="item.value">{{ item.label }}</label>
        </div>
        <hr v-if="filterGroup.showHr">
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'EdSidebarFilter',
  data() {
    return {
      selectedCourse: 'basics',
      courseOptions: [
        {value: '0', label: '圆形'},
        {value: '1', label: '四边形', badge: {type: 'primary', text: 'NEW'}},
        {value: '2', label: '三角形'},
        {value: '3', label: '六边形'},
        {value: '4', label: 'Popular courses'},
        {value: '5', label: 'Open courses', badge: {type: 'danger', text: 'PRO'}}
      ],
      selectedFilters: {
        categories: [],
        software: []
      },
      filterGroups: [
        {
          title: '大小',
          key: 'categories',
          items: [
            {value: 'Illustration', label: 'Illustration'},
            {value: 'Craft', label: 'Craft'},
            {value: 'Marketing', label: 'Marketing & Business'},
            // 其他分类...
          ],
          showHr: true
        },
        {
          title: '主题',
          key: 'software',
          items: [
            {value: '0', label: '四季'},
            {value: '1', label: '卡通'},
            // 其他软件...
          ],
          showHr: false
        }
      ]
    }
  },
  watch: {
    selectedCourse(newVal) {
      this.$emit('filter-change', {
        courseType: newVal,
        filters: this.selectedFilters
      })
    },
    selectedFilters: {
      deep: true,
      handler(newVal) {
        this.$emit('filter-change', {
          courseType: this.selectedCourse,
          filters: newVal
        })
      }
    }
  }
}
</script>
