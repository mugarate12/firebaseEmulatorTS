import Anything from './../../../firebase/anything'

describe('Firebase', () => {
  describe('Anything operations', () => {
    test('create a document sucessful and get response object', async () => {
      const information = 'my_information'
      const anything = new Anything()

      const createDocumentRequest = await anything.create(information)

      expect(createDocumentRequest.data.sucess).toBe('informação criada com sucesso!')
    })

    test('error to create document by invalid field', async () => {
      let information: string
      const anything = new Anything()

      try {
        const createDocumentRequest = await anything.create(information)
      } catch (error) {
        expect(error.message).toBeDefined()
      }
    })

    test('get all documents of this Collection', async () => {
      const anything = new Anything()

      const allDocumentsRequest = await anything.index()

      expect(allDocumentsRequest.data.response).toBeDefined()
    })
  })
})
