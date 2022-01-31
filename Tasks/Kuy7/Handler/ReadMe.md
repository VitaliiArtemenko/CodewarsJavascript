<h1><a href="https://www.codewars.com/kata/609d17f9838b2c0036b10e89">Keyboard handler</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Overview</h3>
<p>Have you ever wondered how a user interface handles key presses?<br>
So today you have the opportunity to create it.</p>
<h3>Task:</h3>
<p>The keyboard handler is a function which receives three parameters as input:</p>
<ol>
<li><code>key</code> - the entered character on the keyboard.</li>
<li><code>isCaps</code>- boolean variable responsible for the enabled 'Caps Lock'. (by default false)</li>
<li><code>isShift</code>- boolean variable which is responsible for whether 'Shift' is pressed. (by default false)</li>
</ol>
<p>Your task to write a function that returns the entered character.</p>
<p><b>Requirements for obtaining the 'key' variable:</b></p>
<ul>
<li>Alphabetical characters must be a lowercase (e.x. 'a', not 'A')</li>
<li>It must be a character (e.x '2', not 2 or not [1,2,3])</li>
<li>It must be of unit length (e.x. 'a', not 'abc')</li>
</ul>
If the value does not satisfy the condition, return 'KeyError'

<h3>For example:</h3>
<pre>
handler(<span style="color: #006600">'a'</span>, <span style="color: red">true</span>) // should return 'A' (because Caps-Lock)
handler(<span style="color: #006600">'1'</span>, <span style="color: red">true</span>) // should return '1' (because Сaps-Lock doesn't work here)
handler(<span style="color: #006600">'a'</span>, <span style="color: red">false</span>, <span style="color: red">true</span>) // should return 'A' (because Shift)
handler(<span style="color: #006600">'1'</span>, <span style="color: red">false</span>, <span style="color: red">true</span>) // should return '!'

handler(<span style="color: #006600">''</span>)  // should return 'KeyError'
handler(<span style="color: #006600">'A'</span>) // should return 'KeyError'
handler(<span style="color: orange">3</span>) // should return 'KeyError'
handler(<span style="color: #006600">'abc'</span>) // should return 'KeyError'
</pre>