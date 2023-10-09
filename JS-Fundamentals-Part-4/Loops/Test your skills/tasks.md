# JavaScript loops marking guide

The aim of this skill test is to assess whether you've understood our **Looping code article**.

Some of the questions below require you to write some *DOM manipulation code* to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via **JavaScript**.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what *DOM APIs* you need to successfully answer the questions. A good starting place is our Manipulating documents tutorial.

## Task 1 

In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided `myArray` and prints them out on the screen inside list items (i.e., `<li>` elements), which are appended to the provided `list`.

## Task 2

In this next task, we want you to write a simple program that, given a name, searches an array of objects containing names and phone numbers (phonebook) and, if it finds the name, outputs the name and phone number into the paragraph (para) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the JavaScript object basics tutorial.

You are given three variables to begin with:
<ul>
<li><code>name</code> — contains a name to search for
<li><code>para</code> — contains a reference to a paragraph, which will be used to report the results
<li><code>phonebook</code> - contains the phonebook entries to search.
</ul>
You should use a type of loop that you've not used in the previous task.

## Task 3

In this final task, you are provided with the following:
<ul>
<li><code>i</code> — starts off with a value of 500; intended to be used as an iterator.
<li><code>para</code> — contains a reference to a paragraph, which will be used to report the results.
<li><code>isPrime()</code> — a function that, when passed a number, returns true if the number is a prime number, and false if not.

You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided <code>isPrime()</code> function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's <code>textContent</code> along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.


