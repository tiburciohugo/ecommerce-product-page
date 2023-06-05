import Header from "@/components/UI/Header";
import { store } from "@/globalRedux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
    </>
  );
}
