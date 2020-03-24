import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import {
  BLACK_100,
  WHITE,
  ORANGE,
  RED_100,
  GREEN,
  YELLOW_100,
  GREY
} from "../../common/colors";
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons";

const TodoListItem = ({ todo, setSelectedId, selectedId }) => {
  const { onRemoveHandler, completedHandler, onImportantHandler } = useContext(
    ContextTodoList
  );

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
            color={important ? RED_100 : WHITE}
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

      {selectedId === id && (
        <View style={styles.container}>
          <Entypo
            name="flag"
            color={YELLOW_100}
            style={{ padding: 10 }}
            size={20}
            onPress={() => onImportantHandler(id)}
          />
          <MaterialIcons
            name="done"
            color={GREEN}
            style={{ padding: 10 }}
            size={20}
            onPress={() => completedHandler(id)}
          />
          <AntDesign
            name="delete"
            color={RED_100}
            style={{ padding: 10 }}
            size={20}
            onPress={() => onRemoveHandler(id)}
          />
        </View>
      )}
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
