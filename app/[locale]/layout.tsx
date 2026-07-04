import type { ReactNode } from 'react'
import { defaultLocale, isValidLocale, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ locale: 'id' }, { locale: 'en' }]
}

type LocaleLayoutProps = {
  children: ReactNode
  params: Promise<{ locale?: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const resolvedParams = await params
  const locale = isValidLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale

  return <div lang={locale}>{children}</div>
}
