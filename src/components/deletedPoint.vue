<template>
    <li>
        <myParagraph 
            :textContent="point.val"
        />
        <div class="point__buttons">
            <myButton
            @click="recover"
            >recover</myButton>
            <myButton
            @click="del"
            >delete</myButton>
        </div>
    </li>
</template>

<script>


export default {
    props:{
        point:{
            type: Object
        }
    },

    emits:["recover", "del"],

    methods:{
        recover(){
            this.$emit("recover", this.point.id)
        },

        del(){
            this.$emit("del", this.point.id);
        }
    }
}

</script>

<style scoped>
    li{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 400px;
        max-width: 500px;
    }
</style>