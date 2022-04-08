<h1><a href="https://www.codewars.com/kata/59656c69253c365e58000046">maxPossibleScore</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You're a teacher preparing a test for your students. Each question is worth some number of points. 
Some questions are new to the students, while others are questions they have already seen and practiced. 
Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.</p>
<p>Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) 
an array of new questions. The function should return the test's maximum possible score as an integer, 
where questions that are new are worth double points.</p>
<p>You can assume that all questions are unique.</p>
<p>Questions are case-sensitive.</p>
<h3>Example:</h3>
<pre>
maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10
</pre>