### 1
    - [x] Sätt upp datastrukturer för misstänkta, mordvapen och brottsplatser. Referera till Wikipedia.
### 2
    - [x] "Dra" tre kort ur respektive "kortlekstyp" och spara undan: dessa är den mördade, mordvapnet och brottsplatsen. Dessa ska aldrig visas för spelaren.
### 3
    - [x] Skapa spelplanen (rummen) i HTML och namnge respektive rum med ett unikt ID.
### 4
    - [x] Skapa en variabel för antal "drag" som spelaren gör.
### 5
    - [x] Skapa en knapp som heter "Gissa", som användaren klickar på för att presentera sin gissning. Vi återkommer till logiken för detta.
### 6
    - [x] Sammanfoga datastrukturerna, dvs. slå ihop resterande kort misstänkta, mordvapen och rum - til len array.
### 7
    - [x] Skapa 2 fiktiva spelare till, datorn - och tilldela dessa 3 slumpmässiga kort.
### 8
    - [x] Tilldela den riktiga spelaren (dig själv) 3 slumpmässiga kort.
### 9
    - [x] Slumpa ut vilket rum som spelaren hamnar i/startar ifrån, och placera ut spelaren där. Använd t.ex. ::before-pseudoelementet för att markera i vilket rum användaren befinner sig. Se exempel.
### 10
    - [x] Skapa en "slå tärningen"-knapp. Om användaren får ett tal mellan 4-6 får användaren välja vilket rum denne vill flytta sig till, t.ex. genom klick. Vid 1-3 får spelaren kasta om tärningen. Spara varje kast som +1 i antal drag som spelaren gör.
### 11
    - [x] I varje nytt rum som spelaren kommer till, får denne presentera en gissning. Om fictivePlayer1 har något eller flera av de gissade korten, så visas dessa upp och "turen tar slut". Endast när spelaren listat ut alla kort fictivePlayer1 har kan man börja gissa på 
    fictivePlayer2s kort. (tänkt att gå i klockans riktning).
### 12
    - [x] Spelet fortsätter så, tills den riktiga spelaren är redo att klicka på knappen "Anklaga". Då visas en ruta, där användaren får välja sin "anklagelsekombination".
### 13
    - [x] Om det är rätt, vinner spelaren!
### 14   
    - [x] Om det är fel, förlorar spelaren!
### 15
    - [x] Visa hur många drag spelaren har gjort.
### 16   
    - [x] skapa ett highscore som redan har en färdigbyggd lista (top 10)
    men med hjälp av localstorage kan man "slå" ut de fiktiva karaktärer som redan finns med genom att ha gissat rätt på lägre antal omgångar.