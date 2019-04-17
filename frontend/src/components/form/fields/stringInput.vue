<template>
    <div class="form-group">
        <label v-if="label" :for="id">{{ label }}</label>
        <input :type="type" class="form-control" :id="id" aria-describedby="emailHelp" :placeholder="placeholder">
        <small v-if="helpText" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
</template>
<script>
    export default {
        name: 'stringInput',
        props: {
            id: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                required: false
            },
            helpText : {
                type: String,
                required: false
            }

        }
    }
</script>