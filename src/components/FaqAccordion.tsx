import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../data/faqData';

interface FaqAccordionProps {
  item: FaqItem;
  index: number;
}

export default function FaqAccordion({ item, index }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 px-1 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm text-teal-600 font-semibold tabular-nums min-w-[2rem]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 text-base font-semibold text-gray-900 group-hover:text-teal-700 transition leading-snug">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`mt-1 text-gray-400 group-hover:text-teal-600 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <div
          className="pl-10 pr-8 prose prose-sm prose-gray max-w-none prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-gray-400"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
}
