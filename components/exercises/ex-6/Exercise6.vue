<template>
    <div class="exercise-6">
        <b-table-lite :fields="jokeTableFields" :items="jokeItems">
            <template #cell(edit)="data">
                <b-button @click="onEditJokeClicked(data.item)">Modifier</b-button>
            </template>
        </b-table-lite>

        <b-modal id="edit-joke-modal" title="Modifier blague" ok-title="Enregistrer" cancel-title="Annuler" lazy @ok="onValidateUpdatedJoke">
        </b-modal>
    </div>
</template>

<script>
// Objectifs : 
// Le but de cet exercice est de modifier les blagues (énoncé et chute) en cliquant sur le bouton "modifier" du tableau.
// Au clic, la méthode "onEditJokeClicked" est appelée, avec la blague à modifier en paramètre, et ouvre la popup de modification.
// Le contenu de cette popup doit être écrit dans le template, entre les balises <b-modal>.
// Lorsque l'on clique sur le bouton "Enregistrer" de la popup, la méthode "onValidateUpdatedJoke" va être appelée et on devra faire la mise à jour de la blague
// en utilisant la méthode "updateJoke" du store des blagues.

import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            /** Descripteurs des colonnes du tableau (énoncé, chute, puis colonne modifier). */
            jokeTableFields: [
                {
                    key: 'setup',
                    label: 'Énoncé'
                },
                {
                    key: 'delivery',
                    label: 'Chute',
                },
                {
                    key: 'edit',
                    label: 'Modifier',
                }
            ],
        }
    },

    computed: {
        ...mapGetters({jokes: 'joke/getList'}),

        /** Retourne les éléments à afficher dans le tableau. */
        jokeItems() {
            return this.jokes
        },
    },

    methods: {
        ...mapActions({updateJoke: 'joke/update'}),

        onEditJokeClicked(joke) {
            console.debug(joke)
            this.$bvModal.show('edit-joke-modal')
        },

        onValidateUpdatedJoke() {
        },
    },
}
</script>