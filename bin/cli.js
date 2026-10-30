#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const source = path.resolve(__dirname, '..');
const target = process.cwd();
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: unslopify-ui [--init]\n\nCopies guides and the palette tool to .unslopify-ui in the current directory.\n--init also creates missing agent instruction files; existing files are never changed.');
  process.exit(0);
}
if (args.some(arg => arg !== '--init')) { console.error('Unknown option. Run with --help.'); process.exit(1); }
const dest = path.join(target, '.unslopify-ui');
const snippet = 'For website and app design, read .unslopify-ui/guides/README.md and the relevant linked guides before implementing. Follow the user’s explicit instructions when they conflict with any Unslopify UI guideline; apply the remaining relevant guidelines.';
if (fs.existsSync(dest)) { console.error('.unslopify-ui already exists. No files were changed. Move or remove it yourself before reinstalling; back up any edits first.'); process.exit(1); }
try {
  fs.mkdirSync(dest);
  for (const name of ['guides', 'color']) fs.cpSync(path.join(source, name), path.join(dest, name), { recursive: true, errorOnExist: true, force: false });
  fs.copyFileSync(path.join(source, 'LICENSE'), path.join(dest, 'LICENSE'));
  console.log('Installed guidance and palette generator in .unslopify-ui/');
  if (args.includes('--init')) {
    for (const file of ['AGENTS.md', 'CLAUDE.md', 'GEMINI.md', '.github/copilot-instructions.md']) {
      const filename = path.join(target, file);
      fs.mkdirSync(path.dirname(filename), { recursive: true });
      try { fs.writeFileSync(filename, '# Project design guidance\n\n' + snippet + '\n', { flag: 'wx' }); console.log('Created ' + file); }
      catch (err) { if (err.code !== 'EEXIST') throw err; console.log('Kept existing ' + file + '; add the instruction below manually if needed.'); }
    }
  }
  console.log('\nAsk your assistant:\n' + snippet);
} catch (err) { console.error('Installation failed: ' + err.message + '\nCheck .unslopify-ui/ for a partial installation.'); process.exitCode = 1; }
