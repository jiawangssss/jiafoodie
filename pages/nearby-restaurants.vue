<template>
  <div class="nearby-restaurants p-4 bg-gray-50 min-h-screen">
    <h1 class="text-xl font-medium">附近餐廳</h1>
    <div class="content">
      <!-- 這裡將來可以加入餐廳列表和地圖等內容 -->
    </div>
    <BottomNavBar />
  </div>
</template>

<script setup>
import BottomNavBar from '~/components/BottomNavBar.vue'
</script>

<style scoped>
.nearby-restaurants {
  padding-bottom: 70px;
}
</style>