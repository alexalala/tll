(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(window).load(function() {
		$('img.caption').captionjs();		
		var galiria = new Galiria();
});

var preloadedImages = [
    {url:'img/pics/abbey-cinema.jpg', name:'Abbey Cinema, Wavertree', desc:'The Abbey Cinema was designed by a local architect and first opened in 1939. In 1964, the it underwent a refurbishment to "Cinerama" which proved a spectacular hit with the Wavertree locals, including adding a curved screen and an incredible sound system to the cinema. It is now a Co-op supermarket.'},
    {url:'img/pics/blue-coat-school.jpg', name:'The Blue Coat School', desc:'Shown in this picture is the Mystery Public Park blanketed in snow, looking ahead to the silhouette of the Blue Coat School and its clock tower.'},
    {url:'img/pics/bligh-street.jpg', name:'Bligh Street, Wavertree', desc:'This picture embodies the true spirit of the locals.'},
    {url:'img/pics/banksy-in-liverpool.jpg', name:'Banksy In Liverpool', desc:'This portrays the street artist Banksy\'s graffiti rat on the Whitehouse public house on the corner of Duke Street and Berry Street.'},
    {url:'img/pics/shankly.jpg', name: 'Bill Shankly', desc:'Bill Shankly was a Scottish footballing legend best known for being the manager of Liverpool. He took them over when they were in the second division and not only got them promoted to the first division, but also won 3 division championships, 2 FA cups and one UEFA cup with them - molding them into the world class team they are today.'},
    {url:'img/pics/cambridge-street-mission.jpg', name: 'The Cambridge Street Mission, Wavertree', desc:'A portrayal of the Cambridge Street Mission, on Cambridge Street, Wavertree. It is now student accomodation.'},
    {url:'img/pics/cameo.jpg', name:'The Cameo Cinema', desc:'The Cameo Cinema in Wavertree became infamous for a double murder of the cinema manager and his assistant for the day\'s box office takings in 1949. George Kelly was arrested, found guilty and subsequently (and controversially) was hung for the crime.'},
    {url:'img/pics/carlisle-street-wavertree.jpg', name:'Carlisle Street, Wavertree', desc:'This image shows Carlisle Street in the depths of winter, with the Gasometers in the background. All of the houses in this image have since been demolished in an attempt to modernise the streets.'}, 
    {url:'img/pics/falling-star.jpg', name:'Falling Star', desc:'A shooting star above the Wavertree skyline, showing St. Bridgets Church in shadow.'} 
];

var images = [];
var imagesLeft = [ 
    {url:'img/pics/gas-works-spofforth-road.jpg', name:'The Spofforth Road Gas Works', desc:'The background of this image shows the (now derelict) gasometers in Wavertree, built in the 1840\'s.'}, 
    {url:'img/pics/grand-cinema.jpg', name:'The Grand Cinema', desc:'This picture depicts the Grand Cinema on Smithdown Road in all its glory. It no longer exists.'}, 
    {url:'img/pics/hairdresser.jpg', name:'The Hairdresser', desc:'A Wavertree Hairdressers, belonging to Bob Cochran (Bunty). At the time he only charged 20p for a haircut'}, 
    {url:'img/pics/high-street-wavertree.jpg', name:'Wavertree High Street', desc:'This painting shows the High Street of Wavertree covered in a blanket of snow. In the background you can see the Picton Clock Tower. Reference to Wavertree can be found in the Doomsday Book, where it was referred to as "Wartree", "Vauretea" and "Wavre".'}, 
    {url:'img/pics/holy-trinity.jpg', name:'The Holy Trinity Church', desc:'Built in 1794, the Holy Trinity Church is an active Anglican Parish Church in the deanery of Toxteth and Wavertree. More information on the church can be found on <a href="http://www.holytrinitywavertree.org.uk">this website</a>. This picture shows the church at Christmas time.'}, 
    {url:'img/pics/magnet-cinema.jpg', name:'The Magnet Cinema', desc:'The Magnet Cinema was opened in 1914 on Picton Road and only had one screen, yet could seat up to 1038 people. The building has now lost its roof and has ironically been replaced with a roofing company.'}, 
    {url:'img/pics/picton-clock-tower.jpg', name:'The Picton Clock Tower', desc:'Created in 1884 by James Picton as a memorial to his wife, this tower has a clock face on each of its 4 sides.'}, 
    {url:'img/pics/pye-street.jpg', name:'Pye Street', desc:'Pye Street is a small, narrow lane that is round the back of the old ESSO petrol station. It still has some remarkable features that have remained, such as the victorian streetlights depicted in the painting.'}, 
    {url:'img/pics/railway-sidings-wavertree.jpg', name:'Railway Sidings, Wavertree', desc:'This painting is a night scene, illustrating railway workers loading the trains up with coal.. well before the days of health and safety! These are the Down Hill sidings on Edge Hill.'}, 
    {url:'img/pics/the-lovers-fir-lane.jpg', name:'The Lovers, Fir Lane', desc:'A black and white painting, showing a lady and gentleman strolling through Fir Lane in the winter. In the background you can see the Blue Coat School, St. John\'s beacon (Radio City Tower) and both Liverpool Cathedrals.'}, 
    {url:'img/pics/the-street-singer.jpg', name:'The Street Singer', desc:'A street singer that travelled around the district quite regularly, earning his living.'}, 
    {url:'img/pics/the-wellington.jpg', name:'The Wellington', desc:'The Wellington Public House on Picton Road, with its vibrant red exterior. It is locally known as \'The Wellie\''}, 
    {url:'img/pics/victorian-drinking-fountain.jpg', name:'Victorian Drinking Fountain', desc:'After epidemics like Cholera, public drinking fountains became popular in the Victorian Age as they were a rare clean water supply for the masses. In northern cities like Liverpool and Hull, they were supplied by civic authorities. This particular one stands on Picton Road and remains as decoration.'}, 
    {url:'img/pics/victorian-letterbox.jpg', name:'Victorian Letterbox', desc:'This painting shows a little bit of history among today\'s 21st Century Life. The old Victorian Letterbox shown in this image has remained functional until relatively recently, when it was destroyed by vandals lighting a firework inside of it.'}, 
    {url:'img/pics/wavertree-train-station.jpg', name:'Wavertree Train Station', desc:'Wavertree Station was opened in 1891 and was on the main southern line from Liverpool Lime Street. As can be seen in the picture, the station was accessed from between the bridges that supported the lines. The station closed in 1958 and nothing now remains at that part of the track.'}, 
    {url:'img/pics/wellington-avenue-wavertree.jpg', name:'Wellington Avenue, Wavertree', desc:'This painting portrays Wellington Avenue in Wavertree, which has now since been modernised.'}
];
var imagesPerScreen = 6;
var imagesTaken;
var offset = 50;
var alreadyLoading;

//gallery code
if (window.location.pathname == "/") {
    $(window).scroll(function(alreadyLoading, imagesTaken) {
        if (($(window, ".gallery").scrollTop() + $(window).height() + offset >= $(document).height()) && alreadyLoading !== true) { 
            
            alreadyLoading = true;
           
            // take imagesPerScreen number of images out of imagesLeft and into its own variable
            imagesTaken = imagesLeft.slice(0, imagesPerScreen);

            // loop through the images you have retrieved and make HTML using jQuery and store into a variable
            $(imagesTaken).each(function(index, value){
                var $name = value.name;
                var $image = value.url;
                var $sliceOffUrl = $image.slice(9);
                var $simpleDesc = $sliceOffUrl.split('.')[0];
                var $imgStyle = $('<div class="col-xs-6 col-md-6 galiria"><figure class="captionjs animated"><figcaption style="margin-bottom:0px; bottom:-58px;">' + $name + '</figcaption><img class="img1" src="' + $image + '" alt="' + $name + '" id="' + $simpleDesc + '"></figure></div>');
                images.push(value);
                imagesLeft.splice(value, 1);
                
                  
                // append the html content in the variable to the end of the existing images in the DOM             
                $(".contentRow").append($imgStyle); 
            });
        }
        //on click load imageviewer and img description into hash
        $("img").ready(function(){
            $(".img1").click(function(){
                var src = $(this).attr("id");
                window.location.href = '/imageView#' + src;
            });
        });

    });
}



//image view page code
if (window.location.pathname.indexOf("/imageView") === 0) {

    //get short desc from url
    var imgShortDesc = location.hash.substr(1);
    var imageObject;

    //get object from hash
    (function findFromHash() {

        var findByUrl = 'img/pics/' + imgShortDesc + '.jpg';

        function getDescription(obj){
            return obj.url === findByUrl;
        }
        
        imageObject = imagesLeft.find(getDescription) || preloadedImages.find(getDescription);
    })();


    //append description to imageViewer
    var imageName = imageObject.name;
    $(".titleHolder").append('<h2 class="imageTitle">' + imageName + '</h2>');

    //append name to breadcrumb
    $(".here").append(imageName);

    //append image to imageViewer
    var imageUrl = imageObject.url;
    $(".imageHolder").append('<img class="imgLarge" src="' + imageUrl + '" alt="' + imageName + '">');

    //append description to imageViewer
    var imageDesc = imageObject.desc;
    $(".descHolder").append('<p class="imgDescription">' + imageDesc + '</p>');


    //function to allow a next button to scroll through pictures

    //if not the last picture in preloaded images 

    //else images left array

    //else images array

    //find image in array

    //load imageViewer page for next image using hash
    /*
    var inThisArray = function(i){
        return($.inArray( imgShortDesc, i));
    };

    var nextImage = function() {
        if (inThisArray(preloadedImages)){

            var indexOfCurrentPic
            if (preloadedImages.lastIndexOf())
        }
    }();*/
}
















},{}]},{},[1]);
