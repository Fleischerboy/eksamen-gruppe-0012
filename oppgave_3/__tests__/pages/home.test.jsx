import { describe, expect, it } from 'vitest'
import { Result } from '../../types/index'
import '@testing-library/jest-dom'
import Home from '../../pages/index.tsx'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { rest, DefaultRequestBody } from 'msw'
import { LunchProvider } from '../../context/LunchContext.tsx'
import { weeksData } from './data/index'
import { setupServer } from 'msw/node'

const WEEKS_URL = 'http://localhost:3000/api/weeks'

const weeksResponse = rest.get(WEEKS_URL, (req, res, ctx) => {
  return res(ctx.json(weeksData))
})

// server handlers
const handlers = [weeksResponse]

const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('should render content inside index/home page at path: "/"', () => {
  beforeEach(async () => {
    render(
      <LunchProvider>
        <Home />
      </LunchProvider>
    )
    await waitForElementToBeRemoved(() =>
      screen.getByText('Henter Lunch data...')
    )
  })
  it('should render h1 heading: "Lunsjkalender"', async () => {
    render(
      <LunchProvider>
        <Home />
      </LunchProvider>
    )
    expect(screen.getByText('Lunsjkalender')).toBeInTheDocument()
  })

  it('should render weekcards component"', async () => {
    render(
      <LunchProvider>
        <Home />
      </LunchProvider>
    )
    const weekCards = await screen.findByTestId('week-cards')
    expect(weekCards).toBeInTheDocument()
  })

  it('should render all 52 weeks', async () => {
    render(
      <LunchProvider>
        <Home />
      </LunchProvider>
    )
    for (let i = 1; i <= 52; i++) {
      expect(screen.getByText(`Uke ${i}`)).toBeInTheDocument()
    }
  })
})
