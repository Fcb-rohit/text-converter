interface StatsDisplayProps {
  charCount: number;
  wordCount: number;
  lineCount: number;
}

export function StatsDisplay({ charCount, wordCount, lineCount }: StatsDisplayProps) {
  return (
    <div className="flex gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <span className="font-medium text-foreground">{charCount}</span>
        <span>characters</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-medium text-foreground">{wordCount}</span>
        <span>words</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-medium text-foreground">{lineCount}</span>
        <span>lines</span>
      </div>
    </div>
  );
}
