<template>
    
    <router-view/>
        
</template>

<script lang="">
import Vue from "vue";
import informations from "@/features/home/monCompte/informations/main.vue"
import { mapGetters } from "vuex";
import { getUser } from "../store/getters";
export default Vue.extend({
    name: 'MonCompte',
    data(){
        return{
        }
    },

    component: {
        informations
    },

    computed: {
    ...mapGetters("home", ["getUser"]),
    }

})
</script>