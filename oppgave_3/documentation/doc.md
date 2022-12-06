# Dokumentasjon

### Applikasjon for lunsj-system

<p> En liste med status-koder og kort hva de betyr. Som kan bli returnert/oppstå under en handler-prosess av en klient i vårt API. I dokummente kommer vi til spesifisere status koder som kan oppstå til tilhørende api-endepunkt og vil da refereres til disse her.
<p>

<ul>
<li>200: Ok alt gikk bra</li>
<li>201: velykket og at en ressurs er opprettet</li>
<li>400: Dårlig request (Mangler noe i requesten til å fullføre)</li>
<li>404: Fant ikke ressurs</li>
<li>405: Http-methode ikke lov/støtter ikke denne http-metoden</li>
<li>415: Støtter ikke media typen (mangler feks content-type)</li>
<li>500: Intern error på server/noe feil som oppsto på server-siden </li>
</ul>

## API-endepunkter

### BASE_URL = http://localhost:3000

[comment]: <> (api-weeks)

<details>
 <summary>Weeks</summary>

[comment]: <> (api-day)

 <details>
 <summary>day</summary>
   
### Lage en ansatt overskrivelse på en gitt dag: /api/weeks/:id/:dag 
* Tilgjengelig verb/http-methode: [POST]
* Status koder: 200, 201, 400, 404, 405, 500 (Se format til responsene under nedtrekks-funksjonen)
* Endepunkt kan bli brukt på siden: BASE_URL/weeks/:id
* Ved å trykke rediger-knapp kan man endre ansatt som skal være ansvarlig for lunsj dagen.
<details>
  <summary>Response format for /api/weeks/:id/:dag</summary>


##### Status kode 200:
```JSON
{ 
  "status": true, 
  "data": "Workday back to original employee"
}
```
##### Status kode 201:

```JSON
{
  "status": true,
  "data": {
      "override": {
          "id": "clb8owo980009ujsk69vjul7l",
          "createdAt": "2022-12-04T01:33:36.332Z",
          "weekId": 1,
          "dayId": "bd2857fb-e313-4763-adc9-b0b3e99348a7",
          "employeeId": 8
      }
  }
}
```

##### Status kode 400:

```JSON
{
  "status": false,
  "error": "missing week id, day, dayId, overridedEmployeeId or employeeId"
}
```

##### Status kode 404:

```JSON
{
  "status": false,
  "error": "lørdag is not a workday"
}
```

##### Status kode 405:

```JSON
{
  "status": false,
  "error": "Method not allowed"
}
```

##### Status kode 500:

```JSON
{
"status": false,
"error": "Failed creating override"
}
```

  </details>

</details>

### Henter alle uker: /api/weeks

- Tilgjengelig verb/http-methode: [GET]
- Status koder: 200, 405 og 500 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt blir brukt på siden/url "BASE_URL"
- tsx-fil finnes inni prosjekt koden: pages/weeks/index.tsx
- På denne siden vil klientne kunne se hele lunsj informasjonen for et helt år. Man kan trykke "Se dager" per uke se alle dager, hvem ansatt som har ansvar for en git dag og hva maten er den dagen. Kan tykke på en ansatt i listen for å se videre informasjon. Øverst på siden vil man se 52 små grå bokser med uke tall og kan da trykke på en for å få videre informasjon. Finnes også en knapp for å laste ned/eksportere lunsjlisten til et excel format.

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
                "id": "913b4f6f-0bdd-47c9-8bfa-802e353c1762",
                "name": "Mandag",
                "lunch": "Taco",
                "employee": {
                    "id": 1,
                    "name": "Trude",
                    "rules": "days:123"
                },
                "overrides": [
                    {
                        "employee": {
                            "id": 8,
                            "name": "Simen"
                        }
                    }
                ]
            },
            {
                "id": "08caf43e-7b10-4814-b49d-f53bc3626443",
                "name": "Tirsdag",
                "lunch": "Pizza",
                "employee": {
                    "id": 6,
                    "name": "Sebastian",
                    "rules": "*"
                },
                "overrides": []
            },
            {
                "id": "a8c4fb42-f5c5-4b0c-b325-957529db1d54",
                "name": "Onsdag",
                "lunch": "Taco",
                "employee": {
                    "id": 2,
                    "name": "Lars",
                    "rules": "*"
                },
                "overrides": []
            },
            {
                "id": "2cee3158-4f3c-4bc4-9d5c-ab652f8ecb03",
                "name": "Torsdag",
                "lunch": "Fisk",
                "employee": {
                    "id": 8,
                    "name": "Simen",
                    "rules": "days:24"
                },
                "overrides": []
            },
            {
                "id": "e0eff875-dc39-4f6f-90dd-6dadd4a7ac9b",
                "name": "Fredag",
                "lunch": "Pasta",
                "employee": {
                    "id": 4,
                    "name": "Kaare",
                    "rules": "days:*|week:odd"
                },
                "overrides": []
            }
        ]
    },
    {
        "week": 2,
        "days": [
            {
                "id": "ec853939-0cd3-4561-b1dc-954c32f55ac6",
                "name": "Mandag",
                "lunch": "Pasta",
                "employee": {
                    "id": 5,
                    "name": "Olav",
                    "rules": "*"
                },
                "overrides": []
            },
         ]
    },
      osv... med flere uke objekter til 52 uker.
  ]
  }
}

