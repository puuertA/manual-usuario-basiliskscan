# :material-shield-bug: Fontes de vulnerabilidades

O BasiliskScan agrega vulnerabilidades de múltiplas fontes e mescla resultados para reduzir duplicidades. As fontes ativas por padrão são:

## :material-web: OSV

- **Descrição:** base pública mantida pela comunidade.
- **Credenciais:** não são necessárias.
- **Uso no BasiliskScan:** habilitado por padrão.

## :material-file-document: NVD (National Vulnerability Database)

- **Descrição:** base oficial de CVEs mantida pelo NIST.
- **Credenciais:** recomendada a `NVD_API_KEY` para melhorar limites de requisição.
- **Configuração:**

```bash
bscan nvd-key --prompt
```

ou via `.env`:

```bash
NVD_API_KEY=SEU_TOKEN_NVD
```

## :material-tools: Sonatype Guide / OSS Index

- **Descrição:** fonte comercial/gratuita para dados de vulnerabilidades por componente.
- **Credenciais:** requer username e token.
- **Configuração:**

```bash
bscan sonatype-guide-key --prompt
```

## :material-puzzle: Como a agregação funciona

- As fontes são consultadas em paralelo quando possível.
- Resultados são normalizados e mesclados por identificadores (ex.: CVE).
- O relatório exibe as fontes associadas a cada vulnerabilidade.
