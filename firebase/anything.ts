import { delBasePath } from 'next/dist/next-server/lib/router/router'
import { database } from './../config/firebase'
import { handleResponse } from './../config/firebaseResponse'

export async function createAnything(information: string) {
  try {
    return await database.collection('anything').doc()
      .set({
        any: information
      })
        .then(response => {
          return handleResponse('sucess', 'informação criada com sucesso!')
        })
        .catch(error => {
          return handleResponse('error', error.code, error.message)
        })
  } catch (error) {
    return handleResponse('error', error.code, error.message)
  }
}