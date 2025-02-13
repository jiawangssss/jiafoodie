<template>
    <div class="star-rating flex items-center gap-1">
        <span class="text-base mr-2">評分：</span>
        <div class="stars flex">
            <button v-for="star in 5" :key="star" @click="updateRating(star)" @mouseenter="hoverRating = star"
                @mouseleave="hoverRating = 0" class="star-btn p-1">
                <span class="text-2xl" :class="{
                    'text-yellow-400': (hoverRating || modelValue) >= star,
                    'text-gray-300': (hoverRating || modelValue) < star
                }">★</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['update:modelValue'])

const hoverRating = ref(0)

const updateRating = (rating) => {
    emit('update:modelValue', rating)
}
</script>

<style scoped>
.star-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.2s ease;
}

.star-btn:hover {
    transform: scale(1.2);
}
</style>