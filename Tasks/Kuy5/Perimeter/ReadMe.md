<h1><a href="https://www.codewars.com/kata/559a28007caad2ac4e000083">Perimeter of squares in a rectangle</a></h1>
<h2>5 Kuy</h2>
<hr>
<p>The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
It's easy to see that the sum of the perimeters of these squares is: 
<code>4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80</code></p>
<p>Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares 
disposed in the same manner as in the drawing:</p>
<p><img alt="alternative text" src="http://i.imgur.com/EYcuB1wm.jpg"></p>
<p><strong>Hint</strong>: See Fibonacci sequence</p>
<p>The function perimeter has for parameter n where n + 1 is the number of squares 
(they are numbered from 0 to n) and returns the total perimeter of all the squares.</p>
<pre>
perimeter(5)  should return 80
perimeter(7)  should return 216
</pre>