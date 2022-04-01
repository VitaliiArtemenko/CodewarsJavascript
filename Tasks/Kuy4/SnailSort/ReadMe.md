<h1><a href="https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1">Snail</a></h1>
<h2>4 Kuy</h2>
<hr>
<p>Given an <code>n x n</code> array, return the array elements arranged from outermost elements 
to the middle element, traveling clockwise.</p>
<pre>
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
</pre>
<p>For better understanding, please follow the numbers of the next array consecutively:</p>
<pre>
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
</pre>
<p>This image will illustrate things more clearly:</p>
<img src="http://www.haan.lu/files/2513/8347/2456/snail.png">
<p>NOTE: The idea is not sort the elements from the lowest value to the highest; 
the idea is to traverse the 2-d array in a clockwise snailshell pattern.</p>
<p>NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].</p>