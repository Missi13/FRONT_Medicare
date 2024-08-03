<template>
    
    <router-view/>
        
</template>

<script lang="">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
    name: 'MonCompte',
    data(){
        return{
        }
    },

    computed: {
    ...mapGetters("home", ["getUser"]),
    }

})
</script>