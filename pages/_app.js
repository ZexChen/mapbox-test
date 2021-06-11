import SideBar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ height: 64 }} ><SideBar /></div>
      <div style={{ height: '100% - 64px'}}><Component {...pageProps} /></div>
    </>
  )
}

export default MyApp
