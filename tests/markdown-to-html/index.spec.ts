import { markdownToHtmlConverter } from '../../src/index';
import { expect } from 'chai';
import { input1, output1, input2, output2 } from '../data';

describe('Markdown to HTML Converter', () => {
  it('should convert the given input 1 to correct output 1', () => {
    const result = markdownToHtmlConverter(input1);
    console.log(result);
    expect(result.replace("\r\n", "")).to.be.equal(output1.replace("\r\n", ""));
  });

  it('should convert the given input 2 to correct output 2', () => {
    const result = markdownToHtmlConverter(input2);
    console.log(output2);
    expect(result).to.be.equal(output2);
  });
});
