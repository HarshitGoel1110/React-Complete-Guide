import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// this is the actual file which nextjs renders on the screen.
// for arguments, it uses object destructuring and take out Component and pageProps
// Compoenent => refers to the component which is loaded on the screen, therefore changes time to time.
// pageProps => refers to the props which are passed to that component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
