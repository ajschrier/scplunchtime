var map;

var markers = [
	['Apple Store',33.691962,-117.893087,""],
	['Pacific Whey Cafe',33.6924193,-117.893154,""],
	['Wahoos',33.6924588,-117.8932629,"<br>Online Ordering"],
	['Zcafe',33.692271, -117.892516,""],
	['Chipotle',33.698363,-117.885005,"<br><a href=\"http://order.chipotle.com\">Online Ordering</a><br>App Based Ordering"],
	['Ruby\'s',33.6925516,-117.8926029,""],
	['Chick-fil-a',33.699682,-117.885055,""],
	['TK Burgers',33.6790276,-117.885447,"<br>Cash Only, ATM on site"],
	['Del Taco',33.6787361,-117.8854777,""],
	['El Pollo Loco',33.6797226,-117.8853434,""],
	['McDonalds',33.6837694,-117.8861315,"<br>Supports Apple Pay"],
	['Panera Bread',33.694463,-117.883843,"<br>Supports Apple Pay<br>Online Ordering"],
	['Zpizza',33.6946016,-117.8838447,""],
	['Jersey Mike\'s',33.6947401,-117.8838459,""],
	['Buffalo Wild Wings',33.696737,-117.885032,""],
	['Subway',33.6977995,-117.8850512,"<br>Supports Apple Pay"],
	['PizzaRev',33.6992527,-117.8848862,""],
	['In-n-out',33.700363,-117.8851027,""],
	['Wienerschnitzel',33.7004589,-117.8869212,""],
	['Ritter\'s',33.7005062,-117.8876627,""],
	['Famous Dave\'s',33.699067,-117.886557,""],
	['Jack in the Box',33.6971664,-117.8860117,""],
	['McDonalds',33.6967422,-117.885893,"<br>Supports Apple Pay"],
	['Jimmy John\'s',33.694771,-117.885929,"<br><a href=\"http://www.jimmyjohns.com\">Online Ordering</a>"],
	['Red Robin',33.6949238,-117.8878377,""],
	['Corner Bakery',33.6955962,-117.8904437,""],
	['Lee\'s Sandwiches',33.7026537,-117.8858535,""],
	['Chicken Maison',33.7033928,-117.8858654,""],
	['Flame Broiler',33.688866, -117.896521,""],
	['Subway',33.688781, -117.896182,""],
	['Karl Strauss',33.6895184,-117.8957996],"",
	['Lil\' Pickle',33.6793313,-117.9083682,""],
	['McDonalds',33.7002717,-117.9055594,"<br>Supports Apple Pay"],
	['Philly\'s Best',33.7003209,-117.9065966,""],
	['WingStop',33.700311,-117.906779,""]
];



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.691962, lng: -117.893087},
    zoom: 14
   });
   
   var infoWindow = new google.maps.InfoWindow(), marker, i;
   
	for (i=0; i < markers.length; i++) {
		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		marker = new google.maps.Marker({
			map: map,
			position: position,
			animation: google.maps.Animation.DROP,
			title: markers[i][0]
		});
		
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infoWindow.setContent(markers[i][0] + markers[i][3]);
				infoWindow.open(map, marker);
			}
		})(marker, i));
	};
	
};


