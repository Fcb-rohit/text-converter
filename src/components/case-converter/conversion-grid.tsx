'use client';

import { caseConverters, CaseType } from '@/lib/case-converter';
import { ConversionButton } from './conversion-button';

interface ConversionGridProps {
  text: string;
  onConvert: (caseType: CaseType) => void;
}

export function ConversionGrid({ text, onConvert }: ConversionGridProps) {
  const hasText = text.trim().length > 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {caseConverters.map((converter) => (
        <ConversionButton
          key={converter.id}
          label={converter.label}
          onClick={() => onConvert(converter.id)}
          disabled={!hasText}
        />
      ))}
    </div>
  );
}
