<h1><a href="https://www.codewars.com/kata/5ad0d8356165e63c140014d4">Student's Final Grade</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Create a function finalGrade, which calculates the final grade of a student depending on two parameters: 
a grade for the exam and a number of completed projects.</p>

<p>This function should take two arguments: exam - grade for exam (from 0 to 100); 
projects - number of completed projects (from 0 and above);</p>

<p>This function should return a number (final grade). There are four types of final grades:</p>
<ul>
<li>100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.</li>
<li>90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.</li>
<li>75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.</li>
<li>0, in other cases</li>
</ul>

<h3>Examples (Inputs-->Output) :</h3>
<pre>
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
</pre>
<p>*Use Comparison and Logical Operators.</p>