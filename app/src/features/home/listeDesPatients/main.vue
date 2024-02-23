<template>
    <div class="container-fluid">

        <div class="row">
            <strong>Ajouter des filtres ici ...</strong>
        </div>

        <div class="row pt-2">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID_Patient</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Date_De_Naissance</th>
                        <th scope="col">Âge</th>
                        <th scope="col">Sexe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">000001</th>
                        <td>Adel</td>
                        <td>Micipsa</td>
                        <td>16-08-1996</td>
                        <td>27</td>
                        <td>Homme</td>
                    </tr>

                    <tr>
                        <th scope="row">000002</th>
                        <td>Ketam</td>
                        <td>Anis</td>
                        <td>19-11-1996</td>
                        <td>27</td>
                        <td>Homme</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">000003</th>
                        <td>Manadi</td>
                        <td>Wadoud</td>
                        <td>21-05-1997</td>
                        <td>26</td>
                        <td>Femme</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        

    </div>
</template>

<script lang="ts">
// import axios from "axios";
import Vue from "vue";
export default Vue.extend({
    name: 'ListeDesPatients',
    data(){
        return{

        }
    }

})
</script>

<style scoped>

</style>
