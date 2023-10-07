<template>
    <div class="container-fluid">
        <div class="row">
            
            <div class="gauche col-7">
                <div class="bande row">
                    <div class="col-9 bleu"></div>
                    <div class="col-3 vert"></div>
                </div>

                <div class="container">
                    <div class="row justify-content-center">
                        <img @click="$router.push('./')" class="logo" src="@/assets/logo.png">
                    </div >

                    <!-- Incription -->
                    <div class="inscription">
                        <h2 class="titre">Inscription</h2>

                        <form class="row justify-content-center">
                            <div class="formGauche col-6">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="champs">
                                            <input type="text" maxlength="25" class="form-control" :class="isNamevalid(lastName)" required v-model="lastName">

                                            <label>Nom</label>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="champs">
                                            <input type="text" maxlength="25" required class="form-control" :class="isNamevalid(firstName)" v-model="firstName">
                                            <label>Prénom</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="champs">
                                            <input type="text" maxlength="25" required class="form-control" :class="isPhoneNumberValid()" v-model="phoneNumber">
                                            <label>Numéro de téléphone</label>
                                            <div class="invalid-feedback" v-if="!isChampsValid">
                                                Veuillez saisir un numéro de téléphone valide. Exemples: +33 6 12345678 ou 0612345678.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <label class="dateNaissance">Date de naissance :</label>

                                <div class="row">
                                    <div class="col-4">
                                        <div class="champs">
                                            <input type="number" min=1 max="31" required v-model="day">
                                            <label class="text-center">Jour</label>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="champs">
                                            <select placeholder="Mois" required v-model="month">
                                                <option class="text-gray" value="" selected>Mois</option>
                                                <option value="01">Janvier</option>
                                                <option value="02">Février</option>
                                                <option value="03">Mars</option>
                                                <option value="04">Avril</option>
                                                <option value="05">Mai</option>
                                                <option value="06">Juin</option>
                                                <option value="07">Juillet</option>
                                                <option value="08">Août</option>
                                                <option value="09">Septembre</option>
                                                <option value="10">Octobre</option>
                                                <option value="11">Novembre</option>
                                                <option value="12">Décembre</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="champs">
                                            <input type="number" min=1900 max="2023" required v-model="year">
                                            <label>Année</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="formGauche col-6">
                                <div class="row">
                                    <div class="col"> 
                                        <div class="champs">
                                            <input type="text" maxlength="25" class="form-control" :class="isEmailValid()" required  v-model="email">
                                            <label>E-mail</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col"> 
                                        <div class="champs">
                                            <input type="password" maxlength="25" class="form-control" :class="isPasswordValid()" required  v-model="password">
                                            <label>Mot de passe</label>
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

                        <button type="submit" class="bouttonInscription btn" @click.prevent="createUser()">Créer un Compte</button>
                    </div>

                    <!-- Connexion -->
                    <div class="connexion">
                        <p class="question">Vous possédez déja un compte ?</p>
                        <button @click="$router.push('./login')" type="button" class="bouttonConnexion btn">Se connecter</button>
                    </div>
                </div>
            </div>



            <div class="droite col-5">
                <img src="">
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from "vue";
import { utils } from "@/utils";
import store from "@/store";

export default Vue.extend({
    name: 'RegisterInscription',
    data(){
        return { 
            lastName: "",
            firstName: "",
            phoneNumber: "",
            day: "",
            month: "",
            year: "",
            email: "",
            password: "",
            gender: "",

            isChampsValid : true,
            isSubmitValid : true,
            champsVide : false
        }
    },

    methods:{
        
        isEmailValid(): string {
            return utils.isEmailValid(this.email)
        },

        isPhoneNumberValid(): string {
            return utils.isPhoneNumberValid(this.phoneNumber)
        },

        isPasswordValid(): string {
            return utils.isPasswordValid(this.password)
        },

        isNamevalid(name: string): string {
            return utils.isNameValid(name)
        },

        isYearValid(): string {
            return utils.isYearValid(this.year)
        },

        isDayValid(): string {
            return utils.isDayValid(this.day)
        },
        
        isMonthValid(): string {
            return utils.isMonthValid(this.month)
        },
        


// Creation
        createUser(){
            let dateString = this.year+"/"+this.month+"/"+this.day;
            var dateOfBirth = new Date(dateString);

            let userParams = {
                lastName: this.lastName,
                firstName: this.firstName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                password: this.password,
                dateOfBirth: dateOfBirth,
                gender: this.gender
            };
            
            if (this.lastName !== '' && utils.isNameValid(this.lastName) === 'is-valid' &&
                this.firstName !== '' && utils.isNameValid(this.firstName) === 'is-valid' &&
                this.phoneNumber !== '' && utils.isPhoneNumberValid(this.phoneNumber) === 'is-valid' &&
                this.email !== '' && utils.isEmailValid(this.email) === 'is-valid' &&
                this.password !== '' && utils.isPasswordValid(this.password) === 'is-valid' &&
                this.day !== '' &&  utils.isDayValid(this.day) === 'is-valid' &&
                this.month !== '' && utils.isMonthValid(this.month) === 'is-valid' &&
                this.year !== '' && utils.isYearValid(this.year) === 'is-valid' &&
                this.gender !== ''){

                store.dispatch("register/registerUser", userParams)
            }else{
                this.isChampsValid = false;
                this.isSubmitValid = false;
                setTimeout(this.resetIsSubmit, 5000);
            }

            if (this.lastName === '' ||
                this.firstName === '' ||
                this.phoneNumber === '' ||
                this.email === '' ||
                this.password === '' ||
                this.day === '' ||
                this.month === '' ||
                this.year === '' ||
                this.gender === ''){
                this.champsVide = true
            }else{
                this.champsVide = false
            }
        },

        resetIsSubmit(){
            this.isSubmitValid = true
        },





    }
})
</script>

<style scoped>
    .bande{
        position: absolute;
        width: 100%;
        height: 10px;
        top: 0px;
    }

    .bleu{
        background: #335c67;
    }

    .vert{
        background: #eaf8bf;
    }

    .gauche{
        position: relative;
    }

    
    .droite{
        background: #eaf8bf;
        min-height: 100vh;
    }

    .container{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .logo{
        width: 140px;
        cursor: pointer;
        margin-top: 15px;
    }

    .titre{
        margin-bottom: 15px;
        color:#335c67;
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

    .champs input:focus ~ label,
    .champs input:valid ~ label{
        top: -21px;
        font-size: 15px;
        color: #335c67;
        /*outline: none;*/
    }

    .bouttonInscription{
        width: 200px;
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonInscription:hover{
        color:#000;
        background: #eaf8bf;
    }

    .question{
        font-size: 24px;
        font-weight: 500;
    }

    .bouttonConnexion{
        border: solid #335c67 2px;
        width: 150px;
        background: #eaf8bf;
        color: #335c67;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonConnexion:hover{
        color:#fff;
        background: #335c67;
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
</style>