# :material-cog: Configuration

## :material-test-tube: `.env` file

BasiliskScan reads a `.env` file automatically (in the project directory or above it). You can define API keys and other variables there.

Example `.env`:

```bash
NVD_API_KEY=YOUR_NVD_TOKEN
OSS_INDEX_USERNAME=your_username
OSS_INDEX_TOKEN=your_token
```

## :material-lock: Credentials and read priority

Credential discovery follows this order:

1. Environment variables
2. System keyring (if available)
3. File `~/.config/basiliskscan/credentials.toml`

### Credentials file path

- **Linux/macOS:** `~/.config/basiliskscan/credentials.toml`
- **Windows:** `C:\Users\<user>\.config\basiliskscan\credentials.toml`

### Recommended commands

```bash
bscan nvd-key --prompt
bscan sonatype-guide-key --prompt
```

## :material-file-document: Supported environment variables

### NVD

- `NVD_API_KEY`

### Sonatype Guide / OSS Index

- `OSS_INDEX_USERNAME`
- `OSS_INDEX_TOKEN`
- `OSSINDEX_USERNAME` (compatibility)
- `OSSINDEX_TOKEN` (compatibility)
- `SONATYPE_GUIDE_USERNAME` (compatibility)
- `SONATYPE_GUIDE_TOKEN` (compatibility)

### Offline database

- `BASILISKSCAN_OFFLINE_DB_DIR`: sets the local offline database directory.
- `BASILISKSCAN_SEED_FORCE`: forces use of embedded seed (when `true`).
- `BASILISKSCAN_SEED_REFRESH`: allows seed refresh when a newer embedded database is detected.

### Reports

- `BASILISKSCAN_DISABLE_TRANSLATION`: disables automatic description translation in the HTML report.

## Query cache (advanced)

The ingestion module has a local vulnerability cache with settings in `~/.basiliskscan_ingest.json`. There is no CLI command for this, but you can adjust it manually:

- `cache.enabled` (bool)
- `cache.backend` (`sqlite`, `json`, `hybrid`)
- `cache.ttl_hours` (int)
- `cache.auto_cleanup` (bool)
- `cache.cleanup_interval_hours` (int)
