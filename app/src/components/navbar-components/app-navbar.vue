<template>
    <navigation-drawer floating permanent width="100%" height="100%" class="d-flex align-center navig">
        
        <v-list dense nav width="100%" height="100%" class="d-flex align-between">

            <v-list-item-group v-model="selectedItem" color="#335c67" class="d-flex flex-column list_btn">

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
                
            </v-list-item-group>
        </v-list>
    </navigation-drawer>
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

</style>