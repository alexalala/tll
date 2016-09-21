$(window).load(function() {
		$('img.caption').captionjs();		
		var galiria = new Galiria();
});

var preloadedImages = [
    {url:'img/pics/abbeyCinema.jpg', name:'Abbey Cinema, Wavertree', desc:'The Abbey Cinema was designed by a local architect and first opened in 1939. In 1964, the it underwent a refurbishment to "Cinerama" which proved a spectacular hit with the Wavertree locals, including adding a curved screen and an incredible sound system to the cinema.'},
    {url:'img/pics/blueCoatSchool.jpg', name:'The Blue Coat School', desc:'Shown in this picture is the park adjacent to Fir Lane blanketed in snow, looking ahead to the silhouette of the Blue Coat School and its clock tower.'},
    {url:'img/pics/blighStreet.jpg', name:'Bligh Street, Wavertree', desc:'This picture embodies the true spirit of the locals.'},
    {url:'img/pics/banksyInLiverpool.jpg', name:'Banksy In Liverpool', desc:'This portrays the street artist Banksy\'s graffiti rat on the Whitehouse pub on the corner of Duke Street and Berry Street.'},
    {url:'img/pics/shankly.jpg', name: 'Bill Shankly', desc:'Bill Shankly was a Scottish footballer best known for being the manager of Liverpool. He took them over when they were in the second division and not only got them promoted to the first division, but also won 3 division championships, 2 FA cups and one UEFA cup with them - molding them into the world class team they are today.'},
    {url:'img/pics/cambridgeStreetMission.jpg', name: 'The Cambridge Street Mission, Wavertree', desc:'A portrayal of the Cambridge Street Mission, on Cambridge Street, Wavertree.'},
    {url:'img/pics/cameo.jpg', name:'The Cameo Cinema', desc:'The Cameo Cinema in Wavertree became infamous for a double murder that occurred there in 1949.'} 
];

var images = [];
var imagesLeft = [
    {url:'img/pics/carlisleStreetWavertree.jpg', name:'Carlisle Street, Wavertree', desc:'This image shows Carlisle Street in the depths of winter, with the Gasometers in the background.'}, 
    {url:'img/pics/fallingStar.jpg', name:'Falling Star', desc:'A shooting star above the Wavertree skyline.'}, 
    {url:'img/pics/gasWorksSpofforthRoad.jpg', name:'The Spofforth Road Gas Works', desc:'The background of this image shows the (now derelict) gasometers in Wavertree, built in the 1840\'s.'}, 
    {url:'img/pics/grandCinema.jpg', name:'The Grand Cinema', desc:'This picture depicts the Grand Cinema on Smithdown Road in all its glory.'}, 
    {url:'img/pics/hairdresser.jpg', name:'The Hairdresser', desc:'A Wavertree Hairdressers.'}, 
    {url:'img/pics/highStreetWavertree.jpg', name:'Wavertree High Street', desc:'This painting shows the High Street of Wavertree covered in a blanket of snow. In the background you can see the Picton Clock Tower. Reference to Wavertree can be found in the Doomsday Book, where it was referred to as "Wartree", "Vauretea" and "Wavre".'}, 
    {url:'img/pics/holyTrinity.jpg', name:'The Holy Trinity Church', desc:'Built in 1794, the Holy Trinity Church is an active Anglican Parish Church in the deanery of Toxteth and Wavertree. More information on the church can be found on <a href="http://www.holytrinitywavertree.org.uk">this website</a>.'}, 
    {url:'img/pics/magnetCinema.jpg', name:'The Magnet Cinema', desc:'The Magnet Cinema was opened in 1914 and only had one screen, yet could seat up to 1038 people. The building has now lost its roof and has ironically been replaced with a roofing company.'}, 
    {url:'img/pics/pictonClockTower.jpg', name:'The Picton Clock Tower', desc:'Created in 1884 by James Picton as a memorial to his wife, this tower has a clock face on each of its 4 sides.'}, 
    {url:'img/pics/pyeStreet.jpg', name:'Pye Street', desc:'Pye Street is a small, narrow lane that is round the back of the old ESSO petrol station. It still has some remarkable features that have remained, such as the victorian streetlights depicted in the painting.'}, 
    {url:'img/pics/railwaySidingsWavertree.jpg', name:'Railway Sidings, Wavertree', desc:'This painting is a night scene, illustrating railway workers loading the trains up with coal.. well before the days of health and safety!'}, 
    {url:'img/pics/theLoversFirLane.jpg', name:'The Lovers, Fir Lane', desc:'A black and white painting, showing a lady and gentleman strolling through Fir Lane in the winter. In the background you can see the Blue Coat School, St. John\'s beacon (Radio City Tower) and the Liverpool Metropolitan Cathedral.'}, 
    {url:'img/pics/theStreetSinger.jpg', name:'The Street Singer', desc:'A street singer earning his living.'}, 
    {url:'img/pics/theWellington.jpg', name:'The Wellington', desc:'The Wellington Public House on Picton Road, with its vibrant red exterior.'}, 
    {url:'img/pics/victorianDrinkingFountain.jpg', name:'Victorian Drinking Fountain', desc:'After epidemics like Cholera, public drinking fountains became popular in the Victorian Age as they were a rare clean water supply for the masses. In northern cities like Liverpool and Hull, they were supplied by civic authorities.'}, 
    {url:'img/pics/victorianLetterbox.jpg', name:'Victorian Letterbox', desc:'This painting shows a little bit of history among today\'s 21st Century Life.'}, 
    {url:'img/pics/wavertreeTrainStation.jpg', name:'Wavertree Train Station', desc:'Wavertree Station was opened in 1891 and was on the main southern line from Liverpool Lime Street. As can be seen in the picture, the station was accessed from between the bridges that supported the lines. The station closed in 1958 and nothing now remains at that part of the track.'}, 
    {url:'img/pics/wellingtonAvenueWavertree.jpg', name:'Wellington Avenue, Wavertree', desc:'A painting of Wellington Avenue in Wavertree.'}
];
var imagesPerScreen = 6;
var imagesTaken;
var descriptionIndex = 0;
var offset = 50;
var alreadyLoading;

