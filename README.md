# markdown-html-converter

Markdown HTML Converter is a CLI application that converts a markdown to HTML

Currently it supports only 6 markdowns

* `# Heading 1`\n
* `## Heading 2`
* `...`
* `###### Heading 6`
* `Unformatted text`
* `[Link text](https://www.example.com)`
* `Blank line`

## Executing an application

To run the application:

```sh
ts-node src/index.ts < [MARKDOWN_INPUT_FILE]
```

Example:

```sh
ts-node src/index.ts < exmaples/example1.md
```

```sh
ts-node src/index.ts < exmaples/example2.md
```
