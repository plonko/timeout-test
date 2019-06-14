import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { Results, getVenuesToAvoid } from "./Results";

configure({
  adapter: new Adapter()
});

const venues = [
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
  },
  {
    name: "Sultan Sofrasi",
    food: ["Meat", "Bread", "Fish"]
  },
  {
    name: "Spirit House",
    food: ["Nuts", "Cheese", "Fruit"]
  }
];

const isGoing = [
  {
    name: "John Davis",
    wont_eat: ["Fish"],
    drinks: ["Cider", "Rum", "Soft drinks"]
  },
  {
    name: "Gary Jones",
    wont_eat: ["Eggs", "Pasta"],
    drinks: ["Tequila", "Soft drinks", "beer", "Coffee"]
  }
];

const flattenedWontEats = ["Fish", "Eggs", "Pasta"];

it("renders without crashing", () => {
  shallow(<Results venues={venues} isGoing={isGoing} />);
});

it("Returns the correct number of venues", () => {
  expect(getVenuesToAvoid(venues, flattenedWontEats).length).toEqual(2);
});

it("Returns the correct venue names", () => {
  expect(getVenuesToAvoid(venues, flattenedWontEats)[0].name).toEqual(
    "Spice of life"
  );
  expect(getVenuesToAvoid(venues, flattenedWontEats)[1].name).toEqual(
    "Sultan Sofrasi"
  );
});
