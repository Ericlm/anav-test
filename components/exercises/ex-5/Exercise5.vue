<template>
    <div class="exercise-5">
        <b-button variant="primary" @click="onFetchJokeClick">
            <b-spinner small v-show="loading"></b-spinner><span>Fetch une blague</span>
        </b-button>
    </div>
</template>

<script>
// Objectifs : 
// Au clic sur le bouton "Fetch une blague", une action de store va être lancée pour fetch une blague aléatoire depuis une API.
// Cette blague va venir dans la liste des blagues (via le getter "jokes").
// Une blague est un objet composé des champs suivants : {id: number (identifiant unique de la blague), setup: string (question de la blague), delivery: string (chute de la blague)}
// Le but est d'afficher la liste des ces blagues via un composant spécialisé : Exercise5Joke
// Ce composant prend en prop une blague et l'affiche.
// - lister les blagues avec le composant "Exercise5Joke" qui prend en prop une blague
// - faire fonctionner le bouton "Révéler la blague" pour qu'il affiche ou masque la chute de la blague 
// - le texte du bouton doit afficher "Révéler la chute" si elle est masquée, et "Masquer la chute" sinon.

import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            /** Le fetch est en cours, afficher le spinner. */
            loading: false,
        }
    },

    computed: {
        ...mapGetters({jokes: 'joke/getList'}),
    },

    methods: {
        ...mapActions({fetchJoke: 'joke/fetch'}),

        /** Appelé lors du clic sur le bouton pour fetch une blague. */
        async onFetchJokeClick() {
            this.loading = true
            // Appel à l'action du store
            await this.fetchJoke()
            this.loading = false
        }
    }
}
</script>