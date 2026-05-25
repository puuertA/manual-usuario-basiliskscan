# :material-puzzle: Instalação

## :material-check-circle: Requisitos

- **Python** >= 3.10
- Acesso à internet para consultas online (opcional no modo offline)

## :material-test-tube: Instalação recomendada (com ambiente virtual)

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

Após a instalação, o comando `bscan` fica disponível. Se o seu terminal não reconhecer, abra uma nova sessão ou execute via módulo:

```bash
python -m basiliskscan --help
```

## :material-tools: Instalação em modo desenvolvimento (repo local)

No diretório do projeto:

```bash
python -m pip install -e .
```

### Script de instalação no Windows

O repositório inclui o script `scripts/install_basiliskscan.ps1`, que instala o projeto e ajusta o PATH do usuário:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\install_basiliskscan.ps1 -Editable
```

## Verificando a instalação

```bash
bscan --version
bscan --help
```
