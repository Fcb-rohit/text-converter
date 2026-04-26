'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConversionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function ConversionButton({
  label,
  onClick,
  disabled,
}: ConversionButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'h-auto py-3 px-4 flex flex-col items-center gap-1 hover:scale-[1.02] transition-transform',
        'data-[state=pressed]:scale-[0.98]'
      )}
    >
      <span className="font-medium">{label}</span>
    </Button>
  );
}
