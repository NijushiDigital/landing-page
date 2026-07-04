import Link from 'next/link'
import Image from 'next/image'
import { getDictionary, getLocalizedPath, type Locale } from '@/lib/i18n'

type FooterProps = {
  locale?: Locale
}

export function Footer({ locale = 'en' }: FooterProps) {
  const dict = getDictionary(locale).footer

  return (
    <>
      <footer className="border-t border-border bg-primary text-primary-foreground dark:bg-[#0f1426] dark:text-[#f5f7ff]">
        <div className="max-w-7xl mx-auto px-4 py-13">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo-nijushi.png" width={150} height={150} alt="Logo" />
              </div>
              <p className="text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">{dict.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground dark:text-[#f5f7ff]">{dict.company}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">
                <li>
                  <Link href={getLocalizedPath('/', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.home}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/about', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.about}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/project', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.project}
                  </Link>
                </li>
                <li>
                  <a href="https://status.nijushidigital.biz.id" className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    Status Monitoring
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground dark:text-[#f5f7ff]">{dict.legal}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">
                <li>
                  <Link href={getLocalizedPath('/privacy', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.privacy}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/terms', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.terms}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/cookie-policy', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.cookiePolicy}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/service-fee', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.servicesFee}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-white py-5 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-2">
          <p className="text-sm">{dict.copyright}</p>
          <div className="flex flex-wrap justify-center">
            <Link href="https://nijushidigital.biz.id">{dict.mainWebsite}</Link>
            <span className="mx-2">•</span>
            <Link href="https://nijushidigital.biz.id/about">{dict.aboutCompany}</Link>
          </div>
          <Image src="/logo-nijushi.png" width={80} height={80} alt="Logo" />
        </div>
      </footer>
    </>
  )
}
