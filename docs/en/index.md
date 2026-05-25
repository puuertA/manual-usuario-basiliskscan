# :material-compass: BasiliskScan

BasiliskScan is a command-line tool for identifying vulnerable and outdated dependencies in web projects. It analyzes manifests and lockfiles, queries public vulnerability sources, and generates an interactive HTML report for quick auditing.

## :material-account-group: Who is it for

- Development teams that need to validate dependency security before releases.
- Security analysts who want a consolidated view of vulnerabilities.
- Projects that need a simple HTML report for evidence.

## :material-check-circle: What it solves

- Automatically discovers dependencies in Node.js/Ionic, Java, and PHP (Composer) projects.
- Aggregates vulnerabilities from multiple sources (OSV, NVD, and Sonatype Guide).
- Generates reports with severity, recommendations, and update status.
- Offers offline mode with a local, syncable database.

## :material-star: Key features

- Recursive scanning with common directory ignores.
- Detection of direct and transitive dependencies.
- Latest version analysis (npm/Ionic).
- HTML reports with tabs and charts.
- Local offline database with on-demand sync.

## :material-puzzle: Supported ecosystems and files

- **Node.js/Ionic:** `package.json`, `package-lock.json`, `npm-shrinkwrap.json`
- **Java:** `pom.xml`, `build.xml`, `build.gradle`, `build.gradle.kts`, `gradle.lockfile`
- **PHP (Composer):** `composer.json`, `composer.lock`

## :material-shield-bug: Vulnerability sources

- **OSV** (no credentials)
- **NVD** (`NVD_API_KEY` recommended for better rate limits)
- **Sonatype Guide / OSS Index** (optional credentials)

## :material-link-variant: Quick links

- [Installation](instalacao.md)
- [Getting started](primeiros-passos.md)
- [Commands](comandos.md)
- [Configuration](configuracao.md)
- [Reports](relatorios.md)
