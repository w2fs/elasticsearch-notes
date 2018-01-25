# ElasticSearch Notes

## Installation

OS X with brew installed.

```bash
brew install elasticsearch
```

```bash
# start from command line
brew services start elasticsearch
# or via LaunchRocket
```

### Config

Before start the service, edit `/usr/local/etc/elasticsearch/elasticsearch.yml`

```yml
# add CORs for local development use
http.cors.enabled: true
http.cors.allow-origin: "*"
```

## Plugins

### kibana

https://github.com/elastic/kibana


### head

https://github.com/mobz/elasticsearch-head

## Start

Api Ref: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
