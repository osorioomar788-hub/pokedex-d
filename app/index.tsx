import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  };

  return (
    <View>
      <Text>Omar Osorio</Text>
    </View>
  );
}
