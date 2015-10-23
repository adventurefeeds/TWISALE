/**
 * Created by mosheborochov on 19/10/15.
 */
console.log(QueryString.q);
var serviceObj = {
    US:{
        1:"http://yssads.ddc.com/x1.php?ua=Mozilla%2F5.0+%28Windows+NT+6.1%3B+WOW64%3B+rv%3A13.0%29+Gecko%2F20100101+Firefox%2F13.0.1&ip=65.66.66.66&surl=http%3A%2F%2Ffilter.adventurefeeds.com%2F%3Fq%3Dbest%2Bdeals&kw=shoes&c=22842&n=10&algo=0&dbld=1",
        2:"http://sws.pricegrabber.com/search_xml.php?pid=2949&key=bbddee6ef9e0bca18e4911f081971735c3f3c5eacc1c139deb64e579&version=2.55&q=best+deals&limit=10&visitor_ip=65.66.66.66&offers=1&offer_limit=1&mode=adventurefeeds_123456",
        3:"http://catalog.bizrate.com/services/catalog/v1/us/product?publisherId=607205&apiKey=7ff6d940263bc47e43beb3dd22694fcc&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        4:"http://api.wtpn.twenga.com/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals=s123456&nb_results=10&channel=s123456",
        5:"http://catalog.bizrate.com/services/catalog/v1/us/product?publisherId=608829&apiKey=b3a883c425a77873795327d56161f32b&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456&mature=1"
    },
    UK:{
        1:"http://catalog.bizrate.co.uk/services/catalog/v1/api/product/3?publisherId=609086&apiKey=27cf12486a2ebdb974d488ad8d2d24f4&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        2:"http://api.wtpn.twenga.com/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals&nb_results=10&channel=s123456"
    },
    FR:{
        1:"http://catalog.shopzilla.fr/services/catalog/v1/api/product/4?publisherId=609085&apiKey=5c047798cb7256860e6a3f1c10014022&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        2:"http://api.wtpn.twenga.com/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals&nb_results=10&channel=s123456"
    },
    CA:{
        1:"http://catalog.bizrate.com/services/catalog/v1/api/product/18?publisherId=608225&apiKey=46ad3dac8d7a59811ba16cd6a810c583&keyword=best+deals&biddedOnly=true&imageOnly=true&results=10&placementId=123456&format=xml"
    },
    IT:{
        1:"http://catalog.shopzilla.it/services/catalog/v1/api/product/12?publisherId=608607&apiKey=e2390ee7fa7d84dc4c7811350077cb30&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        2:"http://it.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96945961&timestamp=1444833023&hash=IV6m1eGFIqTrkOjWqtfsUA--",
        3:"http://api.wtpn.twenga.it/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals"
    },
    ES:{
        1:"http://catalog.shopzilla.es/services/catalog/v1/api/product/13?publisherId=608606&apiKey=4888cdac44d9ff45ddf04ae11d396cee&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        2:"http://es.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96945980&timestamp=1444832997&hash=tf_8gnipoP93KP8_ZWYudA--",
        3:"http://api.wtpn.twenga.es/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals"
    },
    DE:{
        1:"http://catalog.shopzilla.de/services/catalog/v1/api/product/5?publisherId=608226&apiKey=0852745c1e23ef8e20be58004be1177e&keyword=best+deals&offersOnly=true&biddedOnly=true&imageOnly=true&results=10&placementId=123456",
        2:"http://de.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96948321&timestamp=1444832859&hash=QWZM2BU3X0bqJacOwvzRbA-- ",
        3:"http://api.wtpn.twenga.de/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals"
    },
    NL:{
        1:"http://nl.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96947292&timestamp=1444832888&hash=1ObmRjeCbhnaZAq9wuB.xA- -",
        2:"http://api.wtpn.twenga.nl/v2.1/search/offer?cack=cc38c75ef81611ebf2ce62d11ef4f45bc127ef67&confkey=533d592363960&e=eyJrIjoiNTMzZDU2Nzc1ODI1OCIsImMiOiI1IiwibCI6IjE1IiwibyI6InhtbCJ9&keyword=best+deals"
    },
    SE:{
        1:"http://se.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96946450&timestamp=1444832932&hash=lP5KDhu_OtfqyMExeuBABw--"
    },
    NO:{
        1:"http://no.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96946447&timestamp=1444832948&hash=bua9Qb4JgZxazP5xat3qvw--"
    },
    DK:{
        1:"http://dk.shoppingapis.kelkoo.com/V3/productSearch?query=best+deals&sort=default_ranking&start=1&results=10&show_products=1&show_subcategories=0&show_refinements=0&custom1=123456&addParams=true&aid=96946444&timestamp=1444832981&hash=o9NGkJbrRu1ElEBlzMTqeg--"
    }
};

function xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};
function templateThumbnail(obj){
    var strinToReturn = '<div class="col-sm-6 col-md-3">' +
        '<div class="thumbnail"> ' +
        '<img src="'+obj.imageSrc+'" alt="'+obj.imageTitle+'"> ' +
        '<div class="caption"> ' +
        '<h3>'+obj.title+'</h3> ' +
        '<p>'+obj.description+'</p> ' +
        '<p>'+obj.price+'</p> ' +
        '<p><a href="'+obj.link+'" class="btn btn-primary" role="button">Purchase</a></p> ' +
        '</div> ' +
        '</div> ' +
        '</div>';
    return strinToReturn;
}
function apiWtpn_yssads(url){
    $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: function(res) {
            //console.log(res);
            var xmlString = (new XMLSerializer()).serializeToString(res);
            RegExp.escape = function(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            };
            var find = RegExp.escape('<![CDATA[');
            var re = new RegExp(find, 'g');
            var str = xmlString.replace(re, '');

            var find = RegExp.escape(']]>');
            var re = new RegExp(find, 'g');
            var finalStr = str.replace(re, '');


            console.log(finalStr);
            var xmlDoc = jQuery.parseXML(finalStr);
            var jsonRes = xmlToJson(xmlDoc);
            console.log(jsonRes);
            var arr = []
            if(url.indexOf("api.wtpn") > -1){
                var completeDom = '<div class="row">';
                $(jsonRes.root.tw_objects.tw_object.results.result).each(function(entry){
                    var tmpObject = {imageSrc:this.image.medium.url['#text'], title: this.name['#text'], price: this.price['#text'], description: this.description['#text']};
                    var stringToDom = templateThumbnail(tmpObject);
                    if((entry+1)%4 == 0){
                        completeDom = completeDom + stringToDom + '</div><div class="row">';
                    }
                    else{
                        completeDom = completeDom + stringToDom
                    }

                });
                $('.app-container').append(completeDom);
            }

        }
    });
}
function getData(url){
    if(url.indexOf("api.wtpn") > -1 || url.indexOf("yssads.ddc") > -1){
        apiWtpn_yssads(url);
    }
}
console.log(serviceObj);
$.ajax({
    url: 'http://www.geoplugin.net/json.gp?ip=' + userip + '&jsoncallback=handleresponse',
    method: "GET",
    crossDomain: true,
    dataType: 'jsonp',
    cache: true,
    jsonpCallback: 'handleresponse',
    headers: {'Access-Control-Allow-Origin': '*'},
    success: function (res) {
        var tmpObject = serviceObj[res.geoplugin_countryCode];
        var serviceArr=[];
        for (var property in tmpObject) {
            if (tmpObject.hasOwnProperty(property)) {
                var result = tmpObject[property].replace("best+deals", QueryString.q);
                serviceArr.push(result);
                getData(result + '&subid=' + QueryString.sid);
            }
        }
        console.log(serviceArr);
    },
    error: function (res) {
        console.log(res);
    }
});
$(document).ready(function () {
    $('#searchForm').val(QueryString.q);
});