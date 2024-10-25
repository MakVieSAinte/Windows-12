<template>
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
</template>

<script lang="ts">
export default {

  data() {
    return {
      showCustomMenu: false,
      customMenuX: 0,
      customMenuY: 0,
    }
  },

  methods: {
    openCustomMenu(event: MouseEvent) {
      this.customMenuX = event.clientX
      this.customMenuY = event.clientY
      this.showCustomMenu = true
    },
    closeCustomMenu() {
      this.showCustomMenu = false
    },
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