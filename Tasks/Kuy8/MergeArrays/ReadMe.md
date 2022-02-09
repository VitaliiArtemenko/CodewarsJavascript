<h1><a href="https://www.codewars.com/kata/5899642f6e1b25935d000161">Merge two sorted arrays into one</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>You are given two sorted arrays that both only contain integers. 
Your task is to find a way to merge them into a single one, sorted in asc order. 
Complete the function <code>mergeArrays(arr1, arr2)</code>, 
where <code>arr1</code> and <code>arr2</code> are the original sorted arrays.</p>
<p>You don't need to worry about validation, since <code>arr1</code> and <code>arr2</code> must be arrays with 0 or more Integers. 
If both <code>arr1</code> and <code>arr2</code> are empty, then just return an empty array.</p>
<p>Note: <code>arr1</code> and <code>arr2</code> may be sorted in different orders. 
Also, <code>arr1</code> and <code>arr2</code> may have same integers. Remove duplicated in the returned result.</p>
<h3>Examples</h3>
<pre>
arr1 = [<span style="color: darkorange"> 1, 2, 3, 4, 5 </span>];
arr2 = [<span style="color: darkorange"> 6, 7, 8, 9, 10 </span>];
mergeArrays(arr1, arr2);  <span style="color: grey">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>

arr3 = [<span style="color: darkorange"> 1, 3, 5, 7, 9 </span>];
arr4 = [<span style="color: darkorange"> 10, 8, 6, 4, 2 </span>];
mergeArrays(arr3, arr4);  <span style="color: grey">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>

arr5 = [<span style="color: darkorange"> 1, 3, 5, 7, 9, 11, 12 </span>];
arr6 = [<span style="color: darkorange"> 1, 2, 3, 4, 5, 10, 12 </span>];
mergeArrays(arr5, arr6);  <span style="color: grey">// [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]</span>
</pre>