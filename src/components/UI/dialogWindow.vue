<template>
    <div class="dialog__background" v-if="visible">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'dialogWindow',

    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    methods: {

    }
}

</script>

<style>
    .dialog__background{
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;
        background: rgba(0,0,0, 0.5)
    }

    .dialog__content{
        display:flex;
        justify-content: space-around;
        align-items: center;
        background: white;
        border-radius: 12px;
        min-width:20vw;
        min-height:200px;
        padding:20px;
    }
</style>