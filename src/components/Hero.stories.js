import React from "react";

import Hero from "./Hero";
import Heading from "./Heading";

import Background from "../stories/assets/nature.jpg";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={Background}>
    <h1> O essencial é invisível aos olhos. </h1>
    <p> A auto escola lider em aprovação </p>
  </Hero>
);

export const withList = () => (
  <Hero image={Background}>
    <Heading>
      <h1>
        O essencial é <strong>invisível</strong>
        <br /> aos olhos.
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
  </Hero>
);
