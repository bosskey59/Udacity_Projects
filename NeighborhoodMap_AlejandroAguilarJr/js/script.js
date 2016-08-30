// map API initialize
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.530560, lng: -99.480359},// 27.530560, -99.480359 laredo, TX
        zoom: 13
     });

    // var marker = new google.maps.Marker({
    //     position: markers[0].position,
    //     map: map,
    //     title: markers[0].title
    // });

    var infowindow = new google.maps.InfoWindow();

    var marker;

    for (var i = 0; i < markers.length; i++) { 
      marker = new google.maps.Marker({
        position:markers[i].position,
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(markers[i].title);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


}

var markers =[

{
    position:{lat: 27.5299328, lng: -99.4702068},
    map:map,
    title: 'Safari'
},

{
    position:{lat: 27.53582, lng: -99.4847241},
    map:map,
    title: 'Dannys'
},

{
    position:{lat: 27.566054, lng: -99.473789},
    map:map,
    title: 'Bolillos'
},

{
    position:{lat: 27.5085654, lng: -99.4760447},
    map:map,
    title: 'Rauls BBQ'
},

{
    position:{lat: 27.506831, lng: -99.476526},
    map:map,
    title: 'TPs'
}

];
      



