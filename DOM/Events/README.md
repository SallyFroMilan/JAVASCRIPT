# Events

Now that we have a handle on **manipulating the DOM with JavaScript**, the next step is learning how to make that happen *dynamically*, or on demand!<br>
<p><strong>Events</strong> are <em>how you make that magic happens on your pages</em>.<br>
<strong>Events</strong> are <em>actions that occur on your webpage such as mouse-clicks or keypresses</em>, and using <strong>JavaScript</strong> we can make our webpage <em>listen and react</em> to these events.</p>

There are **three primary ways** to go about this: 
<ul>
<li>you can specify function attributes directly on your <strong>HTML elements</strong></li>
<li>you can set properties of form on[eventType] (onclick, onmousedown, etc.) on the <strong>DOM nodes in your JavaScript</strong></li>
<li>you can attach <strong>event listeners to the DOM nodes in your JavaScript.</strong></li>
</ul>

**Event listeners** are definitely the *preferred method*, but you will regularly see the others in use, so we’re going to cover all three.

We’re going to create 3 buttons that all alert “Hello World” when clicked. Try them all out using your own **HTML file**, or using something like CodePen.

**Method 1**

    <button onclick="alert('Hello World')">Click Me</button>

This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.

**Method 2**

    <!-- the HTML file -->
    <button id="btn">Click Me</button>

    // the JavaScript file

    const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World");

This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.

**Method 3**

    <!-- the HTML file -->
    <button id="btn">Click Me Too</button>

    // the JavaScript file
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        alert("Hello World");
    });

Now, we maintain separation of concerns, and we also allow **multiple event listeners** if the need arises. Method 3 is **much more flexible and powerful**, though it is a bit more complex to set up.

Note that **all 3 of these methods** can be used with **named functions** like so:

    <!-- the HTML file -->
    <!-- METHOD 1 -->
    <button onclick="alertFunction()">CLICK ME BABY</button>

    // the JavaScript file
    function alertFunction() {
        alert("YAY! YOU DID IT!");
    }   

    // METHOD 2
    btn.onclick = alertFunction;

    // METHOD 3
    btn.addEventListener('click', alertFunction);

Using **named functions**: 
<ul>
<li>can clean up your code considerably</li> 
<li>is a really good idea if the function is something that you are going to want to do in multiple places</li>
</ul>

**Attaching listeners to groups of nodes**

This might seem like a lot of code if you’re attaching lots of **similar event listeners** to many elements. There are a few ways to go about doing that *more efficiently*. We learned above that we can get a nodelist of all of the items matching a specific selector with querySelectorAll('selector'). In order to **add a listener to each of them** we simply need to *iterate through the whole list* like so:

    <div id="container">
        <button id="1">Click Me</button>
        <button id="2">Click Me</button>
        <button id="3">Click Me</button>
    </div> 

 
<p>// buttons is a node list. It looks and acts much like an array.<br>
    const buttons = document.querySelectorAll('button');</p>

<p>// we use the .forEach method to iterate through each button<br>
    buttons.forEach((button) => {</p>

<p>// and for each one we add a 'click' listener<br>
    button.addEventListener('click', () => {<br>
        alert(button.id);<br>
    });<br>
 });</p>



This is just the tip of the iceberg when it comes to **DOM manipulation and event handling**, but it’s enough to get you started with some exercises. In our examples so far we have been using the *‘click’* event exclusively, but there are many more available to you.

Some useful events include:
<ul>
<li>click</li>
<li>dblclick</li>
<li>keydown</li>
<li>keyup</li>
</ul>










