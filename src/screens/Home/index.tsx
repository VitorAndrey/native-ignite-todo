import React, {useState} from 'react';

import uuid from 'react-native-uuid';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {styles} from './style';
import {Task} from './components/Task';
import {colors} from '../../utils/colors';
import todoLogo from '../../assets/logo.png';
import addIcon from '../../assets/plus.png';
import clipBoadIcon from '../../assets/clipboard.png';

interface TaskType {
  id: string;
  task: string;
  isCompleted: boolean;
}

export default function Home() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [taskInputValue, setTaskInputValue] = useState<string>('');

  function handleCreateTask() {
    if (taskInputValue) {
      setTaskList(prevTaskList => [
        ...prevTaskList,
        {
          id: String(uuid.v4()),
          task: taskInputValue,
          isCompleted: false,
        },
      ]);
    }

    setTaskInputValue('');
  }

  function handleIsTaskClicked(id: string) {
    setTaskList(prevTaskList => {
      const updatedTaskList = prevTaskList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });

      return updatedTaskList;
    });
  }

  function handleDeleteTask(id: string) {
    setTaskList(prevTaskList => {
      const listWithoutTheRemovedOne = prevTaskList.filter(
        taks => taks.id !== id,
      );
      return listWithoutTheRemovedOne;
    });
  }

  const cratedTasks = taskList.length;

  const completedTasksCounter = countCompletedTasks();

  function countCompletedTasks() {
    let counter = 0;
    taskList.forEach(task => {
      if (task.isCompleted) {
        counter++;
      }
    });
    return counter;
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.logoContainer}>
        <Image source={todoLogo} />
      </View>

      <View style={styles.mainContentContainer}>
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            value={taskInputValue}
            onChangeText={setTaskInputValue}
          />

          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={handleCreateTask}
            activeOpacity={0.9}>
            <Image source={addIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.counterContainer}>
            <Text style={styles.createdTasksText}>Criadas</Text>
            <Text style={styles.counterText}>{cratedTasks}</Text>
          </View>

          <View style={styles.counterContainer}>
            <Text style={styles.doneTasksText}>Concluídas</Text>
            <Text style={styles.counterText}>{completedTasksCounter}</Text>
          </View>
        </View>

        <View style={styles.taskListContainer}>
          {taskList.length > 0 ? (
            <FlatList
              style={styles.flatList}
              data={taskList}
              renderItem={task => (
                <Task
                  task={task.item}
                  handleIsTaskClicked={handleIsTaskClicked}
                  handleDeleteTask={handleDeleteTask}
                />
              )}
              keyExtractor={task => task.id}
            />
          ) : (
            <View style={styles.emptyListContainer}>
              <Image source={clipBoadIcon} />
              <Text style={styles.noTasksText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.createatasksText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
