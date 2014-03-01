(function() {
	
	var layer  = new L.StamenTileLayer("watercolor"),
		    center = new L.LatLng(37.763217,-122.415226), 
		    map    = new L.Map("map", {
		    	center: center,
		    	zoom: 13,
		    	zoomControl: false
			}),
			place_pin = new L.divIcon({
				className: 'place-pin',
				iconSize: new L.Point(200,100),
				html: "<h3>at Stable Cafe</h3><p>2128 Folsom St, San Francisco, California</p><p><a href='https://maps.google.com/maps?daddr=Stable+Cafe,+Folsom+Street,+San+Francisco,+CA&hl=en&sll=37.763234,-122.415247&sspn=0.012146,0.015793&geocode=Fak4QAIdcBe0-CHHVKpCWes_hSkNL-PZOn6PgDHHVKpCWes_hQ&mra=prev&t=m&z=16'>Get directions</a></p>"
			})
			marker = new L.marker(center, {icon:place_pin}).addTo(map);
		map.addLayer(layer);

		function nudgeYInPixelsFromTop(pixels) {

			var center_container_point = map.latLngToContainerPoint(center),
			    new_container_point    = new L.Point(0, center_container_point.y-pixels);

			map.panBy(map.containerPointToLayerPoint(new_container_point), {animate:false});

		}



		nudgeYInPixelsFromTop(160);

		$('#location').on('click', function() {
			location.href='https://maps.google.com/maps?daddr=Stable+Cafe,+Folsom+Street,+San+Francisco,+CA&hl=en&sll=37.763234,-122.415247&sspn=0.012146,0.015793&geocode=Fak4QAIdcBe0-CHHVKpCWes_hSkNL-PZOn6PgDHHVKpCWes_hQ&mra=prev&t=m&z=16';
		});

}(window))