<h1><a href="https://www.codewars.com/kata/59c287b16bddd291c700009a">For Twins: 2. Math operations</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Task:</h3>

<p>A magician in the subway showed you a trick, 
he put an ice brick in a bottle to impress you. 
The brick's length and width are equal, forming a square; its height may be different. 
Just for fun and also to impress the magician and people around, 
you decided to calculate the brick's volume. 
Write a function <code>iceBrickVolume</code> that will accept these parameters:</p>
<ul>
<li><code>radius</code> - bottle's radius (always > 0);</li>
<li><code>bottleLength</code> - total bottle length (always > 0);</li>
<li><code>rimLength</code> - length from bottle top to brick (always < <code>bottleLength</code>);</li>
</ul>

<p>And return volume of ice brick that magician managed to put into a bottle.</p>

<h3>Note:</h3>

<p>All inputs are integers. Assume no irregularities to the cuboid brick. 
You may assume the bottle is shaped like a cylinder. 
The brick cannot fit inside the rim. 
The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.</p>

<h3>Example 1:</h3>
<pre>
radius = <span style="color: darkorange">1</span>
bottle_length = <span style="color: darkorange">10</span>
rim_length = <span style="color: darkorange">2</span>

volume = <span style="color: darkorange">16</span>
</pre>

<h3>Example 2:</h3>
<pre>
radius = <span style="color: darkorange">5</span>
bottle_length = <span style="color: darkorange">30</span>
rim_length = <span style="color: darkorange">7</span>

volume = <span style="color: darkorange">1150</span>
</pre>