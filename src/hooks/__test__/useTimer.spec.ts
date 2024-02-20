import { renderHook, act } from '@testing-library/react'
import { useTimer } from '../useTimer'

jest.useFakeTimers()

describe('useTimer', () => {
  it('should initialize with the correct timer value and runTimer value', () => {
    const { result } = renderHook(() => useTimer(10))

    expect(result.current.timer).toBe(10)
    expect(result.current.runTimer).toBe(false)
  })

  it('should start the timer correctly', () => {
    const { result } = renderHook(() => useTimer(10))

    act(() => {
      result.current.startTimer()
    })

    expect(result.current.timer).toBe(10)
    expect(result.current.runTimer).toBe(true)
  })

  it('should decrease the timer by 1 every second when runTimer is true', () => {
    const { result } = renderHook(() => useTimer(3))

    act(() => {
      result.current.startTimer()
    })

    expect(result.current.timer).toBe(3)

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.timer).toBe(2)

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.timer).toBe(1)
  })
})
