<script>
import AccordionToggle from './AccordionToggle.vue'
import AccordionContent from './AccordionContent.vue'

export default {
    components: {
        AccordionToggle,
        AccordionContent
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: null
        },
        labelClass: {
            type: String,
            default: null
        },
        content: {
            type: String,
            default: null
        },
        contentClass: {
            type: String,
            default: null
        },
        initiallyOpen: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    },
    mounted() {
        if(this.initiallyOpen) {
            this.isOpen = true;
        }
    }
}
</script>

<template>
    <div class="bg-slate-50 rounded-xl py-3 px-6">
        <AccordionToggle
            :label="label"
            :label-class="labelClass"
            @toggle="toggle"
        />
        <AccordionContent
            :is-open="isOpen"
            :content-class="contentClass"
            :content="content"
        />
    </div>
</template>

<style scoped>

</style>
