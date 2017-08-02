<template>
  <div class="content-wrapper">

	  <div id="map"></div>
  </div>
</template>

<script>
function initMap() {
	console.log("OK");
}	
</script>
<script>
export default {
    name: 'hello',
    data () {
      	return {
			id: this.$route.params["id"],
			googleObj: google,
      	}
	},
    methods: {
		initMap: function() {
			/*var google = this.googleObj;
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 7,
				center: {lat: 41.85, lng: -87.65}
			});
			directionsDisplay.setMap(map);
			//this.calculateAndDisplayRoute(directionsService, directionsDisplay);
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 7,
				center: {lat: 41.85, lng: -87.65}
			});
			//directionsDisplay.setMap(map);*/
		},

		/*calculateAndDisplayRoute: function(directionsService, directionsDisplay) {
			var o = this.$parent.routesList[this.id];
			directionsService.route({
				origin: o.from,
				destination: o.to,
				travelMode: 'DRIVING'
			}, function(response, status) {
				if(status === 'OK') {
					directionsDisplay.setDirections(response);
				} else {
					window.alert('Directions request failed due to ' + status);
				}
			});
		},*/
	},
	mounted: function () {
		this.initMap();
	  	//this.calculateAndDisplayRoute(directionsService, directionsDisplay);*/
	}
}
</script>

<style scoped></style>
