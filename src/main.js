$(window).load(function() {
		$('img.caption').captionjs();		
		var galiria = new Galiria();
});

var preloadedImages = [
    {url:'img/pics/abbeyCinema.jpg', name:'Abbey Cinema, Wavertree'},
    {url:'img/pics/blueCoatSchool.jpg', name:'The Blue Coat School'},
    {url:'img/pics/blighStreet.jpg', name:'Bligh Street, Wavertree'},
    {url:'img/pics/banksyInLiverpool.jpg', name:'Banksy In Liverpool'},
    {url:'img/pics/shankley.jpg', name: 'Bill Shankley'},
    {url:'img/pics/cambridgeStreetMission', name: 'The Cambridge Street Mission, Wavertree'},
    {url:'img/pics/cameo.jpg', name:'The Cameo Cinema'} 
];

var images = [];
var imagesLeft = [
    {url:'img/pics/carlisleStreetWavertree.jpg', name:'Carlisle Street, Wavertree'}, 
    {url:'img/pics/fallingStar.jpg', name:'Falling Star'}, 
    {url:'img/pics/gasWorksSpofforthRoad.jpg', name:'Spofforth Road Gas Works'}, 
    {url:'img/pics/grandCinema.jpg', name:'Grand Cinema'}, 
    {url:'img/pics/hairdresser.jpg', name:'Hairdresser'}, 
    {url:'img/pics/highStreetWavertree.jpg', name:'Wavertree High Street'}, 
    {url:'img/pics/holyTrinity.jpg', name:'Holy Trinity'}, 
    {url:'img/pics/magnetCinema.jpg', name:'Magnet Cinema'}, 
    {url:'img/pics/pictonClockTower.jpg', name:'Picton Clock Tower'}, 
    {url:'img/pics/pyeStreet.jpg', name:'Pye Street'}, 
    {url:'img/pics/railwaySidingsWavertree.jpg', name:'Railway Sidings, Wavertree'}, 
    {url:'img/pics/theLoversFirLane.jpg', name:'The Lovers, Fir Lane'}, 
    {url:'img/pics/theStreetSinger.jpg', name:'The Street Singer'}, 
    {url:'img/pics/theWellington.jpg', name:'The Wellington'}, 
    {url:'img/pics/victorianDrinkingFountain.jpg', name:'Victorian Drinking Fountain'}, 
    {url:'img/pics/victorianLetterbox.jpg', name:'Victorian Letterbox'}, 
    {url:'img/pics/wavertreeTrainStation.jpg', name:'Wavertree Train Station'}, 
    {url:'img/pics/wellingtonAvenueWavertree.jpg', name:'Wellington Avenue, Wavertree'}
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
                
                  
                            
                $(".mainContent").append($imgStyle);
            });
            // append the html content in the variable to the end of the existing images in the DOM 

        }

        $("img").ready(function(){
            $(".img1").click(function(){
                var src = $(this).attr("alt");
                window.location.href = '/imageView#' + src;

                //document.getElementById('imageHolder').insertAdjacentHTML('afterbegin', '<p>poo</p>');
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
}














