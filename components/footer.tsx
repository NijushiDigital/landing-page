import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <>
    <footer className="border-t border-border bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
      src="/logo-nijushi.png"
      width={150}
      height={150}
      alt="Logo"
    />
            </div>
            <p className="text-sm text-primary-foreground/70">
              Empowering your world through intelligent digital solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-primary-foreground transition">About Company</Link></li>
              <li><Link href="/project" className="hover:text-primary-foreground transition">Project</Link></li>
            </ul>
          </div>
        
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition">Twitter</a>
            <a href="#" className="hover:text-primary-foreground transition">LinkedIn</a>
            <a href="#" className="hover:text-primary-foreground transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
    
    <footer className="bg-black text-white py-5 text-xs">
  <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-2">

    <p className="text-sm">
      © Nijushi Digital
    </p>

    <div className="flex flex-wrap justify-center">
      <Link href="https://nijushidigital.biz.id">
        Company Main Website
      </Link>

      <span className="mx-2">•</span>

      <Link href="https://nijushidigital.biz.id/about">
        About Main Company
      </Link>
    </div>

    <Image
      src="/logo-nijushi.png"
      width={80}
      height={80}
      alt="Logo"
    />

  </div>
</footer>
    </>
  )
}
