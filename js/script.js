var mykey = config.NY_KEY;

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
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So you want to live at ' + address + '?')

    var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';

    $body.append('<img class="bgimg" src="' + streetViewUrl + '">');

    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': mykey,
        'q': "Thanksgiving",
        'fl': "snippet, web_url"
    });

    $.getJSON(url, function(data) {
        var docs = data.response.docs;
        for(var i in docs) {
            console.log(docs[i].snippet);
            console.log(docs[i].web_url);
        }
    });

    return false;
};

$('#form-container').submit(loadData);
