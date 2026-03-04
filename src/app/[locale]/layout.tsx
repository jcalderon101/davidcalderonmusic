import ScrollTopButton from '@/components/ui/ScrollTopButton'
import '../globals.css'

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <ScrollTopButton />
    </>
  )
}