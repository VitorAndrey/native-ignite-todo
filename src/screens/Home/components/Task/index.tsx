import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import {styles} from './style';

import checked from '../../../../assets/cheked.png';
import unchecked from '../../../../assets/uncheked.png';
import trashIcon from '../../../../assets/trash.png';
import {colors} from '../../../../utils/colors';

interface TaskProps {
  task: {
    id: string;
    task: string;
    isCompleted: boolean;
  };
  handleIsTaskClicked: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function Task({task, handleIsTaskClicked, handleDeleteTask}: TaskProps) {
  const isCompletedDecoration = task.isCompleted ? 'line-through' : 'none';
  const isCompletedColor = task.isCompleted ? colors.gray300 : colors.gray200;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => handleIsTaskClicked(task.id)}>
      {task.isCompleted ? (
        <Image source={checked} />
      ) : (
        <Image source={unchecked} />
      )}
      <Text
        style={{
          flex: 1,
          textDecorationLine: isCompletedDecoration,
          color: isCompletedColor,
          fontSize: 16,
        }}>
        {task.task}
      </Text>
      <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
