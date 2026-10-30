const fs = require('fs'); const os = require('os'); const path = require('path'); const assert = require('node:assert/strict'); const { test } = require('node:test'); const { spawnSync } = require('child_process');
const cli = path.resolve(__dirname, '../bin/cli.js');
test('installs usable guides, preserves instructions, and refuses overwrites', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'unslopify-'));
  try {
    fs.writeFileSync(path.join(dir, 'AGENTS.md'), 'existing user instructions');
    const run = (...args) => spawnSync(process.execPath, [cli, ...args], {cwd: dir, encoding:'utf8'});
    assert.equal(run('--init').status, 0);
    assert.equal(fs.readFileSync(path.join(dir, 'AGENTS.md'), 'utf8'), 'existing user instructions');
    for (const p of ['CLAUDE.md', 'GEMINI.md', '.github/copilot-instructions.md', '.unslopify-ui/guides/README.md', '.unslopify-ui/color/palette.js', '.unslopify-ui/LICENSE']) assert.ok(fs.existsSync(path.join(dir, p)), p);
    assert.match(fs.readFileSync(path.join(dir, 'CLAUDE.md'), 'utf8'), /Follow the user’s explicit instructions when they conflict/);
    assert.equal(spawnSync(process.execPath, [path.join(dir, '.unslopify-ui/color/palette.js'), '#2E4057'], {encoding:'utf8'}).status, 0);
    assert.notEqual(run('--init').status, 0);
    assert.equal(fs.readFileSync(path.join(dir, 'AGENTS.md'), 'utf8'), 'existing user instructions');
  } finally { fs.rmSync(dir, { recursive:true, force:true }); }
});