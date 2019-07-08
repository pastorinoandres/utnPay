import React from 'react';
import { View, Text } from 'react-native';
import { _titleSection } from "./../styles/globalStyles";

const Section = ({title, children}) => {
    return (
        <View>
            <Text style={_titleSection}>{title}</Text>
            {children}            
        </View>
    );
};

export default Section;