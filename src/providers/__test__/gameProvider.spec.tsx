import { render, screen } from '@testing-library/react'
import { GameProvider, useGameContext, GameContext } from '../GameProvider'

describe('GameProvider', () => {
  it('renders children without crashing', () => {
    render(
      <GameProvider>
        <div>Test Children</div>
      </GameProvider>,
    )
    expect(screen.getByText('Test Children')).toBeInTheDocument()
  })
})

describe('useGameContext', () => {
  it('returns initial totalScore', () => {
    const TestComponent = () => {
      const { totalScore } = useGameContext()
      return <div>{JSON.stringify(totalScore)}</div>
    }
    render(
      <GameContext.Provider
        value={{
          totalScore: {
            maxGamesNumber: 1000,
            numberGamePlayed: 0,
            playerAScore: 0,
            playerBScore: 0,
            tieScore: 0,
          },
          setTotalScore: jest.fn(),
        }}
      >
        <TestComponent />
      </GameContext.Provider>,
    )
    expect(
      screen.getByText(
        JSON.stringify({
          maxGamesNumber: 1000,
          numberGamePlayed: 0,
          playerAScore: 0,
          playerBScore: 0,
          tieScore: 0,
        }),
      ),
    ).toBeInTheDocument()
  })
})
