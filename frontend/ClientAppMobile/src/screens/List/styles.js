import { StyleSheet, Dimensions  } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#777777'
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: width/10
  },
  list: { 
    width: '100%', 
    paddingLeft:20, 
    paddingRight: 20, 
  },
  dataContent:{
    flex: 1, 
    alignItems:'center'
  },
  label:{
    fontWeight: 'bold',
    fontSize: 18
  },
  image: { 
    height: width/2, 
    width: width, 
    alignSelf: 'center' 
  },
  avatar: { 
    backgroundColor: '#00abf1', 
    alignSelf: 'center', 
    borderRadius:10,
  },
  cardContainer:{ 
    padding: 0 , 
    // height: 100, 
    borderRadius:20
  },
  cardPokeInfo: {
    // height: height/4
  },
  cardView: {
    position: "relative",
    // alignItems: "center"
    padding: 20 
  }
})