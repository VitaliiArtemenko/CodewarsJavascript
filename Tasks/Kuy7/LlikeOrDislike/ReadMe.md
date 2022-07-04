<h1><a href="https://www.codewars.com/kata/62ad72443809a4006998218a">Likes Vs Dislikes</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<h2>STORY</h2>
<p>YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. 
It was set up in such a way that you cannot like and dislike a video at the same time. 
There are two other interesting rules to be noted about the interface: 
Pressing a button, which is already active, will undo your press. 
If you press the like button after pressing the dislike button, 
the like button overwrites the previous "Dislike" state. 
The same is true for the other way round.</p>
<h2>Task</h2>
<p>Create a function that takes in a list of button inputs and returns the final state.</p>
<h2>Examples:</h2>
<pre>
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
</pre>
<h2>Notes:</h2>
<ul>
<li>if no button is currently active, return <code>Nothing</code></li>
<li>If the list is empty, return <code>Nothing</code></li>
</ul>