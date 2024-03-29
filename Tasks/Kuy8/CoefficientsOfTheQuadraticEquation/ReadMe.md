<h1><a href="https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript">Coefficients of the Quadratic Equation</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>In this Kata you are expected to find the coefficients of quadratic equation of the given 
two roots (<code>x1</code> and <code>x2</code>).</p>

<p>Equation will be the form of <code>ax^2 + bx + c = 0</code></p>

<p>Return type is an Array containing coefficients of the equations in the order <code>(a, b, c)</code>.</p>

<p>Since there are infinitely many solutions to this problem, we fix <code>a = 1</code>.</p>

<p>Remember, the roots can be written like <code>(x-x1) * (x-x2) = 0</code></p>

<h3>Example 1</h3>

<p><code>(x-x1) * (x-x2) = 0</code></p>
<p>This means <code>(x-1) * (x-2) = 0</code>; when we do the multiplication this becomes <code>x^2 - 3x + 2 = 0</code></p>

<h3>Example 2</h3>

<p><code>quadratic(0,1) = (1, -1, 0)</code></p>
<p>This means <code>(x-0) * (x-1) = 0</code>; when we do the multiplication this becomes <code>x^2 - x + 0 = 0</code></p>

<h3>Notes</h3>

<ul>
<li>Inputs will be integers.</li>
<li>When <code>x1 == x2</code>, this means the root has the multiplicity of two</li>
</ul>