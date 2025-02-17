import { StyleSheet, View } from 'react-native';
import { Text } from '../Text';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import theme from '../../theme';
import { useState } from 'react';

const styles = StyleSheet.create({
    loadingText: {
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'center',
    }
});

const RepositoryList = () => {
    const repositories = useRepositories();
    const [selectedOrder, setSelectedOrder] = useState(null);

    if (repositories.loading) return (
        <Text style={styles.loadingText}>...Loading</Text>
    )
    const handleChange = async (val) => {
        switch (val) {
            case "latestRepositories":
                repositories.refetch({
                    orderBy: "CREATED_AT",
                    orderDirection: "DESC"
                })
                break;
            case "highestRatedRepositories":
                repositories.refetch({
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "DESC"
                })
                break;
            case "lowestRatedRepositories":
                repositories.refetch({
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "ASC"
                })
                break;
            default:
                break;
        }
        setSelectedOrder(val);
    }
    return (
        <View>
            <Picker
                style={{ color: theme.colors.bsBodyColor }}
                selectedValue={selectedOrder}
                onValueChange={handleChange}>
                <Picker.Item enabled={false} label="Select an option" value={null} />
                <Picker.Item label="Latest repositories" value="latestRepositories" />
                <Picker.Item label="Highest rated repositories" value="highestRatedRepositories" />
                <Picker.Item label="Lowest rated repositories" value="lowestRatedRepositories" />
            </Picker >
            <RepositoryListContainer repositories={repositories.repositories} />
        </View>
    );
};

export default RepositoryList;