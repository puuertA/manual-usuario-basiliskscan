# :material-puzzle: Installation

## :material-check-circle: Requirements

- **Python** >= 3.10
- Internet access for online queries (optional in offline mode)

## :material-test-tube: Recommended install (with virtual environment)

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install basiliskscan
```

### Linux/macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install basiliskscan
```

After installation, the `bscan` command is available. If your terminal doesn’t recognize it, open a new session or run via module:

```bash
python -m basiliskscan --help
```

## :material-tools: Development install (local repo)

From the project directory:

```bash
python -m pip install -e .
```

### Windows install script

The repository includes `scripts/install_basiliskscan.ps1`, which installs the project and updates the user PATH:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\install_basiliskscan.ps1 -Editable
```

## Verify installation

```bash
bscan --version
bscan --help
```
