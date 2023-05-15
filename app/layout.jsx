import '@styles/globals.css';

import Header from '@components/header';


export const metadata = {
    title: 'Raihan Aditya',
    description: 'Junior Full Stack developer from Indonesia',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main className='mx-auto max-w-screen-xl scroll-smooth'>
              <Header />
             {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout