# :material-database: Banco offline

O BasiliskScan possui um banco local de vulnerabilidades para uso em ambientes sem internet.

## :material-folder: Caminho padrão

- **Padrão:** `~/.basiliskscan/offline/offline_vulnerabilities.db`
- **Override:** `BASILISKSCAN_OFFLINE_DB_DIR`

O banco embutido é distribuído com o pacote em `src/basiliskscan/data/offline/offline_vulnerabilities.db` e é copiado automaticamente no primeiro uso.

## :material-tools: Comandos de gerenciamento

### :material-check-circle: Status do banco

```bash
bscan offline-db --status
```

### :material-sync: Sincronização incremental

```bash
bscan offline-db --sync
```

### :material-sync-alert: Sincronização completa

```bash
bscan offline-db --sync --force
```

### :material-package-variant: Sincronizar componentes de um projeto

```bash
bscan offline-db --project ./meu-projeto --sync
```

### :material-broom: Limpar banco

```bash
bscan offline-db --clear
```

> `--clear` deve ser usado sozinho (sem combinar com outras opções).

## Uso em modo offline

```bash
bscan scan --offline
```

Nesse modo, o BasiliskScan consulta apenas o banco local. Após um scan online, a ferramenta pode perguntar se você deseja sincronizar os componentes encontrados com o banco offline.

## Variáveis de seed

- `BASILISKSCAN_SEED_FORCE`: força atualização do banco com o seed embutido.
- `BASILISKSCAN_SEED_REFRESH`: permite atualizar o seed quando houver base embutida mais recente.
