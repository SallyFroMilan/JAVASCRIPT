# DOM Manipulation and Events

One of the *most unique and useful abilities of* **JavaScript** is its ability to *manipulate the* **DOM**. But what is the **DOM**?

The **DOM** (or Document Object Model) is a *tree-like representation of the contents of a* **webpage** - a tree of **“nodes”** with different relationships depending on how they’re arranged in the **HTML** document.

    <div id="container"><br>
        <div class="display"></div><br> 
        <div class="controls"></div><br>
    </div>

In the above example, the `<div class="display"></div>` is a **“child”** of `<div id="container"></div>` and a **sibling** to `<div class="controls"></div>`.

Think of it like a **family tree**:<br>
`<div id="container"></div>` is a **parent**, with its **children** on the next level, each on their own *“branch”*.

When working with the **DOM**, you use **“selectors”** to *target the nodes you want to work with*. You can use a combination of **CSS-style selectors** and **relationship properties** to target the **nodes** you want.

Let’s start with **CSS-style selectors**.<br>
In the above example, you could use the following **selectors** to refer to `<div class="display"></div>`:

<ul>
<li>div.display</li>
<li>.display</li>
<li>#container> .display</li>
<li>div#container> div.display</li>
</ul>

You can also use **relational selectors**<br>
(i.e. firstElementChild or lastElementChild etc.) with special properties owned by the **nodes**.

<p>const container = document.querySelector('#container');<br>
// selects the #container div (don't worry about the syntax, we'll get there)</p>

<p>console.dir(container.firstElementChild);<br>                   
// selects the first child of #container => .display</p>

<p>const controls = document.querySelector('.controls');<br>   
// selects the .controls div</p>

<p>console.dir(controls.previousElementSibling);<br>                  
// selects the prior sibling => .display</p>

So you’re identifying a certain node based on its *relationships to the **nodes** around it*.












