import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store";

const index = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="hotel" />
      </Stack>
    </Provider>
  );
};

export default index;

//https://nskzmnazcgewjmxroxzx.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5za3ptbmF6Y2dld2pteHJveHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1ODQ1MzQsImV4cCI6MjAzMTE2MDUzNH0._9Qb4VFVucBDMZcL4VGtImQz7M9Xu5jyguKA3mnkhow
