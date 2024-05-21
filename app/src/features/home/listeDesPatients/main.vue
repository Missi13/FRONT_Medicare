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
                        <th scope="col">E-mail</th>
                        <th scope="col">Sexe</th>
                        <th scope="col">Date_De_Création</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="patient in getAllPatients" :key="patient.id">
                        <th scope="row">{{patient.id}}</th>
                        <td>{{ patient.lastName }}</td>
                        <td>{{ patient.firstName }}</td>
                        <td>{{ patient.dateOfBirth }}</td>
                        <td>{{ patient.email }}</td>
                        <td>{{ patient.gender }}</td>
                        <td>{{ patient.createdDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        

    </div>
</template>

<script >
// import axios from "axios";
import Vue from "vue";
import store from "@/store";
import  { mapGetters } from 'vuex';
export default Vue.extend({
    name: 'ListeDesPatients',
    data(){
        return{
        }
    },

    computed: {
    ...mapGetters("listeDesPatients", ["getAllPatients"]),
    },


    mounted(){
        store.dispatch("listeDesPatients/getAllPatients")
    }

})
</script>

<style scoped>

    .table{
        text-align: left;
    }

</style>
