<template>
    <div class="btn-group devtool">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">DEV</button>

        <ul class="dropdown-menu">

            <li>
                <router-link to="/">Acceuil</router-link>
            </li>

            <li>
                <router-link to="/register">Inscription</router-link>
            </li>

            <li>
                <router-link to="/login">connexion</router-link>
            </li>

        </ul>
    </div>
</template>


<script lang="ts">
export default {
    name:"app-devtool"
}
</script>


<style lang="css" scoped>

    .devtool {
        position: fixed;
        top: 15px;
        right: 10px;
        width: 100px;
        z-index: 1;
    }
    
</style>