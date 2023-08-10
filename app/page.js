/* eslint-disable react/prop-types */


export default function App({ Component, pageProps }) {
    return (
        <div className="page-container">
            <Component {...pageProps} />
        </div>
    );
}
