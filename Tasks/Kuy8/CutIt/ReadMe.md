<h1><a href="https://www.codewars.com/kata/57274562c8dcebe77e001012">Training JS #16: Methods of String object--slice(), substring() and substr()</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Task</h3>
<p>Coding in function <code>cutIt</code>, function accept 1 parameter: a string array <code>arr</code>.</p>
<p>The first mission: Traversing <code>arr</code>, find the shortest string length.</p>
<p>The second mission: Traversing <code>arr</code> again, intercept all strings to the shortest string length
(sStart from index 0). You can use one of slice(), substring(), or substr() to do it. 
Return the result after finished the work.</p>

<h3>For example:</h3>
<pre>
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
</pre>
