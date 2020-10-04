import { markdownToHtmlConverter } from './markdown-to-html';
import { input2 } from '../tests/data/index';

// console.log(input1);
const result = markdownToHtmlConverter(input2);
console.log(result);

export { markdownToHtmlConverter };
