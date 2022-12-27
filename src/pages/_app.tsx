import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store, wrapper } from "../redux-store";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = () => nProgress.start();
    const routeChangeComplete = () => nProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);