//gallery code
if ($("body").data("title") === "gallery") {
    $(window).scroll(function() {
        if (($(window, ".gallery").scrollTop() + $(window).height() + offset >= $(document).height()) && alreadyLoading !== true)
        { 
            
            alreadyloading = true;
           
            // take imagesPerScreen number of images out of imagesLeft and into its own variable
            imagesTaken = imagesLeft.slice(0, imagesPerScreen);

            // loop through the images you have retrieved and make HTML using jQuery and store into a variable
            $(imagesTaken).each(function(index, value){
                var $name = value.name;
                var $image = value.url;
                var $sliceOffUrl = $image.slice(9);
                var $simpleDesc = $sliceOffUrl.split('.')[0];
                var $imgStyle = $('<div class="col-xs-12 col-md-6 galiria"><figure class="captionjs animated"><figcaption itemprop="name" style="margin-bottom:0px; bottom:-58px;">' + $name + '</figcaption><img class="img1" src="' + $image + '" alt="' + $simpleDesc + '"></figure></div>');
                images.push(value);
                imagesLeft.splice(value, 1);
                
                  
                // append the html content in the variable to the end of the existing images in the DOM             
                $(".mainContent").append($imgStyle);
            });
        }
        //on click load imageviewer and img description into hash
        $("img").ready(function(){
            $(".img1").click(function(){
                var src = $(this).attr("alt");
                window.location.href = '/imageView#' + src;
            });
        });

    });
}



//image view page code
if ($("body").data("title") === "imageView") {

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
    imageName = imageObject.name;
    $(".titleHolder").append('<h2 class="imageTitle">'+imageName+'</h2>');

    //append image to imageViewer
    imageUrl = imageObject.url;
    $(".imageHolder").append('<img class="imgLarge" src="' + imageUrl + '">');

    //append description to imageViewer
    imageDesc = imageObject.desc;
    $(".descHolder").append('<p class="imgDescription">' + imageDesc + '</p>');
}














