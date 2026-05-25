# :material-console: Commands

The main BasiliskScan CLI is `bscan`. Below are all real commands available in the project.

## `bscan`

**Command:** `bscan`

**Description:** Shows general help and shortcuts. Also accepts `--version`.

**Parameters/options:**

- `-h`, `--help`: shows help.
- `--version`: shows installed version.

**Example:**

```bash
bscan --help
```

## `bscan scan`

**Command:** `bscan scan`

**Description:** Scans the target project, identifies supported dependencies, queries vulnerabilities, and generates an HTML report.

**Parameters/options:**

- `-p`, `--project <directory>`: project root directory (default: `.`).
- `-u`, `--url <path>`: alternative project path (overrides `--project`).
- `-o`, `--output <file.html>`: HTML report name (saved inside `reports/`).
- `--skip-vulns`: do not query vulnerability sources.
- `--include-transitive`: include transitive dependencies in the report.
- `--offline`: use only the local offline vulnerability database.

**Example:**

```bash
bscan scan -p ./my-project -o report.html
```

## `bscan nvd-key`

**Command:** `bscan nvd-key`

**Description:** Configure, show, or remove the NVD API key.

**Parameters/options:**

- `--set <api-key>`: set the API key.
- `--prompt`: request the key interactively.
- `--show`: show the configured key status.
- `--clear`: remove the persisted key.
- `--save-to-keyring`: also save to the system keyring (when available).

**Example:**

```bash
bscan nvd-key --prompt
```

## `bscan nvd-register-guide`

**Command:** `bscan nvd-register-guide`

**Description:** Shows a quick guide to request an NVD API key.

**Parameters/options:**

- `--open`: opens the official page in the browser.

**Example:**

```bash
bscan nvd-register-guide --open
```

## `bscan sonatype-guide-key`

**Command:** `bscan sonatype-guide-key`

**Description:** Configure, show, or remove Sonatype Guide (OSS Index) credentials.

**Parameters/options:**

- `--username <username>`: set the username.
- `--token <token>`: set the token (use with `--username`).
- `--prompt`: request username and token interactively.
- `--show`: show configured credentials status.
- `--clear`: remove persisted credentials.
- `--save-to-keyring`: also save to the system keyring (when available).

**Example:**

```bash
bscan sonatype-guide-key --prompt
```

## `bscan sonatype-guide-register-guide`

**Command:** `bscan sonatype-guide-register-guide`

**Description:** Shows a quick guide to create an account and token on Sonatype Guide.

**Parameters/options:**

- `--open`: opens the API page in the browser.

**Example:**

```bash
bscan sonatype-guide-register-guide --open
```

## `bscan offline-db`

**Command:** `bscan offline-db`

**Description:** Manage the offline vulnerability database (status, sync, and cleanup).

**Parameters/options:**

- `--status`: shows local database statistics.
- `--sync`: sync pending components.
- `--force`: force full sync (equivalent to total `--sync`).
- `--clear`: fully clears the local database (use alone).
- `--project <directory>`: discovers project components and syncs to the database.

**Example:**

```bash
bscan offline-db --status
```
