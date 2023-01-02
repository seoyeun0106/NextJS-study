import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/*Layout에서 가리키는 children*/}
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}
