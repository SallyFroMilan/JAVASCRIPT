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

So you’re **identifying a certain node** based on its *relationships to the **nodes** around it*.

# DOM methods

When your **HTML** code is parsed by a **web browser**, it is **converted to the DOM** as was mentioned above. One of the primary differences is that these **nodes are objects** that have many *properties and methods* attached to them.

These *properties and methods* are the primary tools we are going to use to *manipulate* our **webpage** with **JavaScript**.<br>
We’ll start with the **query selectors** - *those that help you target* **nodes**.

**Query selectors**
<ul>
<li>element.querySelector(selector) - returns a reference to the first match of selector</li>
<li>element.querySelectorAll(selectors) - returns a “nodelist” containing references to all of the matches of the selectors</li>
</ul>

There are several other, more specific queries, that offer potential (marginal) performance benefits, but we won't be going over them now.


It’s important to note that when using querySelectorAll, the return value *is not* **an array**. It looks like an array, and it somewhat acts like an array, but it’s really a **“nodelist”**.

The big distinction is that several **array methods** *are missing from* **nodelists**.

One solution, if problems arise, is to *convert the nodelist into an* **array**. You can do this with Array.from() or the spread operator.












