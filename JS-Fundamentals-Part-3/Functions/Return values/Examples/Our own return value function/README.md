# Active learning: our own return value function

Make a local copy of the function-library.html file from GitHub. This is a simple <strong>HTML page</strong> containing a text `<input>` field, a paragraph and a `<script>` element in which is stored a <strong>reference to both HTML elements</strong> in two variables. 
The page will allow to enter a number into the text box and display <strong>different numbers related to it</strong> in the paragraph.

Add some useful functions to this `<script>` element below the two existing lines:

JS

    function squared(num) {
        return num * num;
    }

    function cubed(num) {
        return num * num * num;
    }

    function factorial(num) {
        if (num < 0) return undefined;
        if (num === 0) return 1;
        let x = num - 1;
        while (x > 1) {
            num *= x;
            x--;
        }
        return num;
    }

The `squared()` and `cubed()` functions are fairly obvious — they return the square or cube of the number that was given as a parameter. The `factorial()` function returns the factorial of the given number.

Include a way to print out information about the number entered into the text input by adding the following event handler below the existing functions:

JS

    input.addEventListener("change", () => {
        const num = parseFloat(input.value);
        if (isNaN(num)) {
            para.textContent = "You need to enter a number!";
        } else {
            para.textContent = `${num} squared is ${squared(num)}. `;
            para.textContent += `${num} cubed is ${cubed(num)}. `;
            para.textContent += `${num} factorial is ${factorial(num)}. `;
        }
    });

Save your code, load it in a browser, and try it out.

### Here are some explanations for the `addEventListener` function in step 3 above:

<ul>
<li>By adding a listener to the <code>change</code> event, this function runs whenever the <code>change</code> event fires on the text <code>input</code>  — that is when a new value is entered into the text input, and submitted (e.g., enter a value, then un-focus the input by pressing Tab or Return). When this anonymous function runs, the value in the <code>input</code> is stored in the num constant.</li>
<li>The if statement prints an error message if the entered value is not a number. The condition checks if the expression <code>isNaN(num)</code> returns <code>true</code>. The <code>isNaN()</code> function tests whether the <code>num</code> value is not a number — if so, it returns <code>true</code>, and if not, it returns <code>false</code>.</li>
<li>If the condition returns <code>false</code>, the <code>num</code> value is a number and the function prints out a sentence inside the paragraph element that states the square, cube, and factorial values of the number. The sentence calls the <code>squared()</code>, <code>cubed()</code>, and <code>factorial()</code> functions to calculate the required values.</li>
</ul>