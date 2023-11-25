---
title: DevOps - käsitteestä kulttuurimuutokseen
date: 2022-11-05
tags: [devops]
social_image: '/media/logo.png'
author: 'Marko Ikäheimo, Yrittäjä, i6o Oy'
description: DevOps on sanana ja käsitteenä laajasti levinnyt ja käytetty eripuolilla organisaatioita. Käsite on hyvin usein väärinymmärretty tai käytetty eri asiayhteyksissä. Yritän osaltani selventää mistä DevOpsissa on perinpohjin kyse ja miksi organisaatioiden tulisi tämä kulttuuri muutos toteuttaa.
---
 
DevOps on käsitteenä hyvin nopeasti yleistynyt ja laajalle levinnyt eri puolille organisaatiota ja heidän käymää keskustelua. Valitettavan usein tämä käsite on kuitenkin väärinymmärretty tai käytetty ja irrotettu sen perimmäisestä tarkoitusperästä. Monesti kuulee puhuttavan DevOps prosesseista tai DevOps automaatiosta osana sovelluskehityksen elinkaarta tai sen hallintaa.
 
> _"Kun organisaatiomme käyttöönottaa DevOpsin, parannamme järjestelmien laatua ja toimintavarmuutta, sekä nopeutamme uusien ominaisuuksien läpivienti aikaa kehityksestä tuotantoon."_
 
Sinällään tällä ajatuspohjalla on oikea tarkoitusperä siitä mitä DevOpsilla haetaan, mutta tämän kaiken saavuttamiseksi on tehtävä muutakin, kuin viilattava hieman prosesseja, lisättävä automaatiota ja käyttöönotettava uutta teknologiaa.
 
## DEvOps -käsitteenä
Käytetään seuraavaksi hetki miettiäksemme hieman DevOpsia sanana ja pilkotaan se kahteen osaan. Sehän muodostuu sanoista **Dev** (Development=kehitys) ja **Ops** (Operations=operaatiot). Kehityksellä tässä tarkoitetaan ohjelmistokehitystä ja operaatioilla palvelutarjontaa ja IT-palveluita sovellusten ylläpidossa. Perinteisesti nämä toiminnot ovat eläneet vahvasti omissa siiloissaan keskustelematta suuremmin yhteisistä tavoitteista tai päämääristä. Pahimmillaan näiden toimintojen eriytyminen ja siiloutuminen on näkynyt yksiköiden ristiriitaisina tavoitteina, organisaation kasvaneena byrokratiana, ryhmien ja tiimien vastuurajojen tiukkoina rajauksina ja laajempana autonomian puutteena. Nämä osaltaan ovat johtaneet heikentyneeseen liiketoiminnan tehokkuuteen, tai jopa viime kädessä suoraan liiketoiminnan heikkoon tulokseen.
 
Kun DevOps "liikettä" alettiin vuosien 2007-2008 välillä viemään eteenpäin eri foorumeilla, haluttiin nämä edellä mainitut ongelmat ja siilot nimen omaan ratkaista ja poistaa. Tästä syntyi pohja nykyiselle DevOps käsitteelle ja sen sisällölle, jota lähdemme seuraavaksi hieman avaamaan lisää CALMS-viitekehyksen avulla.
 
## CALMS-viitekehys
 
CALMS-viitekehys syntyi organisaatioille työvälineeksi mitata DevOpsin prosessien, toimintatapojen ja hyvien käytänteiden sisäistämistä ja niiden tuomaa onnistumista. Tätä kautta on todella helppo sisäistää DevOpsin perimmäinen tarkoitus ja miten käytänteitä kannattaa lähteä kehittämään.
 
Itse lyhenne tulee sanoista Culture, Automation, Lean, Measurement ja Sharing.
 
### Culture (kulttuuri)
 
Kuten aikaisemmin jo kerroin ettei DevOps ole pelkästään prosessi tai uusi tapa tehdä sovelluskehitystä, se on hyvin pitkälti kulttuurimuutos. Kulttuurimuutos siitä, miten teemme yhteistyötä kaikkien toimijoiden kanssa, joita tarvitsemme ohjelmistokehityksessä.
 
Millään työvälineillä ei voida ratkaista itsessään niitä ongelmia, mitä aiheutuu eri tiimien ja ryhmien välisen kommunikaation, yhteistyön ja yhteisten tavoitteiden puutteista. Ohjelmistokehitys ja IT-operaatiot on saatava toimimaan yhteen saumattomasti. Suosittelen että nämä asiat korjataan aivan ensimmäisenä kuntoon.
 
Olette mahdollisesti jo käyttöönottaneet organisaatiossanne jonkin ketterän kehittämisen mallin ohjelmistokehityksessä, kuten Agile tai SCRUM. Tämä on oikea suunta. Ja kun tuohon toimintaan lisätään mukaan henkilöitä myös IT organisaatiosta, saadaan hyvää aikaan.
 
