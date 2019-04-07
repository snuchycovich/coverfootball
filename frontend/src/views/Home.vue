<template>
    <div>
        <div class="row col">
            <h1>homepage</h1>
        </div>

        <div class="row col">
            <p>This is the home page of Cover Football application</p>
        </div>

        <!--<autocomplete></autocomplete>-->
        <login-form></login-form>
    </div>
</template>

<script>
    //import autocomplete from '../components/form/fields/autocomplete'
    import loginForm from '../components/security/login'

    export default {
        name: 'home',
        components: {
            //autocomplete,
            loginForm
        }
    }
</script>