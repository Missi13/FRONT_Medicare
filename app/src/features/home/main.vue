<template>
    <div class="container-fluid flex flex-column" style="height: 100vh;">
        
            <!-- header -->
            <div class="row header" style="height: 50px;">
                

                <nav class="site-header py-1">
                    <div class="container d-flex flex-column flex-md-row justify-content-between">
                        <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
                    </div>
                </nav>
            </div>

            <!-- body -->
            <div class="row body" style="height: calc(100% - 50px);">

                <!-- barre de navigation (sidebar) -->
                <div class="navigation col-2">
                    <navbar/>
                </div>

                <!-- affichage -->
                <div class="affichage col-10">
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

    .navigation{
        padding: 0px;
        border-radius: 0 15px 15px 0;
    }

    .affichage{
        background: #E1E1E1;
        display: flex;
        text-align: center;
    }

    .site-header {
        background-color: rgba(0, 0, 0, .85);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }
    .site-header a {
        color: #999;
        transition: ease-in-out color .15s;
        text-decoration: none;
    }
    .site-header a:hover {
        color: #fff;
        text-decoration: none;
    }

</style>
