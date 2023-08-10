/* eslint-disable react/prop-types */


export default function App({ Component, pageProps }) {
  return (
   
  <div className='page-container'>
        
    <h1>hello</h1>
        <Component {...pageProps} /> 
       
        
   </div>
  )
}
