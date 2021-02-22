import { delBasePath } from 'next/dist/next-server/lib/router/router'
import { database } from './../config/firebase'
import { handleResponse } from './../config/firebaseResponse'

export async function createAnything() {
  return await database.collection('anything').doc()
    .set({
      any: 'Anything information'
    })
      .then(response => {
        return handleResponse('sucess', 'informação criada com sucesso!')
      })
      .catch(error => {
        return handleResponse('error', error.code, error.message)
      })
}