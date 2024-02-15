import Nav from "./Nav"
import Footer from "./Footer"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <>
        <Nav/>
        <main id="main">{children}</main>
        <Footer/>
        <SpeedInsights/>
        <Analytics/>
    </>
  )
}