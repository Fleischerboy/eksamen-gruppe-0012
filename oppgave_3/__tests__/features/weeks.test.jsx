import httpMocks from 'node-mocks-http'
import {
  getAllWeeks,
  getWeekById,
} from '../../features/weeks/weeks.controller.ts'
import { describe, expect, it, test } from 'vitest'

const BASE_URL = 'http://localhost:3000/api'
describe('Weeks controller tests', () => {
  describe('should fetch weeks', () => {
    it('should respond with statusCode 200 after fetching', async () => {
      const mockReq = httpMocks.createRequest({
        method: 'GET',
        url: `${BASE_URL}/weeks`,
      })

      const mockRes = httpMocks.createResponse()

      const result = await getAllWeeks(mockReq, mockRes)

      expect(result.statusCode).toBe(200)
    })

    it('should fetch all 52 weeks', async () => {
      const mockReq = httpMocks.createRequest({
        method: 'GET',
        url: `${BASE_URL}/weeks`,
      })

      const mockRes = httpMocks.createResponse()

      await getAllWeeks(mockReq, mockRes)

      const resultAsJson = mockRes._getJSONData()
      expect(resultAsJson.status).toBe(true)
      expect(resultAsJson.data.weeks.length).toBe(52)
    })
  })

  describe('should fetch one week by givin week number', () => {
    it('should fetch week number 4', async () => {
      const mockReq = httpMocks.createRequest({
        method: 'GET',
        url: `${BASE_URL}/weeks/4`,
        query: {
          week: 4,
        },
      })
      const mockRes = httpMocks.createResponse()

      await getWeekById(mockReq, mockRes)

      const resultAsJson = mockRes._getJSONData()
      expect(resultAsJson.status).toBe(true)
      expect(resultAsJson.data.week.week).toBe(4)
    })

    it('should respond with an error when providing a week number that does not exist', async () => {
      const mockReq = httpMocks.createRequest({
        method: 'GET',
        url: `${BASE_URL}/weeks/53`,
        query: {
          week: 53,
        },
      })
      const mockRes = httpMocks.createResponse()

      await getWeekById(mockReq, mockRes)

      const resultAsJson = mockRes._getJSONData()
      expect(resultAsJson.status).toBe(false)
      expect(resultAsJson.error).toBe('week with 53 does not exist')
    })
  })
})
