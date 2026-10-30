import { ImageIcon, UploadCloud, X } from 'lucide-react';
import { useRef } from 'react';

type ImageUploadCardProps = {
  title: string;
  hint: string;
  value: string;
  onFile: (file: File) => void;
  onRemove: () => void;
  previewClassName?: string;
};

export function ImageUploadCard({
  title,
  hint,
  value,
  onFile,
  onRemove,
  previewClassName = 'h-32',
}: ImageUploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='rounded-xl border border-white/10 bg-[#080C25] p-5'>
      <div className='mb-4 flex items-center gap-2'>
        <ImageIcon size={16} className='text-[#1447e6]' />
        <h3 className='text-sm font-semibold text-white'>{title}</h3>
      </div>

      <input
        ref={inputRef}
        type='file'
        accept='image/png,image/jpeg,image/webp'
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
          e.target.value = ''; // same file dobara select ho sake
        }}
        className='hidden'
      />

      <button
        type='button'
        onClick={() => inputRef.current?.click()}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (file) onFile(file);
        }}
        className='mb-3 flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/5 py-6 text-center transition-colors hover:bg-white/10'
      >
        <div className='mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#1447e6]'>
          <UploadCloud size={16} className='text-white' />
        </div>
        <span className='text-sm font-medium text-white'>
          Click to upload <span className='font-normal text-[#969696]'>or drag and drop</span>
        </span>
        <span className='mt-1 text-[11px] text-[#6b6b6b]'>PNG, JPG, WEBP (Max 5MB)</span>
        <span className='text-[11px] text-[#6b6b6b]'>{hint}</span>
      </button>

      {value && (
        <div className='relative overflow-hidden rounded-lg border border-white/10'>
          <img src={value} alt='' className={`w-full object-cover ${previewClassName}`} />
          <button
            type='button'
            onClick={onRemove}
            aria-label={`Remove ${title}`}
            className='absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black'
          >
            <X size={13} />
          </button>
        </div>
      )}
    </div>
  );
}
