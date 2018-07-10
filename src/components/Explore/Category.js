/*
 * Category.js
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

class Category extends Component {
  static propTypes = {
    imageUrl: PropTypes.number,
    name: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ width: 130, height: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
        <View style={{ flex: 2 }}>
          <Image source={this.props.imageUrl} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            {this.props.name}
          </Text>
        </View>
      </View>
    )
  }
}

export default Category
