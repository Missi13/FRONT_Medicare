<template>
    
    <div class="container-fluid">
        <div class="row">
            
            <div class="gauche col-7">
                <img src="">
            </div>








            <div class="droite col-5">
                <div class="bande row">
                    <div class="col-9 bleu"></div>
                    <div class="col-3 vert"></div>
                </div>

                <div class="container">
                    <div class="row justify-content-center">
                        <img @click="$router.push('./')" class="logo" src="@/assets/logo.png">
                    </div >

                    <!-- Connexion -->
                    <div class="connexion">
                        <h2 class="titre">Connexion</h2>
                        <form class="formulaire">
                            <div class="inputBox">
                                <input type="text" name="" required="true" maxlength="25" v-model="username">
                                <label>Login</label>
                            </div>

                            <div class="inputBox">
                                <input type="password" id="myInput" name="" required="true" maxlength="25" v-model="password">
                                <label>Mot de passe</label>
                                <p class="mdpOublie">Mot de passe oublié ?</p>
                            </div>
                        
                            <button type="button" class="bouttonConnexion btn" @click.prevent="authenticate()">Se connecter</button>
                        </form>
                    </div>

                    <!-- Inscription -->
                    <div class="inscription">
                        <p class="question">Vous n'avez pas de compte et vous voulez louer votre maison ?</p>
                        <button @click="$router.push('./register')" type="button" class="bouttonInscription btn">Créer un compte</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from "vue";
import store from '@/store';


export default Vue.extend({
    name: 'LoginConnexion',
    data(){
        return{
            username: null,
            password: null
        }
    },

    methods:{

//Authenticate
        authenticate(){
            
            let userParams =  {
                username: this.username,
                password: this.password
            }

            if(this.username !== '' && this.password !== ''){
                store.dispatch("login/loginUser", userParams)
            }
        }
        
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
        background: #eaf8bf;
        min-height: 100vh;
    }

    
    .droite{
        position: relative;
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

    .formulaire{
        display: flex;
        flex-direction: column;
    }

    .inputBox{
        position: relative;
        margin-bottom: 30px;
    }

    .inputBox input{
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

    .inputBox label{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: silver;
        pointer-events: none;
        transition: 0.4s;
    }

    .formulaire .inputBox input:focus ~ label,
    .formulaire .inputBox input:valid ~ label{
        top: -21px;
        font-size: 15px;
        color: #335c67;
    }

    .mdpOublie{
        font-size: 16px;
        margin-top: 7px;
    }

    .bouttonConnexion{
        width: 150px;
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonConnexion:hover{
        color:#000;
        background: #eaf8bf;
    }

    .question{
        font-size: 24px;
        font-weight: 500;
    }

    .bouttonInscription{
        border: solid #335c67 2px;
        width: 200px;
        background: #eaf8bf;
        color: #335c67;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonInscription:hover{
        color:#fff;
        background: #335c67;
    }

</style>
