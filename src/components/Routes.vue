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
        <ul v-show="this.$parent.routesList.length > 0">
            <li v-for="(route, index) in this.$parent.routesList" :key="index">
              <div class='col s1'>{{route.from}}</div>
              <div class='col s1'>{{route.to}}</div>
              <div class='col s2'><button v-on:click="viewRoute(index)" class="small mr">View route</button><i v-on:click="removeRoute(index)" class="icon delete"></i></div>
            </li>
        </ul>
        <!--<table v-show="this.$parent.routesList.length > 0">
          <tr v-for="(route, index) in this.$parent.routesList" :key="index">
            <td>{{route.from}}</td>
            <td>{{route.to}}</td>
            <td width="130"><button v-on:click="viewRoute(index)" class="small">View route</button></td>
            <td width="45"><i v-on:click="removeRoute(index)" class="icon delete"></i></td>
          </tr>
        </table>-->
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
        this.$parent.popupOn = true;
        this.$parent.deleteItem = true;
        var name = this.$parent.routesList[i].from +" - "+ this.$parent.routesList[i].to;
        this.$parent.messageTitle = "Delete route";
        this.$parent.messageText = "Do you really want to delete this route: <br/><font color='#435271'>"+name+"</font>";
        this.$parent.deleteId = i;
        $('body').css("overflow","hidden");
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
