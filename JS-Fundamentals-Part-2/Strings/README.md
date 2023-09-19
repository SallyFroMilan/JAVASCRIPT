# Concatenating strings

<strong>Concatenate</strong> just means "join together".

To join together <strong>strings</strong> in <strong>JavaScript</strong> you can use a different type of <strong>string</strong>, called a <em>template literal.</em>

A <em>template literal</em> <strong>looks just like a normal string</strong>, but instead of using single or double quote marks (' or ") you use <strong>backtick characters (`)</strong>.

Here we have a look at <strong>concatenation</strong> being used in action:

<p> <button> Press me </button> <br>
<p>const button = document.querySelector("button");</p>

<p>function greet() {<br>
const name = prompt("What is your name?");<br>
alert(`Hello ${name}, nice to see you!`);
<p>} </p>

<p>button.addEventListener("click", greet);</p>

Here we're using the <em>window.prompt()</em> <strong>function</strong>, which asks the user to <em>answer a question</em> via a <strong>popup dialog box</strong> then <em>stores the text</em> they enter inside a given <strong>variable</strong> — in this case <em>name.</em> We then use the <em>window.alert()</em> <strong>function</strong> to display <strong>another popup</strong> containing a <strong>string</strong> which <em>inserts the name</em> into a generic greeting message.
