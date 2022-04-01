<h1><a href="https://www.codewars.com/kata/5679aa472b8f57fb8c000047">Equal Sides Of An Array</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You are going to be given an array of integers. Your job is to take that array and find an index N 
where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return <code>-1</code>.</p>
<h3>For example:</h3>
<p>Let's say you are given the array <code>[1,2,3,4,3,2,1]</code>:<br>
Your function will return the index <code>3</code>, because at the 3rd position of the array, 
the sum of left side of the index <code>([1,2,3])</code> and the sum of the right side of the index <code>([3,2,1])</code> 
both equal <code>6</code>.</p>
<p>Let's look at another one.<br>
You are given the array <code>[1,100,50,-51,1,1]</code>:<br>
Your function will return the index <code>1</code>, because at the 1st position of the array, 
the sum of left side of the index <code>([1])</code> and the sum of the right side of the index <code>([50,-51,1,1])</code> 
both equal 1.</p>
<p>Last one:<br>
You are given the array <code>[20,10,-80,10,10,15,35]</code><br>
At index 0 the left side is <code>[]</code><br>
The right side is <code>[10,-80,10,10,15,35]</code><br>
They both are equal to <code>0</code> when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.</p>
<p><strong>Note:</strong> Please remember that in most programming/scripting languages the index of an array starts at 0.</p>
<h3>Input:</h3>
<p>An integer array of length <code>0 < arr < 1000</code>. The numbers in the array can be any integer positive or negative.</p>
<h3>Output:</h3>
<p>The lowest index <code>N</code> where the side to the left of <code>N</code> is equal to the side to the right of <code>N</code>. 
If you do not find an index that fits these rules, then you will return <code>-1</code>.</p>
<p><strong>Note:</strong> If you are given an array with multiple answers, return the lowest correct index.</p>