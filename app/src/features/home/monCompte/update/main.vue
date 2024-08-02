<template>
    <div class="container-fluid row align-items-center">
        <div class="col">
            <h2 class="titre">Mon Compte</h2>
            <img class="iconProfil icons-drop rounded-circle me-2" src="@/assets/account_circle.svg">
        </div>

        <div class="monCompte">
            <form class="row justify-content-center">
                <div class="formGauche col-8">                              

                    <div class="row">
                        <div class="col-6">
                            <div class="champs">
                                <input type="text" maxlength="25" class="form-control" required v-model="lastName">
                                <label>Nom</label>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="champs">
                                <input type="text" maxlength="25" required class="form-control" v-model="firstName">
                                <label>Prénom</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input type="text" enable maxlength="25" required class="form-control" v-model="phoneNumber">
                                <label>Numéro de téléphone</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input type="text" maxlength="25" required class="form-control" v-model="dateOfBirth">
                                <label class="text-center">Date de naissance :</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champsDesabled">
                                <input disabled class="text-gray" v-model="getUser.login">
                                <label>Login</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col"> 
                            <div class="champsDesabled">
                                <input disabled class="text-gray" v-model="getUser.email">
                                <label>E-mail</label>
                            </div>
                        </div>
                    </div>

                    <label class="genre">Genre :</label>

                    <div class="row text-center justify-content-center pt-2">
                        <div class="genres m-auto">
                            <input type="radio" class="btn-check" name="inlineRadioOptions" id="homme" value="HOMME" required v-model="gender">
                            <label class="homme labelGenre form-control" for="homme">Homme</label>
                        
                            <input type="radio" class="btn-check" name="inlineRadioOptions" id="femme" value="FEMME" required v-model="gender">
                            <label class="femme labelGenre form-control" for="femme">Femme </label>
                        </div>
                    </div>

                </div>
            </form>
        </div>

        <div class="row justify-content-center">
            <router-link class="bouttonAnnuler btn" :to="{name:'informations'}">
                <span>Annuler</span>
            </router-link>

            <button type="submit" class="bouttonEnregistrer btn" @click.prevent="updateUser()">
                <span>Enregistrer</span>
            </button>


        </div>
    </div>
    
</template>

<script lang="">
import Vue from "vue";
import { mapGetters } from "vuex";
import store from "@/store";
export default Vue.extend({
    name: 'UpdateMonCompte',
    data(){
        return{
            id: null,
            login: null,
            email: null,
            lastName: "",
            firstName: "",
            phoneNumber: "",
            dateOfBirth: "",
            gender: "",

            isChampsValid : true,
            isSubmitValid : true,
            champsVide : false
        }
    },

    computed: {
    ...mapGetters("home", ["getUser"]),
    },

    methods: {
        setValues(){
            this.firstName= this.getUser.firstName,
            this.lastName= this.getUser.lastName,
            this.phoneNumber= this.getUser.phoneNumber,
            this.dateOfBirth= this.getUser.dateOfBirth,
            this.gender= this.getUser.gender
        },

        updateUser(){
            let userParams = {
                id: this.getUser.id,
                login: this.getUser.login,
                email: this.getUser.email,
                lastName: this.lastName,
                firstName: this.firstName,
                phoneNumber: this.phoneNumber,
                dateOfBirth: this.dateOfBirth,
                gender: this.gender
            };

            // "1900-01-01T05:00:00.000Z"

            store.dispatch("register/updateUser", userParams)
        },
    },

    mounted(){
        this.setValues();
    }

})
</script>

<style scoped>
    .iconProfil{
        width: 200px;
    }

    .monCompte{
        height:auto
    }
    
    .champs, .champsDesabled{
        position: relative;
        margin-bottom: 30px;
    }

    .formGauche{
        padding-right: 25px;
    }

    .formDroite{
        padding-left: 25px;
    }

    input, select{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #000;
        letter-spacing: 1px;
        border: none;
        border-bottom: 1.5px solid #335c67;
        outline: none;
        background: transparent;
    }

    .champs label{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: silver;
        pointer-events: none;
        transition: 0.4s;
        /*outline: none;*/
    }

    .champsDesabled label{
        position: absolute;
        font-size: 15px;
        color: #335c67;
        top: -21px;
        left: 0;
        padding: 10px 0;
        pointer-events: none;
        transition: 0.4s;
        /*outline: none;*/
    }

    .champs input:focus ~ label,
    .champs input:valid ~ label{
        top: -21px;
        font-size: 15px;
        color: #335c67;
        /*outline: none;*/
    }

    .bouttonEnregistrer{
        margin-left: 3px;
    }

    .bouttonAnnuler{
        margin-right: 3px;
    }

    .bouttonEnregistrer, .bouttonAnnuler{
        width: 200px;
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonEnregistrer:hover, .bouttonAnnuler:hover{
        color:#000;
        background: #eaf8bf;
    }

    .text-gray{
        color: gray
    }

    .form-control{
        border-radius: 0px;
    }

    .genres{
        display: flex;
        justify-content: space-between;
    }

    .femme, .homme{
        width: 45%;
        font-size: 15px;
        padding: 5px;
        font-weight: bold
    }

    .genre{
        font-weight: 800;
        color: #335c67;
    }

    .champs{
        color: #335c67;
    }


    input:checked + .labelGenre{
        background-color: #335c67;
        color:#fff;
    }

    input + .labelGenre{
        color: Gray;
        border-radius: 10px;
    }

    .btn-check{
        width : auto
    }
</style>
