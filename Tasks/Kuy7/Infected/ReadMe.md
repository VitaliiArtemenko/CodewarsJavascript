<h1><a href="https://www.codewars.com/kata/5e2596a9ad937f002e510435">Pandemia </a></h1>
<h2>7 Kuy</h2>
<hr>
<p>⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. 
Each continent is isolated from each other but infected people have spread before the warning. ⚠️</p>
<p>🗺️ You would be given a map of the world in a type of string:</p>
<pre>
string s = "01000000X000X011X0X"

'0' : uninfected

'1' : infected

'X' : ocean
</pre>
<p>⚫ The virus can't spread in the other side of the ocean.</p>
<p>⚫ If one person is infected every person in this continent gets infected too.</p>
<p>⚫ Your task is to find the percentage of human population that got infected in the end.</p>
<p>☑️ Return the percentage % of the total population that got infected.</p>
<p>❗❗ The first and the last continent are not connected!</p>
<p>💡 Example:</p>
<pre>
 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
</pre>
<p>➕ For maps without oceans "X" the whole world is connected.</p>
<p>➕ For maps without "0" and "1" return 0 as there is no population.</p>