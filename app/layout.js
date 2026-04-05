import 'antd/dist/antd.css'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

export const metadata = {
  title: 'Muhammad Muneeb — Full Stack Developer',
  description: 'Portfolio of Muhammad Muneeb — Full Stack Developer specializing in React, Next.js & Django',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#0d1117' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossOrigin="anonymous"
        />
      </head>
      {/* Inline style on body guarantees dark background regardless of antd CSS */}
      <body style={{ backgroundColor: '#0d1117', color: '#e6edf3', margin: 0 }}>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
          crossOrigin="anonymous"
          async
        />
      </body>
    </html>
  )
}
