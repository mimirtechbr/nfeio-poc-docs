---
sidebar_position: 1
id: intro
slug: /api-rest
title: Introdução à REST API NFe.io
sidebar_label: Introdução
---

# Introdução à REST API NFe.io

:::warning
revisao pendente
:::

Bem-vindo à documentação da API REST da NFe.io. Aqui você encontra como autenticar, consumir endpoints, lidar com erros, aplicar boas práticas de segurança e acelerar sua integração para emissão, consulta e gestão de documentos fiscais e dados cadastrais.

## Visão Geral

A API oferece serviços para:
- Emissão e gestão de NF-e, NFC-e e NFS-e
- Cálculo de tributos
- Consulta de CNPJ, CPF, CT-e, endereços e distribuição de NF-e
- Webhooks para eventos assíncronos
- Gestão de certificados digitais (via plataforma)

Baseada em HTTP + JSON, seguindo princípios REST, versionada por caminho (ex: `/v1/`, `/v2/`).

## URLs Base

Produção
```
https://api.nfe.io
```

Sandbox (se habilitado)
```
https://sandbox.api.nfe.io
```

## Autenticação

Envie sua chave no cabeçalho:
```
X-Api-Key: SUA_CHAVE
```
- Não exponha em frontend
- Rotacione se suspeitar de vazamento
- Use variáveis de ambiente

Mais detalhes: consulte [Chaves de Autenticação](/documentacao/nossa-plataforma/chaves-de-autenticacao).

## Versionamento

- Versão no path: `/v1/`, `/v2/`
- Quebras de compatibilidade geram nova versão
- Deprecações terão aviso prévio

Exemplos:
```
GET /v1/cnpj/{numero}
GET /v2/nota-fiscal/{id}
```

## Formatos e Convenções

- `Content-Type: application/json`
- Datas: ISO 8601 UTC (`2024-03-18T14:25:13Z`)
- Valores monetários: número decimal com ponto (`1234.56`)
- Identificadores: UUID ou numéricos conforme recurso
- Campos opcionais podem ser omitidos (evite enviar `null` sem necessidade)

## Idempotência

Para POST que criam documentos:
```
Idempotency-Key: <uuid>
```
Garante que reenvios (timeout/retry) não dupliquem a criação.

## Rate Limiting

Se excedido:
```
429 Too Many Requests
Retry-After: <segundos>
```
Implemente backoff exponencial + jitter.

## Códigos HTTP Principais

- 200 Sucesso
- 201 Criado
- 202 Aceito (processamento assíncrono)
- 400 Erro de validação/sintaxe
- 401 Falha na autenticação
- 403 Sem permissão
- 404 Não encontrado
- 409 Conflito (estado / duplicado)
- 422 Erro semântico
- 429 Limitado
- 500 Erro interno
- 503 Indisponível temporário

## Estrutura de Erro (exemplo)

```json
{
  "error": {
    "code": "validation_error",
    "message": "CNPJ inválido",
    "details": [
      { "field": "cnpj", "message": "Formato incorreto" }
    ],
    "requestId": "baf3e0e9e55d4f0c"
  }
}
```

Guarde `requestId` em logs para suporte.

## Segurança

1. Armazene chaves em variáveis de ambiente
2. Use somente HTTPS
3. Valide assinatura/origem de webhooks (`../documentacao/conceitos/webhook`)
4. Aplique princípio de menor privilégio internamente
5. Não logue dados sensíveis (ex: CPF completo) em texto puro

## Observabilidade Recomendada

Registre por requisição:
- Timestamp
- Método + caminho
- Status
- Latência (ms)
- `requestId`
- Referência interna da conta/chave (não a própria chave completa)

## Exemplo Rápido (curl)

```bash
curl -X POST https://api.nfe.io/v2/nota-fiscal \
  -H "X-Api-Key: $NFEIO_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: $(uuidgen)" \
  -d '{
    "cliente": { "cpf": "12345678901", "nome": "Consumidor" },
    "itens": [
      { "descricao": "Produto A", "quantidade": 1, "valorUnitario": 100.00 }
    ]
  }'
```

## Exemplo Node.js (fetch nativo Node 18+)

```javascript
const API_KEY = process.env.NFEIO_API_KEY;

async function emitirNota() {
  const resp = await fetch("https://api.nfe.io/v2/nota-fiscal", {
    method: "POST",
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID()
    },
    body: JSON.stringify({
      cliente: { cpf: "12345678901", nome: "Consumidor" },
      itens: [{ descricao: "Produto A", quantidade: 1, valorUnitario: 100.0 }]
    })
  });

  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(`Falha ${resp.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

emitirNota()
  .then(n => console.log("Nota criada:", n.id))
  .catch(e => console.error(e));
```

## Webhooks

- Entregas pelo menos uma vez (trate duplicados)
- Responda 2xx rapidamente
- Re-tentativas podem ocorrer
- Valide autenticidade antes de processar

Veja `../documentacao/conceitos/webhook`.

## Certificados Digitais

Necessários para NF-e / NFC-e / NFS-e. Faça upload e monitore validade em:
`../documentacao/nossa-plataforma/upload-do-certificado-digital`.

## Fluxos Assíncronos

Algumas emissões retornam 202 e seguem processamento interno. Consulte status posteriormente ou aguarde webhook de autorização/cancelamento.

## Boas Práticas de Resiliência

- Timeouts de cliente (ex: 30s leitura, 5s conexão)
- Retry apenas em erros transitórios (429, 503, timeouts)
- Circuit breaker para evitar cascata de falhas
- Idempotência em criação de documentos

## Próximos Passos

1. Chaves: `../documentacao/nossa-plataforma/chaves-de-autenticacao`
2. Cálculo: `./calculo-de-impostos-v1/`
3. Consulta CNPJ: `./consulta-de-cnpj-v1/`
4. Consulta CPF: `./consulta-de-cpf-v1/`
5. NF-e Produto: `./nota-fiscal-de-produto-v2/`
6. NFC-e Consumidor: `./nota-fiscal-de-consumidor-v2/`
7. NFS-e Serviço: `./nota-fiscal-de-servico-v1/`
8. Distribuição NF-e: `./consulta-nf-e-distribuicao-v1/`
9. Webhooks: `../documentacao/conceitos/webhook`

## Suporte

Abra ticket via plataforma e informe: timestamp aproximado, `requestId`, endpoint e status.

---

Avance para os endpoints específicos para schemas detalhados e exemplos adicionais.