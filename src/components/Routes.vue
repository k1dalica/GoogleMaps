<template>
  <div class="content-wrapper">
    <div class="width">
      <h1>Added routes</h1>
      <div v-show="this.$parent.routesList.length == 0" class="error">
        You haven't added any routes yet.
      </div>
      <table v-show="this.$parent.routesList.length > 0">
        <tr v-for="route in this.$parent.routesList">
          <td>{{route.from}}</td>
          <td>{{route.to}}</td>
          <td width="138"><router-link to="route-detail/"><button class="small fixed-size">View route</button></router-link></td>
          <td width="35"><i class="icon delete"></i></td>
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
    }
}
</script>

<style scoped></style>
