import { useEffect } from "react";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps}) => {
  // * 일부러 에러를 발생시키는 코드
  // useEffect(() => {
  //   throw Error();
  // }, []);
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Noto Sans, Noto Sans KR;
        }
      `}</style>
    </>
  );
};

export default MyApp;