# Functions 3

In this task, you return to the problem posed in Task 1, with the aim of improving it. The three improvements we want you to make are:

Refactor the code that generates the random number into a separate function called `random()`, which takes as parameters two generic bounds that the random number should be between, and returns the result.
Update the `chooseName()` function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
Print the returned result into the paragraph (`para`)'s `textContent`.

Try updating the code below to recreate the finished example:

    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');

    // Add your code here

    // Don't edit the code below here!

    section.innerHTML = ' ';

    section.appendChild(para);