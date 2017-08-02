<template>
  <div id="app">
    <header>
      <input type="text" placeholder="Location from" v-model="from" class="pin mr-20">
      <input type="text" placeholder="Location to" v-model="to" class="pin mr-20">
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
          from: '',
          to: '',
          routesList: [],
      	}
    },
    methods: {
      addRoute: function() {
        if(this.from!=''&&this.to!="") {
          var obj = {
            from: this.from,
            to: this.to
          }
          this.routesList.push(obj);
          localStorage.setItem("routes", JSON.stringify(this.routesList));
          this.from = '';
          this.to = '';
        } else {

        }
      },
    },
    created() {
      //Load html
      var ls = localStorage.getItem("routes");
      if(ls!=null)
        this.routesList = JSON.parse(ls);
      
      //localStorage.setItem("lastname", "Smith");
      //
      //localStorage.removeItem("lastname");
    }
  }
</script>

<style></style>
