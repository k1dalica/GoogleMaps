<template>
  <div class="content-wrapper">
    <div class='fullwidth'>
      <header>
        <div class="width flex">
          <input type="text" placeholder="Location from" v-model="from" id="from" class="pin mr-20 inputwidth">
          <input type="text" placeholder="Location to" v-model="to" id="to" class="pin mr-20 inputwidth">
          <button v-on:click="this.addRoute">Add route</button>
        </div>
      </header>
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
  </div>
</template>

<script>
  export default {
    name: 'routes',
    data () {
      return {
        from: '',
        to: '',
      }
    },
    methods: {
      addRoute: function() {
        if(this.from!=''&&this.to!="") {
          var obj = {
            from: this.from,
            to: this.to
          }
          this.$parent.routesList.push(obj);
          localStorage.setItem("routes", JSON.stringify(this.$parent.routesList));
          this.from = '';
          this.to = '';
        } else {
          if(this.from=='') {
            $('#from').addClass('red');
          }
          if(this.to=='') {
            $('#to').addClass('red');
          }
        }
      },
      removeRoute: function(i) {
        this.$parent.routesList.splice(i,1);
        localStorage.setItem("routes", JSON.stringify(this.$parent.routesList));
      },

      viewRoute: function(i) {
        this.$router.push('/route-detail/'+i);
      },
    },
    watch: {
      from: function (val) {
        if(val.length > 0)
          $('#from').removeClass('red');
      },
      to: function (val) {
        if(val.length > 0)
          $('#to').removeClass('red');
      },
    }
}
</script>

<style scoped></style>
