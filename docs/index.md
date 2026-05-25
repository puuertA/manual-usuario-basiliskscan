# :material-compass: BasiliskScan

O BasiliskScan é uma ferramenta de linha de comando para identificar dependências vulneráveis e desatualizadas em projetos web. Ele analisa manifests e lockfiles, consulta fontes públicas de vulnerabilidades e gera um relatório HTML interativo para auditoria rápida.

## :material-account-group: Para quem é indicado

- Times de desenvolvimento que precisam validar segurança de dependências antes de releases.
- Analistas de segurança que querem uma visão consolidada das vulnerabilidades.
- Projetos que precisam de um relatório HTML simples para evidências.

## :material-check-circle: O que ele resolve

- Descobre automaticamente dependências em projetos Node.js/Ionic, Java e PHP (Composer).
- Agrega vulnerabilidades de múltiplas fontes (OSV, NVD e Sonatype Guide).
- Gera relatórios com severidade, recomendações e status de atualização.
- Oferece modo offline com banco local sincronizável.

## :material-star: Principais recursos

- Varredura recursiva com ignore de diretórios comuns.
- Detecção de dependências diretas e transitivas.
- Análise de versões mais recentes (npm/Ionic).
- Relatórios HTML com abas e gráficos.
- Banco offline local com sincronização sob demanda.

## :material-puzzle: Ecossistemas e arquivos suportados

- **Node.js/Ionic:** `package.json`, `package-lock.json`, `npm-shrinkwrap.json`
- **Java:** `pom.xml`, `build.xml`, `build.gradle`, `build.gradle.kts`, `gradle.lockfile`
- **PHP (Composer):** `composer.json`, `composer.lock`

## :material-shield-bug: Fontes de vulnerabilidades

- **OSV** (sem credenciais)
- **NVD** (recomendada `NVD_API_KEY` para melhorar limites)
- **Sonatype Guide / OSS Index** (credenciais opcionais)

## :material-link-variant: Links rápidos

- [Instalação](instalacao.md)
- [Primeiros passos](primeiros-passos.md)
- [Comandos](comandos.md)
- [Configuração](configuracao.md)
- [Relatórios](relatorios.md)
