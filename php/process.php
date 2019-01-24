<?php
if (isset($_POST['submit'])) {

//Here we can use PayPal URL or sandbox URL.
$paypal_url = 'https://www.paypal.com/cgi-bin/webscr';
//Here we can used seller email id.VYEKKMW9PU8DL
$merchant_email = 'davidedis@gmail.com';



//here we can put cancel URL when payment is not completed.
$cancel_return = 'http://testsquareapp.altervista.org/php/cancel.php';
//here we can put cancel URL when payment is Successful.
$success_return = 'http://testsquareapp.altervista.org/php/success.php';
//PayPal call this file for ipn
$notify_url = "http://testsquareapp.altervista.org/php/ipn.php";

$plan = $_POST['plan'];
$phoneNumber =$_POST['phoneNumber'];
$lastName =$_POST['lastName'];
$firstName = $_POST['firstName'];


if($_POST['plan'] == "Basic plan"){
	$amount = 190;
}
if($_POST['plan'] == "Growth plan"){
	$amount = 255;
}

if($_POST['plan'] == "Energy plan"){
	$amount = 640;
}

$chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
$itemNumber = "";
for ($i = 0; $i < 8; $i++)
    {
    $codice.= $chars[mt_rand(0, strlen($chars) - 1) ];
    }

?>
Processing...
<form name="myform" action="<?php echo $paypal_url;?>" method="post">
<input type="hidden" name="business" value="<?php echo $merchant_email;?>" />
<input type="hidden" name="notify_url" value="<?php echo $notify_url;?>" />
<input type="hidden" name="cancel_return" value="<?php echo $cancel_return;?>" />
<input type="hidden" name="return" value="<?php echo $success_return;?>" />
<input type="hidden" name="rm" value="2" />
<input type="hidden" name="lc" value="" />
<input type="hidden" name="no_shipping" value="1" />
<input type="hidden" name="no_note" value="1" />
<input type="hidden" name="currency_code" value="EUR" />
<input type="hidden" name="page_style" value="paypal" />
<input type="hidden" name="charset" value="utf-8" />
<input type="hidden" name="cbt" value="Back to FormGet" />
<input type="hidden" value="_xclick" name="cmd"/>
<input type="hidden" name="amount" value="<?php echo($amount); ?>" />
<input type="hidden" name="item_name" value="<?php echo($plan); ?>" />
<input type="hidden" name="item_number" value="<?php echo($itemNumber); ?>">
<input type="hidden" name="night_phone_a" value="echo($phoneNumber);">

<input type="hidden" name="first_name" value="echo($firstName);">
<input type="hidden" name="last_name" value="echo($lastName)";>
  <input type="hidden" name="email" value="echo($email)";>

<script type="text/javascript">
document.myform.submit();
</script>
<?php }
