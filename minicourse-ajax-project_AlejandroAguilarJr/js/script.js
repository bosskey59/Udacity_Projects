
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    var streetStr= $('#street').val();
    var cityStr= $('#city').val();
    var address = streetStr+', '+cityStr;

    $greeting.text('So you want to live at '+ address +'?');

    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';

    $body.append('<img class="bgimg" src="'+ streetviewURL +'">');

    // Nyt code

    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "7059b20dbf864c67bd1eaebf915d7c17",
      'q': streetStr
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
        console.log(result);
        $nytHeaderElem.text('New York Times articles about ' + streetStr);

        articles=result.response.docs;
        for (var i=0; i< articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">'+ '<a href="' +article.web_url+ ' " >' +article.headline.main+ '</a>'+
                '<p>'+ article.snippet +'</p>'+
                '</li>');
    }
    }).fail(function(err) {
        $nytHeaderElem.text('New York Times articles could not be loaded for: ' + streetStr);
        throw err;
    });

    var wikiurl= 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ cityStr + '&format=json&callback=wikiCallback' ;
    $.ajax({
        url: wikiurl,
        method: 'GET',
        dataType:"jsonp",
        success: function(result){
            console.log(result);
            var article_titles= result[1];
            var wiki_urls= result[3];

            for( var i=0; i<article_titles.length; i++){
                articleStr = article_titles[i];
                urlStr = wiki_urls[i];
                $wikiElem.append('<li> <a href="' +urlStr+ '">' + articleStr+ '</a></li>');

            }
        }
    })


    return false;
};

$('#form-container').submit(loadData);


