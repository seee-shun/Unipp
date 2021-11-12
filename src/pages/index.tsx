import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Unipp</title>
        <meta
          name="description"
          content="大学生イベント共有アプリUnippのトップページ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>いまのところここはトップページ！!!</p>
      </main>
    </>
  );
};

export default Home;
