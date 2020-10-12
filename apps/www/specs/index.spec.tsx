import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

jest.mock('isomorphic-unfetch', () => () => Promise.resolve({}));

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
