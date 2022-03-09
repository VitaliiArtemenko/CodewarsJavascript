<h1><a href="https://www.codewars.com/kata/5700c9acc1555755be00027e">All Inclusive?</a></h1>
<h2>7 Kuy</h2>
<hr>
<p><strong>Input</strong></p>
<ul>
<li>a string <code>string</code></li>
<li>an array of strings <code>arr</code></li>
</ul>
<p><strong>Output</strong> of function <code>containAllRots</code>:</p>
<ul>
<li>a boolean <code>true</code> if all rotations of <code>string</code> 
are included in <code>arr</code></li>
<li><code>false</code> otherwise</li>
</ul>
<h3>Examples:</h3>
<pre>
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
"Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
</pre>
<h3>Note:</h3>
<p>Though not correct in a mathematical sense</p>
<ul>
<li>we will consider that there are no rotations of <code>string === ""</code></li>
<li>and for any array arr: <code>containAllRots("", arr) --> true</code></li>
</ul>

