import React from "react";

import successIcon from "../../assets/images/icons/success-check-icon.svg";

import * as Styled from "./styles";

const SavedRegistration: React.FC = () => {
  return (
    <Styled.Container>
      <div>
        <Styled.Main>
          <img src={successIcon} alt="cadastrado com sucesso!" />
          <Styled.Title>Cadastro salvo!</Styled.Title>
          <Styled.Description>
            Tudo certo, seu cadastro está na nossa lista de professores. Agora é
            só ficar de olho no seu WhatsApp.
          </Styled.Description>
          <Styled.Button to="/study">Acessar lista</Styled.Button>
        </Styled.Main>
      </div>
    </Styled.Container>
  );
};

export default SavedRegistration;
