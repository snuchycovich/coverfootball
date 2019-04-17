<template>
    <div>
        <string-input id="login-email" type="email" label="Email"></string-input>
        <string-input id="login-password" type="password" label="Password"></string-input>
        <submitBtn type="button" text="Connexion" btn-type="btn-primary"></submitBtn>
    </div>
</template>
<script>
    import stringInput from '../form/fields/stringInput'
    import submitBtn from '../form/button/button'
    export default {
        name: 'loginForm',
        components: {
            stringInput,
            submitBtn
        }
    }
</script>