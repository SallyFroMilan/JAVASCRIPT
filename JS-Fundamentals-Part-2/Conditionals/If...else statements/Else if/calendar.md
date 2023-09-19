# Active learning: A simple calendar

In this example, you are going to help us finish a <strong>simple calendar application.</strong> 

In the code you've got:

- A <em>< select ></em> element to allow the user to choose between <strong>different months.</strong>
- An <em>onchange</em> event handler to detect when the <strong>value selected</strong> in the <em>< select ></em> menu <strong>is changed.</strong>
- A function called <em>createCalendar()</em> that draws the calendar and displays the <strong>correct month</strong> in the <em>< h1 ></em> element.
  
We need you to write a <strong>conditional statement</strong> inside the <em>onchange</em> handler function, just below the <em>// ADD CONDITIONAL</em> HERE comment.

It should:

1. Look at the selected month (stored in the <em>choice</em> <strong>variable.</strong> This will be the <em>< select ></em> element value after the value changes, so "January" for example.)<br>
2. Set a <strong>variable</strong> called <em>days</em> to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.

<strong>Hints:</strong>
    
- You are advised to use logical OR to group multiple months together into a single condition; many of them share the same number of days.
<<<<<<< HEAD
- Think about which number of days is the most common, and use that as a default value.
=======
- Think about which number of days is the most common, and use that as a default value.
>>>>>>> cf6a37a0ceac3012e0217cdb65cd4aee49603580