```

##### Status kode: 405

```Json
{
    "status": false,
    "error": "Method not allowed"
}
```

##### Status kode: 500

```Json
{
    "status": false,
    "error": "Failed finding weeks"
}
```

</details>

#### Henter en spesifikk uke: /api/weeks/:id

- Tilgjengelig verb/http-methode: [GET]
- Status koder: 200, 400, 404, 405 og 500 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt blir brukt på siden/url: "BASE_URL/weeks/:id"
- tsx-fil finnes inni prosjekt koden: pages/weeks/[id]/index.tsx
- På denne siden kan klientene se alle lunsj dager knyttet til valgt uke. Her har man muligheten til å trykke på rediger knapp for å endre hvem som er ansvarlig for lunsjen på en gitt dag.

<details>
  <summary>Response format for /api/weeks/:id</summary>

##### Status kode: 200

```JSON
{
  "status": true,
  "data": {
    "week": {
      "week": 1,
      "days": [
        {
          "id": "913b4f6f-0bdd-47c9-8bfa-802e353c1762",
          "name": "Mandag",
          "lunch": "Taco",
          "employee": {
            "id": 1,
            "name": "Trude",
            "rules": "days:123"
          },
          "overrides": [
            {
              "employee": {
                "id": 8,
                "name": "Simen"
              }
            }
          ]
        },
        {
          "id": "08caf43e-7b10-4814-b49d-f53bc3626443",
          "name": "Tirsdag",
          "lunch": "Pizza",
          "employee": {
            "id": 6,
            "name": "Sebastian",
            "rules": "*"
          },
          "overrides": []
        },
        {
          "id": "a8c4fb42-f5c5-4b0c-b325-957529db1d54",
          "name": "Onsdag",
          "lunch": "Taco",
          "employee": {
            "id": 2,
            "name": "Lars",
            "rules": "*"
          },
          "overrides": []
        },
        {
          "id": "2cee3158-4f3c-4bc4-9d5c-ab652f8ecb03",
          "name": "Torsdag",
          "lunch": "Fisk",
          "employee": {
            "id": 8,
            "name": "Simen",
            "rules": "days:24"
          },
          "overrides": []
        },
        {
          "id": "e0eff875-dc39-4f6f-90dd-6dadd4a7ac9b",
          "name": "Fredag",
          "lunch": "Pasta",
          "employee": {
            "id": 4,
            "name": "Kaare",
            "rules": "days:*|week:odd"
          },
          "overrides": []
        }
      ]
    }
  }
}

