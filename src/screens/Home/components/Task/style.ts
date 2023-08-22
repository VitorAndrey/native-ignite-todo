import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray400,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
  },
});
