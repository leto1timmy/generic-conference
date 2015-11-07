            var map;
            var lat=52.2296756;
            var lng=21.012228700000037;
            var zoom=10;
         
            function initialize() {
                var myLatlng = new google.maps.LatLng(lat,lng);
                var myOptions = {
                    zoom: zoom,
                    center: myLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [
                                {
                                    "featureType": "administrative",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                        {
                                            "color": "#444444"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "landscape",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#f2f2f2"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": -100
                                        },
                                        {
                                            "lightness": 45
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "simplified"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "labels.icon",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#c5cad1"
                                        },
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                }
                            ]
                }
                var map = new google.maps.Map(document.getElementById("map"), myOptions);
                 
                var markers = [ 'Warszawa', 52.2296756, 21.012228700000037];
                 
                var image = 'style/icons/marker_shadow.png';
                                 

                    
                    var myLatLng = new google.maps.LatLng(markers[1], markers[2]);
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: markers[0],
                        icon: image
                    });
                
                var dymek = new google.maps.InfoWindow();
                var wspolrzedne = new google.maps.LatLng(52.2296756,21.012228700000037);
            
                    dymek.setContent('Miejsce <br /> ul. Adres 00');
                    dymek.setPosition(new google.maps.LatLng(52.2296756,21.012228700000037));
                    dymek.open(map);
        }            