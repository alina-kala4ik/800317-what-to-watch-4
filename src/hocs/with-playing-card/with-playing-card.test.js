import React from "react";
import renderer from "react-test-renderer";
import withPlayingCard from "./with-playing-card.jsx";

const mockComponent = () => <div />;

const MockComponentWrapped = withPlayingCard(mockComponent);

it(`render withPlayingCard`, ()=>{
  const tree = renderer.create(
      <MockComponentWrapped />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
