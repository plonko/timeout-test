import React from "react";

import Places from "./Places";

function getVenuesToAvoid(venues, flattenedWontEats) {
  return venues.filter(({ food }) =>
    food.some(item => flattenedWontEats.indexOf(item) >= 0)
  );
}

function getVenuesToGo(venues, venuesToAvoid) {
  return venues.filter(item => !venuesToAvoid.includes(item));
}

// Array.flatMap isn't allowed in Jest 22 :s
// We'll have to make our own..
function flatMap(array, callback) {
  return array.reduce((accumulator, item) => {
    return accumulator.concat(callback(item));
  }, []);
}

function Results({ venues, isGoing }) {
  const flattenedWontEats = flatMap(isGoing, ({ wont_eat }) => wont_eat);
  const venuesToAvoid = getVenuesToAvoid(venues, flattenedWontEats);
  const venuesToGo = getVenuesToGo(venues, venuesToAvoid);

  return (
    <div>
      <Places message="Places to go:" places={venuesToGo} />
      <Places message="Places to avoid:" places={venuesToAvoid} />
    </div>
  );
}

export { getVenuesToAvoid, getVenuesToGo, Results };
