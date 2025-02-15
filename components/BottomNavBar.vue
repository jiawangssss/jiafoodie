<template>
    <div class="bottom-nav fixed bottom-0 left-0 right-0 bg-[#cac3bb] border-t">
        <div class="flex justify-around items-center py-4 px-2">
            <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
                class="nav-item flex flex-col items-center bg-white/20 rounded-lg px-4 py-3 min-w-[90px]"
                :class="{ 'active': currentPath === item.path }">
                <i :class="`pi ${item.icon} mb-2 text-2xl`"></i>
                <span class="text-base font-medium">{{ item.label }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)

const navItems = [
    {
        label: '附近餐廳',
        path: '/nearby-restaurants',
        icon: 'pi-map-marker'
    },
    {
        label: '美食專欄',
        path: '/food-articles',
        icon: 'pi-book'
    },
    {
        label: '最近儲存',
        path: '/saved-items',
        icon: 'pi-bookmark'
    },
    {
        label: '我的帳號',
        path: '/my-account',
        icon: 'pi-user'
    }
]
</script>

<style scoped>
.bottom-nav {
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.nav-item {
    color: #6b5152;
    text-decoration: none;
    transition: all 0.3s ease;
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.nav-item.active {
    color: #6b5152;
    background-color: rgba(255, 255, 255, 0.4);
    font-weight: 600;
    transform: translateY(-2px);
}

.nav-item i {
    transition: transform 0.2s ease;
}

.nav-item:hover i,
.nav-item.active i {
    transform: scale(1.1);
}
</style>