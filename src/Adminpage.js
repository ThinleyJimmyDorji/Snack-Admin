import * as React from "react";
import { Admin, Resource, } from 'react-admin';
import {firebaseConfig} from "./firebase"
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import CustomLoginPage from './CustomLoginPage';


import './App.css';

const options = {
  logging: true   , 
  watch: ['snacks'],
  persistence: 'local',
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },

}
const dataProvider = FirebaseDataProvider(firebaseConfig, options); 
const authProvider = FirebaseAuthProvider(firebaseConfig, options);



function Adminpage() {



  return (     
    <Admin
    loginPage={CustomLoginPage} 
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="snacks"
      list={PostList}
      show={PostShow}
      create={PostCreate}
      edit={PostEdit}
    />

  </Admin>);
}

export default Adminpage;
