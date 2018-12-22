

var json = {
  "partnersBasic": "100",
  "partnersPremium": "20",
  "partnersGrowth": "30",
  "totalReviews": "2000",
  "tripadvisorTotalReviews": "10",
  "googleplacesTotalReviews": "30",
  "modelsRanking": {
    "0": {
      "photo": "photo.jpg",
      "name": "Sunrina Porfirova",
      "reviews": "120",
      "stories": "300",
      "earned": "100",
      "spent": "300"
    },
    "1": {
      "photo": "photo.jpg",
      "name": "Elizabeth Bohem",
      "reviews": "120",
      "stories": "300",
      "earned": "100",
      "spent": "300"
    }
  },
  "restaurantsRanking": {
    "0": {
      "photo": "photo.jpg",
      "name": "La perla d'oro",
      "reviews": "120",
      "visitors": "300",
      "credits": "300"
    }
  },
  "dailyContent": {
    "0": {
      "photo": "photo.jpg",
      "name": "La perla d'oro",
      "instaStories": "120",
      "instaPosts": "300",
      "tripadvisorReviews": "100",
      "googleplacesReviews": "300",
      "facebookReviews": "300",
      "balance": "1020"
    }
  },
  "credits_given" :"3000",
  "credits_back": "50",
  "insta_stories": "2500",
  "maps_reviews": "300",
  "insta_posts": "402",
  "trip_reviews": "50",
  "wallet_ranking": {
    "0": {
      "photo": "photo.jpg",
      "name": "La perla d'oro",
      "months": "120",
      "credits": "300",
      "plan": "100",
      "price": "300",
    }
  }
}
// require("./data.json")
function changeSection(){
	$( "#sectionProfile").hide();
	$( "#sectionOverview").hide();
	$( "#sectionContent").hide();
	$( "#sectionWallet").hide();
	$( "#sectionMembers").hide();

}


changeSection();
loadData(json);
$( "#sectionOverview").show();

$( "#load_profile" ).click(function() {
	changeSection();
  	$( "#sectionProfile").show();
});
$( "#load_overview" ).click(function() {
	changeSection();
  	$( "#sectionOverview").show();
});
$( "#load_wallet" ).click(function() {
	changeSection();
  	$( "#sectionWallet").show();
});

$( "#load_content" ).click(function() {
	changeSection();
	$( ".dailyContent").show();	
	$( ".fullrecordContent").hide();
  	$( "#sectionContent").show();
});



$("#fullrecord_tab").click(function() {
	$("#fullrecord_tab" ).toggleClass( "sectionTabSelected" );
	$("#daily_tab" ).toggleClass( "sectionTabSelected" );
	$( ".dailyContent").hide();	
	$( ".fullrecordContent").show();
});

$("#daily_tab").click(function() {
	$("#fullrecord_tab" ).toggleClass( "sectionTabSelected" );
	$("#daily_tab" ).toggleClass( "sectionTabSelected" );
	$( ".dailyContent").show();	
	$( ".fullrecordContent").hide();
});


$.getJSON("./js/data.json",function(json){
	console.log(json)
});



function loadData(data){
	//$( ".partnersBasic").text(data['partnersBasic']);
	$.each(data,function(i, item){
		console.log(i, item);
		$('#'+i).text(item);

	});



}