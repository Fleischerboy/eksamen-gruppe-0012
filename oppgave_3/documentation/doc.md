# Dokumentasjon

### Applikasjon for lunsj-system

#### BASE_URL = http://localhost:3000/

<p> En liste med status-koder og kort hva de betyr. Som kan bli returnert/oppstå under en handler-prosess av en klient i vårt API. Lenger ned i dokummente kommer vi til spesifisere status koder som kan oppstå til tilhørende api-endepunkt og vil da refereres til disse her.
<p>

<ul>
<li>200: Ok alt gikk bra</li>
<li>405: Http-methode ikke lov/støtter ikke denne http-metoden</li>
<li>404: Fant ikke ressurs</li>
<li>500: Intern error på server/noe feil som oppsto på server-siden </li>

</ul>

### API

#### Henter alle uker: /api/weeks

- Tilgjengelig verb/http-methode: [GET]
- status koder: 200, 405 og 500 (se format til responsene under nedtrekks-funksjonen)
- tsx-fil finnes inni prosjekt koden: pages/weeks/index.tsx
- Endepunkt bli brukt på urlen/siden: BASE_URL/weeks
  - På denne siden vil klientne kunne se hele lunch informasjonen for et helt år. Man kan trykke "Se dager" per uke se alle dager, hvem ansatt som har ansvar for en git dag og hva maten er den dagen. Kan tykke på en ansatt i listen for å se videre informasjon. Øverst på siden vil man se små grå bokser med uke tall og kan da trykke på en for å få videre informasjon.

<details>
  <summary>Response format for api/weeks</summary>

##### Status kode 200:

```Json
{
  "status": true,
  "data": {
    "weeks": [
      {
        "week": 1,
        "days": [
          {
            "name": "Mandag",
            "lunch": "Taco",
            "employee": {
              "id": 1,
              "name": "Trude",
              "rules": "days:123"
            }
          },
          {
            "name": "Tirsdag",
            "lunch": "Fisk",
            "employee": {
              "id": 6,
              "name": "Sebastian",
              "rules": "*"
            }
          },
          {
            "name": "Onsdag",
            "lunch": "Pasta",
            "employee": {
              "id": 2,
              "name": "Lars",
              "rules": "*"
            }
          },
          {
            "name": "Torsdag",
            "lunch": "Pizza",
            "employee": {
              "id": 8,
              "name": "Simen",
              "rules": "days:24"
            }
          },
          {
            "name": "Fredag",
            "lunch": "Taco",
            "employee": {
              "id": 4,
              "name": "Kaare",
              "rules": "days:*|week:odd"
            }
          }
        ]
      },
      {
        "week": 2,
        "days": [
          {
            "name": "Mandag",
            "lunch": "Fisk",
            "employee": {
              "id": 5,
              "name": "Olav",
              "rules": "*"
            }
          }
        ]
      }
      osv.. med mer data
    ]
  }
}

```

##### status kode: 405

```Json
{
    "status": false,
    "error": "Method not allowed"
}
```

##### status kode: 500

```Json
{
    "status": false,
    "error": "Failed finding weeks"
}
```

</details>

#### Henter en spesifikk uke

```

/api/weeks/:id - tilgjengelig verb/http-methode: [GET, PUT] - page/weeks/[id]/index.tsx - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/weeks/:id

```

#### Henter alle ansatte

```

/api/employees - tilgjengelig verb/http-methode: [GET, POST] - pages/employee/index.tsx - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees

```

#### Henter en ansatt, oppdatere en anstatt og slette en ansatt.

```

/api/employees/:id - tilgjengelig verb/http-methode: [GET,DELETE PUT] - pages/employee/[id]/index.tsx - endepunkt skal bli kalt/brukt på url/siden: BASE_URL/employees/:id

```

```

```

```

```
