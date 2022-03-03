<h1><a href="https://www.codewars.com/kata/554e4a2f232cdd87d9000038">Complementary DNA</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
for the development and functioning of living organisms.</p>
<p>In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You function receives one side of the DNA; 
you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all.</p>
<p>Example: (<strong>input --> output</strong>)</p>
<pre>
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
</pre>
<pre>
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
</pre>