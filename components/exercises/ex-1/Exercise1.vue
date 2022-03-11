<template>
    <div class="exercise-1">
        <b-form-input type="text" placeholder="Entrez un texte"></b-form-input>
        <exercise-1-child/>
    </div>
</template>

<script>
// Objectifs : 
// - Taper un texte dans l'input
// - Le composant `Exercise1Child` doit afficher la valeur de l'input dans son <span>

import Exercise1Child from './Exercise1Child.vue'

export default {
    components: {
        Exercise1Child
    }
}
</script>