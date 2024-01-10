# Objects

As we know from the chapter *Data types*, there are **eight data types** in JavaScript. *Seven* of them are called *“primitive”*, because their values contain *only a single thing* (be it a string or a number or whatever).

In contrast, **objects are used to store keyed collections of various data and more complex entities**. In JavaScript, **objects penetrate almost every aspect of the language**. So we must understand them first before going in-depth anywhere else.

An **object** can be created with *figure brackets {…}* with an optional list of properties. A property is a “key: value” pair, where **key is a string** (also called a “property name”), and **value can be anything**.

An empty object (“empty cabinet”) can be created using one of two syntaxes:

    let user = new Object(); // "object constructor" syntax
    let user = {};  // "object literal" syntax  

Usually, the figure **brackets {...}** are used. That declaration is called an *object literal*.

## Literals and properties

We can put some properties into **{...}** as *“key: value” pairs*; a property has a key (or “name” or “identifier”) before the colon ":" and a value to the right of it.

We can **add, remove and read files** from it at any time. Property values are accessible using the **dot notation**:

    // get property values of the object:
    alert( user.name ); // John
    alert( user.age ); // 30

The value can be of *any type*.

To **remove** a property, we can use the **delete operator**:

    delete user.age;

We can also use **multiword property names**, but then they must be **quoted** " ".

The **last** property in the list may end with a **comma**; makes it easier to add/remove/move around properties, because all lines become alike.

## Square brackets

For **multiword** properties, the **dot** access *doesn’t* work, it would give a syntax error.

There’s an **alternative “square bracket notation”** that **works with any string**:

    let user = {};

    // set
    user["likes birds"] = true;

    // get
    alert(user["likes birds"]); // true

    // delete
    delete user["likes birds"];

## Computed properties

We can use square brackets in an *object literal*, when creating an object. That’s called **computed properties**.

    let fruit = prompt("Which fruit to buy?", "apple");

    let bag = {
        [fruit]: 5, // the name of the property is taken from the variable fruit
    };

    alert( bag.apple ); // 5 if fruit="apple"

    The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

We can use more complex expressions inside square brackets:

    let fruit = 'apple';
    let bag = {
        [fruit + 'Computers']: 5 // bag.appleComputers = 5
    };

**Square brackets are much more powerful than dot notation**. They allow any property names and variables. But they are also longer to write.

So most of the time, when property **names are known and simple**, the **dot** is used. And if we need something more **complex**, then we **switch to square brackets**.

## Property value shorthand

In real code, we often use existing variables as values for property names.

    function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
    }

    let user = makeUser("John", 30);
    alert(user.name); // John

In the example above, *properties have the same names as variables*. The use-case of making a property from a variable is so common, that there’s a **special property value shorthand to make it shorter**.

Instead of name:name we can just write name, like this:

    function makeUser(name, age) {
        return {
            name, // same as name: name
            age,  // same as age: age
            // ...
        };
    }

We can use **both normal properties and shorthands in the same object**:

    let user = {
        name,  // same as name:name
        age: 30
    };

## Property names limitations

As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, **there’s no such restriction**:

    // these properties are all right
    let obj = {
        for: 1,
        let: 2,
        return: 3
    };

    alert( obj.for + obj.let + obj.return );  // 6

In short, there are *no limitations on property names*. They can be any strings or symbols (a special type for identifiers, to be covered later).

**Other types** are automatically converted to *strings*.

For instance, a number 0 becomes a string "0" when used as a property key:

    let obj = {
        0: "test" // same as "0": "test"
    };

    // both alerts access the same property (the number 0 is converted to string "0")
    alert( obj["0"] ); // test
    alert( obj[0] ); // test (same property)

## Property existence test, “in” operator

A notable feature of objects in JavaScript, compared to many other languages, is that **it’s possible to access any property**. There will be *no error if the property doesn’t exist*!

Reading a non-existing property just returns `undefined`. So we can easily test whether the property exists:

    let user = {};

    alert( user.noSuchProperty === undefined ); // true means "no such property"

There’s also a special operator `"in"` for that.

The syntax is:

    "key" in object

For instance:

    let user = { name: "John", age: 30 };

    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist

Please note that on the left side of `in` there must be a *property name*. That’s usually a *quoted string*.

If we *omit quotes*, that means a variable should contain the *actual name to be tested*. For instance:

    let user = { age: 30 };

    let key = "age";
    alert( key in user ); // true, property "age" exists

Why does the `in` operator exist? Isn’t it enough to compare against `undefined`?

Well, most of the time the comparison with `undefined` works fine. But there’s a special case when it fails, but `"in"` works correctly.

It’s when an object property exists, but stores `undefined`:

    let obj = {
        test: undefined
    };

    alert( obj.test ); // it's undefined, so - no such property?

    alert( "test" in obj ); // true, the property does exist!

In the code above, the property `obj.test` technically exists. So the `in` operator works right.

Situations like this happen very rarely, because `undefined` should not be explicitly assigned. We mostly use `null` for “unknown” or “empty” values. So the `in` operator is an exotic guest in the code.

## The "for..in" loop

To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for(;;)` construct that we studied before.

    for (key in object) {
        // executes the body for each key among object properties
    }

For instance, let’s output all properties of `user`:

    let user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    for (let key in user) {
        // keys
        alert( key );  // name, age, isAdmin
        // values for the keys
        alert( user[key] ); // John, 30, true
    }

Note that all “for” constructs allow us to declare the looping variable inside the loop, like `let key` here.

## Ordered like an object

**Are objects ordered?** In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: *“ordered in a special fashion”*: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes:

    let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
        // ..,
        "1": "USA"
    };

    for (let code in codes) {
        alert(code); // 1, 41, 44, 49 
    } 

The **object** may be used to *suggest a list of options to the user*. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

But if we run the code, we see a totally different picture:

USA (1) goes first
then Switzerland (41) and so on.
The phone codes go in the ascending sorted order, because they are integers. So we see `1, 41, 44, 49`.  

## Summary

Objects are associative arrays with several special features.

They store properties (key-value pairs), where:
<ul>
<li>Property keys must be strings or symbols (usually strings).</li>
<li>Values can be of any type.</li>
</ul>

To access a property, we can use:
<ul>
<li>The dot notation: obj.property.</li>
<li>Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].</li>
</ul>

Additional operators:
<ul>
<li>To delete a property: delete obj.prop.</li>
<li>To check if a property with the given key exists: "key" in obj.</li>
<li>To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.</li>
</ul>

There are many other kinds of objects in JavaScript:
<ul>
<li>Array to store ordered data collections,</li>
<li>Date to store the information about the date and time,</li>
<li>Error to store the information about an error.</li>
<li>…And so on.</li>
</ul>

They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

**Objects in JavaScript are very powerful**. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.





