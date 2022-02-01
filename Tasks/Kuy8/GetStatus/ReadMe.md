<h1><a href="https://www.codewars.com/kata/54fdaa4a50f167b5c000005f">Unexpected parsing</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Here is a piece of code. 
This code has several bugs, please fix them.</p>
<pre>
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
</pre>
<h3>Expected Behaviour</h3>
<p>Function should return an object with <code>status</code> as a key, whose value can: 
<code>busy</code> or <code>available</code> depending on the truth value of the argument is_busy.</p>
