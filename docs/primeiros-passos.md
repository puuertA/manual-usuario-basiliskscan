# :material-rocket-launch: Primeiros passos

## :material-folder: 1) Entre no diretório do projeto

```bash
cd /caminho/do/seu/projeto
```

## :material-play-circle: 2) Execute a primeira varredura

```bash
bscan scan
```

O relatório HTML é salvo em `reports/` com nome padrão no formato `basiliskscan-report-YYYYMMDD-HHMMSS.html`.

## :material-file-document: 3) Abra o relatório

```bash
# Windows
start reports\basiliskscan-report-YYYYMMDD-HHMMSS.html

# Linux
xdg-open reports/basiliskscan-report-YYYYMMDD-HHMMSS.html

# macOS
open reports/basiliskscan-report-YYYYMMDD-HHMMSS.html
```

## :material-lightbulb-on: Dicas rápidas

- Para acelerar a execução, pule a busca de vulnerabilidades:

```bash
bscan scan --skip-vulns
```

- Para incluir dependências transitivas no relatório:

```bash
bscan scan --include-transitive
```

- Para usar somente o banco local offline:

```bash
bscan scan --offline
```
