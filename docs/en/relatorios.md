# :material-chart-box: HTML reports

At the end of a scan, BasiliskScan generates an interactive HTML report in the `reports/` folder.

## :material-folder: Where the report is saved

- Default directory: `reports/`
- Default name: `basiliskscan-report-YYYYMMDD-HHMMSS.html`
- Example:

```bash
bscan scan -o report.html
# Result in reports/report.html
```

## :material-play-circle: How to open the report

```bash
# Windows
start reports\report.html

# Linux
xdg-open reports/report.html

# macOS
open reports/report.html
```

## :material-puzzle: Report structure

The HTML includes:

- **Header:** analyzed project, date, duration, and tool version.
- **Overview:** metric cards and charts with component status.
- **Components:** dependency list with versions, ecosystems, and status.
- **Vulnerabilities:** CVEs, severity, description, and associated sources.
- **Recommendations:** update tips by ecosystem.

The tabs visible at the top of the report are:

- **Overview**
- **Components**
- **Vulnerabilities**
- **Recommendations**

## Important notes

- The report uses external resources (e.g., Chart.js and icons) loaded via CDN.
- Automatic description translation can be disabled with `BASILISKSCAN_DISABLE_TRANSLATION=true`.
