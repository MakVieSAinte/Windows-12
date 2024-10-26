<template>
  <div
    class="w-[595px] h-[600px] flex flex-col justify-between rounded-[5px] border border-bordure/10 backdrop-blur-xl pt-8 bg-fond overflow-hidden"
    style="z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999px !important"
  >
    <div>
      <!-- Top -->
      <div class="top w-full px-4">
        <div
          class="group search h-[39px] bg-primary border-t-slate-500/40 border-x-slate-500/40 rounded-[4px] border-[0.44px] border-b-0 overflow-hidden flex items-center justify-between flex-col"
        >
          <input
            type="text"
            placeholder="Rechercher des applications, des paramètres et des documents"
            class="bg-transparent w-full m-0 pt-2 px-4 text-sm focus:outline-none focus-within:outline-none outline-none border-none text-secondary font-normal"
          />
          <div
            class="w-full h-[2px] bg-accent group-focus-within:bg-accent-secondary"
          ></div>
        </div>
      </div>

      <!-- Applis -->
      <div class="list-applis pt-8 px-4">
        <div class="top-list flex items-center justify-between px-3">
          <span class="text-secondary text-sm font-medium capitalize"
            >épinglé</span
          >

          <div
            class="w-[70px] flex items-center justify-between bg-bordure/20 hover:bg-bordure/30 px-3 py-2 rounded-[4px] text-left text-[14px] leading-none cursor-pointer"
          >
            <span>Tous</span>
            <img src="../assets/images/ChevronRightMed.png" alt="" />
          </div>
        </div>

        <!-- items -->
        <div class="items grid grid-cols-6 grid-flow-row gap-1 mt-6">
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img src="../assets/images/word.png" alt="word icon" width="30px" />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Word</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/powerpoint.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >PowerPoint</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/edge-icone.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Edge</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/one-note.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >OneNote</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img src="../assets/images/mail.png" alt="word icon" width="30px" />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Mail</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/to-do.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >To Do</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/store-icone.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Microsoft Store</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/photo.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Photos</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/telephone.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Téléphone</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/capture.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Outil Capture d'écran</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/block-note.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Bloc-notes</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/x-box.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Xbox</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/twitter.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Twitter</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/parametre-icone.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Paramètres</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img src="../assets/images/news.png" alt="word icon" width="30px" />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >News</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/spotifly.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Spotifly</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/calculatrice.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Calculatrice</span
            >
          </div>
          <div
            class="item h-[82px] flex items-center justify-start flex-col hover:bg-bordure/20 px-4 pt-2 pb-0 rounded-[5px] mb-1"
          >
            <img
              src="../assets/images/paint.png"
              alt="word icon"
              width="30px"
            />
            <span
              class="text-[10.9px] text-center text-wrap mt-1 truncate w-full text-sm m-0"
              >Paint</span
            >
          </div>
        </div>
      </div>

      <!-- Recommandation -->
      <div class="second-list px-4">
        <div class="flex items-center justify-between px-4 mt-2">
          <span class="text-secondary text-sm font-medium capitalize"
            >Nos recommandations</span
          >
        </div>

        <span class="text-[11px] text-secondary/60 px-4 mt-4"
          >Plus vous utilisez votre appareil, plus nous afficherons vos
          nouvelles applications ici.</span
        >
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <div
        class="footer w-full h-[60px] flex items-center justify-between bg-blue-950/80 backdrop-blur-2xl px-8"
      >
        <div
          class="flex items-center justify-center gap-2 hover:bg-bordure/20 rounded-[5px] px-3 py-1"
        >
          <span
            class="w-[32px] h-[32px] bg-orange-700/30 rounded-full block overflow-hidden"
          >
            <img
              src="../assets/images/profil.jpg"
              alt="windows"
              width="100%"
              height="100%"
            />
          </span>
          <span class="text-[11px] text-secondary leading-none"
            >MakVieSAinte</span
          >
        </div>

        <div
          class="item w-[34px] h-[34px] flex items-center justify-center hover:bg-[#ffffff1a] p-[8px] rounded-[4px]"
        >
          <img src="../assets/images/power.svg" alt="windows" width="14px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>