```

##### Status kode: 400

```JSON
{
"status": false,
"error": "Failed finding week"
}
```

##### Status kode: 404

```JSON
{
    "status": false,
    "error": "week with 53 does not exist"
}
```

##### Status kode: 405

```JSON
{
    "status": false,
    "error": "Method not allowed"
}
```

##### Status kode: 500

```JSON
{
    "status": false,
    "error": "Failed finding week"
}
```

 </details>



#### Henter utvalgte uker: /api/weeks/selected/[start]/[end]

- Tilgjengelig verb/http-methode: [GET]
- Status koder: 200, 400, 405 og 500 (Se format til responsene under nedtrekks-funksjonen)
- Blir brukt på siden for å vise utvalgte uker
- API-endepunkt kan bli brukt via siden/url "BASE_URL"
- tsx-fil finnes inni prosjekt koden: pages/weeks/selectedweeks/[start]/[end]/index.tsx
- På denne siden kan en bruker få oversikt over utvalgte uker.

<details>
  <summary>Response format for /api/weeks/selected/[start]/[end]</summary>

##### Status kode: 200

```JSON
{
  "status": true,
  "data": {
  "weeks": [
    {
        "week": 1,
        "days": [
            {
                "id": "913b4f6f-0bdd-47c9-8bfa-802e353c1762",
                "name": "Mandag",
                "lunch": "Taco",
                "employee": {
                    "id": 1,
                    "name": "Trude",
                    "rules": "days:123"
                },
                "overrides": [
                    {
                        "employee": {
                            "id": 8,
                            "name": "Simen"
                        }
                    }
                ]
            },
            {
                "id": "08caf43e-7b10-4814-b49d-f53bc3626443",
                "name": "Tirsdag",
                "lunch": "Pizza",
                "employee": {
                    "id": 6,
                    "name": "Sebastian",
                    "rules": "*"
                },
                "overrides": []
            },
            {
                "id": "a8c4fb42-f5c5-4b0c-b325-957529db1d54",
                "name": "Onsdag",
                "lunch": "Taco",
                "employee": {
                    "id": 2,
                    "name": "Lars",
                    "rules": "*"
                },
                "overrides": []
            },
            {
                "id": "2cee3158-4f3c-4bc4-9d5c-ab652f8ecb03",
                "name": "Torsdag",
                "lunch": "Fisk",
                "employee": {
                    "id": 8,
                    "name": "Simen",
                    "rules": "days:24"
                },
                "overrides": []
            },
            {
                "id": "e0eff875-dc39-4f6f-90dd-6dadd4a7ac9b",
                "name": "Fredag",
                "lunch": "Pasta",
                "employee": {
                    "id": 4,
                    "name": "Kaare",
                    "rules": "days:*|week:odd"
                },
                "overrides": []
            }
        ]
    },
    {
        "week": 2,
        "days": [
            {
                "id": "ec853939-0cd3-4561-b1dc-954c32f55ac6",
                "name": "Mandag",
                "lunch": "Pasta",
                "employee": {
                    "id": 5,
                    "name": "Olav",
                    "rules": "*"
                },
                "overrides": []
            },
         ]
    },
      osv... med flere uke objekter til frem til valgte sluttuke.
  ]
  }
}

```

##### Status kode: 400

```JSON
{
"status": false,
"error": "missing week id's"
}
```

##### Status kode: 405

```JSON
{
    "status": false,
    "error": "Method not allowed"
}
```

##### Status kode: 500

```JSON
{
    "status": false,
    "error": "Failed finding weeks"
}
```

 </details>
<br>
</details>

[comment]: <> (api-employees)

<details>
  <summary>Employees</summary>

#### Hente alle ansatte og opprette nye ansatte: /api/employees

- Tilgjengelig verb/http-methode: [GET], [POST]
- Status koder: 200, 201, 400, 405, 500 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt blir brukt på siden/url BASE_URL/employees
- tsx-fil finnes inni prosjekt koden: pages/emlpoyees/index.tsx
- På denne siden kan man få en oversikt over alle ansatte og lage nye ansatter i applikasjonen. søkefelt for å søke etter en git ansatt.

<details>
  <summary>Response format for /api/employees</summary>

##### Status kode: 200
```JSON
{
  "status": true,
  "data": {
    "employees": [
      {
        "id": 1,
        "name": "Trude",
        "rules": "days:123",
        "days": [
          {
            "name": "Mandag",
            "week": {
              "week": 1
            }
          },
          {
            "name": "Mandag",
            "week": {
              "week": 3
            }
          },
          {
            "name": "Mandag",
            "week": {
              "week": 6
            }
          }
        ]
      }
    ] osv... med flere employee objekter.
  }
}

