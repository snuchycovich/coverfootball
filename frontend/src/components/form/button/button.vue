<template>
    <button :type="type"
            :class="'btn' +' '+ btnType + ' '+ btnSize">
        {{ text }}
    </button>
</template>
<script>
    export default {
        name: 'btn',
        props: {
            type: {
                type: String,
                required: true
            },
            text : {
                type: String,
                required: true
            },
            btnType: String,
            btnSize: String,
            btnBlock: Boolean,
            outline: Boolean

        }
    }
</script>