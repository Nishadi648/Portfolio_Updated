// Maps a skill / technology name to a colour category.
// Source data (profile.js, projects.js) is untouched; this only drives styling.
const CATEGORY_KEYWORDS = [
  ['database', ['mongo', 'mysql', 'sql', 'firebase', 'storage']],
  ['devops', ['docker', 'github actions', 'ci/cd', 'linux', 'aws', 'kubernetes']],
  [
    'frontend',
    ['react', 'vue', 'typescript', 'javascript', 'html', 'css', 'responsive', 'prototyp', 'flutter']
  ],
  ['backend', ['node', 'express', 'golang', 'rest', 'api', 'python', 'socket']],
  ['tools', ['git', 'postman', 'agile', 'scrum', 'figma']]
];

export function getTechCategory(name = '') {
  const value = name.toLowerCase();
  for (const [category, keywords] of CATEGORY_KEYWORDS) {
    if (keywords.some((keyword) => value.includes(keyword))) return category;
  }
  return 'default';
}
