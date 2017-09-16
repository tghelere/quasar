import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyD9XSUaa6NuEMTODk82Hcdaip5iSPgvELU',
  authDomain: 'expenses-2fa63.firebaseapp.com',
  databaseURL: 'https://expenses-2fa63.firebaseio.com',
  projectId: 'expenses-2fa63',
  storageBucket: 'expenses-2fa63.appspot.com',
  messagingSenderId: '830786828331'
}
const connection = Firebase.initializeApp(config)
const DB = connection.database()

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    }
  })
}
