<template>
    <div class="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="popup-content bg-white rounded-lg p-6 w-11/12 max-w-lg">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-medium">新增文章</h2>
                <button @click="$emit('close')" class="text-gray-500">
                    <span class="text-2xl">&times;</span>
                </button>
            </div>

            <form @submit.prevent="handleSubmit">
                <!-- 餐廳名稱 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">餐廳名稱</label>
                    <input v-model="formData.restaurantName" type="text" class="w-full px-3 py-2 border rounded"
                        placeholder="請輸入餐廳名稱">
                </div>

                <!-- 評分 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">評分</label>
                    <StarRating v-model="formData.rating" />
                </div>

                <!-- 評論 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">評論</label>
                    <textarea v-model="formData.comment" class="w-full px-3 py-2 border rounded" rows="3"
                        placeholder="請輸入評論"></textarea>
                </div>

                <!-- 照片上傳 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">照片</label>
                    <div class="grid grid-cols-3 gap-2 mb-2">
                        <div v-for="(image, index) in previewImages" :key="index"
                            class="relative aspect-square bg-gray-100 rounded overflow-hidden">
                            <img :src="image" class="w-full h-full object-cover">
                            <button @click.prevent="removeImage(index)"
                                class="absolute top-1 right-1 w-6 h-6 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center">
                                ×
                            </button>
                        </div>
                        <label v-if="previewImages.length < 3"
                            class="aspect-square bg-gray-100 rounded flex items-center justify-center cursor-pointer hover:bg-gray-200">
                            <input type="file" class="hidden" accept="image/*" @change="handleImageUpload" multiple>
                            <span class="text-2xl text-gray-400">+</span>
                        </label>
                    </div>
                    <p class="text-xs text-gray-500">最多可上傳3張照片</p>
                </div>

                <!-- 按鈕區 -->
                <div class="flex justify-end gap-2">
                    <button type="button" @click="$emit('close')" class="px-4 py-2 border rounded">
                        取消
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
                        發布
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import StarRating from './StarRating.vue'

const formData = ref({
    restaurantName: '',
    rating: 0,
    comment: '',
    images: []  // 存儲實際的圖片文件
})

const previewImages = ref([])  // 存儲圖片預覽URL

const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)
    const remainingSlots = 3 - previewImages.value.length
    const newFiles = files.slice(0, remainingSlots)

    newFiles.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
            previewImages.value.push(e.target.result)
            formData.value.images.push(file)
        }
        reader.readAsDataURL(file)
    })
}

const removeImage = (index) => {
    previewImages.value.splice(index, 1)
    formData.value.images.splice(index, 1)
}

const handleSubmit = () => {
    $emit('submit', formData.value)
}

defineEmits(['close', 'submit'])
</script>

<style scoped>
.popup-overlay {
    z-index: 1000;
}

.popup-content {
    max-height: 90vh;
    overflow-y: auto;
}
</style>