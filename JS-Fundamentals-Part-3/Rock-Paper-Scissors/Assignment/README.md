# Project: Rock, Paper, Scissors 

<ol>
<li>Start a new Git repo for your project.</li>
<li>Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.</li>
<li>Your game is going to play against the computer, so begin with a function called <strong>getComputerChoice</strong> that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. <em>Tip: use the console to make sure this is returning the expected output before moving to the next step!</em></li>
<li>Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the <strong>playerSelection</strong> and <strong>computerSelection</strong> - and then return a string that declares the winner of the round like so: <strong>"You Lose! Paper beats Rock".</strong></li>
<ul>
<li>Make your function’s playerSelection parameter case-insensitive (so users can input <strong>rock, ROCK, RocK</strong> or any other variation).</li>
</ul>
<li>Important note: you want to <strong>return</strong> the results of this function call, <em>not</em> <strong>console.log()</strong> them. You’re going to use what you <strong>return</strong> later on, so let’s test this function by using console.log to see the results:</li><br>

    function playRound(playerSelection, computerSelection) {
     // your code here!
    }
 
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

<li>Write a NEW function called <strong>game()</strong>. Use the previous function <em>inside</em> of this one to play a 5 round game that keeps score and reports a winner or loser at the end.</li>
<ul>
<li>You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your <strong>playRound</strong> function 5 times in a row. Loops are covered in the next lesson.</li>
<li>At this point you should be using <strong>console.log()</strong> to display the results of each round and the winner at the end.</li>
<li>Use <strong>prompt()</strong> to get input from the user.</li>
<li>Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.</li>
<li>Feel free to create more “helper” functions if you think it would be useful.
</li>
</ul>
