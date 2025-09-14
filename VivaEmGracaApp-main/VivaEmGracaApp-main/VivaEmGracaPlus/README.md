# VivaEmGraca+ - Aplicativo Oficial da Igreja Evangélica Viva em Graça

## 📱 Sobre o Aplicativo

O **VivaEmGraca+** é o aplicativo oficial da Igreja Evangélica Viva em Graça, desenvolvido para conectar a comunidade de fé através de uma plataforma digital moderna e funcional. O aplicativo oferece acesso completo aos recursos da igreja, incluindo rádio ao vivo, vídeos, cursos bíblicos, eventos e muito mais.

## ✨ Funcionalidades Principais

### 🎵 Rádio Ao Vivo
- Player de rádio integrado no cabeçalho
- Streaming 24 horas da Rádio Viva em Graça
- Controles de play/pause
- Reprodução em segundo plano

### 📺 Vídeos e Lives
- Integração com canal do YouTube
- Transmissões ao vivo dos cultos
- Biblioteca de mensagens e estudos
- Player de vídeo otimizado

### 📚 Cursos Bíblicos
- **Formação em Teologia em Graça** (R$ 49,99)
- **Teologia em Graça** (R$ 29,99)
- **Bases Bíblicas da Graça** (R$ 19,99)
- **Somente a Graça** (R$ 7,99)
- Sistema de autenticação por senha
- Acesso a vídeo-aulas e PDFs
- Estudos bíblicos gratuitos

### 📅 Eventos e Programação
- Horários de cultos atualizados
- Informações sobre eventos especiais
- Calendário de atividades da igreja

### 📞 Contato e Localização
- Informações de contato completas
- Integração com WhatsApp
- Localização da igreja
- Horários de funcionamento

### 🌐 Redes Sociais
- Links diretos para YouTube, Instagram e Facebook
- Botões flutuantes para acesso rápido

## 🛠️ Tecnologias Utilizadas

- **React Native** com Expo
- **React Navigation** para navegação
- **Expo AV** para reprodução de áudio
- **Expo WebBrowser** para links externos
- **Expo Linear Gradient** para efeitos visuais
- **Ionicons** para ícones

## 📁 Estrutura do Projeto

```
VivaEmGracaPlus/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Tela inicial
│   │   ├── AboutScreen.js         # Sobre a igreja
│   │   ├── EventsScreen.js        # Eventos e programação
│   │   ├── VideosScreen.js        # Vídeos e lives
│   │   ├── CoursesScreen.js       # Cursos bíblicos
│   │   └── ContactScreen.js       # Contato
│   ├── components/
│   │   └── RadioPlayer.js         # Componente do player de rádio
│   ├── assets/                    # Recursos do aplicativo
│   └── utils/                     # Utilitários
├── assets/                        # Assets do Expo
├── App.js                         # Componente principal
├── app.json                       # Configuração do Expo
├── eas.json                       # Configuração EAS Build
├── package.json                   # Dependências
├── BUILD_INSTRUCTIONS.md          # Instruções de build
└── README.md                      # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para emulador Android)

### Instalação
```bash
# 1. Clone o repositório
git clone [URL_DO_REPOSITORIO]

# 2. Entre no diretório
cd VivaEmGracaPlus

# 3. Instale as dependências
npm install

# 4. Inicie o projeto
npm start
```

### Executar no Dispositivo
```bash
# Android
npm run android

# iOS (apenas no macOS)
npm run ios

# Web
npm run web
```

## 📱 Build para Produção

### Usando EAS Build (Recomendado)
```bash
# 1. Instalar EAS CLI
npm install -g eas-cli

# 2. Login no Expo
eas login

# 3. Build para Android
eas build --platform android --profile production
```

### Build Local
```bash
# APK para testes
npx expo build:android --type apk

# AAB para Play Store
npx expo build:android --type app-bundle
```

## 🔐 Informações de Segurança

### Chave de Assinatura
- **Arquivo**: `vivaemgraca-release-key.keystore`
- **Alias**: `vivaemgraca-key-alias`
- **Senhas**: `vivaemgraca2024`
- **Validade**: 27 anos

**⚠️ IMPORTANTE**: Faça backup seguro da chave de assinatura!

### Senhas dos Cursos
- **Formação em Teologia**: `400rmarr2423`
- **Teologia em Graça**: `graca2024`
- **Bases Bíblicas**: `bases123`
- **Somente a Graça**: `somente2024`

## 📊 Informações da Igreja

- **Nome**: Igreja Evangélica Viva em Graça
- **Endereço**: Rua Barão do Rio Branco 2145 - Centro, Fortaleza - CE
- **CEP**: 60025-060
- **Telefone**: (85) 99808-7066
- **E-mail**: pr.fledsonalves@hotmail.com

### Horários de Culto
- **Domingo**: 9h e 18h
- **Quarta-feira**: 19h
- **Sexta-feira**: 19h (Oração e confissão da palavra)

## 🔗 Links Importantes

- **YouTube**: https://www.youtube.com/channel/UCaRhVrYNb1iMwKvpCo9fQ5g
- **Instagram**: https://instagram.com/pastor_fledson
- **Facebook**: https://www.facebook.com/fledson.santos.5
- **Site Oficial**: https://www.vivaemgraca.com.br

## 📝 Licença

Este projeto foi desenvolvido exclusivamente para a Igreja Evangélica Viva em Graça. Todos os direitos reservados.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Manus AI** para a Igreja Evangélica Viva em Graça.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o aplicativo, entre em contato:
- **WhatsApp**: (85) 99808-7066
- **E-mail**: pr.fledsonalves@hotmail.com

---

**Versão**: 1.0.0  
**Data**: Julho 2025  
**Plataforma**: Android (Play Store)

