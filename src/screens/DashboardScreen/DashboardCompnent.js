import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DashboardCompnent = ({ listData = [] }) => {
  const _listEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyViewText}>Empty List</Text>
      </View>
    );
  };
  const _itemSeparatorComponent = () => {
    return <View style={styles.seprator} />;
  };

  //List Items
  const _renderItem = ({ item }) => {
    return (
      <View style={{ margin: 5, paddingVertical: 10, flex: 1 }}>
        <Text>
          {item.first_name} {item.last_name}
        </Text>
        <Text>{item.phone_number}</Text>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={!listData.length && styles.contentContainerStyle}
      disableVirtualization={false}
      data={listData}
      renderItem={_renderItem}
      ListEmptyComponent={_listEmptyComponent}
      ItemSeparatorComponent={_itemSeparatorComponent}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default DashboardCompnent;

const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyViewText: { fontSize: 24, fontWeight: 'bold' },
  seprator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
