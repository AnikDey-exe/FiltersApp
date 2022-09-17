import 'react';
import { Image, View } from 'react-native';

const Filter11 = ({
    face: {
        bottomMouthPosition: {
            x: posX,
            y: posY
        },
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
    var moustacheWidth = faceWidth / 2;
    var moustacheHeight = 40;

    var transformAngle = (angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))) => (angleRad * 180) / Math.PI

    return (
        <View style={{
            position: 'absolute',
            left: posX - 50,
            top: posY - 45
        }}>
            <Image source={require('./assets/moustache.png')} style={{
                width: moustacheWidth,
                height: moustacheHeight,
                resizeMode: 'contain',
                transform: [{
                    rotate: `${transformAngle()}deg`,
                }, {
                    scale: 2.5
                }
                ],
            }} />
        </View>
    )
};

export default Filter11;