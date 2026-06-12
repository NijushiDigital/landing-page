import Image from 'next/image'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo-nijushi.png" 
            alt="Nijushi Digital Logo" 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
          <span className="text-xl font-semibold text-foreground">Nijushi Digital</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
