import firebase from 'firebase'

import { auth } from './../../../config/firebase'
import Authentication from './../../../firebase/auth'

describe('Firebase', () => {
  describe('Authentication', () => {
    const user = {
      email: 'meumail@mail.com',
      password: 'mypassword123'
    }

    test('create user with email and password', async () => {
      const authentication = new Authentication()

      const createUserWithEmailAndPasswwordRequest = await authentication.createWithEmailAndPassword(user.email, user.password)

      expect(createUserWithEmailAndPasswwordRequest.data.sucess).toBe('usuário criado!')
      expect(createUserWithEmailAndPasswwordRequest.data.response['userID']).toBeDefined()
    })

    test('fail to create user by email already exists in database', async () => {
      const authentication = new Authentication()

      try {
        const createUserWithEmailAndPasswwordRequest = await authentication.createWithEmailAndPassword(user.email, user.password)
      } catch (error) {
        expect(error.name).toBeDefined()
      }
    })

    test('sign in user with email and password', async () => {
      const authentication = new Authentication()

      const signInUserRequest = await authentication.signInWithEmailAndPassword(user.email, user.password)

      expect(signInUserRequest.data.sucess).toBe('usuário logado com sucesso!')
    })

    test('sign in user google login social', async () => {
      const SocialLoginRequest = await auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(
        '{"sub": "abc123", "email": "foo@example.com", "email_verified": true}'
      ))

      expect(SocialLoginRequest.user.email).toBeDefined()
    })
  })
})
