import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { PrimaryButton } from '../presentation/components/shared/PrimaryButton';



 export const SettingsScreen = () => {

  const navigation = useNavigation();
  return (
    
      <PrimaryButton
      onPress={()=>navigation.navigate('About' as never)}
      label= 'About'
      />
 
  );
};
