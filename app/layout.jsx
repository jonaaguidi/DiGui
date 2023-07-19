import './globals.css'

export const metadata = {
  title: 'Jonathan Guidi | Frontend Dev - UX Engineer',
  description: 'Hola! Mi nombre es Jonathan Guidi, Soy de Buenos Aires, Argentina. Soy Frontend developer con conocimientos en Product Design y UX/UI, busco crear aplicaciones interactivas que cumplan con los más altos Estandares de la industria, Charlemos!',
    icons: {
      icon: ['/favicon.ico?v=4'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
