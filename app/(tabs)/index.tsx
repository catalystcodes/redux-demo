import { Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "@/balanceSlice";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen({}: RootTabScreenProps<"TabOne">) {
  const balance = useSelector((state: any) => state.balance.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ marginVertical: 40 }}>
        <Button
          title="Deposit"
          onPress={() => {
            dispatch(deposit(10));
          }}
        />
        <Button
          title="Withdraw"
          onPress={() => {
            dispatch(withdraw(10));
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
});
