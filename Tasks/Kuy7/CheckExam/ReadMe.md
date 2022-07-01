<h1><a href="https://www.codewars.com/kata/5a3dd29055519e23ec000074">Check exam</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>The first input array is the key to the correct answers to an exam, like <code>["a", "a", "b", "d"]</code>. 
The second one contains a student's submitted answers.</p>
<p>The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, 
represented as an empty string.</p>
<p>If the score < 0, return 0.</p>
<h3>Examples:</h3>
<pre>
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
</pre>