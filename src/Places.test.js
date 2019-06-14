import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Places from "./Places";

configure({
  adapter: new Adapter()
});

const places = [
  {
    name: "El Cantina",
    food: ["Mexican"]
  },
  {
    name: "Twin Dynasty",
    food: ["Chinese"]
  },
  {
    name: "Spice of life",
    food: ["Eggs", "Meat", "Fish", "Pasta", "Dairy"]
  }
];

it("matches a snapshot", () => {
  const wrapper = shallow(<Places message="Allo mate" places={places} />);
  const html = "El Cantina";
  expect(wrapper.contains(html)).toEqual(true);
});
