
import { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'


const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);
    const [showpass, setShowPassword] = useState(true);

    const resetForm = () => {
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('');
    }
    return (
        <View>
            <Text style={styles.textBox}>User Details</Text>
            <TextInput
                placeholder='Enter Your name'
                style={styles.textInput}
                value={name}
                onChangeText={(text) => setName(text)} />
            <TextInput
                placeholder='Enter Your email'
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)} />
            <TextInput
                placeholder='Enter Your password'
                style={styles.textInput}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)} />

            <View style={styles.buttonStyle}>
                <Button color='green' title='Show detail' style={{ backgroundColor: 'green' }} onPress={() => setDisplay(true)} />
            </View>
            <View style={styles.buttonStyle}>
                <Button title='clear'
                    onPress={() => resetForm()}
                    styles={styles.button}
                />
            </View>
            <View>
                {
                    display ?
                        <View style={styles.textBox}>
                            <Text>{name}</Text>
                            <Text>{email}</Text>
                            <Text>{password}</Text>
                        </View> : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        fontSize: 20,
        backgroundColor: "cyan",
        color: 'purple',
        textAlign: 'center'
    },
    textInput: {
        fontSize: 25,
        borderWidth: 2,
        bordercolor: 'blue',
        padding: 2,
        marginTop: 5
    },
    buttonStyle: {
        marginTop: 5,
        backgroundColor: 'green'
    }
})

export default UserForm;