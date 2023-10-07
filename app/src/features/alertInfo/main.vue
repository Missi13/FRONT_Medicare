<template>
  
  <div class="text-center alerte alert-dismissible fade show" :class="getAlertColor" role="alert" v-show="getIsAlertShow">
    <strong>{{ getAlertMessage }}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click.prevent="resetNotification()"></button>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "AlertInfo",

  methods: {
    resetNotification() {
      store.dispatch("alertInfo/resetAll");
    },
  },
  computed: {
    ...mapGetters("alertInfo", [
      "getAlertMessage",
      "getAlertColor",
      "getIsAlertShow",
    ]),
  },
  watch: {
    getIsAlertShow: {
      immediate: false,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          
          setTimeout(this.resetNotification, 10000);
        }
      },
    },
  },
});
</script>

<style scoped>
.alerte {
  position: fixed;
  bottom: 20px;
  width: 80vw;
  padding: 15px;
  left: 9%;
  font-size: calc(6px + 0.5rem);
  border-radius: 15px;
  z-index: 15;
}
</style>