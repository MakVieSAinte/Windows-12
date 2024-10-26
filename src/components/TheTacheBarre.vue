<template>
    <div class="fixed bottom-0 left-0 right-0 h-[45px] backdrop-blur-xl flex items-center justify-between self-stretch border-t border-[#ffffff09]">

        <!-- Meteo -->
        <div class="flex flex-row-reverse items-center gap-1 px-4">
            <div class="flex items-center justify-center backdrop-blur hover:bg-[#ffffff1a] rounded-[4px] pl-1 pr-3">
                <div class="item p-[5px]">
                    <img src="../assets/images/meteo.png" alt="windows">
                </div>
                <div class="item p-[5px] flex items-start justify-center flex-col">
                <p class="text-[11px] font-semibold leading-none">8 °C</p>
                <p class="text-[11px] font-semibold leading-none pt-[4px]">Partly sunny</p>
                </div>
            </div>
        </div>

        <!-- Applis -->
        <div class="h-[35px] flex justify-center gap-2 px-4 relative">
            <div v-if="openDemarrerMenu" class="absolute left-3 bottom-12">
            <TheMenuDemarreVue></TheMenuDemarreVue>
            </div>
            <div @click="OpenDemarrerMenu()" class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[7px] rounded-[4px]" :class="openDemarrerMenu ? 'bg-[#ffffff1a]' : ''">
                <img src="../assets/images/Windows.png" alt="windows">
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/Search.png" alt="search">
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/Desktop maniger.png" alt="desktop">
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/parametre.png" alt="windows">
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/Chat.png" alt="windows">
            </div>
            <div @click="OpenFileExplorer()" class="item flex items-center justify-center flex-col w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]" :class="openFileExplorer ? 'bg-[#ffffff1a]' : ''">
                <img src="../assets/images/file Explorer.png" alt="windows" class="pb[3px]">
                <!-- <span class="w-[50%] h-[11px] block bg-black rounded-full"></span> -->
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/Microsoft edge.png" alt="windows">
            </div>
            <div class="item w-[34px] h-[34px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/store.png" alt="windows">
            </div>
        </div>

        <!-- Autre -->
        <div class="flex flex-row-reverse items-center gap-1 px-4">
            <div class="flex items-center justify-center backdrop-blur hover:bg-[#ffffff1a] rounded-[4px] px-2 py-0">
                <div class="item p-[5px] flex items-end justify-center flex-col mr-2">
                <p class="text-[11px] font-light leading-none">22:19</p>
                <p class="text-[11px] font-light leading-none pt-[2px]">25/10/2024</p>
                </div>
                <img src="../assets/images/notifications.png" alt="windows" width="16px">
            </div>

            <div class="flex items-center justify-center backdrop-blur hover:bg-[#ffffff1a] rounded-[4px]">
                <div class="item p-[5px]">
                    <img src="../assets/images/Battery.png" alt="windows">
                </div>
                <div class="item p-[5px]">
                    <img src="../assets/images/Speaker.png" alt="windows">
                </div>
                <div class="item p-[5px]">
                    <!-- <p>wifi</p> -->
                    <img src="./src/assets/images/Wifi.png" alt="wifi">
                </div>
            </div>  

            <div class="item flex items-center justify-center w-[30px] h-[30px] backdrop-blur hover:bg-[#ffffff1a] p-[6px] rounded-[4px]">
                <img src="../assets/images/Overflow.png" alt="windows">
            </div>
        </div>


            <div ref="draggableElement" v-if="openFileExplorer" class="absolute left-[10%] bottom-16">
            <TheFileExplorerVue :isOpen="openFileExplorer" @close="OpenFileExplorer"></TheFileExplorerVue>
            </div>
    </div>
</template>

<script lang="ts">
import TheFileExplorerVue from './TheFileExplorer.vue'
import TheMenuDemarreVue from './TheMenuDemarre.vue'

export default {
      components: { TheMenuDemarreVue, TheFileExplorerVue },

      data() {
        return {
            openDemarrerMenu: false,
            openFileExplorer: false
        }
      },

      methods: {
        OpenDemarrerMenu() {
      this.openDemarrerMenu = !this.openDemarrerMenu
    },
        OpenFileExplorer() {
      this.openFileExplorer = !this.openFileExplorer
    },
    handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Meta' || event.key === 'OS') {
        // Appuyer sur la touche Windows ou Command (Mac)
        this.OpenDemarrerMenu();
      }
    },
    
      },

      mounted() {
    // Ajouter un écouteur d'événement lorsque le composant est monté
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    // Supprimer l'écouteur d'événement lorsque le composant est démonté
    window.removeEventListener('keydown', this.handleKeydown);
  }
}
</script>

<style>

</style>