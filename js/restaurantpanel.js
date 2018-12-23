

var json = {
  "restaurant_name": "La perla d'Oro",
  "intastories_res": "10",
  "instaposts_res": "20",
  "tripadvisor_res": "30",
  "googlemaps_res": "50",
  "facebook_res": "10",
  "totalModels": "30",
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
	$( "#sectionProfileRes").hide();
	$( "#sectionOverviewRes").hide();
	$( "#sectionContentRes").hide();
	$( "#sectionWalletRes").hide();
	$( "#sectionMembersRes").hide();

}


changeSection();
loadData(json);
$( "#sectionOverviewRes").show();

$( "#load_profile_res" ).click(function() {
	changeSection();
  	$( "#sectionProfileRes").show();
});
$( "#load_overview_res" ).click(function() {
	changeSection();
  	$( "#sectionOverviewRes").show();
});
$( "#load_wallet_res" ).click(function() {
	changeSection();
  	$( "#sectionWallet").show();
});

$( "#load_content_res" ).click(function() {
	changeSection();
  $( "#sectionContentRes").show();
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

$( "#dateSelector" ).datepicker();

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