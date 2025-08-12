<template>
  <div class="course-list-section">
    <!-- 筛选条件展示栏 -->
    <div class="mb-4">
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
        <span class="text-muted fs-5">{{ resultsCount }} results</span>

        <!-- 动态筛选标签 (增大尺寸) -->
        <div v-for="(tag, index) in filterTags" :key="index" class="d-flex align-items-center">
          <span class="badge bg-primary d-flex align-items-center py-1">
            {{ tag.label }}
            <button type="button" class="ms-2 btn-close btn-close-white" @click="removeFilter(tag.type, tag.value)"></button>
          </span>
        </div>

        <!-- 清除全部按钮 (增大尺寸) -->
        <button
            v-if="Object.keys(filters).length > 0 && filters.sourceType === 'library' && filterTags.length > 0"
            class="text-decoration-underline text-muted btn btn-link p-0"
            @click="clearAllFilters"
        >
          <i class="bi bi-trash me-1"></i>清除全部
        </button>
      </div>
    </div>
    <hr class="p-0 mb-4">

    <!-- 特色课程部分 -->
    <section class="featured-courses">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        <div class="col" v-for="(course, index) in featuredCourses" :key="'featured-'+index">
          <CourseCard v-bind="course" @add-to-cart="handleAddToCart" />
        </div>
      </div>
    </section>


    <!-- 分页控件 -->
    <nav v-if="showPagination" aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CourseCard from '@/components/common/EdCourseCard.vue'

