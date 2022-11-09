# Dokumentasjon

En applikasjon for lunsj-system

### API-routes/endpoints - Versjon 1

#### BASE_URL = http://localhost:3000/

#### Henter alle uker

```
/api/weeks - tilgjengelig verd/http-methode: [GET]
    - pages/weeks/index.tsx
    - endepunkt skal bli kalt/brukt på urlen/siden: BASE_URL/weeks
```

#### Henter en spesifikk uke

```
/api/weeks/:id - tilgjengelig verd/http-methode: [GET, PUT]
    - page/weeks/[id]/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/weeks/:id
```

#### Henter alle ansatte

```
/api/employees - tilgjengelig verd/http-methode: [GET]
    - pages/employee/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees
```

#### Henter en ansatt, oppdatere en anstatt og slette en ansatt.

```
/api/employees/:id - tilgjengelig verd/http-methode: [GET,DELETE PUT]
    - pages/employee/[id]/index.tsx
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees/:id
```

#### lage en ny ansatt

```
/api/employees/create - tilgjengelig verd/http-methode: [POST]
    - pages/employees/new
    - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees/new
```
