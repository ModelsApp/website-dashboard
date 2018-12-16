


function changeSection(){
	$( "#sectionProfile").hide();
	$( "#sectionOverview").hide();
	$( "#sectionContent").hide();
	$( "#sectionWallet").hide();
	$( "#sectionMembers").hide();

}
changeSection();
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