<template>
    <div class="joke">
        <div>
            <span>{{joke.setup}}</span>
            <b-button>Bouton</b-button>
        </div>
        <span v-show="revealed">{{joke.delivery}}</span>
    </div>
</template>

<script>
export default {
    props: {
        /** Blague à afficher {id: id de la blague, setup: question de la blague, delivery: chute de la blague} */
        joke: {type: Object, required: true},
    },

    data() {
        return {
            /** Booléen, true si la chute est visible, false si elle est masquée. */
            revealed: false,
        }
    },
}
</script>