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
                                <input type="text" maxlength="25" required class="form-control" :class="isNamevalid(lastName)" v-model="lastName">
                                <label>Nom</label>
                                <div class="invalid-feedback" v-if="!isChampsValid">
                                    Ce champ doit contenir des lettres uniquement.
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="champs">
                                <input type="text" maxlength="25" required class="form-control" :class="isNamevalid(firstName)" v-model="firstName">
                                <label>Prénom</label>
                                <div class="invalid-feedback" v-if="!isChampsValid">
                                    Ce champ doit contenir des lettres uniquement.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input type="text" enable maxlength="25" required class="form-control" :class="isPhoneNumberValid()" v-model="phoneNumber">
                                <label>Numéro de téléphone</label>
                                <div class="invalid-feedback" v-if="!isChampsValid">
                                    Veuillez saisir un numéro de téléphone valide. Exemples: +213 556142261 ou 0556142261.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="champs">
                                <input type="text" maxlength="25" required class="form-control" :class="isDateValid()" v-model="dateOfBirth">
                                <label>Date de naissance :</label>
                                <div class="invalid-feedback" v-if="!isChampsValid">
                                    Veuiller saisir une date valide en format : AAAA-MM-JJ.
                                </div>
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
            <router-link class="bouttonAnnuler btn" :to="{name:'informations'}">Annuler</router-link>

            <button type="submit" class="bouttonEnregistrer btn" @click.prevent="updateUser()">Enregistrer</button>


        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { utils } from "@/utils";
import store from "@/store";
export default Vue.extend({
    name: 'UpdateMonCompte',
    data(){
        return{
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
        isNamevalid(name: string): string {
            return utils.isNameValid(name)
        },
        
        isPhoneNumberValid(): string {
            return utils.isPhoneNumberValid(this.phoneNumber)
        },

        isDateValid(): string{
            return utils.isDateValid(this.dateOfBirth)
        },

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

            if (this.lastName !== '' && utils.isNameValid(this.lastName) === 'is-valid' &&
                this.firstName !== '' && utils.isNameValid(this.firstName) === 'is-valid' &&
                this.phoneNumber !== '' && utils.isPhoneNumberValid(this.phoneNumber) === 'is-valid' &&
                this.dateOfBirth !== '' &&  utils.isDateValid(this.dateOfBirth) === 'is-valid' &&
                this.gender !== ''){

                store.dispatch("register/updateUser", userParams)
            }else{
                this.isChampsValid = false;
                this.isSubmitValid = false;
                setTimeout(this.resetIsSubmit, 5000);
            }

            if (this.lastName === '' ||
                this.firstName === '' ||
                this.phoneNumber === '' ||
                this.dateOfBirth === '' ||
                this.gender === ''){
                this.champsVide = true
            }else{
                this.champsVide = false
            }
        },

        resetIsSubmit(){
            this.isSubmitValid = true
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

    .bouttonAnnuler{
        margin-right: 4px;
        border: solid #335c67 2px;
        width: 150px;
        background: #eaf8bf;
        color: #335c67;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonAnnuler:hover{
        color:#fff;
        background: #335c67;
    }

    .bouttonEnregistrer{
        margin-left: 4px;
        width: 200px;
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonEnregistrer:hover{
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
