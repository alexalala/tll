$(window).load(function() {
		$('img.caption').captionjs();		
		var galiria = new Galiria();
});

var images = [];
var imagesLeft = ['img/pics/cameo.jpg', 'img/pics/carlisleStreetWavertree.jpg', 'img/pics/fallingStar.jpg', 'img/pics/gasWorksSpofforthRoad.jpg','img/pics/grandCinema.jpg','img/pics/hairdresser.jpg','img/pics/highStreetWavertree.jpg','img/pics/holyTrinity.jpg','img/pics/magnetCinema.jpg','img/pics/pictonClockTower.jpg', 'img/pics/pyeStreet.jpg', 'img/pics/railwaySidingsWavertree.jpg', 'img/pics/theLoversFirLane.jpg', 'img/pics/theStreetSinger.jpg', 'img/pics/theWellington.jpg', 'img/pics/victorianDrinkingFountain.jpg', 'img/pics/victorianLetterbox.jpg', 'img/pics/wavertreeTrainStation.jpg', 'img/pics/wellingtonAvenueWavertree.jpg'];
var imgDescription = ['The Cameo Cinema', 'Carlisle Street, Wavertree', 'Falling Star', 'Spofforth Road Gas Works', 'Grand Cinema', 'Hairdresser', 'Wavertree High Street', 'Holy Trinity', 'Magnet Cinema', 'Picton Clock Tower', 'Pye Street', 'Railway Sidings, Wavertree', 'The Lovers, Fir Lane', 'The Street Singer', 'The Wellington', 'Victorian Drinking Fountain', 'Victorian Letterbox', 'Wavertree Train Station', 'Wellington Avenue, Wavertree'];
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
        $(imagesTaken).each(function(index, value, imgDescription, descriptionIndex){
            var $desc = imgDescription[descriptionIndex];
            var $image = value;
            var $imgStyle = $('<div class="col-xs-12 col-md-6 galiria"><figure class="captionjs animated"><figcaption itemprop="name" style="margin-bottom:0px; bottom:-58px;">' + $desc + '</figcaption><img class="img1" src="' + $image + '"></figure></div>');
            images.push(value);
            imagesLeft.splice(value, 1);
            descriptionIndex++;
              
                        
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
