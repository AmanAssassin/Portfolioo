
export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-[#050505] border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tighter text-white">
              Aman<span className="text-indigo-500">.</span>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Aman Maurya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
