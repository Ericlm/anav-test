<template>
    <div class="exercise-3">
        <b-button>Focus</b-button>
        <exercise-3-child />
    </div>
</template>

<script>
// Objectifs : 
// - Au clic sur le bouton "Focus", on doit donner le focus à l'input dans l'élément enfant
// - On tape dans l'input enfant la couleur que l'on souhaite (une couleur css)
// - Lorsque l'on tape la touche "entrée" dans l'input enfant, le bouton "Focus" du parent doit devenir de cette couleur

import Exercise3Child from './Exercise3Child.vue'

export default {
    components: {
        Exercise3Child
    }
    
}
</script>