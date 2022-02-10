<h1><a href="https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8">Blood-Alcohol Content</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Bob drinks too much, and he gets in trouble for it a lot. 
He drinks so much, in fact, that he has broken 
the local law enforcement's breathalyzer with his alcoholic breath! 
Bob feels simply awful, 
so he wants to make up for it by creating a function that will calculate 
his blood-alcohol level for them. Unfortunately, 
Bob has gotten too inebriated to do any programming today, 
so he needs your help!</p>
<p>He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.</p>
<p>BAC calculator Formula:</p>
<pre>
BAC% = (A × 5.14 / W × r) - .015 × H 

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
</pre>
<p>Source: <a href="https://www.lsuhsc.edu/orgs/CampusHealth/bactest.aspx">Blood/Breath Alcohol Concentration</a></p>
<p>Alcohol consumed will be passed as a <code>drinks</code> object with two properties: 
<code>ounces</code> (the total volume of beverage consumed in ounces), 
and <code>abv</code> (the % of alcohol by volume of the beverage 
as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.</p>
<p>The gender will be passed as a string, either <code>"male"</code> or <code>"female"</code>.</p>
<p>Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. 
No error handling will be required.</p>
<p>Using these parameters, create the function that will calculate Bob's and other partier's BAC.</p>