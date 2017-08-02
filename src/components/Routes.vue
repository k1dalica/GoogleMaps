<template>
  <div class="content-wrapper">
    <div class="width">
      <h1>Added routes</h1>
      <div v-show="this.$parent.routesList.length == 0" class="error">
        You haven't added any routes yet.
      </div>
      <table v-show="this.$parent.routesList.length > 0">
        <tr v-for="(route,key,index) in this.$parent.routesList">
          <td>{{route.from}}</td>
          <td>{{route.to}}</td>
          <td width="130"><router-link to="route-detail/"><button class="small fixed-size">View route</button></router-link></td>
          <td width="45"><i v-on:click="removeRoute(route)" class="icon delete"></i></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'routes',
    data () {
      return {
      }
    },
    methods: {
      removeRoute: function(o) {
        var l = this.$parent.routesList;
        for(var i=0;i<l.length;i++) {
          if(l[i].from==o.from&&l[i].to==o.to) {
             this.$parent.routesList.splice(i,1);
             localStorage.setItem("routes", JSON.stringify(this.$parent.routesList));
            break;
          }
        }
      },
    },
}
</script>

<style scoped></style>
