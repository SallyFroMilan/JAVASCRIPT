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