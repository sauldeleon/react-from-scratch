import { render, screen } from '@testing-library/react'

import { OtherElement } from './OtherElement'

describe('OtherElement', () => {
  it('should render', () => {
    render(<OtherElement />)
    screen.getByText('luis')
  })
})
