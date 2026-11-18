# 🌿 Jardim Pet

> Primeira versão do meu projeto Jardim Pet, feito com HTML, CSS e JavaScript.

O Jardim Pet é um site institucional fictício de um espaço que une cuidados com pets e plantas: banho e tosa, plantas pet friendly e produtos para o dia a dia dos animais.

Foi meu primeiro contato prático com HTML, logo depois de concluir um curso de algoritmos. Eu queria sair da teoria e ver o que tinha aprendido virando uma página de verdade no navegador.

> **Nota:** este repositório guarda só a primeira versão, em HTML, CSS e JavaScript puros. O Jardim Pet está sendo reconstruído do zero, com React, Node.js, Express e MySQL, em um projeto separado.

🔗 **Ver online:** [eduardasouzar-dev.github.io/jardim-pet](https://eduardasouzar-dev.github.io/jardim-pet/)

---

## 🛠️ Tecnologias

| Tecnologia | Como usei |
| --- | --- |
| **HTML** | Estrutura das quatro páginas, com `header`, `nav`, `main`, `section`, `article`, `footer` e um formulário de contato. |
| **CSS** | Um único arquivo (`css/styles.css`) compartilhado por todas as páginas. Cada página tem uma classe no `body` (como `home`, `pagina-servicos` e `nossojardim`) para receber seu próprio estilo. |
| **JavaScript** | Arquivo `js/script.js`, usado na página inicial para o carrossel de destaques, com setas e indicadores. |
| **Google Fonts** | Fontes como Nunito, Comfortaa e Montserrat. |

As setas do carrossel são ícones SVG colocados direto no HTML, e as imagens são arquivos PNG na pasta `imagens/`.

---

## 📄 Páginas

- **Início (`index.html`)**: carrossel com três destaques: banho e tosa, plantas pet friendly e cuidados diários.
- **Serviços (`servicos.html`)**: três blocos: Banho e Tosa, Atendimento Personalizado e Clube Jardim Pet.
- **Nosso Jardim (`nossojardim.html`)**: apresentação de espécies de plantas (folhagens tropicais e aloe vera) e dicas para a convivência entre plantas e pets.
- **Contato (`contatos.html`)**: cartões com WhatsApp, e-mail e localização, mais um formulário de mensagem.

Os textos e os dados de contato são de exemplo. O formulário existe só como layout: o projeto não tem back-end.

---

## 📁 Estrutura

```
jardim-pet/
├── css/
│   └── styles.css
├── imagens/
├── js/
│   └── script.js
├── index.html
├── servicos.html
├── nossojardim.html
└── contatos.html
```

---

## 👀 Como visualizar

**Online:** acesse o link do GitHub Pages no início deste README.

**No computador:**

```bash
git clone https://github.com/eduardasouzar-dev/jardim-pet.git
```

Depois é só abrir o `index.html` no navegador. O projeto não tem dependências nem etapa de instalação. As fontes vêm do Google Fonts, então é preciso estar conectada à internet para elas carregarem.

---

## 🌱 O que esse projeto representou

Foi aqui que comecei a juntar as peças: organizar o conteúdo em páginas, ligar tudo por uma navegação, separar estrutura, estilo e comportamento em arquivos diferentes e manter uma identidade visual parecida entre as telas. Também foi a primeira vez que usei JavaScript para fazer algo acontecer numa página, e não só em exercícios de lógica.

Hoje vejo que ele é simples. É um site estático, sem back-end, com conteúdo de exemplo. Mesmo assim, é o ponto de partida da minha trajetória em tecnologia, e guardo esta versão como registro de onde comecei.
