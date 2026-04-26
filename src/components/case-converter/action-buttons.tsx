'use client';

import { Copy, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ActionButtonsProps {
  text: string;
  onCopy: () => void;
  onClear: () => void;
}

export function ActionButtons({ text, onCopy, onClear }: ActionButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasText = text.trim().length > 0;

  return (
    <div className="flex gap-3">
      <Button
        variant="secondary"
        onClick={handleCopy}
        disabled={!hasText}
        className="gap-2"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copy
          </>
        )}
      </Button>
      <Button
        variant="outline"
        onClick={onClear}
        disabled={!hasText}
        className="gap-2"
      >
        <Trash2 className="h-4 w-4" />
        Clear
      </Button>
    </div>
  );
}
