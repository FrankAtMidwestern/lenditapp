import ThemedButton from '@components/ThemedButton';
import ThemedText from '@components/ThemedText';
import ThemedView from '@components/ThemedView';
import {getFontFamily} from '@utils/fontFamily';

const HomeScreen = () => {
  return (
    <ThemedView>
      <ThemedText style={{fontFamily: getFontFamily('ROBOTO', 'medium')}}>
        App
      </ThemedText>
      <ThemedButton title="Press me" onPress={() => {}} />
      <ThemedButton title="Press me" onPress={() => {}} type="secondary" />
      <ThemedButton title="Press me" onPress={() => {}} type="accent" />
    </ThemedView>
  );
};

export default HomeScreen;
