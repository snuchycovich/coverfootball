<template>
    <div>
        hello
        <string-input :id="autocomplete" type="text"></string-input>
    </div>
</template>
<script>
    import stringInput from './stringInput'

    export default {
        name: 'autocomplete',
        components: {
            stringInput
        },
        props: {

        }

    }
</script>