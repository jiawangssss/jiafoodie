<template>
  <div class="food-articles p-4 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-medium">美食專欄</h1>
      <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
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
              <i class="pi pi-map-marker mr-1 text-xs">
                <ㄑ /i>
                  築間
            </div>
          </div>
          <div class="ml-auto text-sm text-gray-500">55分鐘</div>
        </div>

        <!-- 評分區 -->
        <div class="rating mb-2">
          評分：
          <div class="inline-flex">
            <i v-for="i in 3" :key="i" class="pi pi-star-fill text-yellow-400"></i>
            <i v-for="i in 2" :key="i + 3" class="pi pi-star text-gray-300"></i>
          </div>
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
        <div class="images grid grid-cols-2 gap-2 mb-3">
          <div class="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            圖片
          </div>
          <div class="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            圖片
          </div>
        </div>

        <!-- 按鈕區 -->
        <div class="actions flex justify-end gap-2">
          <button class="px-3 py-1 border border-gray-300 rounded text-sm">更多</button>
          <button class="px-3 py-1 border border-gray-300 rounded text-sm">編輯</button>
        </div>
      </div>
    </div>

    <!-- 底部導航欄 -->
    <div class="bottom-nav fixed bottom-0 left-0 right-0 bg-gray-100 border-t">
      <div class="flex justify-around py-3">
        <NuxtLink to="/nearby-restaurants" class="nav-item flex flex-col items-center">
          <i class="pi pi-map-marker mb-1"></i>
          <span class="text-xs">附近餐廳</span>
        </NuxtLink>

        <NuxtLink to="/food-articles" class="nav-item flex flex-col items-center active">
          <i class="pi pi-book mb-1"></i>
          <span class="text-xs">美食專欄</span>
        </NuxtLink>

        <NuxtLink to="/saved-items" class="nav-item flex flex-col items-center">
          <i class="pi pi-bookmark mb-1"></i>
          <span class="text-xs">最近儲存</span>
        </NuxtLink>

        <NuxtLink to="/my-account" class="nav-item flex flex-col items-center">
          <i class="pi pi-user mb-1"></i>
          <span class="text-xs">我的帳號</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
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