export default {
  name: 'EdCourseListSection',
  components: {
    CourseCard
  },
  props: {
    filters: {
      type: Object,
      default: () => ({})
    },
    showViewAll: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 5,
      selectedSort: 'popular',
      featuredCourses: [
        {
          videoUrl: '#',
          badgeClass: 'bg-warning badge text-black me-2',
          badgeText: 'BEST SELLER',
          title: 'Learn C language in 30 Minutes & Start Coding For Beginners in Hindi',
          instructor: 'A course by Arantxa & Guille',
          description: 'Learn to create campaigns on Google and Facebook to boost your brand or business',
          students: '23643',
          rating: '80',
          votes: '2.2k',
          showSale: true,
          discount: '78'
        },
        {
          videoUrl: '#',
          badgeClass: 'bg-primary badge me-2',
          badgeText: 'NEW',
          title: 'Learn C language in 30 Minutes & Start Coding For Beginners in Hindi',
          instructor: 'A course by Carlos "Zenzuke" Albarrán',
          description: 'Learn After Effects from scratch and master the leading motion graphics and post-',
          students: '23643',
          rating: '60',
          votes: '14k',
          showSale: true,
          discount: '78'
        },
        {
          videoUrl: '#',
          badgeClass: 'bg-warning badge text-black me-2',
          badgeText: 'BEST SELLER',
          title: 'SPIDER-MAN: NO WAY HOME - Official Trailer',
          instructor: 'Marvel Entertainment',
          description: 'Learn to create campaigns on Google and Facebook to boost your brand or business',
          students: '53643',
          rating: '90',
          votes: '4.2k',
          showSale: true,
          discount: '78'
        }
      ],
      categorizedCourses: [
        {
          name: 'Illustration',
          slug: 'illustration',
          courses: [
            {
              videoUrl: '#',
              badgeClass: 'bg-warning badge text-black me-2',
              badgeText: 'BEST SELLER',
              title: 'Digital Illustration for Beginners',
              instructor: 'A course by John Doe',
              description: 'Master digital illustration techniques from scratch',
              students: '15632',
              rating: '95',
              votes: '3.1k',
              showSale: false,
              discount: '50'
            },
            {
              videoUrl: '#',
              badgeClass: 'bg-primary badge me-2',
              badgeText: 'NEW',
              title: 'Character Design Masterclass',
              instructor: 'A course by Jane Smith',
              description: 'Create memorable characters for games and animation',
              students: '8432',
              rating: '92',
              votes: '1.8k',
              showSale: true,
              discount: '60'
            },
            {
              videoUrl: '#',
              badgeClass: 'bg-warning badge text-black me-2',
              badgeText: 'BEST SELLER',
              title: 'Watercolor Painting Techniques',
              instructor: 'A course by Artist Studio',
              description: 'Learn professional watercolor techniques',
              students: '12453',
              rating: '88',
              votes: '2.5k',
              showSale: true,
              discount: '45'
            }
          ]
        },
        {
          name: 'Design',
          slug: 'design',
          courses: [
            {
              videoUrl: '#',
              badgeClass: 'bg-primary badge me-2',
              badgeText: 'NEW',
              title: 'UI/UX Design Fundamentals',
              instructor: 'A course by Design Pro',
              description: 'Learn the basics of user interface and experience design',
              students: '18765',
              rating: '94',
              votes: '3.4k',
              showSale: false,
              discount: '30'
            },
            {
              videoUrl: '#',
              badgeClass: 'bg-warning badge text-black me-2',
              badgeText: 'BEST SELLER',
              title: 'Logo Design Mastery',
              instructor: 'A course by Logo Expert',
              description: 'Create professional logos for any business',
              students: '22543',
              rating: '96',
              votes: '4.7k',
              showSale: true,
              discount: '55'
            }
          ]
        }
      ],
      // 侧边栏筛选条件的原始选项数据（需要与EdMazeSidebarFilter.vue保持一致）
      courseOptions: [
        {value: '0', label: '圆形'},
        {value: '1', label: '四边形'},
        {value: '2', label: '多边形'},
        {value: '3', label: '动物'},
        {value: '5', label: '建筑'}
      ],
      sizeOptions: [
        {value: '1st', label: '🐌蜗牛'},
        {value: '2nd', label: '🐇兔子'},
        {value: '3rd', label: '🐱猫咪'},
        {value: '4th', label: '🦓斑马'},
        {value: '5th', label: '🐯老虎'},
        {value: '6th', label: '🦖恐龙'}
      ],
      themeOptions: [
        {value: 'seasons', label: '四季'},
        {value: 'cartoon', label: '卡通'},
        {value: 'nature', label: '自然'},
        {value: 'animals', label: '动物'}
      ]
    };
  },
  computed: {
    // 计算结果数量 - 在实际应用中应从API获取
    resultsCount() {
      // 如果没有筛选条件，显示总结果数
      if (!this.filters || this.filters.sourceType === 'custom' ||
          (this.filters.courseType === '' && !this.filters.sizes?.length && !this.filters.themes?.length)) {
        return '4,947';
      }

      // 根据筛选条件简单计算结果数（实际应用中应从API获取）
      const filterCount = [
        this.filters.courseType ? 1 : 0,
        this.filters.sizes?.length || 0,
        this.filters.themes?.length || 0
      ].reduce((a, b) => a + b, 0);

      // 根据筛选条件数量返回不同的结果数（模拟数据）
      const baseCount = 4947;
      const filteredCount = Math.floor(baseCount * (1 - filterCount * 0.15));
      return filteredCount.toLocaleString();
    },

    // 生成筛选标签数组
    filterTags() {
      const tags = [];

      // 只在资源库模式下显示筛选标签
      if (this.filters.sourceType !== 'library') {
        return tags;
      }

      // 添加形状筛选标签
      if (this.filters.courseType) {
        const courseOption = this.courseOptions.find(option => option.value === this.filters.courseType);
        if (courseOption) {
          tags.push({
            type: 'shape',
            label: courseOption.label
          });
        }
      }

      // 添加等级筛选标签
      if (this.filters.sizes && this.filters.sizes.length) {
        this.filters.sizes.forEach(sizeValue => {
          const sizeOption = this.sizeOptions.find(option => option.value === sizeValue);
          if (sizeOption) {
            tags.push({
              type: 'size',
              value: sizeValue,
              label: sizeOption.label
            });
          }
        });
      }

      // 添加主题筛选标签
      if (this.filters.themes && this.filters.themes.length) {
        this.filters.themes.forEach(themeValue => {
          const themeOption = this.themeOptions.find(option => option.value === themeValue);
          if (themeOption) {
            tags.push({
              type: 'theme',
              value: themeValue,
              label: themeOption.label
            });
          }
        });
      }

      return tags;
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(newFilters) {
        this.applyFilters(newFilters);
      }
    },
    selectedSort(newVal) {
      // 处理排序变更
      console.log('Sorting by:', newVal);
      // 实际应用中这里会调用API或重新排序数据
    }
  },
  methods: {
    handleAddToCart(course) {
      this.$emit('add-to-cart', course);
    },

    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.$emit('page-change', page);
      }
    },

    applyFilters(filters) {
      console.log('Applying filters:', filters);
      // 实际项目中这里会调用API或过滤本地数据
    },

    // 移除单个筛选条件 (修复关键：正确传递value参数)
    removeFilter(type, value = null) {
      // 创建一个新的筛选对象，避免直接修改props
      const newFilters = {...this.filters};

      switch (type) {
        case 'shape':
          newFilters.courseType = '';
          break;
        case 'size':
          if (newFilters.sizes && value) {
            newFilters.sizes = newFilters.sizes.filter(size => size !== value);
          }
          break;
        case 'theme':
          if (newFilters.themes && value) {
            newFilters.themes = newFilters.themes.filter(theme => theme !== value);
          }
          break;
      }

      // 通知父组件更新筛选条件
      this.$emit('update:filters', newFilters);
    },

    // 清除所有筛选条件 (修复关键：确保正确重置所有筛选参数)
    clearAllFilters() {
      this.$emit('update:filters', {
        ...this.filters,
        courseType: '',
        sizes: [],
        themes: []
      });
    }
  }
};
</script>

<style scoped>
.course-list-section {
  padding: 1rem 0;
}

.category-section {
  margin-top: 2rem;
}

.pagination {
  margin-top: 2rem;
}

.page-link {
  color: #dc3545;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  background-color: #dc3545;
  border-color: #dc3545;
}

.page-link:hover {
  color: #a71d2a;
}

/* 筛选标签样式优化 */
.badge {
  border-radius: 20px; /* 圆角标签 */
  font-size:11px;
}

.badge .btn-close {
  box-sizing: content-box;
  width: 1.2em;
  height: 1.2em;
  padding: 0.25em;
}

/* 排序下拉菜单样式 */
.form-select {
  width: auto;
  min-width: 160px;
  border-radius: 5px;
}

/* 确保响应式布局下标签不会挤压 */
@media (max-width: 768px) {
  .d-flex.flex-wrap {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .ms-auto {
    margin-left: 0 !important;
    margin-top: 1rem;
  }
}
</style>
