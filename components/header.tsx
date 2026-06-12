import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Nijushi Digital Logo" 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
          <span className="text-xl font-bold text-foreground">Nijushi Digital</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
