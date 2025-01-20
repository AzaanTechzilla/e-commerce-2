"use client";
import Image from "next/image";
import Homepage from "./home/page";
import Header from "./component/layout/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Homepage />
      </Provider>
    </>
  );
}
