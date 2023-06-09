import { View, Text, StyleProp, Platform } from "react-native";
import React from "react";
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function SingIn() {
  const navigation = useNavigation();
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />
        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("SingUp")}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
