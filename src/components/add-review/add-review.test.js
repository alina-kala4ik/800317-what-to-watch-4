import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";

beforeAll(()=>{
  jest.setAttribute = () => {};
});


it(`render AddReview without sending error and disabled form`, ()=>{
  const tree = renderer.create(
      <AddReview
        isCommentPublishing={false}
        onSubmit={()=>{}}
        isCommentSendingError={false}
      />, {
        createNodeMock: ()=>{
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});

it(`render AddReview with sending error and disabled form`, ()=>{
  const tree = renderer.create(
      <AddReview
        isCommentPublishing={true}
        onSubmit={()=>{}}
        isCommentSendingError={true}
      />, {
        createNodeMock: ()=>{
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
