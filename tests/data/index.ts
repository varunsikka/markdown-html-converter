export const input1 = `# Sample Document

Hello!

This is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment.`;

export const output1 = `<h1>Sample Document</h1>

<p>Hello!</p>

<p>This is sample markdown for the <a href="https://www.mailchimp.com">Mailchimp</a> homework assignment.</p>`;

export const input2 = `# Header one

Hello there.

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`;

export const output2 = `<h1>Header one</h1>

<p>Hello there.</p>

<p>How are you?
What's going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;


export const input3 = `# Header one
Hello there.
What's going on?

How are you?
What's going on?

# Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`;

export const output3 = `<h1>Header one</h1>
<p>Hello there.
What's going on?</p>

<p>How are you?
What's going on?</p>

<h1>Another Header</h1>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;
