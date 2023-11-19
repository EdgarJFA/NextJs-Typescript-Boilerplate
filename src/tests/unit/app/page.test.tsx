import "@testing-library/jest-dom";
import { describe, expect, test, it } from 'vitest'
import { render } from '@testing-library/react'
import Page from '../../../app/page'

describe('Main Page', () => {
  test('Should render the page correctly', () => {
    const { getByText, getByRole } = render(<Page />)
    const mainElement = getByRole('main');

    expect(mainElement).toBeInTheDocument();
  })

  test('Should display the text elements on the screen', () => {
    const { getByText, getByRole } = render(<Page />)

    const headingElement = getByRole('heading', { level: 1, name: /NextJS/ });
    const subheadingElement = getByRole('heading', { level: 2, name: /Boilerplate/ });
    const paragraphElement = getByText(/NextJs \+ Tailwind \+ ESlint \+ Typescript/);

    expect(headingElement).toBeInTheDocument();
    expect(subheadingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  })
     
})
