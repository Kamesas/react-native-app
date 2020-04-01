import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
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
  const { onRemoveHandler } = useContext(ContextTodoList);

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
        style={[
          styles.container,
          { borderBottomWidth: selectedId === id ? 0 : 1 }
        ]}
      >
        <View style={styles.notificationDotWrap}>
          <Entypo
            name="dot-single"
            color={important ? YELLOW_100 : WHITE}
            size={24}
            onPress={() => onRemoveHandler(id)}
          />
        </View>
        <Text
          style={{
            ...styles.title,
            ...{
              textDecorationLine: completed ? "line-through" : "none",
              color: completed ? GREY : important ? YELLOW_100 : WHITE
            }
          }}
        >
          {title}
        </Text>

        <FontAwesome
          name={selectedId === id ? "chevron-up" : "chevron-down"}
          color={ORANGE}
          style={{ padding: 10 }}
          size={20}
          onPress={() => showDetailHandler(id)}
        />
      </View>
      {selectedId === id && (
        <ButtonSet styles={styles.container} id={id} important={important} />
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
    paddingVertical: 7,
    position: "relative"
  },
  notificationDotWrap: {
    position: "absolute",
    left: -25
  },
  title: {
    fontSize: 18,
    color: WHITE
  }
});
