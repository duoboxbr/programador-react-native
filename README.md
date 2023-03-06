# Teste prático - Programador(a) React Native

[![N|duobox](https://download.duobox.com.br/imgs/logo_duobox_azul.png)](https://duobox.com.br/)

**Desenvolver uma aplicação simples utilizando React Native.**
O objetivo desta avaliação é medir o nível de conhecimento do candidato nas áreas em que a vaga será exigida.

# Escopo
Deve-se criar um aplicativo para resolver o problema descrito abaixo, utilizando framework React Native. Fique a vontade para explorar todo o seu conhecimento com ferramentas disponíveis, como Redux, Styled Components ou qualquer outra.

# Cenário fictício
A Empresa X está lançando um novo aplicativo para seus clientes.

Neste aplicativo, desejamos que o usuário digite um número de CPF/CNPJ ou um endereço de e-mail, e após digitar mostre uma lista com os serviços encontrados para o documento/e-mail informado.

O usuário poderá escolher um item para visualizar mais informações sobre aquele serviço.

Ao visualizar as informações do serviço, o usuário também pode querer visualizar a lista de boletos refente ao serviço.

O usuário pode querer fazer a baixa do boleto em aberto, ou o cancelamento. Ele também poderá fazer o envio do boleto por e-mail.

# Requisitos
- O aplicativo se comunicará com uma API e utilizará autenticação Basic Auth.
- É necessária uma tela de login para autenticar o usuário.

# API

#### Apoio para o uso dos enpoints
https://documenter.getpostman.com/view/8692764/2s93Jowk8X

#### Endpoints necessários:
- /clientes/index
- /clientes_internet/buscainfo
- /clientes_cobrancas/pesquisa
- /clientes_cobrancas/liquidar
- /clientes_cobrancas/cancelar
- /boletos/enviar_email

#### Base URL

https://dev-react-native.ispbox.com.br

#### Basic Auth
- Usuário: admin
- Senha: @admin123

# Instruções:

- Faça fork desse repositório envie-nos um Pull Request quando estiver pronto.
- Deve ser utilizado o React Native.
- Crie uma release no fork, na release inclua o APK e o pacote AAB
- Crie um README

# Plus ++
- Cubra pelo menos 3 recursos de seu código com testes unitários.
- Utilize as melhores práticas para desenvolvimento com React Native.
- Criar o design das telas no Figma ou ferramenta similar.


# Observações:

- Você tem até 5 dias para nos enviar o Pull Request. Não tenha pressa! O que será avaliado é a qualidade do código não a velocidade de desenvolvimento.
- Se não for possível terminar todas as funcionalidades, não tem problema.
- Seu código-fonte não precisa ser bonito ou ter um UX excelente.
- Não precisa ser complexo, com varias lib’s e etc. O legal é usar o necessário para ter um código de qualidade e de fácil evolução.
- Lembrando código de qualidade, você pode e deve fazer o que achar necessário para isso, mesmo que não esteja listado aqui.

Em caso de dúvidas, envie-nos um e-mail: rh@duobox.com.br 
