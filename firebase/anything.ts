import firebase from 'firebase'

import { database } from './../config/firebase'
import { handleResponse, FirebaseFunctionError } from './../config/firebaseResponse'
import { ANYTHING } from './collections'

export default class Anything{
  public create = async (information: string) => {
    return await database.collection(ANYTHING)
      .doc()
      .set({
        information
      })
      .then(response => {
        return handleResponse({
          message: 'informação criada com sucesso!'
        })
      })
      .catch(error => {
        throw new FirebaseFunctionError(error.code, error.message)
      })
  }

  public index = async () => {
    return await database.collection(ANYTHING)
      .get()
      .then(querySnapshot => {
        let anythingCollectionArray: Array<firebase.firestore.DocumentData> = []

        querySnapshot.forEach((doc) => {
          anythingCollectionArray.push(doc.data())
        })

        return handleResponse({
          message: 'aqui estão todos os documentos da coleção',
          data: anythingCollectionArray
        })
      })
      .catch(error => {
        throw new FirebaseFunctionError(error.code, error.message)
      })
  }
}