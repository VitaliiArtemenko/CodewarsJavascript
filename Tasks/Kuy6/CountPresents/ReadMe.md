<h1><a href="https://www.codewars.com/kata/585b989c45376c73e30000d1">Christmas Present Calculator</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Santa's little helper aren't sick anymore. They are ready to give away presents again. But some of them are still weak.
This leads to more productive elves than others.</p>
<h4>How many presents can Santa distribute this Christmas?</h4>
<h3>Your Task:</h3>
<p>You will get two inputs. One dictionary with the productivity of each elf like the following:</p>
<code>{"Santa": 1, "elf_1": 1, "elf_2": 1, "elf_3": 2, "elf_4": 3}</code>
<p>and a string array with the time needed for each present like the following:</p>
<code>"hh:mm:ss"</code>
<p>The productivity describes the workload an elf can do each day:</p>
<code>//productivity 1 = 24 hours each day</code><br>
<code>//productivity 2 = 48 hours each day</code><br>
<code>...</code>
<p><strong>Return the number of present they can distribute at maximum.</strong></p>
<h3>Note that:</h3>
<ul>
<li>They have only 24 hours</li>
<li>They try to give out as much as presents as possible (the ones with less time first)</li>
<li>All the elves can work on multiple tasks. You can count it as one work capacity</li>
</ul>


