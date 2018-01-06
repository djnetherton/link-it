# linkit.js
Linkit is a handly little jQuery plugin to replace specific words within the HTML of page with links. E.g. Replace all instances of the word ```Google``` to ```<a href="https://google.com">Google</a>```

# Examples
Below are collection of examples how to use linkit.js

## Example 1: Basic word replace</h2>

This is the most basic usage of linkit.js.

```javascript
$('.text').linkIt({
    linkWord: ["linkit.js", "https://github.com/djnetherton/link-it"]
});
```

## Example 2: Case-sensitive word replacement

In this example we're demonstrating how we can replace case sensitive words like HTML but leave other instances like html, untouched.

```javascript
$('.text-2').linkIt({
    linkWord: ["HTML", "https://github.com/djnetherton/link-it"],
    caseSensitive: true
});
```

## Example 3: Using a custom colour for your links.

This example shows how you can use a custom colour for each word that's been linked.

```javascript
$('.text-3 p').linkIt({
    linkWord: ["colour", "https://github.com/djnetherton/link-it"],
    linkColor: 'goldenrod'
});
```