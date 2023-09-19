# Using return values in your own functions

<strong><p>To return a value from a custom function</strong>, you need to use <strong>the return keyword.</strong><br> 
We see this in action in our "random-canvas-circles.html" example.</p>   

Our draw() function draws 100 random circles somewhere on an HTML < canvas >:

<p>function draw() {<br>
  ctx.clearRect(0, 0, WIDTH, HEIGHT);<br>
  for (let i = 0; i < 100; i++) {<br>
    ctx.beginPath();<br>
    ctx.fillStyle = "rgba(255,0,0,0.5)";<br>
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);<br>
    ctx.fill();<br>
  }<br>
 }</p>
  
Inside each loop iteration, three calls are made to the random() function, to generate a random value for the current circle's x-coordinate, y-coordinate, and radius, respectively. The random() function takes one parameter — a whole number — and returns a whole random number between 0 and that number. It looks like this:
  
  <p>function random(number) {<br>
  return Math.floor(Math.random() * number);<br>
 }</p>

  This could be written as follows:
  
  <p>function random(number) {<br>
  const result = Math.floor(Math.random() * number);<br>
  return result;<br>
 }</p>

But the first version is **quicker** to write, and **more compact.**

We are returning the result of the calculation Math.floor(Math.random() * number) each time the function is called. This return value appears at the point the function was called, and the code continues.

So when you execute the following:

ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

If the three <em>random()</em> calls return the values <em>500</em>, <em>200</em>, and <em>35</em>, respectively, the line would actually be run as if it were this:

ctx.arc(500, 200, 35, 0, 2 * Math.PI);

The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed.
