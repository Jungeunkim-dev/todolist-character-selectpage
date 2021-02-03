import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Alert} from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text>d스트</Text>
        <Text>텍스트</Text>
        <Text>완료</Text>
        </View>
        <View style={styles.circleindicator}>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{ width: 48, height: 48, borderRadius: 60 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{ width: 48, height: 48, borderRadius: 60 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{ width: 48, height: 48, borderRadius: 60 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{ width: 48, height: 48, borderRadius: 60 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{ width: 48, height: 48, borderRadius: 60 }}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.category}>
          <Button title="공부" onPress={()=>Alert.alert('공부')}/>
          <Button title="운동" onPress={()=>Alert.alert('공부')}/>
          <Button title="취미" onPress={()=>Alert.alert('공부')}/>
          <Button title="약속" onPress={()=>Alert.alert('공부')}/>
          <Button title="기타" onPress={()=>Alert.alert('공부')}/>

          

        </View>
        <View style={styles.cardview}>
          <TouchableOpacity>
            <Text style={{fontSize:40}}>CARD+button+인디케이터들어갈 자리</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navigator}>
        <TouchableOpacity>
            <Text>버튼1</Text>
            </TouchableOpacity>

            <Text>버튼2</Text>
            <Text>버튼3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'skyblue',
  },
  circleindicator: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'space-evenly',

  },
  category: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  cardview: {
    flex: 6,
    backgroundColor: 'green',
  },
  navigator: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
});