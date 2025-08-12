<template>
  <aside class="sidebar-fixed bg-white p-3" style="width: 280px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <!-- 资源库/自定义切换 -->
    <div class="d-flex mb-3 justify-content-center align-items-center" style="gap: 1.5rem;">
      <div class="form-check d-flex align-items-center p-2 rounded"
           style="margin-bottom: 0; background: transparent; transition: all 0.2s;"
           :style="{'background': filters.sourceType === 'library' ? '#e9f5ff' : 'transparent'}"
           @click="updateSourceType('library')">
        <input class="form-check-input me-2" type="radio" :checked="filters.sourceType === 'library'" id="sourceLibrary">
        <label class="form-check-label fs-6" for="sourceLibrary" style="white-space: nowrap; cursor: pointer;">
          <i class="bi bi-database-fill-down me-1"></i>资源库
        </label>
      </div>
      <div class="form-check d-flex align-items-center p-2 rounded"
           style="margin-bottom: 0; background: transparent; transition: all 0.2s;"
           :style="{'background': filters.sourceType === 'custom' ? '#e9f5ff' : 'transparent'}"
           @click="updateSourceType('custom')">
        <input class="form-check-input me-2" type="radio" :checked="filters.sourceType === 'custom'" id="sourceCustom">
        <label class="form-check-label fs-6" for="sourceCustom" style="white-space: nowrap; cursor: pointer;">
          <i class="bi bi-gear-fill me-1"></i>自定义
        </label>
      </div>
    </div>
    <hr class="my-3">

    <div class="side-nav" :class="{'disabled-content': filters.sourceType === 'custom'}">
      <!-- 形状分组 -->
      <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="mb-0 fw-bold text-dark text-uppercase">形状</h5>
          <button class="btn btn-link p-0 text-muted" @click="toggleGroup('course')">
            <i class="bi" :class="isGroupOpen.course ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </button>
        </div>

        <div v-if="isGroupOpen.course">
          <div class="mb-2 d-flex align-items-center" v-for="(option, index) in courseOptions" :key="'course'+index">
            <input
                class="form-check-input me-3 flex-shrink-0"
                type="radio"
                :checked="filters.courseType === option.value"
                :value="option.value"
                :id="'courseOpt'+index"
                :disabled="filters.sourceType === 'custom'"
                style="width: 18px; height: 18px;"
                @change="updateCourseType(option.value)"
            >
            <label class="form-check-label fs-6 flex-grow-1" :for="'courseOpt'+index">
              <span class="d-flex align-items-center">
                {{ option.label }}
                <span v-if="option.badge" :class="'badge bg-'+option.badge.type+' ms-2'">{{ option.badge.text }}</span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <hr class="my-3">

      <!-- 大小分组 -->
      <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="mb-0 fw-bold text-dark text-uppercase">等级</h5>
          <button class="btn btn-link p-0 text-muted" @click="toggleGroup('size')">
            <i class="bi" :class="isGroupOpen.size ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </button>
        </div>

        <div v-if="isGroupOpen.size">
          <div class="d-grid grid-cols-2 gap-2 mb-3">
            <button
                class="btn"
                :class="filters.sizes.includes('1st') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('1st')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🐌蜗牛
            </button>
            <button
                class="btn"
                :class="filters.sizes.includes('2nd') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('2nd')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🐇兔子
            </button>
            <button
                class="btn"
                :class="filters.sizes.includes('3rd') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('3rd')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🐱猫咪
            </button>
            <button
                class="btn"
                :class="filters.sizes.includes('4th') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('4th')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🦓斑马
            </button>
            <button
                class="btn"
                :class="filters.sizes.includes('5th') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('5th')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🐯老虎
            </button>
            <button
                class="btn"
                :class="filters.sizes.includes('6th') ? 'btn-primary text-white' : 'btn-outline-secondary'"
                @click="toggleSize('6th')"
                :disabled="filters.sourceType === 'custom'"
                style="font-size: 0.85rem; padding: 0.4rem 0.5rem;"
            >
              🦖恐龙
            </button>
          </div>
        </div>
      </div>
      <hr class="my-3">

      <!-- 主题分组 -->
      <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="mb-0 fw-bold text-dark text-uppercase">主题</h5>
          <button class="btn btn-link p-0 text-muted" @click="toggleGroup('theme')">
            <i class="bi" :class="isGroupOpen.theme ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </button>
        </div>

        <div v-if="isGroupOpen.theme">
          <div class="mb-2 d-flex align-items-center" v-for="(item, idx) in filteredThemeOptions" :key="idx">
            <input
                class="form-check-input me-3 flex-shrink-0"
                type="checkbox"
                :checked="filters.themes.includes(item.value)"
                :value="item.value"
                :id="item.value"
                :disabled="filters.sourceType === 'custom'"
                style="width: 18px; height: 18px;"
                @change="toggleTheme(item.value)"
            >
            <label class="form-check-label fs-6 flex-grow-1" :for="item.value" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              {{ item.label }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'EdMazeSidebarFilter',
  props: {
    // 接收父组件传递的筛选条件（实现双向绑定的关键）
    filters: {
      type: Object,
      required: true,
      default: () => ({
        sourceType: 'library',
        courseType: '',
        sizes: [],
        themes: []
      })
    }
  },
  data() {
    return {
      isGroupOpen: {
        course: true,
        size: true,
        theme: true
      },
      courseOptions: [
        { value: '0', label: '圆形' },
        { value: '1', label: '四边形' },
        { value: '2', label: '多边形' },
        { value: '3', label: '动物' },
        { value: '5', label: '建筑', badge: { type: 'primary', text: 'NEW' } }
      ],
      themeOptions: [
        { value: 'seasons', label: '四季' },
        { value: 'cartoon', label: '卡通' },
        { value: 'nature', label: '自然' },
        { value: 'animals', label: '动物' }
      ]
    };
  },
  computed: {
    filteredThemeOptions() {
      return this.themeOptions;
    }
  },
  methods: {
    toggleGroup(groupName) {
      this.isGroupOpen[groupName] = !this.isGroupOpen[groupName];
    },

    // 更新资源类型
    updateSourceType(type) {
      // 不直接修改props，而是通过$emit通知父组件更新
      this.$emit('update:filters', {
        ...this.filters,
        sourceType: type,
        // 切换到自定义时清空其他筛选条件
        courseType: type === 'custom' ? '' : this.filters.courseType,
        sizes: type === 'custom' ? [] : this.filters.sizes,
        themes: type === 'custom' ? [] : this.filters.themes
      });
    },

    // 更新形状选择
    updateCourseType(courseType) {
      this.$emit('update:filters', {
        ...this.filters,
        courseType
      });
    },

    // 切换大小选择
    toggleSize(sizeValue) {
      const newSizes = [...this.filters.sizes];
      const index = newSizes.indexOf(sizeValue);

      if (index > -1) {
        newSizes.splice(index, 1);
      } else {
        newSizes.push(sizeValue);
      }

      this.$emit('update:filters', {
        ...this.filters,
        sizes: newSizes
      });
    },

    // 切换主题选择
    toggleTheme(themeValue) {
      const newThemes = [...this.filters.themes];
      const index = newThemes.indexOf(themeValue);

      if (index > -1) {
        newThemes.splice(index, 1);
      } else {
        newThemes.push(themeValue);
      }

      this.$emit('update:filters', {
        ...this.filters,
        themes: newThemes
      });
    }
  },
  watch: {
    // 监听外部筛选条件变化，更新分组展开状态（如果需要）
    filters: {
      deep: true,
      handler(newVal) {
        // 可以在这里添加需要的响应式逻辑
        console.log('Sidebar filters updated from parent:', newVal);
      }
    }
  }
};
</script>

<style scoped>
/* 禁用状态样式 */
.disabled-content {
  opacity: 0.6;
  pointer-events: none;
}

/* 确保侧边栏内容不超出边界 */
.sidebar-fixed {
  overflow-x: hidden;
}

/* 表单控件样式优化 */
.form-check {
  padding-left: 0;
  margin-bottom: 0.5rem;
}

.form-check-input {
  margin-right: 0.75rem; /* 增加勾选框与文本的间距 */
}

.form-check-label {
  color: #333;
  cursor: pointer;
  font-size: 0.8rem; /* 略微减小字体大小 */
}

/* 分组标题样式 */
h5 {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

/* 徽章样式优化 */
.badge {
  font-size: 0.7rem;
  padding: 0.15em 0.4em;
  vertical-align: middle;
}

/* 按钮样式优化 */
.btn {
  font-size: 0.85rem;
  padding: 0.4rem 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 链接按钮样式 */
.btn-link {
  padding: 0;
  font-size: 0.85rem;
}
</style>
