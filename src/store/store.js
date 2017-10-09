import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'My Vue Vuex ToDo App',
    testVal: '',
    tasks:[
      {name: 'First task', done: false},
      {name: 'Buy products', done: false},
      {name: 'Learn Vue js like Jaday !', done: false},
    ]
  },
  getters:{
    
  },
  mutations:{
    addTask:(state, event) => {
      event.preventDefault();
      state.tasks.push({
        name: state.tasks.name,
        done: false
      });
      state.tasks.name ='';
    },
    deleteTask: (state, index) => {
      state.tasks.splice(index, 1);
    }
  },
  actions:{
    
  }
});