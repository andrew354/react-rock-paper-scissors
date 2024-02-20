import { render } from '@testing-library/react'
import PlayerBox from './PlayerBox'

describe('PlayerBox component', () => {
  const defaultProps = {
    name: 'player A',
    choice: 'paper',
    image: 'rock.jpg',
    totalScore: 0,
    animate: false,
    playerColor: 'red',
  }

  it('renders with correct props', () => {
    const { getByText, getByAltText } = render(<PlayerBox {...defaultProps} />)

    expect(getByText('player A')).toBeInTheDocument()
    expect(getByText('Total Score: 0')).toBeInTheDocument()
    expect(getByAltText('paper')).toBeInTheDocument()
  })

  it('applies animation class if animate prop is true', () => {
    const { container, rerender } = render(<PlayerBox {...defaultProps} />)

    expect(container.querySelector('.animateObject')).toBeNull()

    rerender(<PlayerBox {...defaultProps} animate={true} />)

    expect(container.querySelector('.animateObject')).toBeInTheDocument()
  })
})
