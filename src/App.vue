<template>
  <div id="app">
    <header>
      <input type="text" placeholder="Location from" v-model="locFrom" class="pin mr-20">
      <input type="text" placeholder="Location to" v-model="locTo" class="pin mr-20">
      <button v-on:click="addRoute">Add route</button>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      	return {
          locFrom: '',
          locTo: '',
          routesList: [],
      	}
    },
    methods: {
      addRoute: function() {
        if(this.locFrom!=''&&this.locTo!="") {
          var obj = {
            from: this.locFrom,
            to: this.locTo
          }
          this.routesList.push(obj);
          this.locFrom = '';
          this.locTo = '';
        } else {

        }
      } 
    },
    created() {
      
    }
  }
</script>

<style></style>
