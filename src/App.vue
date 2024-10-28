<script lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { inject } from '@vercel/analytics';

export default {
  component: { RouterView },

  setup() {
    const isSmallScreen = ref(window.innerWidth < 1000)

    const checkScreenSize = () => {
      isSmallScreen.value = window.innerWidth < 1000
    }

    onMounted(() => {
      window.addEventListener('resize', checkScreenSize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

    return {
      isSmallScreen,
    }
  },
}
</script>

<template>
  <div>
    <div v-if="isSmallScreen" class="alert-message">
      <div
        class="pre-power w-full h-full fixed inset-0 bg-black flex items-center justify-center flex-col pb-20"
      >
        <div class="mb-5">
          <img src="./assets/images/windows.svg" alt="windows" width="130px" />
        </div>
        <p class="text-xl text-slate-200">Windows 11</p>
        <p class="text-md mt-10 text-slate-200 px-8">
          Fonctionne uniquement sur un ordinateur portable ou un grand écran.
        </p>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style>
.alert-message {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 88888888888888888888888888888888888888 !important;
  background-color: #222;
  color: #333;
  padding: 10px;
  text-align: center;
}
</style>