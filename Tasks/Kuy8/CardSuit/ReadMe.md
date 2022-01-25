<h1><a href="https://www.codewars.com/kata/5a360620f28b82a711000047">Define a card suit</a></h1>
<h2>8 Kuy</h2>
<hr>

<p>You get any card as an argument. Your task is to return a suit of this card.</p>

<p>Our deck (is preloaded):</p>
<pre>
deck = [<span style="color: #008800">'2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'</span>];
</pre>

<h3>Examples:</h3>
<pre>
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
</pre>