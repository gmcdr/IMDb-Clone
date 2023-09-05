import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clobe',
  description: 'This is the IMDb clobe website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta content='width=device-width, initial-scale=1' name='viewport'></meta>
      <meta name='description' content={metadata.description}></meta>
      <body >
        
      {/*Header*/}
       <Header/>

        {children}
        
        
        </body>
      <link rel='icon' href='/favicon.ico'></link>
    </html>
  )
}
