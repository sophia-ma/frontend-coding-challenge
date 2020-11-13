import actions, { API_URL } from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    it('fetches successfully data from the users API', async () => {
      // const data = JSON.stringify({
      //   user: {
      //     name: 'Sofia',
      //     goals: 'Energy',
      //     dob: '1991-10-09T00:00:00.000Z',
      //     diet: 'Coeliac'
      //   }
      // })

      // axios.post.mockImplementationOnce(() => Promise.resolve(data))

      // expect(axios.post).toHaveBeenCalledTimes(1)

      // expect(axios.post).toHaveBeenCalledWith(`${API_URL}/users`, data)
    })
  })
})
