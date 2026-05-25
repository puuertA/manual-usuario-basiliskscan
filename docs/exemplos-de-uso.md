# :material-flask: Exemplos de uso

## Escanear um projeto Node.js

```bash
bscan scan -p ./meu-projeto-node
```

## Escanear um projeto Java

```bash
bscan scan -p ./meu-projeto-java
```

## Gerar relatório HTML com nome personalizado

```bash
bscan scan -p ./meu-projeto -o relatorio-seguranca.html
```

## Executar scan em modo offline

```bash
bscan scan --offline
```

## Configurar API key do NVD

```bash
bscan nvd-key --prompt
```

ou via `.env`:

```bash
NVD_API_KEY=SEU_TOKEN_NVD
```

## Configurar credenciais da Sonatype Guide

```bash
bscan sonatype-guide-key --prompt
```
