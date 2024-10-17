import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

const Home = () => {
  // console.log("hello react native")
  // alert("hello")
  return (
    <>
      <View style={{
        backgroundColor: 'light-blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30
        }}>Home</Text>

        <Link href={'about'} style={{
          fontSize: 30
        }}>About</Link>
        <Link href={'contact'} style={{
          fontSize: 30
        }}>contact</Link>
        <Link href={'Services'} style={{
          fontSize: 30
        }}>Services</Link>
      </View>
    </>
  )
}

export default Home