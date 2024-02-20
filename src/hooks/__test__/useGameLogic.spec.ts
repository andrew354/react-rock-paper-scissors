import { renderHook, act, waitFor } from '@testing-library/react'

import { useGameContext } from '@/providers/GameProvider'
import { useGameLogic } from '../useGameLogic'

jest.mock('@/providers/GameProvider', () => ({
  useGameContext: jest.fn(() => ({
    totalScore: {
      tieScore: 0,
      playerAScore: 0,
      playerBScore: 0,
      numberGamePlayed: 0,
    },
    setTotalScore: jest.fn(),
  })),
}))

describe('useGameLogic', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with default choices', () => {
    const { result } = renderHook(() => useGameLogic())

    expect(result.current.playerAChoice).toEqual({
      name: 'default',
      img: '/assets/default.png',
    })
    expect(result.current.playerBChoice).toEqual({
      name: 'default',
      img: '/assets/default.png',
    })
  })

  it('should update player choices when getPlayerChoices is called', () => {
    const { result } = renderHook(() => useGameLogic())

    act(() => {
      result.current.getPlayerChoices()
    })

    expect(result.current.playerAChoice).toEqual({
      name: 'paper',
      img: '/assets/paper.png',
    })

    expect([
      { name: 'rock', img: '/assets/rock.png' },
      { name: 'paper', img: '/assets/paper.png' },
      { name: 'scissors', img: '/assets/scissors.png' },
    ]).toContainEqual(result.current.playerBChoice)
  })
  it('should update game result and total score when playGame is called', async () => {
    const { result } = renderHook(() => useGameLogic())

    act(() => {
      result.current.setPlayerAChoice({ name: 'paper', img: '/assets/paper.png' })
      result.current.setPlayerBChoice({ name: 'rock', img: '/assets/rock.png' })
    })

    act(() => {
      result.current.playGame()
    })

    expect(result.current.gameResult).toBe('Player A Wins!')

    waitFor(() =>
      expect(useGameContext().setTotalScore).toHaveBeenCalledWith({
        tieScore: 0,
        playerAScore: 1,
        playerBScore: 0,
        numberGamePlayed: 1,
      }),
    )
  })
})
