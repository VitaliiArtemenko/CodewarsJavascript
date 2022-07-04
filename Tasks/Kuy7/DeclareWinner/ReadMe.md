<h1><a href="https://www.codewars.com/kata/577bd8d4ae2807c64b00045b">Two fighters, one winner</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>Create a function that returns the name of the winner in a fight between two fighters.</p>
<p>Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
Death is defined as having <code>health <= 0</code>.</p>
<p>Each fighter will be a <code>Fighter</code> object. See the Fighter class.</p>
<p>Both <code>health</code> and <code>damagePerAttack</code> will be integers larger than 0. 
You can mutate the <code>Fighter</code> objects.</p>
<h2>Example:</h2>
<pre>
declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

Lew attacks Harry; Harry now has 3 health.
Harry attacks Lew; Lew now has 6 health.
Lew attacks Harry; Harry now has 1 health.
Harry attacks Lew; Lew now has 2 health.
Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
</pre>
<pre>
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
}
</pre>