# linkit.js
Linkit is a handly little jQuery plugin to replace specific words within the HTML of page with links. E.g. Replace all instances of the word ```Google``` to ```<a href="https://google.com">Google</a>```

# Examples
Below are collection of examples how to use linkit.js. You can see these working in the examples.html file.

## Example 1: Basic word replace</h2>

This is the most basic usage of linkit.js.

```javascript
$('.example-1').linkIt({
    link: {
        word: 'linkit.js',
        url: 'https://github.com/djnetherton/link-it'
    }
});
```

## Example 2: Case sensitive word replacement

In this example we're demonstrating how we can replace case sensitive words like HTML but leave other instances like html, untouched.

```javascript
 $('.example-2').linkIt({
    link: {
        word: 'HTML',
        url: 'https://github.com/djnetherton/link-it'
    },
    caseSensitive: true
});
```

## Example 3: Using a custom colour for your links.

This example shows how you can use a custom colour for each word that's been linked.

```javascript
$('.example-3').linkIt({
    link: {
        word: 'custom colour',
        url: 'https://github.com/djnetherton/link-it'
    },
    linkColor: 'goldenrod'
});
```

 ## Example 4:Add a custom class your links.

This example shows how you can add a custom class for each word that's been linked.

```javascript
        $('.example-4').linkIt({
            link: {
                word: 'custom class',
                url: 'https://github.com/djnetherton/link-it'
            },
            linkClass: 'my-custom-class'
        });
```


## Example 5 :Opening links in a new window.
                    
This example shows how you can ensure your links open in a new window.

```javascript
$('.example-5').linkIt({
    link: {
        word: 'new window',
        url: 'https://github.com/djnetherton/link-it'
    },
    newWindow: true
});
```
