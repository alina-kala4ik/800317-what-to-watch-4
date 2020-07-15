import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReview} from "./add-review.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`callbacks are working`, ()=>{

  const onSubmit = jest.fn();

  const addReview = mount(
      <AddReview
        isCommentPublishing={false}
        onSubmit={onSubmit}
        isCommentSendingError={false}
      />
  );


  addReview.find(`form.add-review__form`).simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
