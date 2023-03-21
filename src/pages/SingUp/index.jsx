import { Platform } from "react-native";
import React from "react";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../SingIn/styles";

export default function SingUp() {
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
