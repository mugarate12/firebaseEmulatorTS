import {
  createAnything
} from './../../../firebase/anything'

describe('Firebase', () => {
  describe('Anything operations', () => {
    test('create any object with createAnything in firestore', async () => {
      // data

      //request
      const CreateAnything = await createAnything()

      //expect
      expect(CreateAnything.data.sucess).toBe('informação criada com sucesso!')
    })
  })
})