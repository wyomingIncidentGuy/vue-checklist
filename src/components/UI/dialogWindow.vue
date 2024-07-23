<template>
    <transition name="fade">
        <div class="dialog__background" v-if="visible">
            <div class="dialog__content">
                <slot></slot>
            </div>
        </div>
    </transition>
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

<style scoped>
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
        min-height:100px;
        padding:20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>