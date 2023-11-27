import {Text, View } from 'react-native';

export default function Post({username, body}) {
    return (
      <View>
        <Text>{username}</Text>
        <Text>{body}</Text>
      </View>
    );
}