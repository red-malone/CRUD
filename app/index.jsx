import { useState } from "react";
import { View ,Pressable, TextInput,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [todos, setTodos] = useState(todos.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  const addtodo = () => {
    if (text.trim()) {
      const id = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id, title: text, completed: false }, ...todos]);
      setText("");
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(setTodos.filter(todo => todo.id !== id))
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}
      >
        <TextInput
        style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor="grey"
          value={text}
          onChangeText={setText}

        />
        <Pressable onPress={addtodo} style={styles.addbutton}>
          <Text style={styles.addbuttonText}>
            Add Todo
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles={
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'black'
  }
}