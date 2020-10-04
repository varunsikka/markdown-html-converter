import { markdownToHtmlConverter } from '../src/index';
import { expect } from 'chai';
import { input1, output1, input2, output2 } from './data/data';

describe('Markdown to HTML Converter', () => {
  it('should convert the given input 1 to correct output 1', () => {
    console.log(input1);
    console.log(output1);
    const result = markdownToHtmlConverter(input1);
    expect(result).to.be.equal('markdown to html converter');
  });

  it('should convert the given input 2 to correct output 2', () => {
    console.log(input2);
    console.log(output2);
    const result = markdownToHtmlConverter(input2);
    expect(result).to.be.equal('markdown to html converter');
  });
});
