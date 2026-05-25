# :material-chart-box: Relatórios HTML

Ao final de um scan, o BasiliskScan gera um relatório HTML interativo na pasta `reports/`.

## :material-folder: Onde o relatório é salvo

- Diretório padrão: `reports/`
- Nome padrão: `basiliskscan-report-YYYYMMDD-HHMMSS.html`
- Exemplo:

```bash
bscan scan -o relatorio.html
# Resultado em reports/relatorio.html
```

## :material-play-circle: Como abrir o relatório

```bash
# Windows
start reports\relatorio.html

# Linux
xdg-open reports/relatorio.html

# macOS
open reports/relatorio.html
```

## :material-puzzle: Estrutura do relatório

O HTML inclui:

- **Cabeçalho:** projeto analisado, data, duração e versão da ferramenta.
- **Visão Geral:** cartões de métricas e gráficos com status dos componentes.
- **Componentes:** lista de dependências com versões, ecossistemas e status.
- **Vulnerabilidades:** CVEs, severidade, descrição e fontes associadas.
- **Recomendações:** dicas de atualização por ecossistema.

As abas visíveis no topo do relatório são:

- **Visão Geral**
- **Componentes**
- **Vulnerabilidades**
- **Recomendações**

## Observações importantes

- O relatório utiliza recursos externos (ex.: Chart.js e ícones) carregados via CDN.
- A tradução automática de descrições pode ser desativada com `BASILISKSCAN_DISABLE_TRANSLATION=true`.
