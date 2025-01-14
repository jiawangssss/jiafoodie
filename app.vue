<template>
  <div>
    <NuxtRouteAnnouncer />
    <RouterView />
  </div>
  <div>
    <NuxtLink to="/food-articles">美食專欄</NuxtLink>
    <NuxtLink to="/my-account">我的帳戶</NuxtLink>
    <NuxtLink to="/nearby-restaurants">附近餐廳</NuxtLink>
    <NuxtLink to="/saved-items">最近儲存</NuxtLink>

  </div>
</template>
