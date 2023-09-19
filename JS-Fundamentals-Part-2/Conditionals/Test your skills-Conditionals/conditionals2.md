# Conditionals 2

For this task you are given **three variables**:

- <em>machineActive</em> — Contains an indicator of whether the answer machine is <strong>switched on or not</strong> (<em>true/false</em>)
- <em>score</em> — Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate <strong>how well you did.</strong>
- <em>response</em> — Begins uninitialized, but is later used to store <strong>a response</strong> that will be printed to the output panel.

You need to create an <em>if...else</em> structure that checks whether the machine is <strong>switched on</strong> and puts a message into the <em>response</em> <strong>variable</strong> if it <em>isn't</em>, telling the user to switch the machine on.

Inside the first, you need to nest an <em>if...else if...else</em> that puts appropriate messages into the <em>response</em> <strong>variable</strong> depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:

- Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
- Score of 0 to 19 — "That was a terrible score — total fail!"
- Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
- Score of 40 to 69 — "You did a passable job, not bad!"
- Score of 70 to 89 — "That\'s a great score, you really know your stuff."
- Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"