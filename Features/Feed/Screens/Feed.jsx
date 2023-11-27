import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post';

export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
      <Post username="fionapeng16" body="hello" />
      {GIVEN_POSTS.map((postObject) => (
      < Post key={postObject.id} username={postObject.username} body={postObject.body} />
      ))}
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
