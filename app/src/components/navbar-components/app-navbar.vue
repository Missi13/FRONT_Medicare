<template>

    <aside class="d-flex flex-nowrap" style="min-height: 100%;">

        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 100%;">
            <div class="d-flex text-center mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                <span class="fs-4">Sidebar</span>
            </div>

            <hr>

            <ul class="nav nav-pills flex-column mb-auto">

                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'listeDesPatients'}">
                        <img class="icons rounded-circle me-2" src="@/assets/group_active.svg" v-if="$route.name == 'listeDesPatients'">
                        <img class="icons rounded-circle me-2" src="@/assets/group_desactive.svg" v-else>
                        <span>Liste des patients</span>  
                    </router-link>                
                </li>

                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'consultation'}">
                        <img class="icons rounded-circle me-2" src="@/assets/favorite_active.svg" v-if="$route.name == 'consultation'">
                        <img class="icons rounded-circle me-2" src="@/assets/favorite_desactive.svg" alt="" v-else>
                        <span>Consultation</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'ordonnance'}">
                        <img class="icons rounded-circle me-2" src="@/assets/assignment_active.svg" v-if="$route.name == 'ordonnance'">
                        <img class="icons rounded-circle me-2" src="@/assets/assignment_desactive.svg" alt="" v-else>
                        <span>Ordonnance</span>
                    </router-link>
                </li>
                    
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'certificats'}">
                        <img class="icons rounded-circle me-2" src="@/assets/email_active.svg" v-if="$route.name == 'certificats'">
                        <img class="icons rounded-circle me-2" src="@/assets/email_desactive.svg" alt="" v-else>
                        <span>Certificats</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'historique'}">
                        <img class="icons rounded-circle me-2" src="@/assets/schedule_active.svg" v-if="$route.name == 'historique'">
                        <img class="icons rounded-circle me-2" src="@/assets/schedule_desactive.svg" alt="" v-else>
                        <span>Historique</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link active-class="active" class="nav-link text-white" :to="{name:'rendezVous'}">
                        <img class="icons rounded-circle me-2" src="@/assets/calendar_active.svg" v-if="$route.name == 'rendezVous'">
                        <img class="icons rounded-circle me-2" src="@/assets/calendar_desactive.svg" alt="" v-else>
                        <span>Rendez-vous</span>
                    </router-link>
                </li>

                
            </ul>

            <hr>

            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>{{ getUser.firstName }} {{ getUser.lastName }}</strong>
                </a>
            
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                        <router-link class="dropdown-item" :to="{name:'monCompte'}">
                            <img class="icons-drop rounded-circle me-2" src="@/assets/account_circle.svg">
                            <span>Mon compte</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-item" :to="{name:'configuration'}">
                            <img class="icons-drop rounded-circle me-2" src="@/assets/settings.svg">
                            <span>Configuration</span>
                        </router-link>
                    </li>
                    
                    <li><hr class="dropdown-divider"></li>
                    <li @click.prevent=logout()>
                        <div class="dropdown-item">
                            <img class="icons-drop rounded-circle me-2" src="@/assets/logout.svg">
                            <span>Déconnexion</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </aside>

    
</template>

<script lang="ts">
import Vue from "vue";
import  { mapGetters } from 'vuex';
import store from "@/store";
export default Vue.extend({
    name: 'NavBar',
    data() {
        return {
        }
    },

    methods:{
        logout(){
            store.dispatch("home/deleteUser")
            store.dispatch("login/logoutUser")
        }
    },

    computed: {
    ...mapGetters("home", ["getUser"]),
    }
})

</script>

<style scoped>

    .nav-link.active{
        background-color: #E1E1E1 !important;
        color: #000 !important
    }



</style>






/* button{
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.nav-item{
}

.nav-link{
}

.navigation{
    background-color: #335c67;
}

.iconMonCompte{
    height: auto;
    margin-left: 5px;
    margin-right: 5px;
}

.titreItem{
    display: flex;
    text-decoration: none;
    font-size: 20px;
    transition: 0.2s;
}

.titreItem:hover{
    color: #eaf8bf;
}

p{
    margin: 0px;
}

.button{
    
} */








<!-- <aside class="navigation navbar-light">
        <ul class="navbar-nav">
            <li class="button nav-item">
                <router-link active-class="active" class="nav-link" :to="{name:'monCompte'}">
                    <button class="titreItem">
                        <img class="iconMonCompte" src="@/assets/account_circle_active.svg" v-if="$route.name == 'monCompte'">
                        <img class="iconMonCompte" src="@/assets/account_circle_desactive.svg" v-else>
                        
                        <p>Mon compte</p>
                    </button>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link active-class="active" class="nav-link" :to="{name:'listeDesPatients'}">
                    <button class="titreItem">
                        <img class="iconMonCompte" src="@/assets/group_active.svg" v-if="$route.name == 'listeDesPatients'">
                        <img class="iconMonCompte" src="@/assets/group_desactive.svg" v-else>
                        
                        <p>Liste des patients</p>
                    </button>
                </router-link>                
            </li>
        </ul>
        
                Mon compte
                Liste des patients
                Consultation
                Ordonnance
                Exploration
                Certificats
                Pièces jointes
                Protocoles
                Historique
                Réglement
                Rendez-vous
                Paramètres
                Statistiques
                Manuel d'utilisation
    </aside> -->