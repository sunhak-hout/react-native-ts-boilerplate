import React from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const AppIcon: React.FC<IconProps> = props => {
  return <MaterialIcon size={20} {...props} />;
};

export default AppIcon;
