/**
 * List of all the Markdowns
 * To add support for more markdowns, add the markdown handler and attach it 
 * to either scopedMarkdowns or inlineMarkdowns
 */

 /**
  * 
  * @param input string
  */
export function handleLinks(input: string): string {
  const regex = /\[(.*)\]\((.*)\)/gs;
  return input.replace(regex, '<a href="$2">$1</a>');
}

export function handleHeading(input: string): string {
  const regex = /^#\s(.*)/;
  let extraLines = "";
  let extraLinesMatches = null;
  if (regex.test(input) && input.match(/\n(.*)/s)) {
    input = input.replace(/\n(.*)/s, `\n<p>$1</p>`);
  }

  return input.replace(regex, `<h1>$1</h1>`);
}

export function handleSubheading(input: string): string {
  const regex = /^#{2}\s(.*)/;
  return input.replace(regex, '<h2>$1</h2>');
}

export function handleHeading6(input: string): string {
  const regex = /^#{6}\s(.*)/;
  return input.replace(regex, '<h6>$1</h6>');
}

export function handleUnformattedText(input: string): string {
  if (!input || input === "" || input === "\n") {
    return "";
  }

  if (/^<(.*)>(.*)<(.*)>$/s.test(input) || /^...$/.test(input)) {
    return input;
  }

  const regex = /(.*)/s;
  return input.replace(regex, '<p>$1</p>');
}

/**
 * Scoped Markdowns
 * Block scope markdowns like heading, subheading etc.
 */
export const scopedMarkdowns = {
  handleHeading,
  handleSubheading,
  handleHeading6,
  handleUnformattedText
};

/**
 * Inline Markdowns
 * e.g. links, bold, strikethrough
 */
export const inlineMarkdowns = {
  handleLinks,
};
