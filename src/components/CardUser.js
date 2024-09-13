import * as React from 'react';
import { useState } from 'react';
import { Avatar, Card, IconButton, Menu, Provider } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardUser = ({ id, name, country }) => {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        //<SafeAreaView>
        <Card.Title
            title={name}
            subtitle={country}
            style={styles.card}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => (
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <IconButton
                            {...props}
                            icon="dots-vertical"
                            onPress={openMenu} // Abrir el menú al presionar el botón
                        />
                    }
                >
                    <Menu.Item onPress={() => {
                        closeMenu();
                        navigation.navigate('Details', { userID: id })
                    }}
                        title="modify"
                    />
                </Menu>
            )}
        />
        //</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#00000'
    }
})

export default CardUser;