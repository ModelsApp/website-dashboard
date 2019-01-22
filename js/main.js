

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

var selectedPendingMember;
// require("./data.json")
function changeSection(){
	$( "#sectionProfile").hide();
	$( "#sectionOverview").hide();
	$( "#sectionContent").hide();
	$( "#sectionWallet").hide();
	$( "#sectionMembers").hide();
  $( "#sectionContacts").hide();

  $("#sectionMemberDescription").hide();
}


changeSection();
loadData(json);

$(".approvePanel").hide()

$(".fullarchiveButton ").click(function() {
  if($(this).text()==="Full archive"){
    $(this).text("Close");
    $(".approvePanel").show();
  }else{
    $(".approvePanel").hide();
    $(this).text("Full archive");

  }

});

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
$( "#load_members" ).click(function() {
  changeSection();
    $( "#sectionMembers").show();
});
$( "#load_content" ).click(function() {
	changeSection();
	$( ".dailyContent").show();	
	$( ".fullrecordContent").hide();
  	$( "#sectionContent").show();
});

$(".approvePanelRemove").click(function() {
  $(this).parent().parent().parent().remove();
});

var linkSelected;
$(".fa-cloud-upload-alt").click(function(){
  $('#insertLinkModal').modal('show')
  linkSelected = $(this)
});


$("#editButton").click(function(){
  $('#editOfferModal').modal('show')
});


$("#editDaysButton").click(function(){
  if($("#editDaysButton").attr("mode")=="edit"){
    $("#editDaysButton").attr("mode","save");
    $('.dailyVisitors').prop('readonly', false);
    $('.dailyVisitors').css('color', "#87cf7f");

    $("#editDaysButton").text("save")

  }else{
    $("#editDaysButton").attr("mode","edit");
    $('.dailyVisitors').prop('readonly', true);
        $('.dailyVisitors').css('color', "#555555");

    $("#editDaysButton").text("edit")

  }

});


$("#uploadButton").click(function(){
  linkSelected.removeClass("fa-cloud-upload-alt");
  linkSelected.addClass("fa-link");
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
$("#addRestaurantButton ").click(function() {
  $('#addRestaurantModal').modal('show')

});

$(".pendingMemberItem").click(function() {
  console.log("Aaa");
  selectedPendingMember = $(this)
  changeSection();
  $("#sectionMemberDescription").show();
  //$('#approveMemberModal').modal('show')
});

$("#approveYes").click(function() {
  //selectedPendingMember.hide();
});
$("#approveNo").click(function() {
  //selectedPendingMember.hide();
});

$("#overview_tab").click(function() {
    $(".sectionTab" ).removeClass("sectionTabSelected");
    $("#overview_tab" ).addClass("sectionTabSelected");
    scrollTo("overviewScroll");
});

$("#ranking_tab").click(function() {
    $(".sectionTab" ).removeClass( "sectionTabSelected" );
    $("#ranking_tab" ).addClass( "sectionTabSelected" );
    scrollTo("rankingScroll");
});

$("#restaurants_tab").click(function() {
    $(".sectionTab" ).removeClass( "sectionTabSelected" );
    $("#restaurants_tab" ).addClass( "sectionTabSelected" );
    scrollTo("rankingRestaurants");
});

$("#overview_res_tab").click(function() {
    $(".sectionTab" ).removeClass("sectionTabSelected");
    $("#overview_res_tab" ).addClass("sectionTabSelected");
    scrollTo("overviewResScroll");
});

$("#reviews_res_tab").click(function() {
    $(".sectionTab" ).removeClass( "sectionTabSelected" );
    $("#reviews_res_tab" ).addClass( "sectionTabSelected" );
    scrollTo("reviewsScroll");
});

$("#content_res_tab").click(function() {
    $(".sectionTab" ).removeClass( "sectionTabSelected" );
    $("#content_res_tab" ).addClass( "sectionTabSelected" );
    scrollTo("contentScroll");
});


$("#content_res_tab").click(function() {

  $("#dateSelector").datepicker();
});

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

function scrollTo(id){
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView(true);
    window.scrollBy(0, -80);
}


function loadData(data){
	//$( ".partnersBasic").text(data['partnersBasic']);
	$.each(data,function(i, item){
		console.log(i, item);
		$('#'+i).text(item);

	});



}