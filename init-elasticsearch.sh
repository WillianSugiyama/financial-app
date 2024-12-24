#!/bin/bash

# Espera o Elasticsearch estar pronto
until curl -s http://localhost:9200 > /dev/null; do
    echo 'Aguardando Elasticsearch...'
    sleep 1
done

# Cria template para os índices
curl -X PUT "localhost:9200/_template/finance-app-logs" -H 'Content-Type: application/json' -d'
{
  "index_patterns": ["finance-app-logs-*"],
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0,
    "refresh_interval": "5s"
  },
  "mappings": {
    "properties": {
      "@timestamp": { "type": "date" },
      "service_name": { "type": "keyword" },
      "level": { "type": "keyword" },
      "message": { "type": "text" },
      "metadata": {
        "type": "object",
        "dynamic": true
      },
      "trace_id": { "type": "keyword" },
      "host": { "type": "keyword" }
    }
  }
}'

# Cria política de lifecycle para gerenciar índices antigos
curl -X PUT "localhost:9200/_ilm/policy/logs-lifecycle-policy" -H 'Content-Type: application/json' -d'
{
  "policy": {
    "phases": {
      "hot": {
        "min_age": "0ms",
        "actions": {
          "rollover": {
            "max_size": "50GB",
            "max_age": "1d"
          }
        }
      },
      "delete": {
        "min_age": "30d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}'