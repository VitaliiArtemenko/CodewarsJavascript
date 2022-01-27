<h1><a href="https://www.codewars.com/kata/5733f948d780e27df6000e33">Training JS #34: methods of Math---pow() sqrt() and cbrt()</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Task</h3>

<p>Coding in function <code>cutCube</code> function accept 2 parameter: <code>volume</code> and <code>n</code>. 
<code>volume</code> is the volume of a cube. If we cut the cube into <code>n</code> block. 
Please determine whether the length of the cube is an integer. return true or false.</p>

<h3>Examples:</h3>
<p>volume=27, it can be divided into 27 blocks, each small cube side length is 1</p>
<pre>
cutCube(27,27) should return true
</pre>
<p>volume=512, it can be divided into 8 blocks, each small cube side length is 4</p>
<pre>
cutCube(512,8) should return true
</pre>
<p>volume=512, it can be divided into 64 blocks, each small cube side length is 2</p>
<pre>
cutCube(512,64) should return true
</pre>
<p>If the side length of small cube is not a integer, should return false.</p>
<pre>
cutCube(256,8) should return false
cutCube(27,3) should return false
cutCube(123,456) should return false
</pre>
<p>If it can't be divided evenly into n small cubes, should return false too.</p>
<pre>
cutCube(50000,50) should return false
cutCube(256,4) should return false
</pre>
<p>The two examples above seems to meet our requirements, but please note: 
a cube is unable to evenly divided into 50 pieces or 4 pieces. 
Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.</p>