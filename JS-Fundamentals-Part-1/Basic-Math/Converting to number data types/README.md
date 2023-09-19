# Converting to number data types

Sometimes you might end up with a number that is stored as a string type, which makes it difficult to perform calculations with it. This most commonly happens when data is entered into a <em>form</em> input, and the <em>input type is text.</em> There is a way to solve this problem — passing the string value into the <em>Number()</em> constructor to return a number version of the same value.

For example, try typing these lines into your console:

<p>let myNumber = "74";<br>
myNumber += 3;</p>

You end up with the result 743, not 77, because <em>myNumber</em> is actually defined as a string. You can test this by typing in the following:

<p>typeof myNumber;</p>

<p>To fix the calculation, you can do this:</p>

<p>let myNumber = "74";<br>
myNumber = Number(myNumber) + 3;</p>

The result is then 77, as initially expected.