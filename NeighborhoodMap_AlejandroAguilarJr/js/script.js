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
                content='<h3><a href="'+location.url+'">'+location.title+'</h3>'+'<img src="'+location.snippetImgURL +'"">'
                infowindow.setContent(content);
                infowindow.open(map, this);
                map.panTo(location.position); 
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function(){marker.setAnimation(null);}, 1450);

              });
              return marker;
    };

    

    for(var i=0;i<markers.length;i++){
        getData(i); 
        markers[i].marker=setMarker(markers[i]);
};

ko.applyBindings(new viewModel());
}


var markers = [

{
    position:{lat: 27.5301843, lng: -99.4701397},
    map:map,
    title: 'Ravi',
    marker:'',
    yelp:'https://api.yelp.com/v2/business/taquitos-ravi-restaurant-laredo-3'
},

{
    position:{lat: 27.53582, lng: -99.4847241},
    map:map,
    title: 'Dannys',
    marker:'',
    yelp:'https://api.yelp.com/v2/business/dannys-laredo'
},

{
    position:{lat: 27.566054, lng: -99.473789},
    map:map,
    title: 'Bolillos',
    marker:'',
    yelp:'https://api.yelp.com/v2/business/bolillos-cafe-laredo'
},

{
    position:{lat: 27.5085654, lng: -99.4760447},
    map:map,
    title: 'Rauls BBQ',
    marker:'',
    yelp:'https://api.yelp.com/v2/business/rauls-bbq-laredo'
},

{
    position:{lat: 27.506831, lng: -99.476526},
    map:map,
    title: 'TPs',
    marker:'',
    yelp:'https://api.yelp.com/v2/business/taco-palenque-laredo-7?osq=Taco+Palenque'
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

// ajax request solved by referencing https://gist.github.com/mnemonicflow/1b90ef0d294c692d24458b8378054c81

var getData= function(x){

    var yelp=markers[x].yelp;
    var auth = { 
      //
      // Update with your auth tokens.
      //
      consumerKey: "NvthsWb2e1em8ACUnPZJ7Q", 
      consumerSecret: "Xk94g9QCsokikQGa15b3GNCL-KA",
      accessToken: "voTVWiw8iRXDV6wE7HW8gfwfQdBuEH9w",
      // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
      // You wouldn't actually want to expose your access token secret like this in a real application.
      accessTokenSecret: "Giq18Hp87NY9cyMw4JBF5Hrq87k",
      serviceProvider: { 
        signatureMethod: "HMAC-SHA1"
      }
    };

    var ll = '27.530560, -99.480359';
    var radius = '4000';

    var accessor = {
      consumerSecret: auth.consumerSecret,
      tokenSecret: auth.accessTokenSecret
    };

    parameters = [];
    parameters.push(['ll', ll]);
    parameters.push(['radius', radius]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

    var message = { 
      'action': yelp,
      'method': 'GET',
      'parameters': parameters 
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
    console.log(parameterMap);



    $.ajax({
      'url': yelp,
      'data': parameterMap,
      'cache': true,
      'dataType': 'jsonp',
      'callback': 'cb',
      'success': function(data) {
        console.log(data);
        markers[x].url= data.url;
        markers[x].snippetImgURL= data.image_url;


      }
    });
};















