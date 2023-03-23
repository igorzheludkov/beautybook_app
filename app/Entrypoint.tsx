import React from 'react';
import AllTabs from './navigation/AllTabs';
// import auth from '@react-native-firebase/auth';

export default function Entrypoint(): JSX.Element {
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(status => {
  //     console.log('firebase auth state', status);
  //   });
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  return <AllTabs />;
}
