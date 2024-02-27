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
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="patient in patients" :key="patient.id">
                        <th scope="row">{{patient.id}}</th>
                        <td>{{ patient.lastName }}</td>
                        <td>{{ patient.firstName }}</td>
                        <td>{{ patient.dateOfBirth }}</td>
                        <td>{{ patient.email }}</td>
                        <td>{{ patient.gender }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        

    </div>
</template>

<script lang="ts">
// import axios from "axios";
import Vue from "vue";
import store from "@/store";
import { Patient } from "@/models/Patients";
export default Vue.extend({
    name: 'ListeDesPatients',
    data(){
        return{
            patients: [Patient]
        }
    },

    mounted(){
        store.dispatch("home/getAllPatients")
        .then(response => this.patients = response);
    }

})
</script>

<style scoped>

    .table{
        text-align: left;
    }

</style>
