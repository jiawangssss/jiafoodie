<template>
  <div class="saved-items p-4 bg-gray-50 min-h-screen">
    <h1 class="text-xl font-medium">最近儲存</h1>
    <div class="content">
      <!-- 這裡將來可以加入已儲存的餐廳或文章列表 -->
    </div>
    <BottomNavBar />
  </div>
</template>

<script setup>
import BottomNavBar from '~/components/BottomNavBar.vue'
</script>

<style scoped>
.saved-items {
  padding-bottom: 70px;
}
</style>