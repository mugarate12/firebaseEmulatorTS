import {
  createAnything
} from './../../../firebase/anything'

describe('Firebase', () => {
  describe('Anything operations', () => {
    test('create any object with createAnything in firestore', async () => {
      // data

      //request
      const CreateAnything = await createAnything()
      console.log(CreateAnything)

      //expect
      expect(1).toBe(1)
    })
  })
})