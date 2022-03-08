<h1><a href="https://www.codewars.com/kata/5836dce6966f8d1d43000007">TV channels</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Program channels into your TV's memory. An array with channels (strings) will be passed 
as an argument to the function <code>tvChannels</code>. 
Sort the channels in alphabetical order, remove duplicates and, finally, 
return an object where each channel (object's value) is assigned to a whole number (object's key), starting with 0.</p>
<h3>Examples:</h3>
<pre>
let arr = ["BBC1", "BBC2", "MTV"];

tvChannels(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"};

let arr = ["BBC1", "BBC1", "BBC2", "MTV"];

tvChannels(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"};
</pre>


