'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { TextArea } from '@/components/case-converter/text-area';
import { ConversionGrid } from '@/components/case-converter/conversion-grid';
import { StatsDisplay } from '@/components/case-converter/stats-display';
import { ActionButtons } from '@/components/case-converter/action-buttons';
import { CaseType, convertText } from '@/lib/case-converter';

export default function Home() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text.split('\n').length;

  const handleConvert = (caseType: CaseType) => {
    setText(convertText(text, caseType));
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Convert Text Cases
            </h2>
            <p className="mt-2 text-muted-foreground">
              Transform your text between different case formats instantly
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <TextArea value={text} onChange={setText} rows={8} />

            <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <StatsDisplay
                charCount={charCount}
                wordCount={wordCount}
                lineCount={lineCount}
              />
              <ActionButtons
                text={text}
                onCopy={handleCopy}
                onClear={handleClear}
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Convert to:</h3>
            <ConversionGrid text={text} onConvert={handleConvert} />
          </div>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
