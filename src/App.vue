<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      	return {
          routesList: []
      	}
    },
    created() {
      var ls = localStorage.getItem("routes");
      if(ls!=null&&ls!=""&&ls!=undefined)
        this.routesList = JSON.parse(ls);
    },

  }
</script>

<style>
  #app { height: 100%; }
</style>
