<template>
  <div id="app">
    <DevTools/>
    <AppAlertInfo/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import DevTools from "@/components/global-components/app-devtool.vue"
  import AppAlertInfo from "@/features/alertInfo/main.vue"

  export default Vue.extend({

      components: {
          DevTools,
          AppAlertInfo
      }
  })
</script>

<style>
  @font-face {
    font-family: "Open_Sans";
    src: local("Open_Sans"), url("@/fonts/OpenSans/OpenSans-Regular.ttf");
  }

  #app{
    font-family: "Open_Sans";
  }

</style>