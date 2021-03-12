import { auth } from './../config/firebase'
import { handleResponse, FirebaseFunctionError } from './../config/firebaseResponse'

export default class Authentication {
  public createWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      return await auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          return handleResponse({
            message: 'usuário criado!',
            data: {
              userID: user.user.uid
            }
          })
        })
    } catch (error) {
      throw new FirebaseFunctionError(error.code, error.message)
    }
  }

  public signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          return handleResponse({
            message: 'usuário logado com sucesso!',
            data: {
              userID: user.user.uid
            }
          })
        })
    } catch (error) {
      throw new FirebaseFunctionError(error.code, error.message)
    }
  }
}