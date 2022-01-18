import useTrends from '../useTrends'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useTrends hook', () => {
    
  it('should initialize with all repositories visible', () => {
    const { result } = renderHook(() => useTrends())
    expect(result.current.favoritesActiveToggle).toBe('all')
  })

  it('should update setItem when addToFavorites was called', async () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem')
    const { result } = renderHook(() => useTrends())
   
    act(() => result.current.addToFavorites())

    expect(setItem).toHaveBeenCalled()
  })
})
