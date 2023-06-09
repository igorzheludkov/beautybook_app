import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { store, persistor } from './app/store/store'
import Entrypoint from './app/Entrypoint'
import codePush from 'react-native-code-push';


if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Entrypoint />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default codePush(App);
