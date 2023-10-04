# Else if

There is a way to **chain on extra choices/outcomes** to your <code>if...else</code> — using <code>else if.</code> Each **extra choice** requires an **additional block** to put in between <code>if () { }</code> and <code>else { }</code> — check out the following more involved example, which could be part of a "simple weather forecast application":

HTML

    <label for="weather"> Select the weather type today: </label>
    <select id="weather">
    <option value=""> --Make a choice-- </option>
    <option value="sunny"> Sunny </option>
    <option value="rainy"> Rainy </option>
    <option value="snowing"> Snowin g</option>
    <option value="overcast"> Overcast </option>
    </select>
  
    <p></p>

JS
 
    const select = document.querySelector('select');
    const para = document.querySelector('p');

    select.addEventListener('change', setWeather);

    function setWeather() {<br>
      const choice = select.value;

      if (choice === 'sunny') {<br>
        para.textContent =<br>
          'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      } else if (choice === 'rainy') {
        para.textContent =
          'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      } else if (choice === 'snowing') {
        para.textContent =
          'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      } else if (choice === 'overcast') {
        para.textContent =
          'It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      } else {
        para.textContent = '';
      }
    }

1. Here we've got an HTML `<select>` element allowing us to make **different weather choices**, and a **simple paragraph.**
2. In **JavaScript**, we are storing a reference to both the `<select>` and `<p>` elements, and adding an **event listener** to the `<select>` element so that when its value is changed, the <em>setWeather()</em> function is run.
3. When this function is run, we first set a variable called <em>choice</em> to the current value selected in the `<select>` element. We then use a conditional statement to show **different text** inside the paragraph depending on what the value of <em>choice</em> is. Notice how all the conditions are tested in <em>else if () { }</em> blocks, except for the first one, which is tested in an <em>if () { }</em> block.
4. The very last choice, inside the <em>else { }</em> block, is basically a "last resort" option — the code inside it will be run if none of the conditions are <em>true.</em> In this case, it serves to **empty the text out of the paragraph** if nothing is selected, for example, if a user decides to re-select the "--Make a choice--" placeholder option shown at the beginning.
