
  var $images = $('#images');

  var totalCats=2;
  for (var i=0; i<totalCats; i++){
    var catName = 'kitten'+i;
    var Counter ='Counter'+i;
    console.log(catName);
    $images.append('<div> <h3>'+catName+'</h3> <img id="'+ catName +'" src="http://placekitten.com/g/400/300"><p>'+Counter+': <span id="'+Counter+'">0</span></p></div>' );

  };

var elem = document.getElementById('kitten0');
var total0=0;
elem.addEventListener('click', function(){
  total0+= 1;
  document.getElementById('Counter0').innerHTML = total0;
}, false);

var elem = document.getElementById('kitten1');
var total1=0;
elem.addEventListener('click', function(){
  total1+= 1;
  document.getElementById('Counter1').innerHTML = total1;
}, false);