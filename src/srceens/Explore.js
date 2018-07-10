/*
 * Explore.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Platform,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Category from '../components/Explore/Category'
import Home from '../components/Explore/Home'
import Tag from '../components/Explore/Tag'

const { width } = Dimensions.get('window')

class Explore extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
      this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp'
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} >

          <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd', }}>
            <View style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS === 'android' ? 30 : null,
            }}>
              <Icon name='ios-search' size={20} style={{ color: 'gray', marginRight: 10 }} />
              <TextInput
                placeholder="Try 'Taiyuan'"
                placeholderTextColor='gray'
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                underlineColorAndroid='transparent'
              />
            </View>
            <Animated.View style={{ opacity: this.animatedOpacity, flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop }}>
              <Tag name='Guests' />
              <Tag name='Dates' />
            </Animated.View>
          </Animated.View>

          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }])} >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                What can we help you find, Yan?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUrl={require('../assets/home.jpg')} name='Home' />
                  <Category imageUrl={require('../assets/experiences.jpg')} name='Experiences' />
                  <Category imageUrl={require('../assets/restaurant.jpg')} name='Restaurant' />
                </ScrollView>
              </View>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                A new selection of homes verified for quality & comfort.
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image source={require('../assets/home.jpg')} style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}/>
              </View>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Home around the world
              </Text>

              <View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Home width={width/2 -30} rating={4.1} type='PRIVATE ROOM - 2 BEDS' name='The Crazy Palace' price='82$' imageUrl={require('../assets/home.jpg')}/>
                <Home width={width/2 -30} rating={3.8} type='PRIVATE ROOM - 2 BEDS' name='The Crazy Palace' price='82$' imageUrl={require('../assets/home.jpg')}/>
                <Home width={width/2 -30} rating={4.5} type='PRIVATE ROOM - 2 BEDS' name='The Crazy Palace' price='82$' imageUrl={require('../assets/home.jpg')}/>
              </View>

            </View>

          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default Explore
