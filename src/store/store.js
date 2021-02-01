import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		characters: [],
        films: [],
        filteredChars: [],
        filteredFilms: [],
        foundChar: null,
        foundFilm: null,
        sortOption: 1,
    },
    
    actions: {
        fetchCharacters({ commit }){
            return fetch("https://swapi.dev/api/people/")
            .then((response) => response.json())
            .then((data) => {
                commit('fillCharacters', [...data.results])
            });
        },
        findCharacter({commit},payload){
            return commit('findCharacter', payload)
        },
        fetchFilms({ commit }){
            return fetch("https://swapi.dev/api/films/")
            .then((response) => response.json())
            .then((data) => {
                commit('fillFilms', [...data.results])
            });
        },
        findFilm({commit},payload){
            return commit('findFilm', payload)
        },
        changeSort({commit},payload) {
            return commit('changeSort', payload)
        },
    },

	mutations: {
		fillCharacters(state,payload) {
            state.characters = payload;
            state.filteredChars = payload;
        },
        filterCharacters(state,payload) {
            state.filteredChars = state.characters.filter((result) => {
                return result.name.toUpperCase().match(payload.toUpperCase());
              });
        },
        findCharacter(state,payload){
            state.foundChar = state.characters.find((character) => character.name.match(payload))
        },
		fillFilms(state,payload) {
            state.films = payload;
            state.filteredFilms = payload;
        },
        filterFilms(state,payload) {
            state.filteredFilms = state.films.filter((result) => {
                return result.title.toUpperCase().match(payload.toUpperCase());
              });
        },
        findFilm(state,payload){
            state.foundFilm = state.films.find((film) => film.title.match(payload))
        },
        changeSort(state,payload) {
            state.sortOption = payload
        },
    },
    
    
    getters: {
        charListlength(state){
            return state.characters.length
        },
        filteredCharList(state){
            return state.filteredChars.length
        },
        foundChar(state){
            return state.foundChar
        },
        filmListlength(state){
            return state.films.length
        },
        filteredFilmList(state){
            return state.filteredFilms.length
        },
  
        foundFilm(state){
            return state.foundFilm
        },
    }

});