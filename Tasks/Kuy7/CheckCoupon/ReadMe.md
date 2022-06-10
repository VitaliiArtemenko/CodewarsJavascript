<h1><a href="https://www.codewars.com/kata/539de388a540db7fec000642">The Coupon Code</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>Story</h3>
<p>Your online store likes to give out coupons for special occasions. 
Some customers try to cheat the system by entering invalid codes or using expired coupons.</p>
<h3>Task:</h3>
<p>Your mission:<br>
Write a function called <code>checkCoupon</code> which verifies that a coupon code is valid and not expired.</p>
<p>A coupon is no more valid on the day <strong>AFTER</strong> the expiration date. 
All dates will be passed as strings in this format: <code>"MONTH DATE, YEAR"</code>.</p>
<h3>Examples:</h3>
<pre>
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
</pre>