import {
  createAnything
} from './../../../firebase/anything'

describe('Firebase', () => {
  describe('Anything operations', () => {
    test('create any information with createAnything in firestore and receive on data object message to sucess operation', async () => {
      // Arrange
      const information = 'my information'

      // Act
      const CreateAnything = await createAnything(information)

      // Assert
      expect(CreateAnything.data.sucess).toBe('informação criada com sucesso!')
    })

    test('failure to create information in Anything Entity in firestore to bad information and receive on data object message to failure operation ', async () => {
      // Arrange
      const badInformation = undefined

      // Act
      const CreateAnything = await createAnything(badInformation)

      // Assert
      expect(CreateAnything.data.error).toBeDefined()
    })
  })
})
