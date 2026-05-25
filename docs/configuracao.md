# :material-cog: Configuração

## :material-test-tube: Arquivo `.env`

O BasiliskScan lê um arquivo `.env` automaticamente (no diretório do projeto ou acima dele). Nele você pode definir chaves de API e outras variáveis.

Exemplo de `.env`:

```bash
NVD_API_KEY=SEU_TOKEN_NVD
OSS_INDEX_USERNAME=seu_usuario
OSS_INDEX_TOKEN=seu_token
```

## :material-lock: Credenciais e prioridade de leitura

A descoberta de credenciais segue esta ordem:

1. Variáveis de ambiente
2. Keyring do sistema operacional (se disponível)
3. Arquivo `~/.config/basiliskscan/credentials.toml`

### Caminho do arquivo de credenciais

- **Linux/macOS:** `~/.config/basiliskscan/credentials.toml`
- **Windows:** `C:\Users\<usuario>\.config\basiliskscan\credentials.toml`

### Comandos recomendados

```bash
bscan nvd-key --prompt
bscan sonatype-guide-key --prompt
```

## :material-file-document: Variáveis de ambiente suportadas

### NVD

- `NVD_API_KEY`

### Sonatype Guide / OSS Index

- `OSS_INDEX_USERNAME`
- `OSS_INDEX_TOKEN`
- `OSSINDEX_USERNAME` (compatibilidade)
- `OSSINDEX_TOKEN` (compatibilidade)
- `SONATYPE_GUIDE_USERNAME` (compatibilidade)
- `SONATYPE_GUIDE_TOKEN` (compatibilidade)

### Banco offline

- `BASILISKSCAN_OFFLINE_DB_DIR`: define diretório do banco offline local.
- `BASILISKSCAN_SEED_FORCE`: força uso da base embutida (quando `true`).
- `BASILISKSCAN_SEED_REFRESH`: permite atualizar seed quando detectada base embutida mais nova.

### Relatórios

- `BASILISKSCAN_DISABLE_TRANSLATION`: desativa a tradução automática de descrições no relatório HTML.

## Cache de consultas (avançado)

O módulo de ingestão possui cache local de vulnerabilidades, com configurações em `~/.basiliskscan_ingest.json`. Não há comando CLI para isso, mas você pode ajustar manualmente:

- `cache.enabled` (bool)
- `cache.backend` (`sqlite`, `json`, `hybrid`)
- `cache.ttl_hours` (int)
- `cache.auto_cleanup` (bool)
- `cache.cleanup_interval_hours` (int)
