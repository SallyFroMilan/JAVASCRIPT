# Ternary operator example

**The ternary operator** is not just for **setting variable values**; you can also **run functions**, or **lines of code** — anything you like.<br>
The following live example shows <em>a simple theme chooser</em> where the <strong>styling for the site</strong> is applied using a <strong>ternary operator.</strong>

< label for= "theme" > Select theme: < /label ><br>
< select id="theme" ><br>
  < option value="white" >White< /option > <br>
  < option value="black">Black< /option > <br>
< /select > 

< h1 >This is my website< /h1 > 

const select = document.querySelector('select');<br>
const html = document.querySelector('html');<br>
document.body.style.padding = '10px';

function update(bgColor, textColor) {<br>
  html.style.backgroundColor = bgColor;<br>
  html.style.color = textColor;<br>
}

select.addEventListener('change', () => select.value === 'black'<br>
  ? update('black', 'white')<br>
  : update('white', 'black')<br>
);

Here we've got a <em>< select ></em> element to **choose a theme** (black or white), plus a simple <em>< h1 ></em> to **display a website title.**<br>
We also have a function called <em>update()</em>, which takes two colors as parameters (inputs). The website's background color is set to the first provided color, and its text color is set to the second provided color.