Sinällään suositeltavaa on perustaa tuoteorientoituneet tiimit sen sijaan, että tiimit jatkaisivat edelleen omissa funktioissaan. Tiimi kannattaa koota ohjelmistokehittäjistä, testaajista, tuotehallinnan henkilöistä, suunnittelijoista, IT-operaattoreista ja projektihenkilöistä. Eli kaikista, joita tarvitse onnistuneet ohjelmistoprojektin toteutuksessa ja tuotannon pyörittämisessä.
 
Sen sijaan että yrität ratkaista ongelmia palkkaamalla yksittäisiä _"DevOps osaajia"_, on paljon tärkeämpää että kasaat edellä kuvatun tiimin. Luot pohjan ja edellytykset sille, että he aidosti alkavat tehdä yhteistyötä. Asettamalla tiimille yhteiset tavoitteet ja yhteisen päämäärän sekä tekemisen kulttuurin, jossa kaikki tiimin jäsenet pääsevät vaikuttamaan ja antamaan oman työpanoksensa yhteisen hyvän eteen, tuo varmasti parhaan lopputuloksen.
 
Voit hyvin arvioida oman organisaationne kyvykkyyttä tällä saralla seuraamalla, miten tiimi toimii ongelmatilanteissa. Alkavatko he aidosti yhdessä ratkaista ongelmaa tulevaisuuteen katsoen ja parempaa tavoitellen, vai syntyykö vastakkainasettelua ja jopa syyttelyä ongelman juurisyystä?
 
### Automation (automaatio)
 
Automaatiolla pyritään poistamaan toistuvaa turhaa ja resursseja sitovaa ihmistyötä. Mitä enemmän saadaan asioita hoidettua automaation avulla, sitä varmempia voimme olla siitä että inhimilliset virheet vähenevät ja asiat tapahtuvat nopeammin.
 
Tyypillisesti automaatisaation rakentaminen kannattaa aloittaa ohjelmiston käännös, testaus ja julkaisu prosesseista. Myös alustan pystytykseen liittyvästä automaatiosta on etua, mikäli itse ajoympäristö on kompleksi ja asennuksia tullaan tekemään paljon. Ohjelmistojen kehittäminen suoraan konttiteknologiaa hyödyntäväksi tuo varmasti tältä osin lisäetua.
 
Minimissään huolehdi että sinulla on käytössä hyvät työvälineet ohjelmiston [jatkuvaan integraatioon (Continuos Integration)](https://fi.wikipedia.org/wiki/Jatkuva_integraatio) ja [jatkuvaan toimitukseen (Continuous Delivery)](https://fi.wikipedia.org/wiki/Jatkuva_toimitus) liittyen. Käydään näitä aiheita tarkemmin läpi seuraavissa blogikirjoituksissa.
 
 
### Lean (jatkuva kehittäminen)
 
Lean sanana yhdistetään monesti hukan poistamiseen ja ketteryyteen, josta Leanissä on pitkälti kyse. Sen lisäksi että näitä Leanin oppeja tulee myös DevOpsin osalta soveltaa, korostaisin myös Leanin vahvaa ajatusta jatkuvasta parantamisesta ja epäonnistumisten hyväksymistä.
 
Jatkuva parantaminen on oikeastaan aika itsestään selvyys, jos käytössä on joku ketterän kehittämisen malleista. Näissä usein tehdään retrospektiivejä, joiden tarkoituksena on nimen omaan oppia menneestä ja tehdä korjaavia toimenpiteitä tulevaisuutta silmällä pitäen. Muistakaa käsitellä asioita niin ihmisten, yhteistyön, prosessien kuin työkalujen näkökulmista.
 
Lisäksi on olemassa malleja kuten [A/B-testaus](https://en.wikipedia.org/wiki/A/B_testing) tai [Canary Release](https://en.wikipedia.org/wiki/Feature_toggle#Canary_release), joita voidaan hyödyntää sovellusten julkaisuissa testatessa niiden toimintaa käytännössä.
 
Virheitä ei pidä pelätä ja niitä sattuu ja tapahtuu  jatkuvasti. Ne kannattaa nostaa organisaation oppimisen ja jatkuvan parantamisen voimavaraksi. Hyvä kehittämisen ja parantamisen kulttuuri syntyy sitä kautta, että mikään virhe tai epäkohta ei ole tabu ja tiimin jäsenet uskaltavat nostaa havaitsemiaan epäkohtia esille tiimin yhteisesti ratkottavaksi jo ennen kuin niistä muodostuu suurempia ongelmia. Virheen sattuessa ne ratkotaan ja  juurisyyt analysoidaan. Emme hae syyllisiä, vaan estämme niitä tapahtumasta tulevaisuudessa.
 
### Measurement (mittaaminen)
 
### Sharing (jakaminen)

