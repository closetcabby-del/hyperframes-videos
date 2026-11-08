#!/usr/bin/env python3
"""Validate repository-local skill metadata, UI metadata, and local links."""
import json
import re
from pathlib import Path
import yaml

root = Path(__file__).resolve().parents[2]
report = []
for skill in sorted((root / '.agents/skills').glob('*/SKILL.md')):
    text = skill.read_text()
    assert text.startswith('---\n'), f'Missing frontmatter: {skill}'
    front = yaml.safe_load(text.split('---', 2)[1])
    name = front['name']
    assert re.fullmatch(r'[a-z0-9-]{1,64}', name), name
    assert name == skill.parent.name
    assert isinstance(front['description'], str) and front['description'].strip()
    for target in re.findall(r'\]\(([^)]+)\)', text):
        if not target.startswith(('http:', 'https:', '#')):
            assert (skill.parent / target.split('#')[0]).is_file(), (skill, target)
    ui = yaml.safe_load((skill.parent / 'agents/openai.yaml').read_text())['interface']
    assert 25 <= len(ui['short_description']) <= 64
    assert '$' + name in ui['default_prompt']
    assert re.fullmatch(r'#[0-9A-Fa-f]{6}', ui['brand_color'])
    report.append({'name': name, 'frontmatter': 'passed', 'localLinks': 'passed', 'uiMetadata': 'passed'})
for path in (root / '.agents/skills').glob('*/references/*.md'):
    for target in re.findall(r'\]\(([^)]+)\)', path.read_text()):
        if not target.startswith(('http:', 'https:', '#')):
            assert (path.parent / target.split('#')[0]).exists(), (path, target)
cases = json.loads((root / 'evals/creative-skills/cases.json').read_text())
assert len({case['id'] for case in cases}) == len(cases) == 4
result = {'ok': True, 'skills': report, 'behavioralFixtures': len(cases), 'note': 'Structure checks only; behavioral runs and human creative judgment are separate.'}
out = root / 'evidence/creative-skills/structure-validation.json'
out.write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
