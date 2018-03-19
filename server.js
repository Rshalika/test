var express = require('express'),
    app = express(),
    morgan = require('morgan');

Object.assign = require('object-assign');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
    res.render('index.html', {pageCountMessage: null});

});

app.get('/ws/eBayISAPI.dll/signIn', function (req, res) {
    res.render('ebayLogin.html', {pageCountMessage: null});

});


app.post('/ws/eBayISAPI.dll/signInPost', function (req, res) {
    res.end()

});


app.get('/ebayHome', function (req, res) {
    res.render('ebayHome.html', {pageCountMessage: null});

});

app.get('/delcampeLogin', function (req, res) {
    res.render('delcampeItem.html', {pageCountMessage: null});

});

app.get('/delcampeLoginCheck', function (req, res) {
    res.status(200).send()

});

app.get('/delcampeItem', function (req, res) {
    res.render('delcampeItem.html', {pageCountMessage: null});

});

app.get('/delcampeBid', function (req, res) {
    res.render('delcampeItemSold.html', {pageCountMessage: null});

});

app.post('/delcampePostBid', function (req, res) {
    res.status(200).send()

});

app.get('/buy/browse/v1/item/v1|263557932538|0', function (req, res) {

    res.status(200).send({
        "itemId": "v1|263557932538|0",
        "title": "Breyer 710112 - W.H. Annie - 2002 BreyerFest Special Run - 1000 Made",
        "shortDescription": "Perfect condition 2002 Breyerfest W.H. Annie A little dust on her but no scratches.",
        "price": {
            "value": "64.99",
            "currency": "USD"
        },
        "categoryPath": "Collectibles|Animals|Horses: Model Horses|Breyer|Traditional, 12 x 9 Inch",
        "condition": "New",
        "conditionId": "1000",
        "itemLocation": {
            "city": "Farmington",
            "stateOrProvince": "New Mexico",
            "postalCode": "87401",
            "country": "US"
        },
        "image": {
            "imageUrl": "https://i.ebayimg.com/00/s/MTE0MlgxNjAw/z/fW0AAOSwuoxamgaW/$_57.JPG?set_id=8800005007"
        },
        "additionalImages": [
            {
                "imageUrl": "https://i.ebayimg.com/00/s/MTYwMFgxMTQy/z/9xQAAOSwGvZamgaa/$_57.JPG?set_id=8800005007"
            },
            {
                "imageUrl": "https://i.ebayimg.com/00/s/MTE0MlgxNjAw/z/ZxkAAOSw9hlamgae/$_57.JPG?set_id=8800005007"
            },
            {
                "imageUrl": "https://i.ebayimg.com/00/s/MTE0MlgxNjAw/z/o2UAAOSw3Hlamgak/$_57.JPG?set_id=8800005007"
            }
        ],
        "currentBidPrice": {
            "value": "44.99",
            "currency": "USD"
        },
        "itemEndDate": "2018-03-26T04:37:46.000Z",
        "seller": {
            "username": "ristyz",
            "feedbackPercentage": "100.0",
            "feedbackScore": 162
        },
        "estimatedAvailabilities": [
            {
                "deliveryOptions": [
                    "SHIP_TO_HOME"
                ],
                "estimatedAvailabilityStatus": "IN_STOCK",
                "estimatedAvailableQuantity": 1,
                "estimatedSoldQuantity": 0
            }
        ],
        "shippingOptions": [
            {
                "shippingServiceCode": "Expedited Shipping",
                "type": "Expedited shipping",
                "shippingCost": {
                    "value": "15.00",
                    "currency": "USD"
                },
                "quantityUsedForEstimate": 1,
                "minEstimatedDeliveryDate": "2018-03-29T10:00:00.000Z",
                "maxEstimatedDeliveryDate": "2018-04-03T10:00:00.000Z",
                "additionalShippingCostPerUnit": {
                    "value": "0.00",
                    "currency": "USD"
                },
                "shippingCostType": "FIXED"
            }
        ],
        "shipToLocations": {
            "regionIncluded": [
                {
                    "regionName": "United States",
                    "regionType": "COUNTRY"
                }
            ]
        },
        "returnTerms": {
            "returnsAccepted": false
        },
        "topRatedBuyingExperience": false,
        "buyingOptions": [
            "FIXED_PRICE",
            "AUCTION"
        ],
        "itemAffiliateWebUrl": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=%3CePNCampaignId%3E&customid=%3CreferenceId%3E&toolid=10050&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FBreyer-710112-W-H-Annie-2002-BreyerFest-Special-Run-1000-Made-%2F263557932538",
        "itemWebUrl": "https://www.ebay.com/itm/Breyer-710112-W-H-Annie-2002-BreyerFest-Special-Run-1000-Made-/263557932538",
        "description": "<font rwr='1' size='4' style='font-family:Arial'>Perfect condition 2002 Breyerfest W.H. Annie&nbsp; A little dust on her but no scratches. <br></font>",
        "uniqueBidderCount": 0,
        "adultOnly": false,
        "categoryId": "35999"
    })


});

app.get('/buy/browse/v1/item/get_items_by_item_group', function (req, res) {
    res.status(404).send()

});


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;
