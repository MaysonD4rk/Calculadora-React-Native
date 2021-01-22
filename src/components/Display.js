import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        paddingTop: 59,
        paddingBottom: 59,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#FFF',
        margin: 20,
    },
    
});

export default props =>{

const stylesButton = [styles.button]

if(props.double) stylesButton.push(styles.buttonDouble)
if(props.triple) stylesButton.push(styles.buttonTriple)
if(props.operation) stylesButton.push(styles.operationButton)


    return(
    <View style={styles.display}>
        <Text 
        style={styles.displayValue}
        numberOfLines={1}
        >
            {props.value}
        </Text>
    </View>

    )}