'use client'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  count: number
  total: number
}

export default function SearchInput({ value, onChange, placeholder, count, total }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="relative w-full max-w-md">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dynamicBlack/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || 'Buscar...'}
          className="input pl-10"
        />
      </div>
      <span className="whitespace-nowrap text-xs uppercase tracking-wide text-dynamicBlack/50">
        Mostrando {count} de {total}
      </span>
    </div>
  )
}
