export default function SkillIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="#"
        className="w-12 h-12 rounded-md bg-[#191b1e] flex items-center justify-center hover:bg-[#ff014f] transition-colors"
        aria-label="InDesign"
      >
        <span className="text-[#ff014f] font-bold">in</span>
      </a>
      <a
        href="#"
        className="w-12 h-12 rounded-md bg-[#191b1e] flex items-center justify-center hover:bg-[#ff014f] transition-colors"
        aria-label="Sketch"
      >
        <span className="text-yellow-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 8.5L12 15L22 8.5L12 2Z" fill="currentColor" />
            <path d="M2 8.5V15L12 21.5L22 15V8.5" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </a>
      <a
        href="#"
        className="w-12 h-12 rounded-md bg-[#191b1e] flex items-center justify-center hover:bg-[#ff014f] transition-colors"
        aria-label="Figma"
      >
        <span className="text-[#1abcfe]">
          <svg width="16" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z"
              fill="#0ACF83"
            />
            <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
            <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
            <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
            <path
              d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z"
              fill="#1ABCFE"
            />
          </svg>
        </span>
      </a>
    </div>
  )
}

