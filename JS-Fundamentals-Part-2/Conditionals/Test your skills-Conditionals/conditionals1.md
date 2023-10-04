# Conditionals 1 

In this task you are provided with <strong>two variables</strong>:

- `season` — contains a <strong>string</strong> that says <strong>what the current season is.</strong>
- `response` — begins uninitialized, but is later used to store a response that will be <strong>printed to the output panel.</strong>

We want you to create a <strong>conditional</strong> that checks whether `season` contains the <strong>string "summer"</strong>, and if so assigns a <strong>string</strong> to `response` that gives the user an <strong>appropriate message about the</strong> <em>season.</em><br>
If not, it should assign a <strong>generic string</strong> to `response` that tells the user <strong>we don't know what</strong> <em>season</em> <strong>it is.</strong>

To finish off, you should then add another test that checks whether `season` contains the <strong>string "winter"</strong>, and again assigns an appropriate <strong>string </strong>to `response`.

Try updating the live code below to recreate the finished example:



    let season = 'summer';
    let response;

    // Add your code here

    // Don't edit the code below here!

    const section = document.querySelector('.preview');
    section.innerHTML = ' ';
    let para1 = document.createElement('p');
    para1.textContent = response;
    section.appendChild(para1);
