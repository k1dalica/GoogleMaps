<template>
  <div class="content-wrapper">
	  	<div class='fullwidth'>
			<header>
				<div class="width flex">
					<router-link to="/"><button class="back mr-20">Go back</button></router-link>
					<div class="inputwidth info"><label>Distance</label><span>{{distance}}</span></div>					
					<div class="inputwidth info"><label>Duration</label><span>{{duration}}</span></div>					
				</div>
			</header>
		  	<div id="map"></div>
		</div>
  </div>
</template>

<script>
export default {
    data () {
      	return {
			googleObj: google,
			id: this.$route.params["id"],
			distance: "",
			duration: "",
      	}
	},
    methods: {
		initMap: function() {
			var google = this.googleObj;
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 7,
				center: {lat: 41.85, lng: -87.65}
			});
			
			directionsDisplay.setMap(map);
			this.calculateAndDisplayRoute(directionsService, directionsDisplay);
		},

		calculateAndDisplayRoute: function(directionsService, directionsDisplay) {
			var self = this;
			var o = this.$parent.routesList[this.id];
			if(o!=undefined) {
				directionsService.route({
					origin: o.from,
					destination: o.to,
					travelMode: 'DRIVING'
				}, function(response, status) {
					if(status === 'OK') {
						self.distance = response.routes[0].legs[0].distance.text;
						self.duration = response.routes[0].legs[0].duration.text;
						directionsDisplay.setDirections(response);
					} else {
						self.$parent.showError("There was an error", "<font color='#e8525b'>"+status+"</font>");
					}
				});
			} else {
				//self.$parent.showError("There was an error", "Unknow route");
				this.$router.push('/');
			}
		},
	},
	mounted: function () {
		this.initMap();
		/*if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
			};
			console.log(pos);
          }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          //handleLocationError(false, infoWindow, map.getCenter());
        }*/
	  	//this.calculateAndDisplayRoute(directionsService, directionsDisplay);*/
	}
}
</script>

<style scoped>
	#map { width: 100%; height: calc(100% - 90px); }
	@media all and (max-width: 600px) {
		#map { width: 100%; height: calc(100% - 200px); }
	}
</style>
