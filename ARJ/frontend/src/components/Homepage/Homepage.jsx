import { Header, Work, Resources, Footer, Details, Main, Content } from '../index';
import {Banner} from '../Banners/Banner'

export const Homepage = () =>{
    return(
        <>
        <Header />
            <Banner />
  <Main />
  <Details />
  <Work />
  <Content />
  <Resources />
  <Footer />
        </>
    )
}