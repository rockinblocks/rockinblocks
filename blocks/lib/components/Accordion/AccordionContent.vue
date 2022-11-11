<script>
export default {
    props: {
        content: {
            type: String,
            default: null
        },
        contentClass: {
            type: String,
            default: null
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div v-if="isOpen" class="flex text-left pt-3 max-w-prose">
        <p :class="contentClass">
            {{ content }}
        </p>
    </div>
</template>

<style scoped>

</style>
