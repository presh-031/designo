import Head from "next/head";

type metaProps = {
  page: string;
};
const Meta = ({ page }: metaProps) => {
  return (
    <Head>
      <title>Designo | {page}</title>
      <meta
        name="designo"
        content="A Frontend Mentor challenge solution submitted by Presh-031"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/designo.ico" />
    </Head>
  );
};

export default Meta;
