/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container != null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading>I am the Title!</Heading>, container);
    });
    expect(container?.textContent).toBe('I am the Title!');
  });

  it('render', () => {
    act(() => {
      render(<Heading lvl={3} />, container);
    });
    expect(container?.querySelector('h3')).not.toBeNull();
  });

  it('render', () => {
    act(() => {
      render(<Heading lvl={1} />, container);
    });
    expect(container?.querySelector('h1')).not.toBeNull();
  });

  it('render', () => {
    act(() => {
      render(<Heading lvl={7} />, container);
    });
    expect(container?.querySelector('p')).not.toBeNull();
  });
});
