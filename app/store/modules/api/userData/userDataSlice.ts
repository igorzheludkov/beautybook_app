import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import firestore from '@react-native-firebase/firestore';

interface IQuery {
  collectionName: string;
  documentName: string;
  subcollectionName: string;
}

export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  baseQuery: fetchBaseQuery({baseUrl: 'fake'}),
  endpoints: builder => ({
    getDocuments: builder.query({
      queryFn: async ({
        collectionName,
        documentName,
        subcollectionName,
      }: IQuery) => {
        const data = firestore()
          .collection(collectionName)
          .doc(documentName)
          .collection(subcollectionName);

        const result = await data.get().then(snap => snap.docs[0].data());
        console.log(
          '=========',
          await data.get().then(snap => snap.docs[0].data()),
        );
        return {data: result};
      },
    }),
    addDocument: builder.mutation({
      queryFn: ({collectionName, documentName, data}) => {
        let query = firestore().collection(collectionName);

        if (documentName) {
          query = query.doc(documentName).collection('subcollectionName');
        }

        return query.add(data).then(docRef => {
          return {id: docRef.id, ...data};
        });
      },
    }),
  }),
});

export const {useGetDocumentsQuery, useAddDocumentMutation} = firestoreApi;
