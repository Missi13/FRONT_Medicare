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
                            <div class="champs text-gray">
                                <input disabled class="text-gray" v-model="getUser.lastName">
                                <label>Nom</label>

                            </div>
                        </div>

                        <div class="col-6">
                            <div class="champs">
                                <input disabled class="text-gray" v-model="getUser.firstName">
                                <label>Prénom</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input disabled class="text-gray" v-model="getUser.phoneNumber">
                                <label>Numéro de téléphone</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input disabled class="text-gray" v-model="getUser.dateOfBirth">
                                <label class="text-center">Date de naissance :</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input disabled class="text-gray" v-model="getUser.login">
                                <label>Login</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col"> 
                            <div class="champs">
                                <input disabled class="text-gray" v-model="getUser.email">
                                <label>E-mail</label>
                            </div>
                        </div>
                    </div>

                    <label class="genre">Genre :</label>

                    <div class="row text-center justify-content-center pt-2">
                        <div class="genres m-auto">
                            <input type="radio" class="btn-check" name="inlineRadioOptions" id="homme" value="HOMME" required v-model="getUser.gender">
                            <label class="homme labelGenre form-control" for="homme">Homme</label>
                        
                            <input type="radio" class="btn-check" name="inlineRadioOptions" id="femme" value="FEMME" required v-model="getUser.gender">
                            <label class="femme labelGenre form-control" for="femme">Femme </label>
                        </div>
                    </div>

                </div>
            </form>
        </div>

        <div class="col">
            <router-link active-class="active" class="bouttonModifier btn" :to="{name:'update'}">
                <span>Modifier</span>
            </router-link>
        </div>
    </div>

</template>

<script lang="">
import Vue from "vue";
import store from "@/store";
import { mapGetters } from "vuex";
export default Vue.extend({
    name: 'InformationsMonCompte',
    data(){
        return{
        }
    },

    computed: {
    ...mapGetters("home", ["getUser"]),
    },

    mounted(){
        store.dispatch("home/getUser");
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
    
    .champs{
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
        top: -21px;
        font-size: 15px;
        color: #335c67;
        position: absolute;
        left: 0;
        padding: 10px 0;
        /*outline: none;*/
    }

    

    .bouttonModifier{
        width: 200px;
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonModifier:hover{
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

    .dateNaissance, .genre{
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