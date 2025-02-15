<template>
  <div class="food-articles p-4 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-medium">美食專欄</h1>
      <button @click="showPopup = true" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <span class="text-xl">+</span>
      </button>
    </div>

    <div class="article-list">
      <div class="article-card bg-white rounded-lg p-4 mb-4">
        <!-- 用戶資訊區 -->
        <div class="user-info flex items-center mb-3">
          <img src="https://placekitten.com/100/100" class="w-10 h-10 rounded-full mr-2" alt="用戶頭像" />
          <div>
            <div class="font-medium">Sandy</div>
            <div class="text-sm text-gray-500 flex items-center">
              <i class="pi pi-map-marker mr-1 text-xs"></i>
              築間
            </div>
          </div>
          <div class="ml-auto text-sm text-gray-500">55分鐘</div>
        </div>

        <!-- 評分區 -->
        <div class="rating mb-2">
          <StarRating v-model="articleRating" />
        </div>

        <!-- 評論區 -->
        <div class="comment mb-3">
          評論：這間的火鍋料實在是很好吃！
        </div>

        <!-- 互動區 -->
        <div class="interaction flex items-center gap-6 mb-3">
          <div class="flex items-center gap-1">
            <i class="pi pi-heart text-gray-400"></i>
            <span class="text-sm">5</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="pi pi-comments text-gray-400"></i>
            <span class="text-sm">3</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="pi pi-share-alt text-gray-400"></i>
            <span class="text-sm">4</span>
          </div>
        </div>

        <!-- 圖片區 -->
        <div class="mb-3 flex justify-center">
          <ImageGrid :images="articleImages" size="small" />
        </div>

        <!-- 按鈕區 -->
        <div class="actions flex justify-end gap-2">
          <button class="px-3 py-1 border border-gray-300 rounded text-sm">更多</button>
          <button class="px-3 py-1 border border-gray-300 rounded text-sm">編輯</button>
        </div>
      </div>
    </div>

    <!-- 使用底部導航欄組件 -->
    <BottomNavBar />

    <!-- 加入 popup 組件 -->
    <popup v-if="showPopup" @close="showPopup = false" @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BottomNavBar from '~/components/BottomNavBar.vue'
import ImageGrid from '~/components/ImageGrid.vue'
import StarRating from '~/components/StarRating.vue'
import popup from '~/components/popup.vue'

const showPopup = ref(false)
const articleRating = ref(3)

const articleImages = ref([
  'https://placekitten.com/200/200',
  'https://placekitten.com/201/201'
])

const handleSubmit = (formData) => {
  console.log('提交的表單數據：', formData)
  showPopup.value = false
}
</script>

<style scoped>
.food-articles {
  padding-bottom: 70px;
}

.nav-item {
  color: #666;
  text-decoration: none;
}

.nav-item.active {
  color: #ff4d4f;
}

.bottom-nav {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}
</style>