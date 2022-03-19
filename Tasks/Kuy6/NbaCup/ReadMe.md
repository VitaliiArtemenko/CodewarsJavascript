<h1><a href="https://www.codewars.com/kata/5a420163b6cfd7cde5000077">Ranking NBA teams</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:</p>
<p><code>r=Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,
Indiana Pacers 103 Memphis Grizzlies 112, Los Angeles Clippers 100 Boston Celtics 120</code></p>
<p>A team name is composed of one, two or more words built with letters or digits: 
<code>Atlanta Hawks</code>, <code>Philadelphia 76ers</code>...</p>
<p>Given a string of results and the name of a team (parameter: <code>toFind</code>).
Your function <code>nbaCup</code> will return as a string:</p>
<ul>
<li>the name of the team followed by <code>:</code> and</li>
<li>the number of matches won by the team</li>
<li>the number of draws</li>
<li>the number of matches lost by the team</li>
<li>the total number of points scored by the team</li>
<li>the total number of points conceded by the team</li>
</ul>
<p>and finally a kind of marks in our ranking system</p>
<ul>
<li>a team marks <code>3</code> if it is a win</li>
<li>a team marks <code>1</code> if it is a draw</li>
<li>a team marks <code>0</code> if it is a loss.</li>
</ul>
<p>The return format is:</p>
<pre>"Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"</pre>
<h3>Remarks:</h3>
<p>The team name <code>""</code> returns <code>""</code>.</p>
<p>If a team name can't be found in the given string of 
results you will return <code>"Team Name:This team didn't play!"</code> (see examples below).</p>
<p>The scores must be integers. 
If a score is a float number <code>(abc.xyz...)</code> you will return: <code>"Error(float number):the concerned string"</code></p>
<h3>Examples:</h3>
<pre>
nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

nba_cup(r, "") -> ""

nba_cup(r, "Boston Celt") -> "Boston Celt:This team didn't play!"

r0="New York Knicks 101.12 Atlanta Hawks 112"
nba_cup(r0, "Atlanta Hawks") -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"
</pre>


