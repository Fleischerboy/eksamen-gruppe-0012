# Dokumentasjon

Applikasjon for lunsj-system

### API-routes/endpoints - Versjon 1

#### BASE_URL = http://localhost:3000/

#### Henter alle uker

```
/api/weeks - tilgjengelig verb/http-methode: [GET]
    - pages/weeks/index.tsx
    - endepunkt skal bli kalt/brukt på urlen/siden: BASE_URL/weeks
```

#### Henter en spesifikk uke

```
/api/weeks/:id - tilgjengelig verb/http-methode: [GET, PUT]
    - page/weeks/[id]/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/weeks/:id
```

#### Henter alle ansatte

```
/api/employees - tilgjengelig verb/http-methode: [GET, POST]
    - pages/employee/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees

```

#### Henter en ansatt, oppdatere en anstatt og slette en ansatt.

```
/api/employees/:id - tilgjengelig verb/http-methode: [GET,DELETE PUT]
    - pages/employee/[id]/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees/:id
```
