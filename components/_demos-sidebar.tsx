export default function DemosSidebar() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#191b1e] py-4 px-2">
      <div className="flex flex-col items-center">
        {["D", "E", "M", "O", "S"].map((letter, index) => (
          <span key={index} className="text-xs text-gray-400 my-1">
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

