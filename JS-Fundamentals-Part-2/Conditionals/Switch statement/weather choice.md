# A switch example

Let's have a look at a real example — we'll **rewrite** our <em>weather forecast application</em> to use a **switch statement** instead:

<p>< label for="weather">Select the weather type today: < /label><br>
< select id="weather"><br>
< option value="">--Make a choice--< /option><br>
< option value="sunny">Sunny< /option><br>
< option value="rainy">Rainy< /option><br>
< option value="snowing">Snowing< /option><br>
< option value="overcast">Overcast< /option><br>
< /select></p>
  
< p>< /p>

<p>const select = document.querySelector('select');<br>
const para = document.querySelector('p');</p>

<p>select.addEventListener('change', setWeather);</p>

<p>function setWeather() {<br>
  const choice = select.value;</p>

  <p>switch (choice) {<br>
    case 'sunny':<br>
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';<br>
      break;<br>
    case 'rainy':<br>
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';<br>
      break;<br>
    case 'snowing':<br>
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';<br>
      break;<br>
    case 'overcast':<br>
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';<br>
      break;<br>
    default:<br>
      para.textContent = '';<br>
  }<br>
}</p>
