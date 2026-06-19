import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer className="border-t border-border bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-13">
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
                <li><Link href="/" className="hover:text-primary-foreground transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary-foreground transition">About Company</Link></li>
                <li><Link href="/project" className="hover:text-primary-foreground transition">Project</Link></li>
                <li><a href="https://status.nijushidigital.biz.id" className="hover:text-primary-foreground transition">Status Monitoring</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="/privacy" className="hover:text-primary-foreground transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary-foreground transition">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="hover:text-primary-foreground transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-white py-5 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-2">
          <p className="text-sm">© Nijushi Digital</p>
          <div className="flex flex-wrap justify-center">
            <Link href="https://nijushidigital.biz.id">Company Main Website</Link>
            <span className="mx-2">•</span>
            <Link href="https://nijushidigital.biz.id/about">About Main Company</Link>
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
  );
}
