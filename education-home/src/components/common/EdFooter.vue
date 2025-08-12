<template>
  <div>
    <!-- Refer and get free services -->
    <div class="bg-white border-top border-bottom cities-footer">
      <div>
        <div class="container">
          <a class="w-100 text-body text-decoration-none py-3 d-block" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex flex-wrap justify-content-between align-items-center py-1">
              <h6 class="m-0 text-body fw-bold">POPULAR CATEGORIES</h6>
              <span>SEE ALL CATEGORIES <i class="icofont-rounded-down border p-1 ms-2 rounded-3"></i> </span>
            </div>
          </a>
        </div>
      </div>
      <div class="collapse border-top" id="collapseExample">
        <div class="container py-4">
          <div class="row">
            <div v-for="category in footerCategories" :key="category" class="col-6 col-lg-3 col-md-3">
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" :to="`/courses?category=${category.slug}`">
                {{ category.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="py-5 footer">
      <div>
        <div class="container py-3">
          <div class="row">
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">COMPANY</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/about">About</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">CATEGORIES</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">Illustration courses</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">SOFTWARE</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">Adobe Photoshop</router-link>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">Adobe Illustrator</router-link>
            </div>
            <div class="col-6 col-lg-2 col-md-3">
              <h6 class="mb-3 text-body fw-bold">LISTS</h6>
              <router-link class="py-1 text-decoration-none d-block w-100 text-muted" to="/courses">New courses</router-link>
            </div>
            <div class="col-6 col-lg-4 col-md-3 ps-lg-5">
              <router-link to="/" class="brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <img src="@/assets/images/logo.png" class="img-fluid" alt="SIKSHAA">
              </router-link>
              <h6 class="mb-2 text-body mt-5 fw-bold text-uppercase">DOWNLOAD THE SIKSHAA APP</h6>
              <p>Get new clients, grow your business.</p>
              <a class="me-2" href="#"><img src="@/assets/images/google.png" class="img-fluid app-icon" alt="#" loading="lazy"></a>
              <a href="#"><img src="@/assets/images/apple.png" class="img-fluid app-icon" alt="#" loading="lazy"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 bg-white footer-copyright">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <span class="me-3 small">©2025 All rights reserved. <a target="_blank" href="https://www.mobanwang.com/" title="网站模板">网站模板</a></span>
            <router-link class="text-black-50 small mx-3 text-decoration-none" to="/terms-and-conditions">Terms of use</router-link>
            <router-link class="text-black-50 small mx-3 text-decoration-none" to="/privacy-policy">Privacy policy</router-link>
          </div>
          <div class="col-md-4 text-end">
            <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><i class="icofont-facebook"></i></a>
            <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><i class="icofont-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdFooter',
  data() {
    return {
      footerCategories: [
        { name: 'Illustration courses', slug: 'illustration' },
        { name: 'Craft courses', slug: 'craft' },
        { name: 'Marketing & Business courses', slug: 'marketing-business' }
      ]
    }
  }
}
</script>
