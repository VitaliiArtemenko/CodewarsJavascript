<h1><a href="https://www.codewars.com/kata/5375f921003bf62192000746">Word a10n (abbreviation)</a></h1>
<h2>6 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>The word <code>i18n</code> is a common abbreviation of <code>internationalization</code> in the developer community, 
used instead of typing the whole word and trying to spell it correctly.
Similarly, <code>a11y</code> is an abbreviation of <code>accessibility</code>.</p>
<p>Write a function that takes a string and turns any and all "words" (see below) 
within that string of <strong>length 4 or greater</strong> into an abbreviation, 
following these rules:</p>
<ul>
<li>A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen
(e.g. "elephant-ride") will split up a series of letters into two words (e.g. "elephant" and "ride").</li>
<li>The abbreviated version of the word should have the first letter, then the number of removed characters, 
then the last letter (e.g. "elephant ride" => "e6t r2e").</li>
</ul>
<h3>Example</h3>
<pre>
abbreviate("elephant-rides are really fun!")
<span style="color: #888888">//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X
// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"</span>
=== "e6t-r3s are r4y fun!"
</pre>




