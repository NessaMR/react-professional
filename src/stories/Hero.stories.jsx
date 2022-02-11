import React from "react";

import Hero from "../components/Hero";
import BgGalaxy from "./assets/galaxy.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="O essencial é invisível aos olhos." image={BgGalaxy}>
    <p> A auto escola lider em aprovação </p>
  </Hero>
);

export const withList = () => (
  <Hero
    title={
      <span>
        O essencial é <strong>invisível</strong>
        <br /> aos olhos.
      </span>
    }
    image={BgGalaxy}
  >
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
  </Hero>
);
