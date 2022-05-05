import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { FAB } from 'react-native-elements';
import { getPharmacies } from '../../api/index-2';
import { styles } from './styles';
import { ListItem, Avatar, Button } from 'react-native-elements';


export default (props) => {

  const [pharmacies, setPharmacies] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    _getPharmacies() 
  }, [])

  const _getPharmacies = () => {
    getPharmacies()
    .then( res => {
      setPharmacies(res.data)
      setRefreshing(false)
    });
  }

  const onRefresh = React.useCallback( () => {
    _getPharmacies()
  }, []);


  const renderItem = (item) => {

    return (
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('ListDetails', item = { item })}
        key={item._id}
      >
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
            <ListItem.Subtitle>Dirección: { item.address }</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
        
        <View style={ [ styles.mainContent ]} >

          <FlatList
            data={pharmacies}
            renderItem={({ item }) => renderItem(item)}
            // keyExtractor={item => item.name}
            style={ styles.list }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
              />
            }
          />

        </View>
        
        {/* <FAB title="+" placement='right' /> */}

    </SafeAreaView>
  )
}