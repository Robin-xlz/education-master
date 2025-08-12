<template>
  <div class="home">
    <EdHeroBanner />
    <EdCourseCards />
    <EdFeatures />
    <EdCategories />
    <EdCommunity />
  </div>
</template>

<script>
import EdHeroBanner from '@/components/home/EdHeroBanner.vue'
import EdCourseCards from '@/components/home/EdCourseCards.vue'
import EdFeatures from '@/components/home/EdFeatures.vue'
import EdCategories from '@/components/home/EdCategories.vue'
import EdCommunity from '@/components/home/EdCommunity.vue'

export default {
  name: 'HomeView',
  components: {
    EdHeroBanner,
    EdCourseCards,
    EdFeatures,
    EdCategories,
    EdCommunity
  }
}
</script>

<style>
/* 可以添加全局样式 */
</style>
