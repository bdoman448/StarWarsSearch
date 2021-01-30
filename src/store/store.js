import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		characters: [],
        films: {},
        filteredChars: [],
        filteredFilms: [],
        foundObj: null,
	},
	actions: {
        fetchChars({ commit }){
            return fetch("https://swapi.dev/api/people/")
            .then((response) => response.json())
            .then((data) => {
                console.log("PROSAO FETCH CHARS")
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
        findObject({commit},payload){
            console.log("UPAO U FINDOBJECT")
            console.log(payload)
            console.log("IZASAO")
            return commit('findObj', payload)
        }
	},
	mutations: {
		fillChars(state,payload) {
            console.log("PROSAO FILL CHARS")
            state.characters = payload;
            state.filteredChars = payload;
            console.log("UPISAO")
            console.log(state.characters)
		},
		fillFilms(state,payload) {
            state.films = payload;
            state.filteredFilms = payload;
            console.log("UPISAO2")
        },
        filterResults(state,payload) {
            console.log("Pozvan")
            console.log(payload)
            state.filteredChars = state.characters.filter((result) => {
                return result.name.toUpperCase().match(payload.toUpperCase());
              });
            console.log(state.filteredChars)
        },
        findObj(state,payload){
            console.log("Pozvan FINDOBJ")
            console.log(state.characters.length)
            console.log(state.characters.length === 0)
            state.foundObj = state.characters.find((character) => character.name.match(payload))
            console.log("NASAO SAM ")
            console.log(state.foundObj)
        }
    },
    
    getters: {
        charList(state) {
            return state.characters
        },
        charListlength(state){
            return state.characters.length
        },
        foundObj(state){
            return state.foundObj
        },

        filteredCharList(state){
            return state.filteredChars
        },


    }

});