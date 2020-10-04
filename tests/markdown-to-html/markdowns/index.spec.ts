import { handleLinks, handleUnformattedText, handleHeading, handleSubheading, handleHeading6 } from '../../../src/markdown-to-html/markdowns';
import { expect } from 'chai';
import { input as linkInput, output as linkOutput } from '../../data/links';
import { input as headerTextInput, output as headerTextOutput } from '../../data/header-text';
import { input as subheaderTextInput, output as subheaderTextOutput } from '../../data/sub-header-text';
import { input as headingSixInput, output as headingSixOutput } from '../../data/heading-six';
import { input as unformattedTextInput, output as unformattedTextOutput } from '../../data/unformatted-text';

describe('Testing Links => [Some Link](http://somelink.com)', () => {
  it('should convert the link markdown to html <a href="http://somelink.com">Some Link</a>', () => {
    const result = handleLinks(linkInput);
    expect(result).to.be.equal(linkOutput);
  });
});

describe('Testing Heading => # Some header to <h1>Some header</h1>', () => {
  it('should convert `# Some header` to html <h1>Some header</h1>', () => {
    const result = handleHeading(headerTextInput);
    expect(result).to.be.equal(headerTextOutput);
  });
});

describe('Testing Sub Heading => ## Some sub-header to <h2>Some sub-header</h2>', () => {
  it('should convert `## Some sub-header` to html <h2>Some sub-header</h2>', () => {
    const result = handleSubheading(subheaderTextInput);
    expect(result).to.be.equal(subheaderTextOutput);
  });
});


describe('Testing Heading6 => ###### Some header to <h6>Some header</h6>', () => {
  it('should convert `###### Some header` to html <h6>Some header</h6>', () => {
    const result = handleHeading6(headingSixInput);
    expect(result).to.be.equal(headingSixOutput);
  });
});


describe('Testing Unformatted Text => Unformatted text to <p>Unformatted Text</p>', () => {
  it('should convert the `Unformatted Text` to html <p>Unformatted Text</p>', () => {
    const result = handleUnformattedText(unformattedTextInput);
    expect(result).to.be.equal(unformattedTextOutput);
  });
});
