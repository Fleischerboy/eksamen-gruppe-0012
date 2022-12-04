import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import SelectWeeks from '../../components/SelectWeeks'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { lunchDataForTest } from './data/index'

const handleSubmit = vi.fn()

describe('selectWeeks', () => {
  it('should enable button if weeks selected is in ascending order', async () => {
    render(
      <SelectWeeks
        weekList={lunchDataForTest.data.weeks}
        handleSelectedWeeks={handleSubmit}
      />
    )
    const startInput = await screen.findByTestId('start')
    const endInput = await screen.findByTestId('end')
    const button = await screen.findByRole('button')

    await userEvent.selectOptions(startInput, ['1'])
    await userEvent.selectOptions(endInput, ['3'])
    expect(button).toBeEnabled()
  })

  it('should not enable button if weeks selected is in descending order', async () => {
    render(
      <SelectWeeks
        weekList={lunchDataForTest.data.weeks}
        handleSelectedWeeks={handleSubmit}
      />
    )
    const startInput = await screen.findByTestId('start')
    const endInput = await screen.findByTestId('end')
    const button = await screen.findByRole('button')

    await userEvent.selectOptions(startInput, ['3'])
    await userEvent.selectOptions(endInput, ['1'])
    expect(button).toBeDisabled()
  })

  it('should run routing function when "Se uker" button clicked', async () => {
    render(
      <SelectWeeks
        weekList={lunchDataForTest.data.weeks}
        handleSelectedWeeks={handleSubmit}
      />
    )
    const startInput = await screen.findByTestId('start')
    const endInput = await screen.findByTestId('end')
    const button = await screen.findByRole('button')

    await userEvent.selectOptions(startInput, ['1'])
    await userEvent.selectOptions(endInput, ['3'])
    await userEvent.click(button)
    expect(handleSubmit).toBeCalled()
  })
})
