<template>
  <div
    @contextmenu.prevent="openCustomMenu"
    @click="closeCustomMenu"
    class="relative w-full h-full bg-black will-change-auto"
  >
    <!-- Page Load -->

    <div v-if="step == 1" style="z-index: 999999999999999999999999 !important">
      <TheLoad></TheLoad>
    </div>

    <!-- Page Auth -->

    <!-- <div v-if="step == 2">
      <TheAuth></TheAuth>
    </div> -->

    <!-- Burreau Windows -->

    <div v-if="step == 2" style="z-index: 9999999999999999999 !important">
      <TheBurreau></TheBurreau>
    </div>

    <!-- Menu contextuel -->

    <div class="w-full h-full" style="z-index: 99999999999999999999 !important">
      <div
        v-if="showCustomMenu"
        :style="{ top: customMenuY + 'px', left: customMenuX + 'px' }"
        class="custom-menu-contextuel flex items-start justify-start flex-col flex-grow w-[290px] fixed backdrop-blur-3xl border border-bordure/15 rounded-md overflow-hidden"
      >
        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a]"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/View 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Affichage
          </div>
          <span>
            <img src="../assets/images/ChevronRightMed.png" alt="" />
          </span>
        </div>

        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a] border-b border-secondary/10"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/windows.sortbycolumn 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Trier par
          </div>
          <span>
            <img src="../assets/images/ChevronRightMed.png" alt="" />
          </span>
        </div>

        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a]"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/windows.newitem 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Nouveau
          </div>
          <span>
            <img src="../assets/images/ChevronRightMed.png" alt="" />
          </span>
        </div>

        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a] border-b border-secondary/10"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/windows.properties 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Paramètres
          </div>
          <span>
            <!-- <img src="../assets/images/ChevronRightMed.png" alt="" /> -->
          </span>
        </div>

        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a] border-b border-secondary/10"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/Windows Terminal 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Ouvrir dans le Terminal
          </div>
          <span>
            <!-- <img src="../assets/images/ChevronRightMed.png" alt="" /> -->
          </span>
        </div>

        <div
          class="w-full flex items-center justify-between text-sm text-white text-left py-3 px-5 hover:bg-[#ffffff1a]"
        >
          <div class="flex items-center justify-start gap-1 w-max">
            <img
              src="../assets/images/expandtoclassic 1.png"
              alt=""
              width="16px"
              height="16px"
            />
            <span class="text-white"></span>Afficher d'autres d'options
          </div>
          <span>
            <!-- <img src="../assets/images/ChevronRightMed.png" alt="" /> -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import TheAuth from './TheAuth.vue'
import TheBurreau from './TheBurreau.vue'
import TheLoad from './TheLoad.vue'
import TheTacheBarre from './TheTacheBarre.vue'

export default {
  components: { TheTacheBarre, TheLoad, TheBurreau },

  data() {
    return {
      step: 1,
      showCustomMenu: false,
      customMenuX: 0,
      customMenuY: 0,
    }
  },

  methods: {
    stepper() {
      setTimeout(() => {
        this.step = 2
      }, 3000)
    },
    openCustomMenu(event: MouseEvent) {
      this.customMenuX = event.clientX
      this.customMenuY = event.clientY
      this.showCustomMenu = true
    },
    closeCustomMenu() {
      this.showCustomMenu = false
    },
  },

  mounted() {
    this.stepper()
  },
}
</script>

<style>
</style>