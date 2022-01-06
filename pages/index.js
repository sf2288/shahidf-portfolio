import React from "react";
import dynamic from "next/dynamic";
import { getPlaiceholder } from "plaiceholder";
import { MY_SOCIAL_PROFILES } from "../utils/constants";

const HomeComponent = dynamic(() => import("./../components/Home"));

const Home = ({ images }) => {
  return <HomeComponent images={images}/>;
};

export const getStaticProps = async () => {

  const images = MY_SOCIAL_PROFILES && MY_SOCIAL_PROFILES.length ? await Promise.all(
    MY_SOCIAL_PROFILES.map(async (d) => {
      d.image = await getPlaiceholder(d?.src);
      return d;
    })
  ).then((values) => values) : null;

  return {
    props: {
      images
    }
  };
};

export default Home;
