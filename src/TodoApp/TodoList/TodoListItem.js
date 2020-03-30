import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import {
  BLACK_100,
  WHITE,
  ORANGE,
  YELLOW_100,
  GREY
} from "../../common/colors";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { ButtonSet } from "./ButtonSet";

const TodoListItem = ({ todo, setSelectedId, selectedId }) => {
  const { onRemoveHandler, completedHandler } = useContext(ContextTodoList);

  const showDetailHandler = id => {
    if (selectedId === id) {
      setSelectedId(null);
      return;
    }
    setSelectedId(id);
  };

  const { id, title, completed, important } = todo;
  return (
    <>
      <View
        style={{
          ...styles.container,
          ...{ borderBottomWidth: selectedId === id ? 0 : 1 }
        }}
      >
        <View style={styles.notificationDot}>
          <Entypo
            name="dot-single"
            color={important ? YELLOW_100 : WHITE}
            size={24}
            onPress={() => onRemoveHandler(id)}
          />
        </View>
        <TouchableOpacity onPress={() => completedHandler(id)}>
          <Text
            style={{
              ...styles.title,
              ...{
                textDecorationLine: completed ? "line-through" : "none",
                color: completed ? GREY : WHITE
              }
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>

        <FontAwesome
          name={selectedId === id ? "chevron-up" : "chevron-down"}
          color={ORANGE}
          style={{ padding: 10 }}
          size={20}
          onPress={() => showDetailHandler(id)}
        />
      </View>
      {selectedId === id && <ButtonSet styles={styles.container} id={id} />}
    </>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: BLACK_100,
    borderBottomWidth: 1,
    marginLeft: 20,
    paddingVertical: 10,
    position: "relative"
  },
  notificationDot: {
    position: "absolute",
    left: -25,
    top: "50%"
  },
  title: {
    fontSize: 20,
    color: WHITE
  }
});
