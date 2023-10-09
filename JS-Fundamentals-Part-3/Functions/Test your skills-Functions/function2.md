# Functions 2

For our second functions-related task, you need to create a function that draws a rectangle on the provided `<canvas>` (reference variable `canvas`, context available in `ctx`), based on the five provided input variables:

`x` — the x coordinate of the rectangle.<br>
`y` — the y coordinate of the rectangle.<br>
`width` — the width of the rectangle.<br>
`height` — the height of the rectangle.<br>
`color` — the color of the rectangle.

You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

Try updating the code below to recreate the finished example:

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const x = 50;
    const y = 60;
    const width = 100;
    const height = 75;
    const color = 'blue';

    // Add your code here
