<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div id="popup" v-show="popupOn">
        <div id="popup-wrapper">
          <div class="popup-box" v-show="deleteItem">
            <h2>{{messageTitle}}</h2>
            <span v-html="messageText"></span>
            <div class="mt-20"><button class="mr-20 blue" v-on:click="closePopup">Cancel</button><button v-on:click="deleteRoute">Delete</button></div>
          </div>
          <div class="popup-box" v-show="errorMsg">
            <h2>{{messageTitle}}</h2>
            <span v-html="messageText"></span>
            <div class="mt-20"><button class="mr-20" v-on:click="closePopup">Ok</button></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide-fade" mode="in-out" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      	return {
          routesList: [],
          popupOn: false,
          errorMsg: false,
          deleteItem: false,
          deleteId: null,

          messageTitle: "",
          messageText: "",
      	}
    },

    methods: {
      closePopup: function() {
        this.popupOn = false;
        this.deleteItem = false;
        this.errorMsg = false;
        $('body').css("overflow-y","auto");
      },
      deleteRoute: function() {
        this.routesList.splice(this.deleteId,1);
        localStorage.setItem("routes", JSON.stringify(this.routesList));
        this.closePopup();
      },

      showError: function(title, text) {
        this.popupOn = true;
        this.errorMsg = true;

        this.messageTitle = title;
        this.messageText = text;

        $('body').css("overflow","hidden");
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

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to, .slide-fade-leave-active {
    transform: translateX(40px);
    opacity: 0;
  }

  .fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
