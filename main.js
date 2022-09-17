import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import 'react';
import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Filter1 from './filter1';
import Filter2 from './filter2';
import Filter3 from './filter3';
import Filter4 from './filter4';
import Filter5 from './filter5';
import Filter6 from './filter6';
import Filter7 from './filter7';
import Filter8 from './filter8';
import Filter9 from './filter9';
import Filter10 from './filter10';
import Filter11 from './filter11';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

var data = {
    "regular": [ 
        {
            "id": "1",
            "image": require('./assets/glasses.png')
        },
        {
            "id": "11",
            "image": require('./assets/moustache.png')
        }
    ],

    "wayfarer": [
        {
            "id": "4",
            "image": require('./assets/Frapp-03.png')
        },
        {
            "id": "5",
            "image": require('./assets/Frapp-04.png')
        }
    ],

    "rimless": [
        {
            "id": "10",
            "image": require('./assets/Frapp-09.png')
        }
    ],

    "round": [
        {
            "id": "2",
            "image": require('./assets/glasses-round.png')
        },
        {
            "id": "3",
            "image": require('./assets/Frapp-02.png')
        }
    ],

    "aviator": [
        {
            "id": "6",
            "image": require('./assets/Frapp-05.png')
        },
        {
            "id": "7",
            "image": require('./assets/Frapp-06.png')
        },
        {
            "id": "8",
            "image": require('./assets/Frapp-07.png')
        },
        {
            "id": "9",
            "image": require('./assets/Frapp-08.png')
        }
    ]  
}

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermission: null,
            faces: [],
            currentFilter: '1',
            selected: 'regular'
        }
    }

    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission = (status) => {
        this.setState({ hasCameraPermission: status.status === 'granted' })
    }

    handleFacesDetected = ({ faces }) => {
        this.setState({
            faces: faces
        })
       // console.log(this.state.faces)
    }

    onFaceDetectionError = (error) => {
        console.log(error)
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>Face Filters</Text>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all,
                            // minDetectionInterval: 100,
                            // tracking: true
                        }}
                        onFacesDetected={this.handleFacesDetected}
                        onFacesDetectionError={this.onFaceDetectionError}
                    />

                    {
                        this.state.faces.map(face => {
                            if (this.state.currentFilter === '1') {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '2') {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '3') {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '4') {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '5') {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '6') {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '7') {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '8') {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '9') {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '10') {
                                return <Filter10 key={face.faceID} face={face} />
                            } else if (this.state.currentFilter === '11') {
                                return <Filter11 key={face.faceID} face={face} />
                            }
                        })
                    }
                </View>
                <View style={styles.framesContainer}>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                        style={this.state.selected === 'regular' ? styles.category1 : styles.category2}
                        onPress={()=>{
                            this.setState({
                                selected: `regular`
                            })
                        }}>
                            <Text> Regular </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={this.state.selected === 'wayfarer' ? styles.category1 : styles.category2}
                        onPress={()=>{
                            this.setState({
                                selected: `wayfarer`
                            })
                        }}>
                            <Text> Wayfarer </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={this.state.selected === 'rimless' ? styles.category1 : styles.category2}
                        onPress={()=>{
                            this.setState({
                                selected: `rimless`
                            })
                        }}>
                            <Text> Rimless </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={this.state.selected === 'round' ? styles.category1 : styles.category2}
                        onPress={()=>{
                            this.setState({
                                selected: `round`
                            })
                        }}>
                            <Text> Round </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={this.state.selected === 'aviator' ? styles.category1 : styles.category2}
                        onPress={()=>{
                            this.setState({
                                selected: `aviator`
                            })
                        }}>
                            <Text> Aviator </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                    style={{marginTop: 20}}
                    horizontal={true}>
                        {
                            data[this.state.selected].map((item, i) => {
                                return (
                                    <TouchableOpacity 
                                    style={styles.filterImageContainer}
                                    onPress={()=>{
                                        this.setState({
                                            currentFilter: item.id
                                        })
                                    }}>
                                        <Image source={item.image}
                                        style={{
                                            height: 32,
                                            width: 80
                                        }}/>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.actionContainer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#6278e4",
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4",
      
    },
    titleText: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1,
        alignSelf: 'center',
   
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    cameraStyle: {
        flex: 0.65
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#6278e4"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20
    },
    categoryContainer: {
        flex: 0.4, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    category1: {
        flex: 0.2,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#efb141',
        padding: RFValue(3),
        margin: 1.5,
        width: '100%',
        height: '120%'
        // marginLeft: 5,
        // marginRight: 5
    },
    category2: {
        flex: 0.2,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'grey',
        padding: RFValue(3),
        margin: 1.5,
        width: '100%',
        height: '120%'
        // marginLeft: 5,
        // marginRight: 5
    }
});

