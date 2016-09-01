// map API initialize
var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.530560, lng: -99.480359},// 27.530560, -99.480359 laredo, TX
        zoom: 13
     });
var infowindow = new google.maps.InfoWindow();

    function setMarker(location){
        

            var marker = new google.maps.Marker({
                position:location.position,
                map: map
              });
            

              google.maps.event.addListener(marker, 'click', function() {
                  infowindow.setContent(location.title);
                  infowindow.open(map, this);
                  map.panTo(location.position); 
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                  setTimeout(function(){marker.setAnimation(null);}, 1450);

              });
              return marker;
    };

    for(var i=0;i<markers.length;i++){
    markers[i].marker=setMarker(markers[i]);
};

ko.applyBindings(new viewModel());
}


var markers = [

{
    position:{lat: 27.5299328, lng: -99.4702068},
    map:map,
    title: 'Safari',
    marker:''
},

{
    position:{lat: 27.53582, lng: -99.4847241},
    map:map,
    title: 'Dannys',
    marker:''
},

{
    position:{lat: 27.566054, lng: -99.473789},
    map:map,
    title: 'Bolillos',
    marker:''
},

{
    position:{lat: 27.5085654, lng: -99.4760447},
    map:map,
    title: 'Rauls BBQ',
    marker:''
},

{
    position:{lat: 27.506831, lng: -99.476526},
    map:map,
    title: 'TPs',
    marker:''
}

];

//make markers into an observable array.
var viewModel = function() {
    var self= this;
    self.locations=ko.observableArray(markers);

    self.query = ko.observable('');

    // filters through markers and sets visibility based on filter 
    self.search = ko.computed(function() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].marker.setVisible(true);
        }

        return ko.utils.arrayFilter(self.locations(), function(loc) {
            if (loc.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {
                return true;
            }

            loc.marker.setVisible(false);
            return false;
        });
    });    

    //allows list to be clicked activing the info window for that list item
    this.setLocation = function(clickedLocation) {
        google.maps.event.trigger(clickedLocation.marker, 'click');
    };


};













