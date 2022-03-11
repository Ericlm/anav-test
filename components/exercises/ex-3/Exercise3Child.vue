<template>
    <div>
        <b-form-input ref="exercise-3-input" type="text"></b-form-input>
    </div>
</template>

<script>
export default {
    methods: {
        focus() {
            this.$refs['exercise-3-input'].focus()
        }
    }
}
</script>