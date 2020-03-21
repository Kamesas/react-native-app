import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ContextTodoList } from "../ContextAPI";

const TodoListItem = ({ todo }) => {
  const { onRemoveHandler } = useContext(ContextTodoList);

  const { id, title } = todo;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemoveHandler(id)}
      >
        <Text style={styles.removeButtonTitle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20
  },
  removeButton: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  removeButtonTitle: {
    fontSize: 25,
    color: "red",
    transform: [{ rotate: "45deg" }],
    paddingBottom: 5
  }
});
