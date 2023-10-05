# Conditionals 4

For the final task you are given <strong>four variables</strong>:

- <em>machineActive</em> — contains an indicator of whether the login machine is <strong>switched on or not</strong> (<em>true/false</em>).
- <em>pwd</em> — contains the <strong>user's login password</strong>.

- <em>machineResult</em> — begins uninitialized, but is later used to <strong>store a response</strong> that will be printed to the output panel, letting the user know whether the machine is <strong>switched on</strong>.
- <em>pwdResult</em> — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their <strong>login attempt was successful</strong>.

We'd like you to create an <em>if...else</em> structure that <em>checks</em> whether the machine is <strong>switched on</strong> and puts a message into the <em>machineResult</em> <strong>variable</strong> telling the user whether <strong>it is on or off</strong>.

If the machine is <strong>on</strong>, we also want a <strong>second conditional</strong> to run that checks whether the <em>pwd</em> is equal to <em>cheese</em>.

- If <strong>so</strong>, it should <strong>assign a string</strong> to <em>pwdResult</em> telling the user they <strong>logged in successfully</strong>.

- If <strong>not</strong>, it should assign a <strong>different string</strong> to <em>pwdResult</em> telling the user their <strong>login attempt was not successful.</strong> 

We'd like you to do this in a single line, using something that isn't an <em>if...else</em> structure.


    let machineActive = true;
    let pwd = 'cheese';

    let machineResult;
    let pwdResult;

    // Add your code here

    // Don't edit the code below here!

    section.innerHTML = ' ';
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = machineResult;
    para2.textContent = pwdResult;

    section.appendChild(para1);
    section.appendChild(para2);