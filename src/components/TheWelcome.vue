<template>
  <div
    @contextmenu.prevent="openCustomMenu"
    @click="closeCustomMenu"
    class="relative w-full h-full"
  >
    <div
      v-if="step == 1"
      class="pre-power w-full h-full fixed inset-0 bg-black flex items-center justify-center flex-col pb-20"
    >
      <div class="mb-20">
        <img src="../assets/images/windows.svg" alt="windows" width="130px" />
      </div>

      <div class="loading">
        <div class="load">
          <div class="dot dot1"></div>
        </div>
        <div class="load">
          <div class="dot dot2"></div>
        </div>
        <div class="load">
          <div class="dot dot3"></div>
        </div>
        <div class="load">
          <div class="dot dot4"></div>
        </div>
        <div class="load">
          <div class="dot dot5"></div>
        </div>
        <div class="load">
          <div class="dot dot6"></div>
        </div>
        <div class="load">
          <div class="dot dot7"></div>
        </div>
      </div>
    </div>

    <div
      v-if="step == 9"
      class="fond-lock w-full h-full fixed inset-0 bg-black flex items-center justify-center flex-col pb-20"
    ></div>

    <div v-if="step == 2" class="fond w-full h-full bg-slate-400 fixed inset-0">
      <div class="relative">
        <TheTacheBarre></TheTacheBarre>
      </div>
    </div>

    <!-- Custom menu -->
    <div class="w-full h-full">
      <!-- Zone principale où le clic droit est activé -->
      <div class="p-5">
        Faites un clic droit n'importe où pour afficher le menu contextuel
        personnalisé.
      </div>

      <!-- Menu contextuel personnalisé -->

      display: block; width: 200px; box-shadow: 0 5px 15px #1111118c; position:
      fixed; background-color: #111;

      <div
        v-if="showCustomMenu"
        :style="{ top: customMenuY + 'px', left: customMenuX + 'px' }"
        class="custom-menu-contextuel flex items-start justify-start flex-col flex-grow w-[290px] fixed backdrop-blur-xl border border-bordure/15 rounded-md overflow-hidden"
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
import TheTacheBarre from './TheTacheBarre.vue'

export default {
  components: { TheTacheBarre },

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
.custom-menu {
}
.custom-menu button {
  width: 100%;
  text-align: left;
  background-color: #111;
  color: #e7e7e7;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}
.custom-menu button:hover {
  background-color: #1d73cf;
}
</style>