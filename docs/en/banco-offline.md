# :material-database: Offline database

BasiliskScan provides a local vulnerability database for use in environments without internet access.

## :material-folder: Default path

- **Default:** `~/.basiliskscan/offline/offline_vulnerabilities.db`
- **Override:** `BASILISKSCAN_OFFLINE_DB_DIR`

The embedded database is distributed with the package at `src/basiliskscan/data/offline/offline_vulnerabilities.db` and is copied automatically on first use.

## :material-tools: Management commands

### :material-check-circle: Database status

```bash
bscan offline-db --status
```

### :material-sync: Incremental sync

```bash
bscan offline-db --sync
```

### :material-sync-alert: Full sync

```bash
bscan offline-db --sync --force
```

### :material-package-variant: Sync components from a project

```bash
bscan offline-db --project ./my-project --sync
```

### :material-broom: Clear database

```bash
bscan offline-db --clear
```

> `--clear` must be used alone (without other options).

## Offline mode usage

```bash
bscan scan --offline
```

In this mode, BasiliskScan queries only the local database. After an online scan, the tool may ask if you want to sync the discovered components into the offline database.

## Seed variables

- `BASILISKSCAN_SEED_FORCE`: forces database refresh from the embedded seed.
- `BASILISKSCAN_SEED_REFRESH`: allows seed refresh when a newer embedded database is detected.
