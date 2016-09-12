$(window).load(function() {
		$('img.caption').captionjs();		
		var galiria = new Galiria();
});

var images = [];
var imagesLeft = [
    {url:'img/pics/cameo.jpg', description:'The Cameo Cinema'}, 
    {url:'img/pics/carlisleStreetWavertree.jpg', description:'Carlisle Street, Wavertree'}, 
    {url:'img/pics/fallingStar.jpg', description:'Falling Star'}, 
    {url:'img/pics/gasWorksSpofforthRoad.jpg', description:'Spofforth Road Gas Works'}, 
    {url:'img/pics/grandCinema.jpg', description:'Grand Cinema'}, 
    {url:'img/pics/hairdresser.jpg', description:'Hairdresser'}, 
    {url:'img/pics/highStreetWavertree.jpg', description:'Wavertree High Street'}, 
    {url:'img/pics/holyTrinity.jpg', description:'Holy Trinity'}, 
    {url:'img/pics/magnetCinema.jpg', description:'Magnet Cinema'}, 
    {url:'img/pics/pictonClockTower.jpg', description:'Picton Clock Tower'}, 
    {url:'img/pics/pyeStreet.jpg', description:'Pye Street'}, 
    {url:'img/pics/railwaySidingsWavertree.jpg', description:'Railway Sidings, Wavertree'}, 
    {url:'img/pics/theLoversFirLane.jpg', description:'The Lovers, Fir Lane'}, 
    {url:'img/pics/theStreetSinger.jpg', description:'The Street Singer'}, 
    {url:'img/pics/theWellington.jpg', description:'The Wellington'}, 
    {url:'img/pics/victorianDrinkingFountain.jpg', description:'Victorian Drinking Fountain'}, 
    {url:'img/pics/victorianLetterbox.jpg', description:'Victorian Letterbox'}, 
    {url:'img/pics/wavertreeTrainStation.jpg', description:'Wavertree Train Station'}, 
    {url:'img/pics/wellingtonAvenueWavertree.jpg', description:'Wellington Avenue, Wavertree'}
];
var imagesPerScreen = 5;
var imagesTaken;
var descriptionIndex = 0;
var offset = 50;
var alreadyLoading;

$(window).scroll(function() {
    if (($(window, ".gallery").scrollTop() + $(window).height() + offset >= $(document).height()) && alreadyLoading !== true)
    { 
        
        alreadyloading = true;
       
        // take imagesPerScreen number of images out of imagesLeft and into its own variable
        imagesTaken = imagesLeft.slice(0, imagesPerScreen);

        // loop through the images you have retrieved and make HTML using jQuery and store into a variable
        $(imagesTaken).each(function(index, value){
            var $desc = value.description;
            var $image = value.url;
            var $imgStyle = $('<div class="col-xs-12 col-md-6 galiria"><figure class="captionjs animated"><figcaption itemprop="name" style="margin-bottom:0px; bottom:-58px;">' + $desc + '</figcaption><img class="img1" src="' + $image + '"></figure></div>');
            images.push(value);
            imagesLeft.splice(value, 1);
            
              
                        
            $(".mainContent").append($imgStyle);
        });
        // append the html content in the variable to the end of the existing images in the DOM 

    }
});

$(".img1").click(function() {

    window.location.href = '/imageView';

    var src = $(this).attr("alt");

    //<img class="imgLg" src="img/pics/' + src + '.jpg" alt="' + src + '">
    var $imgFiller = $('<p> poo </p>');

    $(".content").append($imgFiller);
    
});
