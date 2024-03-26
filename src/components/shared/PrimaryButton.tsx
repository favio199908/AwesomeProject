import {  Pressable,Text} from 'react-native';

interface Props {
    onPress: ()=>void;
    label: string ;
}

export const PrimaryButton = ({onPress,label}: Props) => {
    return (
      <Pressable
      onPress={()=> onPress}
      
      ></Pressable>
      
    );
  };
  