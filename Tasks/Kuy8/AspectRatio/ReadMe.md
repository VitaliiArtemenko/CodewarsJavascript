<h1><a href="https://www.codewars.com/kata/596e4ef7b61e25981200009f">Aspect Ratio Cropping - Part 1</a></h1>
<h2>8 Kuy</h2>
<hr>

<p>The aspect ratio of an image describes the proportional relationship between its width and its height. 
Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, 
there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). 
As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, 
however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.</p>

<p>Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 
aspect ratio that maintain equal height. 
Round your answers up to the nearest integer.</p>

<h3>Example</h3>
<pre>
374 × 280 pixel image with a 4:3 aspect ratio ==> 500 × 280 pixel image with a 16:9 aspect ratio
</pre>