# Article Preview Component

Este projeto é uma solução para o desafio **Article Preview Component** do  
[Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

O desafio consiste em construir um componente de pré-visualização de artigo
com layout responsivo e um botão de compartilhamento interativo.

Para auxiliar no desenvolvimento do layout, foi utilizada a extensão
**PerfectPixel**, o que possibilitou uma maior precisão visual.  
Ainda assim, o resultado **não é uma réplica fiel pixel a pixel** do design proposto,
mas busca se manter o mais próximo possível, respeitando boas práticas de
responsividade, acessibilidade e organização de código.

---

## 📸 Preview

Componente de card de artigo contendo:
- Imagem ilustrativa
- Título e descrição
- Informações do autor
- Modal de compartilhamento com redes sociais

---

## 🛠️ Tecnologias utilizadas

- **React**
- **Vite**
- **Styled-components**
- **JavaScript (ES6+)**
- **HTML semântico**
- **CSS responsivo**
- **Acessibilidade (a11y)**
- **PerfectPixel (extensão do navegador)**


---

## ✨ Funcionalidades

- Layout responsivo para desktop e dispositivos móveis
- Botão de compartilhamento interativo
- Modal de redes sociais com animação suave
- Troca de ícone e cores conforme o estado do componente
- Comportamento adaptado para mobile
- Navegação por teclado

---

## ♿ Acessibilidade (a11y)

Durante o desenvolvimento, foram aplicadas boas práticas de acessibilidade:

- Uso correto de **HTML semântico**
  - `section`, `article`, `figure`,  `address`, `time`
- Imagens com textos alternativos descritivos (`alt`)
- Botão de compartilhamento acessível com:
  - `aria-expanded`
  - `aria-haspopup`
  - `aria-controls`
- Modal identificado como `dialog`
- Foco visível para usuários de teclado
- Estrutura compatível com leitores de tela

---

## 🧱 Estrutura semântica

- **`<article>`** → conteúdo principal do card
- **`<figure>` + `alt`** → imagem com descrição
- **`<address>`** → informações do autor do artigo
- **`<time>`** → data de publicação
- **`<button>`** → ação de compartilhamento

---

## 📱 Responsividade

- Layout em linha no desktop
- Layout em coluna no mobile (≤ 763px)
- Modal reposicionado para melhor experiência em telas menores
- Ajustes visuais específicos para mobile

---

## 🚀 Como executar o projeto

```bash
git clone https://github.com/AndersonF-Dev/article-preview-component.git
npm install
npm run dev
