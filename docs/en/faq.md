# :material-help-circle: FAQ

## What if no vulnerabilities are found?

That means that for the detected versions, no known vulnerabilities were returned by the sources queried. Still, confirm that all dependencies were correctly identified and the scan was run without `--skip-vulns`.

## What’s the difference between vulnerable and outdated dependencies?

- **Vulnerable:** has known CVEs or security alerts.
- **Outdated:** a newer version exists, but not necessarily with a known vulnerability.

## What’s the difference between direct and transitive dependencies?

- **Direct:** declared in the project’s manifest.
- **Transitive:** brought indirectly by another dependency. BasiliskScan hides transitive dependencies by default (use `--include-transitive`).

## How do I update the offline database?

```bash
bscan offline-db --sync --force
```

## How do I fix Python dependency errors when installing?

Update pip and reinstall in a virtual environment:

```bash
python -m pip install --upgrade pip
pip install basiliskscan
```

## How do I use it on Linux and Windows?

The command is the same (`bscan`). If your terminal doesn’t recognize it, open a new session or use:

```bash
python -m basiliskscan --help
```
