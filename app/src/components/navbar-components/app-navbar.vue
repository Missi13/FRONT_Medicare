<template>
    <nav class="navbar-light text-center">
        <ul class="row navbar-nav">
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" :to="{name:'monCompte'}">
                    <div class="titreItem">
                        <img class="iconMonCompte" src="@/assets/MON_COMPTE_ACTIVE.svg" v-if="$route.name == 'monCompte'">
                        <img class="iconMonCompte" src="@/assets/MON_COMPTE_DESACTIVE.svg" v-else>
                        Mon compte
                    </div>
                </router-link>                
            </li>

            <li class="nav-item">
                <router-link active-class="active" class="nav-link" :to="{name:'listeDesPatients'}">
                    <div class="titreItem">
                        <img class="iconMonCompte" src="@/assets/CONNEXION.svg" v-if="$route.name == 'listeDesPatients'">
                        <img class="iconMonCompte" src="@/assets/CONNEXION.svg" v-else>
                        Liste des patients
                    </div>
                </router-link>                
            </li>




            <li>Consultation</li>
            <li>Ordonnance</li>
            <li>Exploration</li>
            <li>Certificats</li>
            <li>Pièces jointes</li>
            <li>Protocoles</li>
            <li>Historique</li>
            <li>Réglement</li>
            <li>Rendez-vous</li>
            <li>Paramètres</li>
            <li>Statistiques</li>
            <li>Manuel d'utilisation</li>
        </ul>
        
                <!-- Mon compte -->
                <!-- Liste des patients -->
                <!-- Consultation -->
                <!-- Ordonnance -->
                <!-- Exploration -->
                <!-- Certificats -->
                <!-- Pièces jointes -->
                <!-- Protocoles -->
                <!-- Historique -->
                <!-- Réglement -->
                <!-- Rendez-vous -->
                <!-- Paramètres -->
                <!-- Statistiques -->
                <!-- Manuel d'utilisation -->
                
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavBar',
    data() {
        return {
            selectedItem: 0
        }
    },
}
</script>

<style scoped>
    .iconMonCompte, .iconCV, .iconLangue{
        height: 20px;
        float: left;
        margin-left: 5px;
        margin-top: 3px;
    }

</style>