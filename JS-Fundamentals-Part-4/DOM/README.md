# DOM Manipulation and Events

One of the *most unique and useful abilities of* **JavaScript** is its ability to **manipulate the DOM**.

But what is the **DOM**?

The **DOM** (Document Object Model) is a *tree-like representation of the contents of a* **webpage** - a tree of **“nodes”** with different relationships depending on how they’re arranged in the **HTML** document.

    <div id="container"><br>
        <div class="display"></div><br> 
        <div class="controls"></div><br>
    </div>

In the above example, the `<div class="display"></div>` is a **“child”** of `<div id="container"></div>` and a **sibling** to `<div class="controls"></div>`.

Think of it like a **family tree**:<br>
`<div id="container"></div>` is a **parent**, with its **children** on the next level, each on their own *“branch”*.

When working with the **DOM**, you use **“selectors”** to *target the nodes you want to work with*. You can use a combination of **CSS-style selectors** and **relationship properties** to target the **nodes** you want.

Let’s start with **CSS-style selectors**.

In the above example, you could use the following **selectors** to refer to `<div class="display"></div>`:

<ul>
<li>div.display</li>
<li>.display</li>
<li>#container> .display</li>
<li>div#container> div.display</li>
</ul>

You can also use **relational selectors**<br>
(i.e. `firstElementChild` or `lastElementChild` etc.) with special properties owned by the **nodes**.

    const container = document.querySelector('#container');<br>
    // selects the #container div (don't worry about the syntax, we'll get there)

    console.dir(container.firstElementChild);                   
    // selects the first child of #container => .display

    const controls = document.querySelector('.controls'); 
    // selects the .controls div

    console.dir(controls.previousElementSibling);                 
    // selects the prior sibling => .display</p>

So you’re **identifying a certain node** based on its *relationships* to the **nodes** around it.

# DOM methods

When your **HTML** code is parsed by a web browser, it is **converted to the DOM** as was mentioned above. One of the primary differences is that these **nodes are objects** that have many *properties and methods* attached to them.

These *properties and methods* are the primary tools we are going to use to *manipulate* our webpage with **JavaScript**.<br>
We’ll start with the **query selectors** - those that help you target **nodes**.

**Query selectors**
<ul>
<li><code>element.querySelector(selector)</code> - returns a reference to the first match of selector</li>
<li><code>element.querySelectorAll(selectors)</code> - returns a “nodelist” containing references to all of the matches of the selectors</li>
</ul>

> There are several other, more specific queries, that offer potential (marginal) performance benefits, but we won't be going over them now.


It’s important to note that when using querySelectorAll, the return value *is not* **an array**. It looks like an array, and it somewhat acts like an array, but it’s really a **“nodelist”**.

The big distinction is that several **array methods** *are missing from* **nodelists**.

One solution, if problems arise, is to *convert the nodelist into an* **array**. You can do this with `Array.from()` or the spread operator.

**Element creation**

<ul>
<li><code>document.createElement(tagName, [options])</code> - creates a new element of tag type tagName. <code>[options]</code> in this case means you can add some optional parameters to the function. Don’t worry about these at this point.</li>
</ul>

    const div = document.createElement('div');

This function *does NOT* put your new element into the **DOM** - it simply **creates it in memory**.

This is so that you can **manipulate the element** (by adding styles, classes, ids, text, etc.) before placing it on the page. 

You can place the element into the **DOM** with one of the following methods.

**Append elements**
<ul>
<li><code>parentNode.appendChild(childNode)</code> - appends childNode as the last child of parentNode</li>
<li><code>parentNode.insertBefore(newNode, referenceNode)</code> - inserts newNode into parentNode before referenceNode</li>
</ul>

**Remove elements**
<ul>
<li><code>parentNode.removeChild(child)</code> - removes child from parentNode on the DOM and returns a reference to child</li>
</ul>

**Altering elements**

When you have a reference to an element, you can use that reference to **alter the element’s own properties**. This allows you to **do many useful alterations**, like *adding/removing and altering attributes, changing classes, adding inline style information* and more.

    const div = document.createElement('div');<br>
    // creates a new div referenced in the variable 'div'

**Adding inline style**

    div.style.color = 'blue';<br>
    // adds the indicated style rule

    div.style.cssText = 'color: blue; background: white;';<br>
    // adds several style rules

    div.setAttribute('style', 'color: blue; background: white;');

    // adds several style rules

Note that if you’re accessing a kebab-cased CSS rule from **JS**, you’ll either need to use camelCase or you’ll need to use bracket notation instead of dash notation.

    div.style.background-color // doesn't work - attempts to subtract color from div.style.background

    div.style.backgroundColor // accesses the div's background-color style

    div.style['background-color'] // also works

    div.style.cssText = "background-color: white;" // sets the div's background-color by assigning a CSS string

**Editing attributes**

    div.setAttribute('id', 'theDiv');  

    // if id exists, update it to 'theDiv', else create an id
    // with value "theDiv"

    div.getAttribute('id');      

    // returns value of specified attribute, in this case<br>
    // "theDiv"

    div.removeAttribute('id');        

    // removes specified attribute

**Working with classes**

    div.classList.add('new');                                  
    // adds class "new" to your new div

    div.classList.remove('new');                                     
    // removes "new" class from div

    div.classList.toggle('active');                                 
    // if div doesn't have class "active" then add it, or if 
    // it does, then remove it.

It is often **standard (and cleaner) to toggle a CSS style** rather than adding and removing inline CSS.

**Adding text content**

    div.textContent = 'Hello World!'<br>
    // creates a text node containing "Hello World!" and<br>
    // inserts it in div

**Adding HTML content**

    div.innerHTML = '`<span >Hello World!</span>`';<br>
    // renders the HTML inside div                 

Note that *textContent* is preferable for **adding text**, and *innerHTML* should be used *sparingly* as **it can create security risks if misused**.

Keep in mind that the **JavaScript** *does not alter* your **HTML**, but the **DOM** - your **HTML** file will look the same, but the **JavaScript** changes what the browser renders.

>Your **JavaScript**, for the most part, is **run whenever the JS file is run**, or when the **script tag is encountered in the HTML**.<br>
>
>If you are including your **JavaScript** at the *top* of your file, many of these DOM manipulation methods *will not work* because the **JS** code is being run before the **nodes** are created in the **DOM**.<br>
>
>The simplest way to fix this is to **include your JavaScript at the bottom of your HTML file** so that it gets run after the **DOM nodes** are parsed and created.
>
Alternatively, you can link the **JavaScript** file in the `<head>` of your **HTML** document. Use the `<script>` tag with the `src` attribute containing the path to the **JS** file, and include the `defer` keyword to load the file *after* the **HTML** is parsed, as such:

    <head>
        <script src="js-file.js" defer></script>
    </head>










