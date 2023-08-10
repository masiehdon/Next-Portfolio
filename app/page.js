/* eslint-disable react/prop-types */

import Header from "./header/page";


export default function App({ Component, pageProps }) {
  return (
   
  <div className='page-container'>
        
  
        <Component {...pageProps} /> 
       
        
   </div>
  )
}
