<template>
    <div class="dialog__background" v-if="visible" @click.stop="hideDialog">
        <div class="dialog__content" @click.stop>
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

    emits: {

    },

    methods: {
        hideDialog(){
            this.$emit('update:dialogVisible', false);
        }
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
        margin:auto;
        background: white;
        border-radius: 12px;
        padding:20px;
    }
</style>