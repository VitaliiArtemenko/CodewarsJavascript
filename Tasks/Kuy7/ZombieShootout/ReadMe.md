<h1><a href="https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74">Will you survive the zombie onslaught?</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>I'm afraid you're in a rather unfortunate situation. 
You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, 
intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.</p>
<p>The zombies start at <code>range</code> metres, and move at <code>0.5</code> metres per second. 
Each second, you first shoot one zombie, 
and then the remaining zombies shamble forwards another <code>0.5</code> metres.</p>
<p>If any zombies manage to get to <code>0</code> metres, you get eaten. 
If you run out of ammo before shooting all the zombies, you'll also get eaten. 
To keep things simple, we can ignore any time spent reloading.</p>
<p>Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.</p>
<p>If you shoot all the zombies, return <code>"You shot all X zombies."</code> 
If you get eaten before killing all the zombies, and before running out of ammo, 
return <code>"You shot X zombies before being eaten: overwhelmed."</code> 
If you run out of ammo before shooting all the zombies, 
return <code>"You shot X zombies before being eaten: ran out of ammo."</code></p>
<p>If you run out of ammo at the same time as the remaining zombies reach you, 
return <code>"You shot X zombies before being eaten: overwhelmed."</code></p>