import {Footer, Header} from './components/'
import { Outlet } from 'react-router-dom'

export default function Layout (){
    return(
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}