```

##### Status kode: 400

```JSON
{
    "status": false,
    "error": "missing name or rules"
}
```

##### Status kode: 405

```JSON
{
    "status": false,
    "error": "Method not allowed"
}
```

##### Status kode: 500

```JSON
[GET]
{
    "status": false,
    "error": "Failed finding employees"
}
[POST]
{
    "status": false,
    "error": "Failed creating employee"
}
```

 </details>

#### Hente og oppdatere en ansatt: /api/employees/:id

- Tilgjengelig verb/http-methode: [GET], [PUT]
- Status koder: 200, 400, 405, 500 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt blir brukt på urlen/siden "BASE_URl/employees/:id" 
- tsx-fil finnes inni prosjekt koden: pages/employees/:id/index.tsx
- På denne siden vil man få en oversikt over alle jobbdager og overskrivelser til en git ansatt. Hvis det er noen overskrivelser vil det stå hvem som stepper in under git uke og dag.
<details>
  <summary>Response format for /api/employees/:id</summary>

 ##### Status kode: 200 [GET]
```JSON
{
  "status": true,
  "data": {
    "employee": {
      "id": 1,
      "name": "Trude",
      "rules": "days:123",
      "days": [
        {
          "name": "Mandag",
          "week": {
            "week": 1
          },
          "overrides": [
            {
              "employee": {
                "id": 8,
                "name": "Simen"
              }
            }
          ]
        },
        {
          "name": "Mandag",
          "week": {
            "week": 3
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 6
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 10
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 12
          },
          "overrides": []
        },
        {
          "name": "Tirsdag",
          "week": {
            "week": 18
          },
          "overrides": []
        },
        {
          "name": "Tirsdag",
          "week": {
            "week": 20
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 22
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 24
          },
          "overrides": []
        },
        {
          "name": "Tirsdag",
          "week": {
            "week": 26
          },
          "overrides": []
        },
        {
          "name": "Tirsdag",
          "week": {
            "week": 34
          },
          "overrides": []
        },
        {
          "name": "Tirsdag",
          "week": {
            "week": 36
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 38
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 46
          },
          "overrides": []
        },
        {
          "name": "Mandag",
          "week": {
            "week": 48
          },
          "overrides": []
        },
        {
          "name": "Onsdag",
          "week": {
            "week": 50
          },
          "overrides": []
        }
      ],
      "overrides": [
        {
          "weekId": 3,
          "day": {
            "name": "Torsdag"
          }
        }
      ]
    }
  }
}
```

##### Status kode: 200 [PUT]

```JSON
{
    "status": true,
    "data": {
        "employee": {
            "id": 1,
            "name": "philip",
            "rules": "*"
        }
    }
}
```
##### Status kode: 400 [POST]
```JSON
{
    "status": false,
    "error": "missing employee id, name or rules"
}
```

##### Status kode: 405
```JSON
{
    "status": false,
    "error": "Method not allowed"
}
```

 ##### Status kode: 500 
```JSON
[GET]
{
    "status": false,
    "error": "Failed finding employee"
}
[PUT]
{
    "status": false,
    "error": "Failed updating employee"
}
```

 </details>
<br>
</details>


[comment]: <> (api-demo)

<details>
  <summary>Demo</summary>

#### Fylle databasen med eksempel data: /api/demo (seed script)

- Tilgjengelig verb/http-methode: [GET]
- Status koder: 200, 405 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt kan ikke bli brukt via en side og kan da skrives manuelt i nettleseren.
- endepunkt vil slette alt av data i databasen og fylle inn eksempeldataen git i oppgaven.
<details>
  <summary>Response format for /api/demo</summary>

##### Status kode: 200

```JSON
{
    "status": true,
    "msg": "seed script executed"
}
```

##### Status kode: 405

```JSON
{
    "status": false,
    "error": "Method not allowed"
}
```

 </details>
<br>
</details>

[comment]: <> (api-excel)

<details>
  <summary>Excel</summary>

#### Eksportere lunsj dataen til excel format: /api/excel/lunch

- Tilgjengelig verb/http-methode: [GET]
- Status koder: 200, 404, 415, 500 (Se format til responsene under nedtrekks-funksjonen)
- API-endepunkt kan bli brukt via urlen/siden "BASE_URL" ved å trykke "eksporter lunsj listen" knapp.
<details>
  <summary>Response format for /api/excel/lunch</summary>

#### Status kode: 200

```
laster ned lunch.xlsx filen til din maskin.

```

#### Status kode: 404

```JSON
{
  "status": false,
  "error": "File not found"
}
```

#### Status kode: 415

```JSON
{
    "status": false,
    "error": "Unsupported Media Type/format not supported or  missing content-type"
}
```

#### Status kode: 500

```JSON
{
    "status": false,
    "error": "Failed finding weeks"
}
Eller
{
    "status": false,
    "error": "Failed creating excel file"
}
```
