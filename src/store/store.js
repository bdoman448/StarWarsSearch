import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		characters: [],
        films: {},
        filteredChars: [],
        filteredFilms: [],
        foundChar: null,
        foundFilm: null,
        sortOption: 1,
	},
	actions: {
        fetchChars({ commit }){
            return fetch("https://swapi.dev/api/people/")
            .then((response) => response.json())
            .then((data) => {
                commit('fillChars', [...data.results])
            });
        },
        fetchFilms({ commit }){
            return fetch("https://swapi.dev/api/films/")
            .then((response) => response.json())
            .then((data) => {
                commit('fillFilms', [...data.results])
            });
        },
        findChar({commit},payload){
            return commit('findChar', payload)
        },
        findFilm({commit},payload){
            console.log("AAAAA")
            return commit('findFilm', payload)
        },
        changeSort({commit},payload) {
            return commit('changeSort', payload)
        }
	},
	mutations: {
		fillChars(state,payload) {
            state.characters = payload;
            state.filteredChars = payload;
		},
		fillFilms(state,payload) {
            state.films = payload;
            state.filteredFilms = payload;
        },
        filterResults(state,payload) {
            state.filteredChars = state.characters.filter((result) => {
                return result.name.toUpperCase().match(payload.toUpperCase());
              });
        },
        findChar(state,payload){
            state.foundChar = state.characters.find((character) => character.name.match(payload))
        },
        findFilm(state,payload){
            state.foundFilm = state.characters.find((character) => character.title.match(payload))
        },
        changeSort(state,payload) {
            state.sortOption = payload
        }   
    },
    
    getters: {
        charList(state) {
            return state.characters
        },
        charListlength(state){
            return state.characters.length
        },
        filmListlength(state){
            console.log(state.films.length)
            console.log(state.char.length)
            return state.films.length
        },

        foundChar(state){
            return state.foundChar
        },
        foundFilm(state){
            return state.foundFilm
        },

        filteredCharList(state){
            return state.filteredChars.length
        },

    }

});