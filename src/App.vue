<template>
      <div class="container col-sm-8 col-sm-offset-2">
        <div id="taskApp">
            <h1 class="text-center">{{title}}</h1>
            
            <!-- Add new task form -->
            <div class="panel panel-default">
              <h2 class="text-center">Add new task</h2>
              <form @submit="addTask">
                <div class="col-sm-8">
                  <input type="text" class="form-control" v-model="tasks.name"> 
                </div>
                <div class="col-sm-4">
                  <input type="submit" value="Add" class="btn btn-primary btn-block">
                </div>
              </form>
              &nbsp;
            </div>

            <table class="table">

              <thead>
                <th>Checkmark done</th>
                <th>Task name</th>
                <th>Delete</th>
              </thead>

              <tbody>
                <tr v-for="(task, index) in tasks">
                  <td><input type="checkbox" v-model="task.done"></td>
                  <td><span :class="{ taskDone: task.done }">{{task.name}}</span></td>
                  <td><button class="btn btn-danger btn-block" @click="deleteTask(index)">Delete</button></td>
                </tr>
              </tbody>
              
            </table>
        </div>
      </div>
</template>

<script>
    import {
        mapActions,
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex';

    export default {
        computed: {
            ...mapGetters([

            ]),
            ...mapState([
                'tasks',
                'title' // need to mapState for try v-model to work 
            ])

        },
        methods: {
            ...mapMutations([
                'addTask',
                'deleteTask'
            ]),
            ...mapActions([

            ])
        }
    }
</script>





<style>
    /* #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
    
    .taskDone {
        text-decoration: line-through;
    }
</style>