<template>
  <div class="my-account p-4 bg-gray-50 min-h-screen">
    <h1 class="text-xl font-medium">我的帳號</h1>
    <div class="content">
      <!-- 這裡將來可以加入用戶資料和設定等內容 -->
    </div>
    <BottomNavBar />
  </div>
</template>

<script setup>
import BottomNavBar from '~/components/BottomNavBar.vue'
</script>

<style scoped>
.my-account {
  padding-bottom: 70px;
}
</style>