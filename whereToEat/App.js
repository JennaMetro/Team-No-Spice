import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.21749913 24.8064967&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDGgNbzA8m2lzd9ijxaGPhmoe-oVTr7nDk')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource:responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.rating}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
