<template>
  <div class="course-list-section">
    <!-- 页面标题 -->
    <div class="fs-4 fw-bold text-black">Online courses for creative professionals</div>
    <hr class="p-0">

    <!-- 特色课程部分 -->
    <section class="featured-courses">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h4 class="fw-bold text-dark m-0">Featured</h4>
        <router-link v-if="showViewAll" to="/courses" class="text-decoration-none text-danger fw-bold">
          See More <i class="bi bi-arrow-right-circle"></i>
        </router-link>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        <div class="col" v-for="(course, index) in featuredCourses" :key="'featured-'+index">
          <CourseCard v-bind="course" @add-to-cart="handleAddToCart" />
        </div>
      </div>
    </section>

    <!-- 分类课程部分 -->
    <section v-for="category in categorizedCourses" :key="category.name" class="category-section">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h4 class="fw-bold text-dark m-0">Online {{ category.name }} courses</h4>
        <router-link v-if="showViewAll" :to="`/courses?category=${category.slug}`" class="text-decoration-none text-danger fw-bold">
          See More <i class="bi bi-arrow-right-circle"></i>
        </router-link>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        <div class="col" v-for="(course, index) in category.courses" :key="category.slug+'-'+index">
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
      ]
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(newFilters) {
        this.applyFilters(newFilters)
      }
    }
  },
  methods: {
    handleAddToCart(course) {
      this.$emit('add-to-cart', course)
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page
        this.$emit('page-change', page)
      }
    },
    applyFilters(filters) {
      // 这里可以根据传入的filters筛选课程
      console.log('Applying filters:', filters)
      // 实际项目中这里会调用API或过滤本地数据
    }
  }
}
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
</style>
