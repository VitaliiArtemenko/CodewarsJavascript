<h1><a href="https://www.codewars.com/kata/562f91ff6a8b77dfe900006e">Going to the cinema</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>My friend John likes to go to the cinema. He can choose between system A and system B.</p>
<pre>
System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
</pre>
<h3>Example:</h3>
<p>If John goes to the cinema 3 times:</p>
<pre>
System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
</pre>
<p>John wants to know how many times he must go to the cinema so that the final result of System B, 
when rounded up to the next dollar, will be cheaper than System A.</p>
<p>The function <code>movie</code> has 3 parameters: <code>card</code> (price of the card), 
<code>ticket</code> (normal price of a ticket), <code>perc</code> (fraction of what he paid for the previous ticket) 
and returns the first <code>n</code> such that</p>
<pre>ceil(price of System B) < price of System A.</pre>
<h3>More examples:</h3>
<pre>
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
</pre>