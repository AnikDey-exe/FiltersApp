import 'react';
import { Image, View } from 'react-native';

const Filter9 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight
            }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    var glassesWidth = faceWidth;
    var glassesHeight = faceHeight / 2;

    var transformAngle = (angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))) => (angleRad * 180) / Math.PI

    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.35,
            top: leftEyePosition.y - glassesHeight * 0.45
        }}>
            <Image source={require('./assets/Frapp-08.png')} style={{
                width: glassesWidth, 
                height: glassesHeight,
                resizeMode: 'contain',
                transform: [{
                    rotate: `${transformAngle()}deg`
                }]
            }}/>
        </View>
    )
};

export default Filter9;