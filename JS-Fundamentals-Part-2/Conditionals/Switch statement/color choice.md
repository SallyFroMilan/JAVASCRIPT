# Active learning: More color choices

In this example, you are going to take the <strong>ternary operator</strong> example we saw earlier and <strong>convert the ternary operator into a switch statement</strong> to allow us to <em>apply more choices</em> to the simple website. Look at the `<select>` — this time you'll see that it has not two theme options, but five. You need to **add a switch statement** just underneath the `// ADD SWITCH STATEMENT` comment:
<ul>
<li>It should accept the <code>choice</code> variable as its input expression.</li>
<li>For each case, the choice should equal one of the possible <code>< option ></code> values that can be selected, that is, <code>white, black, purple, yellow, or psychedelic.</code></li>
<li>For each case, the <code>update()</code> function should be run, and be passed two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so they need to be wrapped in quotes.</li>
</ul>


