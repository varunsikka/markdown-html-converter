import { inlineMarkdowns, scopedMarkdowns } from './markdowns';

/**
 * Applies Inline Markdowns like links
 * @param block string
 * 
 */
export function applyInlineMarkdowns(block: string): string {
  let convertedBlock = block;
  Object.keys(inlineMarkdowns).map(markdown => {
    convertedBlock = inlineMarkdowns[markdown](convertedBlock);
  });

  return convertedBlock;
}

/**
 * Applies Scoped Markdowns like para, heading, subheading etc.
 * @param block string
 * 
 */
export function applyScopedMarkdowns(block: string): string {
  let convertedBlock = block;
  Object.keys(scopedMarkdowns).map(markdown => {
    convertedBlock = scopedMarkdowns[markdown](convertedBlock);
    return convertedBlock;
  });

  return applyInlineMarkdowns(convertedBlock);
}

/**
 * Primary function for receives a mardown and it converts to html
 * @param input string
 */
export function markdownToHtmlConverter(input: string): string {

  const markdownBlocks: string[] = input.split('\n\n');
  const convertedBlocks: string[] = markdownBlocks.map(block => {
    return applyScopedMarkdowns(block);
  })
  
  return convertedBlocks.join('\n\n');
}
