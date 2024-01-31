<template>
    <div class="container-fluid">

        <!-- header -->
        <div class="header row">
            <div class="colheader col text-center">

                <div class="bande row">
                    <div class="col-9 bleu"></div>
                    <div class="col-3 vert"></div>
                </div>

                <div class="col">
                    <strong>{{ user.firstName }}</strong>
                    <strong>{{  }} </strong>
                    <strong>{{ user.lastName }}</strong>
                </div>
                
                
            </div>
        </div>

        <!-- body -->
        <div class="body row">

            <!-- barre de navigation -->
            <div class="navigation col-3">
                <navbar/>
            </div>

            <!-- affichage -->
            <div class="affichage col-9">
                <router-view/>
            </div>
        </div>









         <!-- navbar -->
        <!-- <header>
            <navbar/>
        </header> -->
        

    </div>
</template>

<script lang="ts">
// import axios from "axios";
import Vue from "vue";
import store from "@/store";
import { User } from "@/models/Users";
import navbar from "@/components/navbar-components/app-navbar.vue"
export default Vue.extend({
    name: 'MonAcceuil',
    data(){
        return{
            user: User
        }
    },

    components:{
        navbar
    },

    methods:{
        
    },

    mounted(){
        store.dispatch("home/getUser")
        .then(response => this.user = response);
    }

})
</script>

<style scoped>

    .presentation{

    }

    .header{
        background: #eaf8bf;
        height: 10vh;
    }

    .bande{
        
        width: 100%;
        height: 10px;
        top: 0px;
    }

    .bleu{
        background: #335c67;
    }

    .vert{
        background: #eaf8bf;
    }

    .navigation{
        height: 90vh;
    }

    .affichage{
        background: #335c67;
        height: 90vh;
    }

</style>
