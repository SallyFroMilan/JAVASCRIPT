# Functions 4

In this task, we have an array of names, and we're using `Array.filter()` to get an array of only names shorter than 5 characters. The filter is currently being passed a named function `isShort()` which checks the length of the name, returning `true` if the name is less than 5 characters long, and `false` otherwise.

We'd like you to change this into an **arrow function**. See how compact you can make it.

    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    const para = document.createElement('p');

    function isShort(name) {
    return name.length < 5;
    }

    const shortNames = names.filter(isShort);
    para.textContent = shortNames;

    // Don't edit the code below here!

    section.innerHTML = ' ';

    section.appendChild(para);

