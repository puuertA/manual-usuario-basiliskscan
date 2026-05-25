# :material-rocket-launch: Getting started

## :material-folder: 1) Go to the project directory

```bash
cd /path/to/your/project
```

## :material-play-circle: 2) Run the first scan

```bash
bscan scan
```

The HTML report is saved in `reports/` with the default name format `basiliskscan-report-YYYYMMDD-HHMMSS.html`.

## :material-file-document: 3) Open the report

```bash
# Windows
start reports\basiliskscan-report-YYYYMMDD-HHMMSS.html

# Linux
xdg-open reports/basiliskscan-report-YYYYMMDD-HHMMSS.html

# macOS
open reports/basiliskscan-report-YYYYMMDD-HHMMSS.html
```

## :material-lightbulb-on: Quick tips

- To speed up execution, skip vulnerability queries:

```bash
bscan scan --skip-vulns
```

- To include transitive dependencies in the report:

```bash
bscan scan --include-transitive
```

- To use only the local offline database:

```bash
bscan scan --offline
```
