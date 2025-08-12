<template>
  <div class="banner-search py-4">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-12 col-lg-6">
          <img src="@/assets/images/homepage.svg" class="img-fluid" alt="#" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold lh-1 mb-3 text-body"><span class="text-danger">Sikshaa</span> is a community for creative people.</h1>
          <p class="lead fw-normal text-dark mb-0">Learn from expert professionals and<br> join
            the largest online community for creatives.
          </p>
          <form @submit.prevent="searchCourses" class="py-2">
            <div class="d-flex my-4 shadow-sm bg-white rounded-3 align-items-center services-search-form">
              <div class="form-floating services-search-form-service">
                <input v-model="searchQuery" type="text" class="form-control" id="sservice" placeholder="Enter Service...">
                <label for="sservice">What <span class="fw-bold text-body">courses</span> do you need?</label>
              </div>
              <div class="form-floating services-search-form-zip">
                <input v-model="searchLocation" type="text" class="form-control" id="slocation" placeholder="Enter ZIP Code...">
                <label for="slocation"><i class="icofont-list text-body fs-6 me-1"></i> Areas</label>
              </div>
              <button class="btn btn-primary" type="submit"><i class="icofont-search-1"></i></button>
            </div>
          </form>
          <div class="popular-tagss">
            <span class="small py-1 text-decoration-none fw-bold text-body me-2">Popular</span>
            <a v-for="tag in popularTags" :key="tag" href="#" class="small px-2 py-1 rounded-pill bg-white text-decoration-none fw-normal border text-muted me-1">
              {{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdHeroBanner',
  data() {
    return {
      searchQuery: '',
      searchLocation: '',
      popularTags: ['Illustration', '3D', 'Web & App Design', 'Fashion', 'Marketing & Business']
    }
  },
  methods: {
    searchCourses() {
      // 处理搜索逻辑
      this.$router.push({
        path: '/courses',
        query: {
          q: this.searchQuery,
          location: this.searchLocation
        }
      })
    }
  }
}
</script>
