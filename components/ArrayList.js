import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const ArrayList = () => {
    const abc = ["hell", "yeah"]
    const users = [
        {
            id: 1,
            name: 'Deepak'
        },

        {
            id: 2,
            name: 'Deepak2'
        },
        {
            id: 3,
            name: 'Deepak3'
        },
        {
            id: 4,
            name: 'Deepak4'
        },
        {
            id: 5,
            name: 'Deepak4'
        },
        {
            id: 11,
            name: 'Deepak4'
        },
        {
            id: 51,
            name: 'Deepak4'
        },
        {
            id: 12,
            name: 'Deepak4'
        },
        {
            id: 21,
            name: 'Deepak4'
        },
        {
            id: 42,
            name: 'Deepak5'
        },
    ]

    return (
        <View>
            {/* <Text style={{ fontSize: 30 }}> List with flatlist components
                <FlatList
                data={users}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}/>
            </Text> */}
            <ScrollView style={{marginBottom:60 }}>
                <Text style={{ fontSize: 30 }}>List with Map function</Text>
                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 20,
        color: '#fff',
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})

export default ArrayList;