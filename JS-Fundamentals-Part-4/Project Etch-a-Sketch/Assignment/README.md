<ol>
<li>Create a webpage with a 16x16 grid of square divs.</li>
<ul>
<li>Create the divs using JavaScript. Don’t try making them by hand by copying and pasting them into your HTML file!</li>
<li>It’s best to put your grid squares inside another “container” div (which can go directly into your HTML).</li>
<li>Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research/use CSS Grid for this as Grid will be taught later after the foundation's course. This is an opportunity specifically to get more practice in for Flexbox!</li>
<li>Be careful with borders and margins, as they can adjust the size of the squares!</li>
<li>“OMG, why isn’t my grid being created???”</li>
<li>Did you link your CSS stylesheet?</li>
<li>Open your browser’s developer tools.</li>
<li>Check if there are any errors in the JavaScript console.</li>
<li>Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.</li>
<li>Go willy-nilly and add <code>console.log</code> statements in your JavaScript to see if it’s actually being loaded.</li>
</ul><br>
<li>Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid as a pen would.</li>
<ul>
<li>Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.</li>
<li>There are multiple ways to change the color of the divs, including:</li>
<li>Adding a new class to the div.</li>
<li>Changing the div’s background color using JavaScript.</li>
</ul><br>
<li>Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. <strong>Tip</strong>: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.</li>
<ul>
<li>Research <code>button</code> tags in HTML and how you can make a JavaScript function run when one is clicked.</li>
<li>Also check out <code>prompts</code>.</li>
<li>You should be able to enter <code>64</code> and have a brand new 64x64 grid pop up without changing the total amount of pixels used.</li>
<li>Push your project to GitHub!</li>
</ul>
</ol>

### Extra credit

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
<ol>
<li>Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.</li>
<li>Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.</li>
</ol>

You can choose to do either one or both of these challenges, it’s up to you.
