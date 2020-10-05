#!/usr/bin/env node

import { markdownToHtmlConverter } from './markdown-to-html';

import * as cli from 'cli';

/** 
 * Interfact to interact with the application
 */
cli.withStdin( (data: string) => {
  const result = markdownToHtmlConverter(data);
  cli.output(result);
});
