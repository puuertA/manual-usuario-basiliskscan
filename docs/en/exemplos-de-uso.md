# :material-flask: Usage examples

## Scan a Node.js project

```bash
bscan scan -p ./my-node-project
```

## Scan a Java project

```bash
bscan scan -p ./my-java-project
```

## Generate an HTML report with a custom name

```bash
bscan scan -p ./my-project -o security-report.html
```

## Run a scan in offline mode

```bash
bscan scan --offline
```

## Configure the NVD API key

```bash
bscan nvd-key --prompt
```

or via `.env`:

```bash
NVD_API_KEY=YOUR_NVD_TOKEN
```

## Configure Sonatype Guide credentials

```bash
bscan sonatype-guide-key --prompt
```
