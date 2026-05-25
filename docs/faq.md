# :material-help-circle: FAQ

## O que fazer quando nenhuma vulnerabilidade é encontrada?

Isso significa que, para as versões detectadas, nenhuma vulnerabilidade conhecida foi retornada pelas fontes consultadas. Ainda assim, valide se todas as dependências foram corretamente identificadas e se o scan foi executado sem `--skip-vulns`.

## Qual a diferença entre dependência vulnerável e desatualizada?

- **Vulnerável:** possui CVEs ou alertas de segurança conhecidos.
- **Desatualizada:** há uma versão mais recente disponível, mas sem necessariamente haver vulnerabilidade conhecida.

## Qual a diferença entre dependência direta e transitiva?

- **Direta:** declarada no manifest do projeto.
- **Transitiva:** trazida indiretamente por outra dependência. O BasiliskScan oculta transitivas por padrão (use `--include-transitive`).

## Como atualizar o banco offline?

```bash
bscan offline-db --sync --force
```

## Como resolver erro de dependências Python ao instalar?

Atualize o pip e reinstale em ambiente virtual:

```bash
python -m pip install --upgrade pip
pip install basiliskscan
```

## Como usar em Linux e Windows?

O comando é o mesmo (`bscan`). Se o terminal não reconhecer, abra uma nova sessão ou use:

```bash
python -m basiliskscan --help
```
