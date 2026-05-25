# :material-console: Comandos

A CLI principal do BasiliskScan é `bscan`. Abaixo estão todos os comandos reais disponíveis no projeto.

## `bscan`

**Comando:** `bscan`

**Descrição:** Exibe ajuda geral e atalhos. Também aceita `--version`.

**Parâmetros/opções:**

- `-h`, `--help`: mostra a ajuda.
- `--version`: mostra a versão instalada.

**Exemplo:**

```bash
bscan --help
```

## `bscan scan`

**Comando:** `bscan scan`

**Descrição:** Varre o projeto alvo, identifica dependências suportadas, consulta vulnerabilidades e gera relatório HTML.

**Parâmetros/opções:**

- `-p`, `--project <diretório>`: diretório raiz do projeto (padrão: `.`).
- `-u`, `--url <caminho>`: caminho alternativo do projeto (sobrepõe `--project`).
- `-o`, `--output <arquivo.html>`: nome do relatório HTML (salvo dentro de `reports/`).
- `--skip-vulns`: não consulta fontes de vulnerabilidades.
- `--include-transitive`: inclui dependências transitivas no relatório.
- `--offline`: usa apenas o banco offline local para vulnerabilidades.

**Exemplo:**

```bash
bscan scan -p ./meu-projeto -o relatorio.html
```

## `bscan nvd-key`

**Comando:** `bscan nvd-key`

**Descrição:** Configura, exibe ou remove a API key do NVD.

**Parâmetros/opções:**

- `--set <api-key>`: define a API key.
- `--prompt`: solicita a key de forma interativa.
- `--show`: mostra o status da key configurada.
- `--clear`: remove a key persistida.
- `--save-to-keyring`: salva também no keyring do sistema (quando disponível).

**Exemplo:**

```bash
bscan nvd-key --prompt
```

## `bscan nvd-register-guide`

**Comando:** `bscan nvd-register-guide`

**Descrição:** Exibe um guia rápido para solicitar uma API key do NVD.

**Parâmetros/opções:**

- `--open`: abre a página oficial no navegador.

**Exemplo:**

```bash
bscan nvd-register-guide --open
```

## `bscan sonatype-guide-key`

**Comando:** `bscan sonatype-guide-key`

**Descrição:** Configura, exibe ou remove credenciais da Sonatype Guide (OSS Index).

**Parâmetros/opções:**

- `--username <username>`: define o username.
- `--token <token>`: define o token (usar junto com `--username`).
- `--prompt`: solicita username e token de forma interativa.
- `--show`: mostra status das credenciais configuradas.
- `--clear`: remove credenciais persistidas.
- `--save-to-keyring`: salva também no keyring do sistema (quando disponível).

**Exemplo:**

```bash
bscan sonatype-guide-key --prompt
```

## `bscan sonatype-guide-register-guide`

**Comando:** `bscan sonatype-guide-register-guide`

**Descrição:** Exibe um guia rápido para criar conta e token na Sonatype Guide.

**Parâmetros/opções:**

- `--open`: abre a página da API no navegador.

**Exemplo:**

```bash
bscan sonatype-guide-register-guide --open
```

## `bscan offline-db`

**Comando:** `bscan offline-db`

**Descrição:** Gerencia o banco offline de vulnerabilidades (status, sincronização e limpeza).

**Parâmetros/opções:**

- `--status`: mostra estatísticas do banco local.
- `--sync`: sincroniza componentes pendentes.
- `--force`: força sincronização completa (equivale a `--sync` total).
- `--clear`: limpa totalmente o banco local (usar sozinho).
- `--project <diretório>`: descobre componentes de um projeto e sincroniza no banco.

**Exemplo:**

```bash
bscan offline-db --status
```
