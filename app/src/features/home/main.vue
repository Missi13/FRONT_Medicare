<template>
    <div>

        <!--navbar-->
        <header>
            <navbar/>
        </header>
        
        

        
    




    </div>
</template>

<script lang="ts">
import navbar from "@/components/navbar-components/app-navbar.vue"
export default {
    name: 'MonAcceuil',
    data(){
        return{

        }
    },

    components:{
        navbar
    },

}
</script>

<style scoped>

    .presentation{
        background: #eaf8bf;
        height: 100vh;
        display: flex;
    }

</style>
