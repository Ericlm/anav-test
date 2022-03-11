import axios from 'axios'

export const state = () => ({
  cache: [],
})

export const getters = {
  getList: (state) => state.cache,
}

export const actions = {
  /** Fetch un blague sur l'API et l'ajoute au cache (la liste) des blagues. */
  async fetch({ commit }) {
    const resp = await axios({
    url: 'https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart',
    })
    commit('ADD_JOKE', {id: resp.data.id, setup: resp.data.setup, delivery: resp.data.delivery})
  },

  /** Met à jour une blague en remplaçant son setup et delivery par les valeurs de la blague passée en paramètre. */
  update({commit}, updatedJoke) {
    commit('UPDATE_JOKE', updatedJoke)
  }
}

export const mutations = {
  ADD_JOKE(state, joke) {
    state.cache.push(joke)
  },

  UPDATE_JOKE(state, updatedJoke) {
    const oldJoke = state.cache.find((joke) => joke.id === updatedJoke.id)
    oldJoke.setup = updatedJoke.setup
    oldJoke.delivery = updatedJoke.delivery
  }
}
