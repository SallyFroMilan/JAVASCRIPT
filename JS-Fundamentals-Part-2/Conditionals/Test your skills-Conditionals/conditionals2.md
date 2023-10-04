# Conditionals 2

For this task you are given **three variables**:

- `machineActive` — contains an indicator of whether the answer machine is <strong>switched on or not</strong> (`true/false`)
- `score` — contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate <strong>how well you did.</strong>
- `response` — begins uninitialized, but is later used to store a <strong>response</strong> that will be printed to the output panel.

You need to create an `if...else` structure that checks whether the machine is <strong>switched on</strong> and puts a message into the `response` <strong>variable</strong> if it <em>isn't</em>, telling the user to switch the machine on.

Inside the first `if...else`, you need to nest an `if...else` that puts appropriate messages into the `response` <strong>variable</strong> depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:

- Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
- Score of 0 to 19 — "That was a terrible score — total fail!"
- Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
- Score of 40 to 69 — "You did a passable job, not bad!"
- Score of 70 to 89 — "That\'s a great score, you really know your stuff."
- Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"

Try updating the live code below to recreate the finished example. After you've entered your code, try changing machineActive to true, to see if it works.

    let response;
    let score = 75;
    let machineActive = false;

    // Add your code here

    // Don't edit the code below here!

    section.innerHTML = ' ';
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = `Your score is ${ score }`;
    para2.textContent = response;

    section.appendChild(para1);
    section.appendChild(para2);