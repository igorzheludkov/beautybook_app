import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {login} from '../../../store/modules/auth/thunks';

import styles from './styles';
import {IProfileForm} from './types';
import InputCustom from '../../../components/ui/TextInputCustom';
import {useGetDocumentsQuery} from '../../../store/modules/api/userData/userDataSlice';

export default function ProfileForm() {
  // const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.authSlice.isLoggingIn);
  const userData = useAppSelector(state => state.authSlice.user);

  const {
    data = [],
    error,
    isLoading: dataLoading,
  } = useGetDocumentsQuery({
    collectionName: 'users',
    documentName: userData!.uid,
    subcollectionName: 'profile',
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IProfileForm>();

  const onSubmit = (form: IProfileForm) => {
    console.log(form);
    // dispatch(login(data));
  };

  console.log('~~~~~~~~~~~~~~ data profile', data);
  console.log('~~~~~~~~~~~~~~ error', error);
  console.log('~~~~~~~~~~~~~~ dataLoading', dataLoading);
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        rules={{required: false}}
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <InputCustom
            onChangeText={onChange}
            value={value}
            placeholder="Your name"
          />
        )}
      />
      {errors.name && <Text>This field is required.</Text>}

      <Controller
        control={control}
        name="phone"
        rules={{required: false}}
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <InputCustom
            onChangeText={onChange}
            value={value}
            placeholder="+380"
          />
        )}
      />
      {errors.phone && <Text>This field is required.</Text>}
      <View style={styles.buttonContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button title="Save" onPress={handleSubmit(onSubmit)} />
        )}
      </View>
    </View>
  );
}
