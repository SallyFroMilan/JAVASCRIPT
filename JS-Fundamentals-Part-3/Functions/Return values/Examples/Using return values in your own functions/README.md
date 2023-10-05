# Using return values in your own functions

<strong><p>To return a value from a custom function</strong>, you need to use <strong>the return keyword.</strong><br> 
We see this in action in our "random-canvas-circles.html" example.</p>   

`Our draw()` function draws 100 random circles somewhere on an HTML `<canvas>`:

JS

    function draw() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  
Inside each loop iteration, three calls are made to the `random()` function, to generate a random value for the current circle's x-coordinate, y-coordinate, and radius, respectively. The `random()` function takes one parameter — a whole number — and returns a whole random number between `0` and that number. It looks like this:

JS

    function random(number) {
      return Math.floor(Math.random() * number);
    }

  This could be written as follows:
  
  JS

    function random(number) {
      const result = Math.floor(Math.random() * number);
      return result;
  }

But the first version is **quicker** to write, and **more compact.**

We are returning the result of the calculation `Math.floor(Math.random() * number)` each time the function is called. This return value appears at the point the function was called, and the code continues.

So when you execute the following:

JS

    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

If the three `random()` calls return the values `500, 200, and 35`, respectively, the line would actually be run as if it were this:

JS

    ctx.arc(500, 200, 35, 0, 2 * Math.PI);

The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed.
