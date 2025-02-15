<template>
    <div class="images grid grid-cols-2 gap-2">
        <div v-for="(image, index) in images" :key="index"
            class="image-container aspect-square bg-gray-200 rounded-lg overflow-hidden" :style="containerStyle">
            <img v-if="image" :src="image" :alt="`圖片 ${index + 1}`" class="w-full h-full object-cover" />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                圖片
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        default: () => [null, null]
    },
    size: {
        type: String,
        default: 'small' // 'small', 'medium', 'large'
    }
})

const containerStyle = computed(() => {
    const sizes = {
        small: '240px',    // 原來是 120px
        medium: '300px',   // 原來是 150px
        large: '360px'     // 原來是 180px
    }
    return {
        width: sizes[props.size],
        height: sizes[props.size]
    }
})
</script>

<style scoped>
.image-container {
    transition: transform 0.2s ease;
}

.image-container:hover {
    transform: scale(1.05);
}
</style>