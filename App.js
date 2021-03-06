import React, { useState } from 'react';
import { ScrollView, Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Alert, YellowBox, TouchableHighlight, Dimensions, BackHandler } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Carousel, { Pagination } from 'react-native-snap-carousel';

//reset__ terminate this project

export default class App extends React.Component {


  state = {
    isVisible: false,
  };

  displayModal(show) {
    this.setState({ isVisible: show })
  }
  characteraddbigbutton=()=>{
    Alert.alert('나만의 캐릭터를 추가해보세요!')
  }

  constructor(props) {
    super(props);
    this.state2 = { // cardview 관련 state2.
      index: 0, // 카드뷰 인덱스
      activeSlide:0,

      //image url 추가
      carouselItems: [
        {
          key: 'dog',
          title: "몽몽",
          text: "MONGMONG",
          illustration: require('./characterimage/강아지전신.png') ,

          touchable:false,
          //'./characterimage/ㄱ캐릭터전신 (1).png'

        },
        {
          key: 'sudal',
          title: "달수리",
          text: "DALSURI",
          illustration: require('./characterimage/수달전신.png'),
          touchable:false,

        },
        {
          key: 'rabbit',
          title: "낑이",
          text: "KKING",
          illustration: require('./characterimage/토끼전신.png'),
          touchable:false,

        },
        {
          key: 'panda',
          title: "판다씨",
          text: "PANDASEE",
          illustration: require('./characterimage/펭귄전신.png'),
          touchable:false,

        },
        {
          key: 'penguin',
          title: "펭펭",
          text: "PENG PENG",
          illustration: require('./characterimage/판다전신.png'),
          touchable:false,

        },
        {
          key:'add',
          title:"나만의 캐릭터를 완성해봐요",
          illustration: require('./characterimage/537.png'),
          touchable:true,
        }

      ]
    }
  }

  _renderItem({ item }) {

    return (
      <View style={{
        backgroundColor: 'white',
        borderColor: 'black',
        elevation:8,
        borderRadius: 15,
        height: 260,
        width: 188,
        padding: 10,
        marginTop: 32,
        alignContent:'center',
        justifyContent:'center',
      }}>      
      <TouchableOpacity>
              <Image 
      source={item.illustration}
      marginLeft={8}
      style={{width:154, height:203}}
      resizeMode={'stretch'}
        />
        </TouchableOpacity>

        <Text style={{ fontSize: 14 }}>{item.title}</Text>
        <Text style={{color:'#9e9e9e'}}>{item.text}</Text>
          </View>
    )
  }

  get pagination() {
    const { carouselItems, activeSlide } = this.state2;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'black'
        }}
        inactiveDotStyle={{
          backgroundColor: 'gray',
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>네비게이션 부분</Text>
        </View>
        <ScrollView horizontal={true} style={styles.circleindicator} justifyContent={'center'}>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/강.png')
              }
              style={{ width: 37, height: 30 }}
              resizeMode='stretch'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/수.png')
              }
              style={{ width: 37, height: 30 }}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/토.png')
              }
              style={{ width: 37, height: 30 }}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/판.png')
              }
              style={{ width: 37, height: 30 }}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterbutton}>
            <Image
              source={
                require('./characterimage/펭.png')
              }
              style={{ width: 37, height: 30 }}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('캐릭터')}
            style={styles.characterplusbutton}>
            <Image
              source={
                require('./characterimage/537.png')
              }             
               style={{ height:56, width:56 }}
               resizeMode='stretch'
            />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.category}>

          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>공부</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>운동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>취미</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>약속</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('확인')}
            style={styles.categorybutton}>
            <Text>기타</Text>
          </TouchableOpacity>


          
        </View>
        <View style={styles.cardview}>
          <View>
            <Carousel
              layout={'default'}
              ref={ref => this.carousel = ref}
              data={this.state2.carouselItems}
              sliderWidth={400}
              itemWidth={200}
              renderItem={this._renderItem}
              onSnapToItem={(index) =>
                this.setState(
                  {
                    activeSlide: index
                  })
              }
              inactiveSlideOpacity={1}
            >
            </Carousel>
          </View>
          
          
          <TouchableOpacity
            onPress={() => {
              this.displayModal(true);
            }}
            style={styles.modalbutton}>
            <Feather name={'book-open'} size={16} color={'#9e9e9e'} />
          </TouchableOpacity>
          <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert('Modal is closed');
          }}
        >

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            <View style={{
              backgroundColor: '#fff',
              width: 265,
              height: 366,
              borderRadius: 15,

              elevation: 3,
            }}>
              <Text>캐릭터 사진</Text>
              <Text>설명 : 달수리는 물에 사는~~~</Text>

              <Text onPress={() => { this.displayModal(!this.state.isVisible); }}>닫기</Text>
            </View>
          </View>

        </Modal>
        </View>
        <View style={styles.navigator}>

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
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleindicator: {
    height: 72,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  category: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 2,
  },
  cardview: {
    height: 376,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:40,
  },
  charactercard: {
    marginTop: 32,
    marginLeft: 17,
    marginRight: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor:'black',
    elevation:5,
  },


  //button component

  // 캐릭터 버튼
  characterbutton: { //hightlighted 된거 나타내는 style 요소
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  characterbuttonselected: { //hightlighted 된거 나타내는 style 요소
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 100,
  },
  characterplusbutton:{ // 캐릭터 얼굴 칸 마지막 plus 버튼 + 

    marginTop: 8,
    borderRadius: 100,
  },
  characteraddbutton: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 0,
    borderWidth: 1,
    borderRadius: 100,
  },

  categorybutton: {
    height: 32,
    width: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 20,
  },

  modalbutton: {
    height: 24,
    width: 58,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: 'black',

    borderRadius: 20,
    backgroundColor:'#eeeeee',
  },


  carouselcardview:{
    backgroundColor: 'white',
    borderColor: 'black',
    elevation:5,
    borderRadius: 15,
    height: 260,
    width: 188,
    padding: 30,
    //여기서부터 custom
    marginTop: 32,
  }




});