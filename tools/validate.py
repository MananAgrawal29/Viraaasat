import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

if '\ufffd' in html:
    print('WARNING: Replacement character found in index.html')
else:
    print('Clean UTF-8: No replacement characters in index.html.')

refs = re.findall(r'\./(assets/[^"\'\)\s?]+)', html)
missing = []
for ref in set(refs):
    clean = ref.split('?')[0]
    if not os.path.exists(clean):
        missing.append(clean)

if missing:
    print('Missing files:', missing)
else:
    print(f'All {len(set(refs))} referenced asset paths exist on disk!')

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()
if '\ufffd' in css:
    print('WARNING: Replacement character found in styles.css')
else:
    print('Clean UTF-8: No replacement characters in styles.css.')

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()
if '\ufffd' in js:
    print('WARNING: Replacement character found in main.js')
else:
    print('Clean UTF-8: No replacement characters in main.js.')
