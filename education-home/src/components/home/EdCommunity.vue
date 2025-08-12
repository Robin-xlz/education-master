<template>
  <section class="bg-light py-5 feature-list border-bottom">
    <div class="container py-4">
      <div class="pb-2">
        <h4 class="fw-bold text-black">The Community for Creative People</h4>
        <p class="mb-4 text-muted">The largest online community of creatives. A network of millions of professionals with whom you can share knowledge.</p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-4">
        <div v-for="member in communityMembers" :key="member.id" class="col">
          <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item">
            <img :src="require(`@/assets/images/communities/${member.image}`)" class="card-img-top" :alt="member.name">
            <div class="card-body">
              <h5 class="card-title mb-1 h6 text-dark">{{ member.name }}</h5>
              <p class="card-text text-muted">{{ member.location }}</p>
            </div>
            <div class="card-footer bg-white border-0 d-flex align-items-center justify-content-between p-3 border-top">
              <p class="text-muted small mb-0">{{ member.followers }} followers</p>
              <button type="button" class="btn btn-secondary btn-sm px-2 py-0">+ Follow</button>
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
      communityMembers: [
        { id: 1, name: 'Veronica Cerna', location: 'Lima District, Peru', followers: '3512', image: 'communities1.jpg' },
        { id: 2, name: 'Caro Bello', location: 'Denver, Argentina', followers: '35241', image: 'communities2.jpg' },
        { id: 3, name: 'Ernex', location: 'Denpasar, Indonesia', followers: '75', image: 'communities3.jpg' }
        // 可以添加更多社区成员
      ]
    }
  }
}
</script>
