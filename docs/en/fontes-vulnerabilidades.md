# :material-shield-bug: Vulnerability sources

BasiliskScan aggregates vulnerabilities from multiple sources and merges results to reduce duplicates. The default active sources are:

## :material-web: OSV

- **Description:** public database maintained by the community.
- **Credentials:** not required.
- **Use in BasiliskScan:** enabled by default.

## :material-file-document: NVD (National Vulnerability Database)

- **Description:** official CVE database maintained by NIST.
- **Credentials:** `NVD_API_KEY` is recommended for better rate limits.
- **Setup:**

```bash
bscan nvd-key --prompt
```

or via `.env`:

```bash
NVD_API_KEY=YOUR_NVD_TOKEN
```

## :material-tools: Sonatype Guide / OSS Index

- **Description:** commercial/free source for component vulnerability data.
- **Credentials:** requires username and token.
- **Setup:**

```bash
bscan sonatype-guide-key --prompt
```

## :material-puzzle: How aggregation works

- Sources are queried in parallel when possible.
- Results are normalized and merged by identifiers (e.g., CVE).
- The report shows the sources associated with each vulnerability.
