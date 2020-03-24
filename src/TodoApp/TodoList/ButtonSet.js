import React, { useContext } from "react";
import { RED_100, GREEN, YELLOW_100 } from "../../common/colors";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { ContextTodoList } from "../ContextAPI";
import { View } from "react-native";

export const ButtonSet = ({ styles, id }) => {
  const { onRemoveHandler, completedHandler, onImportantHandler } = useContext(
    ContextTodoList
  );

  return (
    <View style={styles}>
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
  );
};
