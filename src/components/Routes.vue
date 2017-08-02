<template>
  <div class="content-wrapper">
    <div class="width">
      <h1>Added routes</h1>
      <div v-show="this.$parent.routesList.length == 0" class="error">
        You haven't added any routes yet.
      </div>
      <table v-show="this.$parent.routesList.length > 0">
        <tr v-for="(route, index) in this.$parent.routesList" :key="index">
          <td>{{route.from}}</td>
          <td>{{route.to}}</td>
          <td width="130"><button v-on:click="viewRoute(index)" class="small fixed-size">View route</button></td>
          <td width="45"><i v-on:click="removeRoute(index)" class="icon delete"></i></td>
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
      removeRoute: function(i) {
        this.$parent.routesList.splice(i,1);
        localStorage.setItem("routes", JSON.stringify(this.$parent.routesList));
      },

      viewRoute: function(i) {
        this.$router.push('/route-detail/'+i);
      },
    },
}
</script>

<style scoped></style>
