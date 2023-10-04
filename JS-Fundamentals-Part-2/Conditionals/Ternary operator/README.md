# Ternary operator example

**The ternary operator** is not just for **setting variable values**:<br>
you can also **run functions**, or **lines of code** — anything you like.<br>
The following live example shows <em>a simple theme chooser</em> where the <strong>styling for the site</strong> is applied using a <strong>ternary operator.</strong>

HTML

    <label for="theme"> Select theme: </label>
    <select id="theme">
      <option value="white"> White </option> 
      <option value="black"> Black </option> 
    </select> 

    <h1> This is my website </h1> 

JS

    const select = document.querySelector('select');
    const html = document.querySelector('html');
    document.body.style.padding = '10px';

    function update(bgColor, textColor) {
      html.style.backgroundColor = bgColor;
      html.style.color = textColor;
    }

    select.addEventListener('change', () =>
      select.value === 'black'
        ? update('black', 'white')
        : update('white', 'black')
    );

Here we've got a `<select>` element to **choose a theme** (black or white), plus a simple `<h1>` to **display a website title.**<br>
We also have a function called `update()`, which takes two colors as parameters (inputs). The website's background color is set to the first provided color, and its text color is set to the second provided color.

Finally, we've also got an `onchange` event listener that serves to run a function containing a ternary operator. It starts with a test condition — `select.value === 'black'`. If this returns `true`, we run the `update()` function with parameters of black and white, meaning that we end up with a background color of black and a text color of white. If it returns `false`, we run the `update()` function with parameters of white and black, meaning that the site colors are inverted.

