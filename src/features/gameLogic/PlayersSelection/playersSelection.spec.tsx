import { render, screen } from '@testing-library/react'
import PlayersSection from './PlayersSelection'

jest.mock('@/providers/GameProvider', () => ({
  useGameContext: jest.fn(() => ({
    totalScore: { playerAScore: 0, playerBScore: 0 },
  })),
}))

describe('PlayersSection', () => {
  it('renders PlayersSection component with initial player information', () => {
    const playerAChoice = { name: 'rock', img: 'rock.png' }
    const playerBChoice = { name: 'scissors', img: 'scissors.png' }

    render(
      <PlayersSection
        runTimer={true}
        timer={3}
        playerAChoice={playerAChoice}
        playerBChoice={playerBChoice}
        getPlayerAScore={0}
        getPlayerBScore={0}
      />,
    )

    expect(screen.getByText('Player A')).toBeInTheDocument()
    expect(screen.getByAltText('rock')).toBeInTheDocument()
    expect(screen.getByAltText('rock').getAttribute('src')).toBe('/assets/rock.png')

    expect(screen.getByText('Player B')).toBeInTheDocument()
    expect(screen.getByAltText('default-left')).toBeInTheDocument()
    expect(screen.getByAltText('default-left').getAttribute('src')).toBe('/assets/defaultLeft.png')

    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
