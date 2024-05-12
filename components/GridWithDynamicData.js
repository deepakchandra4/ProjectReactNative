import { View, Text, StyleSheet, FlatList } from 'react-native';

const GridWithDynamicData = () => {
    const users = [
        {
            id:1,
            name:'Dijkstra',
            email : "d@gmail.com"
        },
        {
            id:2,
            name:'Dijkstra',
            email : "d@gmail.com"
        },
        {
            id:3,
            name:'Dijkstra',
            email : "d@gmail.com"
        },
        {
            id:4,
            name:'Dijkstra',
            email : "d@gmail.com"
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Grid with dynamic data</Text>
            <View style={styles.viewBox}>
                <FlatList
                    data={users}
                    renderItem={({item}) => <View style={styles.textStyle}>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                    </View> }
                />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    viewBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textDetail: {
        borderWidth:2,
        backgroundColor:'blue',
    },
    
})


export default GridWithDynamicData;