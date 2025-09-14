# Instruções de Build e Publicação - VivaEmGraca+

## Informações da Chave de Assinatura

**IMPORTANTE: Guarde essas informações com segurança!**

- **Arquivo da chave**: `vivaemgraca-release-key.keystore`
- **Alias da chave**: `vivaemgraca-key-alias`
- **Senha do keystore**: `vivaemgraca2024`
- **Senha da chave**: `vivaemgraca2024`
- **Validade**: 10.000 dias (aproximadamente 27 anos)

## Configuração do Projeto

### 1. Informações do Aplicativo
- **Nome**: VivaEmGraca+
- **Package ID**: com.vivaemgraca.app
- **Versão**: 1.0.0
- **Version Code**: 1

### 2. Permissões Android
- INTERNET (para conexão com rádio e vídeos)
- ACCESS_NETWORK_STATE (para verificar conectividade)
- RECORD_AUDIO (para player de rádio)
- MODIFY_AUDIO_SETTINGS (para controle de áudio)

## Como Fazer Build para Produção

### Opção 1: Build Local (APK)
```bash
# 1. Instalar dependências
npm install

# 2. Build para Android
npx expo build:android --type apk

# 3. Ou para AAB (recomendado para Play Store)
npx expo build:android --type app-bundle
```

### Opção 2: EAS Build (Recomendado)
```bash
# 1. Login no Expo
eas login

# 2. Configurar projeto
eas build:configure

# 3. Build para produção
eas build --platform android --profile production

# 4. Build para preview (APK)
eas build --platform android --profile preview
```

## Publicação na Play Store

### 1. Preparação
1. Criar conta de desenvolvedor no Google Play Console
2. Pagar taxa única de $25 USD
3. Configurar informações da loja

### 2. Upload do App
1. Fazer upload do arquivo AAB gerado
2. Preencher informações da loja:
   - Título: VivaEmGraca+
   - Descrição curta: App oficial da Igreja Evangélica Viva em Graça
   - Descrição completa: (ver seção abaixo)
   - Screenshots e ícones
   - Classificação etária: Livre para todos

### 3. Descrição para Play Store

**Descrição Curta:**
App oficial da Igreja Evangélica Viva em Graça com rádio, vídeos, cursos bíblicos e muito mais!

**Descrição Completa:**
O VivaEmGraca+ é o aplicativo oficial da Igreja Evangélica Viva em Graça, localizada em Fortaleza-CE. 

🎵 RÁDIO AO VIVO
Ouça nossa rádio 24 horas com programação cristã e mensagens edificantes.

📺 VÍDEOS E LIVES
Assista aos cultos ao vivo e acesse nossa biblioteca de mensagens e estudos bíblicos.

📚 CURSOS BÍBLICOS
Acesse cursos de teologia e estudos bíblicos para crescimento espiritual:
- Formação em Teologia em Graça
- Bases Bíblicas da Graça
- Estudos gratuitos em PDF

📅 EVENTOS E PROGRAMAÇÃO
Fique por dentro de todos os eventos e horários de cultos:
- Domingos: 9h e 18h
- Quarta-feira: 19h
- Sexta-feira: 19h (Oração e confissão da palavra)

📞 CONTATO DIRETO
Entre em contato conosco facilmente através do WhatsApp, telefone ou e-mail.

🌐 REDES SOCIAIS
Acesse nossas redes sociais diretamente pelo app: YouTube, Instagram e Facebook.

Venha fazer parte da nossa comunidade de fé e crescer conosco na Palavra de Deus!

## Atualizações Futuras

### Como Atualizar o App
1. Incrementar `versionCode` no `app.json`
2. Atualizar `version` se necessário
3. Fazer novo build
4. Upload na Play Store

### Estrutura para Manutenção
```
VivaEmGracaPlus/
├── src/
│   ├── screens/          # Telas do aplicativo
│   ├── components/       # Componentes reutilizáveis
│   ├── assets/          # Imagens e recursos
│   └── utils/           # Utilitários
├── assets/              # Assets do Expo
├── app.json            # Configuração do app
├── eas.json            # Configuração EAS Build
└── BUILD_INSTRUCTIONS.md # Este arquivo
```

## Contatos de Suporte

- **Igreja**: (85) 99808-7066
- **E-mail**: pr.fledsonalves@hotmail.com
- **Endereço**: Rua Barão do Rio Branco 2145 - Centro, Fortaleza - CE

## Backup da Chave

**CRÍTICO**: Faça backup da chave `vivaemgraca-release-key.keystore` em local seguro. Sem ela, não será possível atualizar o app na Play Store!

Recomendações:
1. Armazenar em nuvem (Google Drive, Dropbox)
2. Fazer cópia física em local seguro
3. Documentar todas as senhas
4. Compartilhar com pessoa de confiança da igreja

