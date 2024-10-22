<template>
  <div
    class="w-[1000px] h-[590px] rounded-[5px] bg-white/95 backdrop-blur-2xl overflow-hidden p-0 m-0"
  >

    <div class="top-explorer flex justify-between items-center bg-slate-300/30 w-full h-[42px] p-0 m-0">

        <div class="flex items-center justify-start">
            <div class="icon-window flex items-center justify-between gap-1 h-[38px] w-[208px] pl-3 pr-2 ml-4 mt-4 bg-white/80 rounded-[7px]">
                <div class="flex items-center justify-start gap-1">
                    <img src="../assets/images/File/documents.png" alt="">
                    <span class="text-[12px] text-gray-900 font-medium">Documents</span>
                </div>
                <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded">
                    <img src="../assets/images/File/Close.png" alt="close" width="8px">
                </div>
            </div>
            
            <div class="flex items-center justify-end hover:bg-slate-100 mt-3 mb-1 ml-1 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/plus-head.png" alt="close" width="11px">
            </div>
        </div>  

        <!-- Section close et autrees -->
        <div class="flex gap-0">
            <div class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-slate-300/30">
                <img src="../assets/images/File/Minimize.png" alt="">
            </div>
            <div class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-slate-300/30">
                <img src="../assets/images/File/Maximize.png" alt="">
            </div>
            <div class="icon-window flex items-center justify-center h-[42px] w-max px-6 hover:bg-red-700">
                <img src="../assets/images/File/Close.png" alt="">
            </div>
        </div>
    </div>

    <!-- Top One -->
    <div class="top-one flex items-center justify-start gap-2 bg-white/80 w-full h-[48px] px-3 py-1">
        <div class="flex items-center gap-1">
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/fleche-droit.png" alt="close" width="12px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/fleche-droit.png" alt="close" width="12px" class="rotate-180">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/fleche-droit.png" alt="close" width="12px" class="rotate-90">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/actualise.png" alt="close" width="12px">
            </div>
        </div>

        <!--  -->
        <div class="flex items-center gap-1 bg-slate-100 rounded-[5px]">
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/ordi-icon-head.png" alt="close" width="12px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 rounded-[4px]">
            <img src="../assets/images/File/ChevronRight.png" alt="close" width="5px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 px-3 rounded-[4px]">
            <span class="text-[10px] text-gray-900">Ce PC</span>
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 rounded-[4px]">
            <img src="../assets/images/File/ChevronRight.png" alt="close" width="5px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 px-3 rounded-[4px]">
            <span class="text-[10px] text-gray-900">Documents</span>
            </div>

            <div class="flex items-center justify-end hover:bg-slate-100 py-2 rounded-[4px]">
            <img src="../assets/images/File/ChevronRight.png" alt="close" width="5px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 px-3 rounded-[4px]">
            <span class="text-[10px] text-gray-900">MakVieSAinte Projet</span>
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 rounded-[4px]">
            <img src="../assets/images/File/ChevronRight.png" alt="close" width="5px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 px-3 rounded-[4px]">
            <span class="text-[10px] text-gray-900">Open Souce Code</span>
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 rounded-[4px]">
            <img src="../assets/images/File/ChevronRight.png" alt="close" width="5px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 py-2 px-3 rounded-[4px]">
            <span class="text-[10px] text-gray-900">Docs univer...</span>
            </div>
        </div>

        <!--  -->
        <div class="flex items-center flex-grow gap-1 my-2 bg-slate-100 rounded-[5px]">
            <div class="flex items-center justify-end hover:bg-slate-100 pl-4 pr-2 py-2 rounded-[4px]">
            <img src="../assets/images/File/search-head.png" alt="close" width="12px">
            </div>

            <div class="flex items-center justify-start flex-grow hover:bg-slate-100 py-2 rounded-[4px]">

            <input type="text" placeholder="Rechercher dans : Docs université" class="w-full bg-transparent focus-within:outline-none outline-none border-none text-[13px] text-gray-900">
            <!-- <span class="text-[10px] text-gray-900">Ce PC</span> -->
            </div>
        </div>
    </div>
    
    <!-- Top Deux -->
    <div class="top-one flex items-center justify-between gap-2 bg-white/80 w-full h-[48px] px-3 py-1">
        <div class="flex items-center gap-0">
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/nouveau-file.png" alt="close" width="15px">
            <span class="text-[10px] text-gray-900 ml-2">Nouveau</span>
            </div>
            
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/couper-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/copy-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/coller-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/renommer-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/partager-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/supprimer-icon.png" alt="close" width="14px">
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/trier-icon.png" alt="close" width="14px">
            <span class="text-[10px] text-gray-900 ml-2">Trier</span>
            </div>
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/afficher.png" alt="close" width="14px">
            <span class="text-[10px] text-gray-900 ml-2">Afficher</span>
            </div>
        </div>



        <!--  -->
        <div class="flex items-center gap-1 my-2 rounded-[5px]">
            <div class="flex items-center justify-end hover:bg-slate-100 px-3 py-2 rounded-[4px]">
            <img src="../assets/images/File/details-icon.png" alt="close" width="54px">
            <!-- <span class="text-[10px] text-gray-900 ml-2">Détails</span> -->
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