<h1><a href="https://www.codewars.com/kata/57cfd92c05c1864df2001563">Vowels Back</a></h1>
<h2>6 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>You need to play around with the provided string (s).</p>
<p>Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.</p>
<p>Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. 
For our Polish friends this kata does not count 'y' as a vowel.</p>
<h4>Exceptions:</h4>
<ul>
<li>If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.</li>
<li>If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to its original value.</li>
<li>Provided string will always be lower case, won't be empty and will have no special characters.</li>
</ul>


