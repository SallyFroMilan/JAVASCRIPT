# Active learning: A simple calendar

In this example, you are going to help us finish a <strong>simple calendar application.</strong> 

In the code you've got:

- A <code>< select ></code> element to allow the user to choose between <strong>different months.</strong>
- An <code>onchange</code> event handler to detect when the <strong>value selected</strong> in the <code>< select ></code> menu <strong>is changed.</strong>
- A function called <code>createCalendar()</code> that draws the calendar and displays the <strong>correct month</strong> in the <code>< h1 ></code> element.
  
We need you to write a <strong>conditional statement</strong> inside the <code>onchange</code> handler function, just below the <code>// ADD CONDITIONAL HERE</code> comment.

It should:

1. Look at the selected month (stored in the <code>choice</code> <strong>variable.</strong> This will be the <code>< select ></code> element value after the value changes, so "January" for example.)<br>
2. Set a <strong>variable</strong> called <code>days</code> to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.

<strong>Hints:</strong>
    
- You are advised to use logical OR to group multiple months together into a single condition; many of them share the same number of days.
- Think about which number of days is the most common, and use that as a default value.

