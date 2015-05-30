Quotes
======

A super-simple React application for displaying a set of quotes specified in a `quotes.json` file.

- Rename `public/quotes_example.json` to `public/quotes.json` and add your quotes.
- Deploy the `public/` directory.

Quotes
------

Each quote contains `text`, `author`, and `email` keys.

- `text`: The quote text.
- `author`: The quote author's name.
- `email`: provide an avatar via Gravatar.

```javascript
[
  { "text": "This is a quote.", "author": "Author Name", "email": "author@example.com" },
  { "text": "This is a second quote.", "author": "Author Name", "email": "author@example.com" },
  { "text": "This is a third quote.", "author": "Author Name", "email": "author@example.com" },
  { "text": "This is a fourth quote.", "author": "Author Name", "email": "author@example.com" },
  { "text": "This is a fifth quote.", "author": "Author Name", "email": "author@example.com" }
]
```

Installation
------------

```
$ npm install
```

Use Gulp to build your JavaScript:

```
$ gulp # Runs the default task.
$ gulp watch # Watches and builds your JS files.
```
