<template>
  <div
    ref="draggableElement"
    class="draggable-element w-[1000px] h-[600px] rounded-[5px] bg-white backdrop-blur-2xl overflow-hidden p-0 m-0"
  >
    <div
      class="top-explorer flex justify-between items-center bg-slate-300/30 w-full h-[42px] p-0 m-0 border-b border-slate-200"
    >
      <div class="flex items-center justify-start">
        <div
          class="icon-window flex items-center justify-between gap-1 h-[38px] w-[208px] pl-3 pr-2 ml-4 mt-4 bg-white/80 rounded-[7px]"
        >
          <div class="flex items-center justify-start gap-1">
            <img src="../assets/images/File/documents.png" alt="" />
            <span class="text-[12px] text-slate-300 font-medium"
              >Documents</span
            >
          </div>
          <div
            class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded"
          >
            <img
              src="../assets/images/File/Close.png"
              alt="close"
              width="8px"
            />
          </div>
        </div>

        <div
          class="flex items-center justify-end hover:bg-white/5 mt-3 mb-1 ml-1 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/plus-head.png"
            alt="close"
            width="11px"
          />
        </div>
      </div>

      <!-- Section close et autrees -->
      <div class="flex gap-0">
        <div
          class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-slate-300/30"
        >
          <img src="../assets/images/File/Minimize.png" alt="" />
        </div>
        <div
          class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-slate-300/30"
        >
          <img src="../assets/images/File/Maximize.png" alt="" />
        </div>
        <div
          class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-red-700"
        >
          <img src="../assets/images/File/Close.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Top One -->
    <div
      class="top-one flex items-center justify-start gap-2 bg-white/80 w-full h-[48px] px-3 py-1 border-b border-slate-100"
    >
      <div class="flex items-center gap-1">
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/fleche-droit.png"
            alt="close"
            width="12px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/fleche-droit.png"
            alt="close"
            width="12px"
            class="rotate-180"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/fleche-droit.png"
            alt="close"
            width="12px"
            class="rotate-90"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/actualise.png"
            alt="close"
            width="12px"
          />
        </div>
      </div>

      <!--  -->
      <div class="flex items-center gap-1 bg-slate-100 rounded-[5px]">
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ordi-icon-head.png"
            alt="close"
            width="12px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ChevronRight.png"
            alt="close"
            width="5px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 px-3 rounded-[4px]"
        >
          <span class="text-[10px] text-slate-300">Ce PC</span>
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ChevronRight.png"
            alt="close"
            width="5px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 px-3 rounded-[4px]"
        >
          <span class="text-[10px] text-slate-300">Documents</span>
        </div>

        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ChevronRight.png"
            alt="close"
            width="5px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 px-3 rounded-[4px]"
        >
          <span class="text-[10px] text-slate-300">MakVieSAinte Projet</span>
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ChevronRight.png"
            alt="close"
            width="5px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 px-3 rounded-[4px]"
        >
          <span class="text-[10px] text-slate-300">Open Souce Code</span>
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/ChevronRight.png"
            alt="close"
            width="5px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 py-2 px-3 rounded-[4px]"
        >
          <span class="text-[10px] text-slate-300">Docs univer...</span>
        </div>
      </div>

      <!--  -->
      <div
        class="flex items-center flex-grow gap-1 my-2 bg-slate-100 rounded-[5px]"
      >
        <div
          class="flex items-center justify-end hover:bg-white/5 pl-4 pr-2 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/search-head.png"
            alt="close"
            width="12px"
          />
        </div>

        <div
          class="flex items-center justify-start flex-grow hover:bg-white/5 py-2 rounded-[4px]"
        >
          <input
            type="text"
            placeholder="Rechercher dans : Docs université"
            class="w-full bg-transparent focus-within:outline-none outline-none border-none text-[13px] text-slate-300"
          />
          <!-- <span class="text-[10px] text-slate-300">Ce PC</span> -->
        </div>
      </div>
    </div>

    <!-- Top Deux -->
    <div
      class="top-one flex items-center justify-between gap-2 bg-white/80 w-full h-[48px] px-3 py-1 border-b border-slate-200"
    >
      <div class="flex items-center gap-0">
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/nouveau-file.png"
            alt="close"
            width="15px"
          />
          <span class="text-[10px] text-slate-300 ml-2">Nouveau</span>
        </div>

        <span class="separator w-[0.8px] h-5 block bg-slate-200 mx-1"></span>

        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/couper-icon.png"
            alt="close"
            width="14px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/copy-icon.png"
            alt="close"
            width="14px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/coller-icon.png"
            alt="close"
            width="14px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/renommer-icon.png"
            alt="close"
            width="14px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/partager-icon.png"
            alt="close"
            width="14px"
          />
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/supprimer-icon.png"
            alt="close"
            width="14px"
          />
        </div>

        <span class="separator w-[0.8px] h-5 block bg-slate-200 mx-1"></span>

        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/trier-icon.png"
            alt="close"
            width="14px"
          />
          <span class="text-[10px] text-slate-300 ml-2">Trier</span>
        </div>
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/afficher.png"
            alt="close"
            width="14px"
          />
          <span class="text-[10px] text-slate-300 ml-2">Afficher</span>
        </div>
      </div>

      <!--  -->
      <div class="flex items-center gap-1 my-2 rounded-[5px]">
        <div
          class="flex items-center justify-end hover:bg-white/5 px-3 py-2 rounded-[4px]"
        >
          <img
            src="../assets/images/File/details-icon.png"
            alt="close"
            width="54px"
          />
          <!-- <span class="text-[10px] text-slate-300 ml-2">Détails</span> -->
        </div>
      </div>
    </div>

    <!-- Corp Explorer -->
    <div class="w-full h-max flex bg-primary">
      <!-- Side bar -->
      <div
        class="sidebar flex items-center flex-col w-[240px] h-[100vh] bg-primary px-1 border-r border-neutral-800"
      >
        <div
          class="w-full item flex items-center justify-start gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 mt-1 cursor-pointer"
        >
          <img src="../assets/images/File/accueil.png" alt="" />
          <span class="text-[12px] text-slate-300">Accueil</span>
        </div>

        <div
          class="w-full item flex items-center justify-start gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <img src="../assets/images/File/galery.png" alt="" />
          <span class="text-[12px] text-slate-300">Galerie</span>
        </div>

        <div
          class="w-full item flex items-center justify-start gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <img src="../assets/images/File/one-drive.png" alt="" width="16px" />
          <span class="text-[12px] text-slate-300">OneDrive personnal</span>
        </div>

        <span
          class="separator w-[150px] h-[0.3px] block bg-neutral-800 mx-1 my-1"
        ></span>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/bureau.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Bureau</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-white/5 rounded-[4px] py-2 pl-6 my-1 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/ducument.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Documents</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img
              src="../assets/images/File/telecharger.png"
              alt=""
              width="16px"
            />
            <span class="text-[12px] text-slate-300">Téléchargements</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/musique.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Musique</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/photos.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Photos</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/videos.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Vidéos</span>
          </div>
          <img
            src="../assets/images/File/epingle.png"
            alt=""
            width="9px"
            class="mr-2"
          />
        </div>

        <div
          class="w-full item flex items-center justify-between gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img
              src="../assets/images/File/dossier-sidebar.png"
              alt=""
              width="16px"
            />
            <span class="text-[12px] text-slate-300">MakVieSAinte pro...</span>
          </div>
          <!-- <img src="../assets/images/File/epingle.png" alt="" width="9px" class="mr-2"> -->
        </div>

        <span
          class="separator w-[150px] h-[0.3px] block bg-neutral-800 mx-1 my-1"
        ></span>

        <div
          class="w-full item flex items-center justify-end flex-row-reverse gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 px-8 pl-3 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img src="../assets/images/File/ce-pc.png" alt="" width="16px" />
            <span class="text-[12px] text-slate-300">Ce PC</span>
          </div>
          <img
            src="../assets/images/File/fleche-ce-pc.png"
            alt=""
            width="4px"
            class="mr-1"
          />
        </div>

        <div
          class="w-full item flex items-center justify-end flex-row-reverse gap-2 bg-transparent hover:bg-white/5 rounded-[4px] py-2 px-5 pl-6 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <img
              src="../assets/images/File/disque-dur.png"
              alt=""
              width="16px"
            />
            <span class="text-[12px] text-slate-300">MakVieSAinte (c:)</span>
          </div>
          <img
            src="../assets/images/File/fleche-ce-pc.png"
            alt=""
            width="4px"
            class="mr-1"
          />
        </div>
      </div>

      <!-- Contenue dossier -->
      <div class="flex items-start w-full py-3 px-3 gap-4">
        <div
          class="item w-1/4 flex items-center justify-center flex-col hover:bg-white/5 rounded-[3px] py-3"
        >
          <img src="../assets/images/File/dossier.png" alt="" />
          <span class="text-[14px] text-slate-300">Adobe</span>
        </div>
        <div
          class="item w-1/4 flex items-center justify-center flex-col hover:bg-white/5 rounded-[3px] py-3"
        >
          <img src="../assets/images/File/dossier.png" alt="" />
          <span class="text-[14px] text-slate-300">Cours Udemy</span>
        </div>

        <div
          class="item w-1/4 flex items-center justify-center flex-col hover:bg-white/5 rounded-[3px] py-3"
        >
          <img src="../assets/images/File/dossier.png" alt="" />
          <span class="text-[14px] text-slate-300">Projet soutenance BTS</span>
        </div>
        <div
          class="item w-1/4 flex items-center justify-center flex-col hover:bg-white/5 rounded-[3px] py-3"
        >
          <img src="../assets/images/File/word-file.png" alt="" />
          <span class="text-[14px] text-slate-300">cours-english.docx</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import interact from 'interactjs'

export default defineComponent({
  name: 'MonComposant',
  setup() {
    const draggableElement = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      if (draggableElement.value) {
        interact(draggableElement.value).draggable({
          listeners: {
            move(event) {
              const target = event.target as HTMLElement
              // Récupérer les coordonnées actuelles (ou initialisées)
              const x =
                (parseFloat(target.getAttribute('data-x')!) || 0) + event.dx
              const y =
                (parseFloat(target.getAttribute('data-y')!) || 0) + event.dy

              // Appliquer la translation avec CSS
              target.style.transform = `translate(${x}px, ${y}px)`

              // Stocker les nouvelles coordonnées
              target.setAttribute('data-x', x.toString())
              target.setAttribute('data-y', y.toString())
            },
          },
        })
      }
    })

    return {
      draggableElement,
    }
  },
})
</script>

<style>
 
</style>