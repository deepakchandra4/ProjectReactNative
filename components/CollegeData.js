import { } from 'react-native';
import {View , Text , StyleSheet } from 'react-native'
import style from '../style';


const CollegeData = () => {
    return (
        <View>
            <Text style={styles.textBox}> Name : BBDU</Text>
            <Text style={Estyles.textBox} > Location  : Lucknow</Text>
            <Text style={{ fontSize: 20 }}> COurse : MCA</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBox:{
        fontSize:30,
        color:'purple',
        backgroundColor:'cyan',
        padding:10,
        marginBottom:20,
        borderRadius:20,
        textAlign:'center'
    }
})

export default CollegeData; 