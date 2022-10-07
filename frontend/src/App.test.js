import React, { lazy } from 'react';
import App from './App';
import { fireEvent } from "@testing-library/react/dist/pure";
import userEvent from "@testing-library/user-event";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from './axios-api';

const fakeAssets = {
  "available_paths": [],
  "test_envs": [],
  "upload_dirs": [
      "sample-tests",
      "api/tests",
      "uploaded-tests"
  ]
}

jest.mock('./axios-api')
axios.get.mockImplementation(() => Promise.resolve({ data: fakeAssets }))
axios.post.mockImplementation(() => Promise.resolve({}))

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('upload new test file', async () => {
  act(() => {
    render(<App />, container);
  });  

  await expect(axios.get).toHaveBeenCalled()

  //check select options render
  const options = container.querySelector("#upload_dir").options;
  expect(options[0].text).toBe('')
  fakeAssets.upload_dirs.forEach((x, i) => expect(options[i+1].text).toBe(x));

  //check upload test button disabling
  const button = container.querySelector('#submit_test_upload');
  expect(button.disabled).toBe(true);

  act(() => {
    userEvent.selectOptions(container.querySelector("#upload_dir"), fakeAssets.upload_dirs[1])
  })
  expect(button.disabled).toBe(true);

  const file = new File([1], 'test.py', {type: 'text/x-python'});    
  act(() => {
      fireEvent.change(container.querySelector("#test_file"), {
          target: { files: [file] },
      })          
  })  
  expect(button.disabled).toBe(false);

  act(() => {
    fireEvent.click(button);
  })
  await expect(axios.post).toHaveBeenCalled();
});
