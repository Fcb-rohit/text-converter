export type CaseType =
  | 'UPPERCASE'
  | 'lowercase'
  | 'Title Case'
  | 'Sentence case'
  | 'camelCase'
  | 'PascalCase'
  | 'snake_case'
  | 'kebab-case'
  | 'CONSTANT_CASE';

export interface CaseConverter {
  id: CaseType;
  label: string;
  convert: (text: string) => string;
}

function splitWords(text: string): string[] {
  return text
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

function capitalizeWord(word: string): string {
  if (word.length === 0) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const caseConverters: CaseConverter[] = [
  {
    id: 'UPPERCASE',
    label: 'UPPERCASE',
    convert: (text) => text.toUpperCase(),
  },
  {
    id: 'lowercase',
    label: 'lowercase',
    convert: (text) => text.toLowerCase(),
  },
  {
    id: 'Title Case',
    label: 'Title Case',
    convert: (text) =>
      text
        .split(/\s+/)
        .map((word) => capitalizeWord(word))
        .join(' '),
  },
  {
    id: 'Sentence case',
    label: 'Sentence case',
    convert: (text) => {
      if (!text) return text;
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    },
  },
  {
    id: 'camelCase',
    label: 'camelCase',
    convert: (text) => {
      const words = splitWords(text.toLowerCase());
      if (words.length === 0) return '';
      return (
        words[0] +
        words.slice(1).map((word) => capitalizeWord(word)).join('')
      );
    },
  },
  {
    id: 'PascalCase',
    label: 'PascalCase',
    convert: (text) => {
      const words = splitWords(text);
      return words.map((word) => capitalizeWord(word)).join('');
    },
  },
  {
    id: 'snake_case',
    label: 'snake_case',
    convert: (text) => {
      const words = splitWords(text.toLowerCase());
      return words.join('_');
    },
  },
  {
    id: 'kebab-case',
    label: 'kebab-case',
    convert: (text) => {
      const words = splitWords(text.toLowerCase());
      return words.join('-');
    },
  },
  {
    id: 'CONSTANT_CASE',
    label: 'CONSTANT_CASE',
    convert: (text) => {
      const words = splitWords(text.toUpperCase());
      return words.join('_');
    },
  },
];

export function convertText(text: string, caseType: CaseType): string {
  const converter = caseConverters.find((c) => c.id === caseType);
  if (!converter) return text;
  return converter.convert(text);
}
