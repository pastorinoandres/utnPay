
//dependecies
import React from 'react';
import { View, Text } from 'react-native';

//components
import Thumbnail from './../components/Thumbnail';

//styles
import { _photoProfile } from './../styles/globalStyles';

const PhotoProfile = ({source}) => {
    return (
        <View style={_photoProfile}>
            <Thumbnail
            size="big"
            source={source}
            onPress={null}>
            </Thumbnail>
        </View>
    );
};

export default PhotoProfile;