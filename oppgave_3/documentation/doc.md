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
<li>415: </li>
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
* Status koder: 201, 400, 404, 405, 500 (Se format til responsene under nedtrekks-funksjonen)
  
<details>
  <summary>Response format for /api/weeks/:id/:dag</summary>

  ##### Status kode 201:
  ````JSON
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
  ````

  ##### Status kode 400:
  ````JSON
{
    "status": false,
    "error": "missing week id, day, dayId, overridedEmployeeId or employeeId"
}
  ````

  ##### Status kode 404:
  ````JSON
{
    "status": false,
    "error": "lørdag is not a week day or day"
}
  ````

  ##### Status kode 405:
  ````JSON
{
    "status": false,
    "error": "Method not allowed"
}
  ````

  ##### Status kode 500:
  ````JSON
{ 
  "status": false,
  "error": "Failed creating override"
}
  ````

  </details>

</details>

### Henter alle uker: /api/weeks

* Tilgjengelig verb/http-methode: [GET]
* Status koder: 200, 405 og 500 (Se format til responsene under nedtrekks-funksjonen)
* API-endepunkter som blir brukt på urlen/siden "BASE_URL" er:
    - BASE_URL/api/weeks
* tsx-fil finnes inni prosjekt koden: pages/weeks/index.tsx
* På denne siden vil klientne kunne se hele lunch informasjonen for et helt år. Man kan trykke "Se dager" per uke se alle dager, hvem ansatt som har ansvar for en git dag og hva maten er den dagen. Kan tykke på en ansatt i listen for å se videre informasjon. Øverst på siden vil man se små grå bokser med uke tall og kan da trykke på en for å få videre informasjon. Finnes også en knapp for å laste ned/eksportere lunsjlisten til et excel format.


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

* Tilgjengelig verb/http-methode: [GET]
* Status koder: 200, 400, 404, 405 og 500 (Se format til responsene under nedtrekks-funksjonen)
* API-endepunkter som blir brukt på urlen/siden "BASE_URL/weeks/:id" er:
    - BASE_URL/api/weeks/:id
    - BASE_URL/api/weeks/:id/:day
* tsx-fil finnes inni prosjekt koden: pages/weeks/[id]/index.tsx
* På denne siden kan klientene se alle lunsj dager knyttet til valgt uke. Her har man muligheten til å trykke på rediger knapp for å endre hvem som er ansvarlig for lunsjen på en gitt dag.

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

</details>



[comment]: <> (api-employees)
<details>
  <summary>Employees</summary>

#### Henter alle ansatte: /api/employees

* Tilgjengelig verb/http-methode:
* Status koder: (Se format til responsene under nedtrekks-funksjonen)
* tsx-fil finnes inni prosjekt koden:
* Endepunkt bli brukt på urlen/siden: - På denne siden kan klientene:
<details>
  <summary>Response format for</summary>

```JSON

```

 </details>





#### Hente en ansatt: /api/employees/:id

* Tilgjengelig verb/http-methode:
* Status koder: (Se format til responsene under nedtrekks-funksjonen)
* tsx-fil finnes inni prosjekt koden:
* Endepunkt bli brukt på urlen/siden: - På denne siden kan klientene:
<details>
  <summary>Response format for</summary>

```JSON

```

 </details>

</details>



[comment]: <> (api-demo)
<details>
  <summary>Demo</summary>

#### Fylle databasen med eksempel data: /api/demo (seed script)

* Tilgjengelig verb/http-methode: [GET]
* Status koder: 200, 405 (Se format til responsene under nedtrekks-funksjonen)
* Endepunkt bli brukt på urlen/siden: ...(lage en knapp for dette et sted?)
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

</details>




[comment]: <> (api-excel)
<details>
  <summary>Excel</summary>

#### Eksportere lunsj dataen til excel format: /api/excel/lunch

* Tilgjengelig verb/http-methode: [GET]
* Status koder: 200, 404, 415, 500 (Se format til responsene under nedtrekks-funksjonen)
* Endepunkt bli brukt på urlen/siden "BASE_URL"
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
or
{ 
    "status": false,
    "error": "Failed creating excel file" 
}
```

 </details>

</details>
















<!-- 
[comment]: <> (format-kopi atm)
#### format

* Tilgjengelig verb/http-methode:
* Status koder: (Se format til responsene under nedtrekks-funksjonen)
* tsx-fil finnes inni prosjekt koden:
* Endepunkt bli brukt på urlen/siden: - På denne siden kan klientene:
  <details>

    <summary>Response format for</summary>

  

```JSON

  ```

   </details>
--!>