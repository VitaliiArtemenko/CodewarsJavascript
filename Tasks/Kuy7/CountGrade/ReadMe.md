<h1><a href="https://www.codewars.com/kata/573023c81add650b84000429">Training JS #27: methods of arrayObject---filter()</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Create a function <code>countGrade()</code> that accept 1 parameters scores, it's a number array. 
Your task is to count the grade distribution of the scores, to return an object like this:</p>
<pre>
{S:<span style="color: darkorange">888</span>, A:<span style="color: darkorange">888</span>, B:<span style="color: darkorange">888</span>, C:<span style="color: darkorange">888</span>, D:<span style="color: darkorange">888</span>, X:<span style="color: darkorange">888</span>}
</pre>
<p>Grading rules:</p>
<pre>
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
</pre>
<h3>Examples</h3>
<pre>
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}

countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}

countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
</pre>