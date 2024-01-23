## Array methods summary guide

A cheat sheet of array methods:


<li><strong>To add/remove elements:</strong></li>
<ul>
<li><code>push(...items)</code> – adds items to the end,
</li>
<li><code>pop()</code> – extracts an item from the end,</li>
<li><code>shift()</code> – extracts an item from the beginning,</li>
<li><code>unshift(...items)</code> – adds items to the beginning.</li>
<li><code>splice(pos, deleteCount, ...items)</code> – at index <code>pos</code> deletes <code>deleteCount</code> elements and inserts <code>items</code>.</li>
<li><code>slice(start, end)</code> creates a new array, copies elements from index <code>start</code> till <code>end</code> (not inclusive) into it.</li>
<li><code>concat(...items)</code> returns a new array: copies all members of the current one and adds <code>items</code> to it. If any of <code>items</code> is an array, then its elements are taken.</li>
</ul>
<li><strong>To search among elements:</strong></li>
<ul>
<li><code>indexOf/lastIndexOf(item, pos)</code> – look for <code>item</code> strarting from position <code>pos</code>, return the index or <code>-1</code> if not found.</li>
<li><code>includes(value)</code> – returns <code>true</code> if the array has <code>value</code>, otherwise <code>false</code>.</li>
<li><code>find/filter(func)</code> – filter elements through the function, return first/all values that make it return <code>true</code>.</li>
<li><code>findIndex</code> is like <code>find</code>, but returns the index instead of a value.</li>
</ul>
<li><strong>To iterate over elements:</strong></li>
<ul>
<li><code>forEach(func)</code> – calls <code>func</code> for every element, does not return anything.</li>
</ul>
<li><strong>To transform the array:</strong></li>
<ul>
<li><code>map(func)</code> – creates a new array from results of calling <code>func</code> for every element.</li>
<li><code>sort(func)</code> – sorts the array in-place, then returns it.</li>
<li><code>reverse()</code> – reverses the array in-place, then returns it.</li>
<li><code>split/join</code> – convert a string to array and back.</li>
<li><code>reduce/reduceRight(func, initial)</code> – calculate a single value over the array by calling <code>func</code> for each element and passing an intermediate result between the calls.</li>
</ul>
<li>Additionally:</li>
<ul>
<li><code>Array.isArray(value)</code> checks <code>value</code> for being an array, if so returns <code>true</code>, otherwize <code>false</code>.</li>
</ul>

Please note that methods <code>sort</code>, <code>reverse</code> and <code>splice</code> modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

<ul>
<li><code>arr.some(fn)/arr.every(fn)</code> check the array.</li>
</ul>

The function <code>fn</code> is called on each element of the array similar to <code>map</code>. If any/all results are <code>true</code>, returns <code>true</code>, otherwise <code>false</code>.

These methods behave sort of like <code>||</code> and <code>&&</code> operators: if <code>fn</code> returns a truthy value, <code>arr.some()</code> immediately returns <code>true</code> and stops iterating over the rest of items; if <code>fn </code>returns a falsy value, <code>arr.every()</code> immediately returns <code>false</code> and stops iterating over the rest of items as well.

We can use <code>every</code> to compare arrays:

    function arraysEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }

    alert( arraysEqual([1, 2], [1, 2])); // true

<ul>
<li><code>arr.fill(value, start, end)</code> – fills the array with repeating <code>value</code> from index <code>start</code> to <code>end</code>.</li>
<li><code>arr.copyWithin(target, start, end)</code> – copies its elements from position <code>start</code> till position <code>end</code> into <em>itself</em>, at position <code>target</code> (overwrites existing).</li>
<li><code>arr.flat(depth)/arr.flatMap(fn)</code> create a new flat array from a multidimensional array.</li>
</ul>

From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that’s much easier.

Look through the cheat sheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.