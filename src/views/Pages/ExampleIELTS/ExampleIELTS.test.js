import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ExampleIELTS from './ExampleIELTS';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ExampleIELTS/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
