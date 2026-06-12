import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-nijushi.png" 
                alt="Nijushi Digital Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="font-semibold">Nijushi Digital</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Empowering your world through intelligent digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition">Features</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Security</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
          <p>&copy; 2026 Nijushi Digital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition">Twitter</a>
            <a href="#" className="hover:text-primary-foreground transition">LinkedIn</a>
            <a href="#" className="hover:text-primary-foreground transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
