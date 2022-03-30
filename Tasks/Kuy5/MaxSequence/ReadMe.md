<h1><a href="https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c">Maximum subarray sum</a></h1>
<h2>5 Kuy</h2>
<hr>
<p>The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence 
in an array or list of integers:</p>
<pre>
maxSequence([<span style="color:darkorange;">-2, 1, -3, 4, -1, 2, 1, -5, 4</span>])
// should be 6: [4, -1, 2, 1]
</pre>
<p>Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.</p>
<p>Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.</p>