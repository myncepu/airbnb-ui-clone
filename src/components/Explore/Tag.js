/*
 * Tag.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
} from 'react-native'

class Tag extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 1, marginRight: 5 }}>
        <Text style={{ fontWeight: '700', fontSize: 10 }}>
          {this.props.name}
        </Text>
      </View>
    )
  }
}

export default Tag
