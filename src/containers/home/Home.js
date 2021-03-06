/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP} from '../../utils/util';
import {CenterView} from '../../components/common/Extra';

const Home = props => {
  return (
    <CenterView>
      <Text>Main Page</Text>
      {/* 임시 생성 버튼 */}
      <View style={{marginBottom: widthPercentageToDP(60)}} />
      <TouchableOpacity
        style={{
          margin: widthPercentageToDP(2),
          padding: widthPercentageToDP(5),
          borderWidth: widthPercentageToDP(2),
          borderRadius: widthPercentageToDP(6),
          borderColor: 'blue',
        }}
        onPress={() => {
          props.navigation.navigate('HospitalList');
        }}>
        <Text>XX 병원 리스트로 이동</Text>
      </TouchableOpacity>
    </CenterView>
  );
};

export default Home;
