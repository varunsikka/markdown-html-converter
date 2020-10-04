import { markdownToHtmlConverter } from '../../src/index';
import { expect } from 'chai';
import { input1, output1, input2, output2, input3, output3 } from '../data';

describe('Markdown to HTML Converter', () => {
  it('should convert the given input 1 to correct output 1', () => {
    const result = markdownToHtmlConverter(input1);
    expect(result.replace("\r\n", "")).to.be.equal(output1.replace("\r\n", ""));
  });

  it('should convert the given input 2 to correct output 2', () => {
    const result = markdownToHtmlConverter(input2);
    expect(result).to.be.equal(output2);
  });

  it('should convert the given input 3 to correct output 3', () => {
    const result = markdownToHtmlConverter(input3);
    expect(result).to.be.equal(output3);
  });
});
