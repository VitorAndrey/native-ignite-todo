import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: colors.gray700,
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContentContainer: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  addTaskContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: -25,
    paddingHorizontal: 20,
  },
  taskInput: {
    backgroundColor: colors.gray500,
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    color: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray700,
    fontSize: 16,
  },
  addTaskButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueDark,
    borderRadius: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 30,
    marginHorizontal: 25,
    borderColor: colors.gray400,
  },
  createdTasksText: {
    color: colors.blue,
    fontWeight: '500',
  },
  doneTasksText: {
    color: colors.purple,
    fontWeight: '500',
  },
  counterContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  counterText: {
    color: colors.gray100,
    backgroundColor: colors.gray400,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontWeight: '500',
  },
  emptyListContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  noTasksText: {
    fontWeight: '700',
    marginTop: 20,
    color: colors.gray300,
  },
  createatasksText: {
    color: colors.gray300,
  },
  taskListContainer: {
    paddingHorizontal: 20,
  },
  flatList: {
    height: '75%',
  },
});
