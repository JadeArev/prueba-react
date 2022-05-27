import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import App from './';
const baseUrl =  `http://localhost:54117/api/refugios/getrefugio/${id}`;

//const axios = require('axios');

useEffect(() => {
  console.log()
  iniciar();
}, []);

function iniciar() {
axios({
  method: 'get',
  url: `http://localhost:54117/api/refugios/getrefugio/${id}`,
}).then((response) => {
  console.log(response.data);
});

}

axios.get(`http://localhost:54117/api/refugios/getrefugio/${id}`).then((response) => {
  console.log(response.data);
});