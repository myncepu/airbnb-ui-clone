/*
 * Home.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
} from 'react-native'
import StarRating from 'react-native-star-rating'

class Home extends Component {
  static propTypes = {
    imageUrl: PropTypes.number,
    width: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ width: this.props.width, height: this.props.width, borderWidth: 0.5, borderColor: '#dddddd', marginVertical: 5 }}>
        <View style={{ flex: 1 }}>
          <Image source={this.props.imageUrl} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
          <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.type}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
          />
        </View>
      </View>
    )
  }
}

export default Home
