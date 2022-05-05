import React, { useEffect, useState } from "react";
import { View, Image, StatusBar, Linking, Platform, Alert } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPharmacy, deletePharmacy } from "../../api/index-2";

import { AirbnbRating } from 'react-native-ratings';

import { styles } from './styles'

export default (props) => {

  const { name, _id } = props.route.params.item;
  const { navigation } = props;

  const [pokemonId, setPokemonId] = useState('000');
  const [pokemon, setPokemon] = useState({});

  const [pharmacy, setPharmacy] = useState({});

  const [types, setTypes] = useState([])
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    const id = _id;
    id &&
      getPharmacy(id).then(data => {
        navigation.setOptions({ title: name })
        console.log(data.data)
        setPharmacy(data.data)
        console.log(data.data)
      });
  }, []);

  const linkToMap = () => {
    console.log("link to maps");

    let latitude = pharmacy.location.latitude;
    let longitude = pharmacy.location.longitude;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    // const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const latLng = `${latitude},${longitude}`;
    const label = name ///pasar algun string;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    }); Linking.openURL(url);
  };

  const callToPhone = () => {
    let phoneNumber = pharmacy.phone;

    const scheme = Platform.select({
      ios: "tel:",
      android: "tel:"
    });

    const url = Platform.select({
      ios: `${scheme}${phoneNumber}`,
      android: `${scheme}${phoneNumber}`
    }); Linking.openURL(url);
  };

  const sendMail = () => {
    let emailAddress = pharmacy.email;

    const scheme = Platform.select({
      ios: "mailto:",
      android: "mailto:"
    });

    const url = Platform.select({
      ios: `${scheme}${emailAddress}`,
      android: `${scheme}${emailAddress}`
    }); Linking.openURL(url);
  };

  const _handleDelete = () => {
    Alert.alert(
      'Farmacias App',
      `¿Desea eliminar la farmacia ${pharmacy.name}?`,
      [
        { text: "OK", onPress: () => _deletePharmacy() },
        { text: "Cancelar", onPress: () => null },
      ]
    )
  }


  const _deletePharmacy = async () => {
    const id = _id;
    const res = await deletePharmacy(id);
    console.log(res)
    if (res.statusCode === 200 && res.status === 'ok') {
      Alert.alert(
        'Farmacias App',
        'Registro eliminado correctamente',
        [
          { text: "OK", onPress: () => navigation.goBack(null) },
        ]
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />

      <View style={{ flex: 1 }}>
        {
          pharmacy.URL_img && 
          
            pharmacy.URL_img.length > 0 && pharmacy.URL_img[0] !== '' && pharmacy.URL_img[0] !== 'undefined' ? 
            
              <Image source={{ uri: pharmacy.URL_img[0] }} style={styles.image} />
            :
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLR0uw5vGaFyZAEKskr8KKioOYvV4bzdLIHWk1QDvrzTZL4rgYv8V03ZfTTVuklFw7QBA&usqp=CAU' }} style={styles.image} />
        }
      </View>


      <View style={styles.mainContent}>

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <Card containerStyle={styles.cardContainer} style={styles.cardPokeInfo}>
            <Card.Title>Detalles</Card.Title>
            <Card.Divider />

            <View style={styles.cardView}>

              <Text>Nombre: {pharmacy.name}</Text>
              <Text>Dirección {pharmacy.address}</Text>
              <Text>Teléfono: {pharmacy.phone}</Text>
              <Text>E-mail: {pharmacy.email}</Text>

            </View>

          </Card>

        </View>

      </View>

      <View style={{ flex: 1, flexDirection: 'row', padding: 50 }}>

        <Button title="Mapa" onPress={() => linkToMap()} icon="user" ></Button>

        <Button title="Llamar" onPress={() => callToPhone()} icon="home" ></Button>

        <Button title="Email" onPress={() => sendMail()} icon="home" ></Button>

        <Button title="Eliminar" onPress={() => _handleDelete()} icon="home" ></Button>

      </View>

      <AirbnbRating
        showRating={false}
        isDisabled={true}
      />

    </SafeAreaView>
  )
}