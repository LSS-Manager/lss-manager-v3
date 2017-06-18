(function () {

  //1 FW-Wache
var KleinerWaldbrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var KleintierinNot = "1x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Drehleiter (20%)";
var BrennendesGebüsch = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennenderAnhänger = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var TraktorBrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var MotorradBrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennenderPKW = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendeTelefonzelle = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrandinBriefkasten = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendesGras = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BaumaufStraße = "1x Löschfahrzeug/Tanklöschfahrzeug oder </br>1x Rüstwagen ";
var StrohballenBrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Sperrmüllbrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendesLaub = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Containerbrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Mülleimerbrand = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var AuslaufendeBetriebsstoffe = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var KleineÖlspur = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Motorradunfall = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen</br>1x Notarzteinsatzfahrzeug (70%)";
var BrennendePapiercontainer = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendeHecke = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var ÄsteaufFahrbahn = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var UmherfliegendesBaumaterial = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BaumaufRadweg = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
//2 FW-Wache
var Wohnwagenbrand ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennenderLKW ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Gartenlaubenbrand ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Zimmerbrand = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (30%)</br>1x Funkstreifenwagen (50%)</br>1x Rettungstransportwagen</br>1x Notarzteinsatzfahrzeug (50%)";
var KleinerFeldbrand = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var FeueraufBalkon = "2x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Drehleiter (100%)";
var Küchenbrand = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Funkstreifenwagen (50%)";
var PersonimAufzug = "1x Löschfahrzeug/Tanklöschfahrzeug (100%) oder </br>1x Rüstwagen</br>1x Rettungstransportwagen (100%)";
//3 FW-Wache
var FettbrandinPommesbude = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var FeuerinSchnellrestaurant = "3x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Dachstuhlbrand = "3x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Drehleiter (100%) </br> 1x Einsatzleitwagen 1 (50%)";
var Kellerbrand ="3x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Einsatzleitwagen 1 (90%)";
var Schornsteinbrand ="1x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Drehleiter (100%) </br> 1x Einsatzleitwagen 1 (100%)";
var BrennendesBusHäuschen ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var GeplatzteWasserleitung ="2x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Rüstwagen (20%) </br> 1x Einsatzleitwagen 1 (20%)";
var Verkehrsunfall ="Hier wird nur der größte VU angenommen:</br>2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (70%)";
//4 FW-Wache
var BrandimSupermarkt ="3x Löschfahrzeug/Tanklöschfahrzeug (100%) </br> 1x Drehleiter (70%)</br>1x Rüstwagen (30%) </br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (20%) </br> 1x GW-Messtechnik (30%)";
var Garagenbrand ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var KellerunterWasser ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var FeuerinEinfamilienhaus ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (50%)</br>1x Einsatzleitwagen 1 (70%)</br>1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (50%)";
var TiefgarageunterWasser ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
//var BaumaufPKW ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendeTrafostation ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)<br/>1x FuStW (100%)";
var Gasgeruch ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br> 1x Dekon P (30%)</br>1x GW-Messtechnik (30%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Gefahrgut (30%)</br>1x FuStW</br>1x Rettungstransportwagen</br>1x Notarzteinsatzfahrzeug (40%)";
//5 FW-Wachen
var Maschinenbrand ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br> 1x Rüstwagen (100%)</br> 1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz (20%)</br>1x Schlauchwagen (30%)";
var RauchentwicklunginMuseum ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)</br>1x GW-Atemschutz (100%)</br>1x Einsatzleitwagen 1 (100%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (75%)";
var FeuerimKrankenhaus  ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br> 2x Rüstwagen (30%)</br> 1x Drehleiter (100%)</br> 1x Einsatzleitwagen 1 (100%)</br> 1x Einsatzleitwagen 2 (30%)</br>2x Funkstreifenwagen (100%)";
var BaumaufPKW ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Funkstreifenwagen (100%) Nur bei Patient</br>1x Rettungstransportwagen</br>1x Notarzteinsatzfahrzeug (50%)";
var Bürobrand ="6x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Drehleiter (100%)</br>2x Rüstwagen (30%)</br>1x GW-Atemschutz (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (30%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (40%)";
var LKWinSupermarkt ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (70%)</br> 1x Einsatzleitwagen 1 (100%)</br>1x Feuerwehrkran (70%)</br>1x Gerätekraftwagen (100%)</br>1x MTW-TZ (100%)</br>1x MzKW (100%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (50%)";
var GasunfallinWerkstatt ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br> 1x Einsatzleitwagen 1 (100%)</br>1x Rüstwagen (30%)</br>1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (40%)";
//6 FW-Wachen
var AufgerissenerÖltank ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Öl (100%)";
var GroßeÖlspur ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x GW-Öl (75%)";
var Kaminbrand ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)";
var Kleinflugzeugabgestürzt ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (10%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (80%)";
var MähdrescherBrand ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BaumaufDach ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (10%)</br>1x Feuerwehrkran (10%)";
var PersonunterBaumeingeklemmt ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var Chlorgasaustritt ="7x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x GW-Atemschutz (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x GW-Messtechnik (100%)</br>1x GW-Gefahrgut (100%)</br>4x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (60%)";
var VerkehrsunfallmitLinienbus ="unterschieden wird in klein(bis 5 Patienten) - groß (bis 10 Patienten)</br>2 oder 5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1 oder 2x Rüstwagen (100%)</br>1 oder 2x Einsatzleitwagen 1</br>0 oder 1x Einsatzleitwagen 2 (100%)</br>0 oder 1x GW-Öl (100%)</br>0 oder 1x Feuerwehrkran (100%)</br> 2 oder 4x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (20 oder 40%)";
var PfeffersprayinSchule ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x GW-Messtechnik (50%)</br>3x Funkstreifenwagen</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (10%)";
//7 FW-Wachen
var BrennendeLok ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (50%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (10%)</br>1x GW-Atemschutz (30%)</br>1x Schlauchwagen (100%)";
var Flächenbrand ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Schlauchwagen (20%)</br> 1x Einsatzleitwagen 1 (20%)</br>2x Funkstreifenwagen (100%)";
var MittlererFeldbrand ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Schlauchwagen (20%)</br> 1x Einsatzleitwagen 1 (50%)";
var BrennendesReetdachhaus ="5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz (30%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (50%)";
var Scheunenbrand ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (50%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz (25%)";
// 8 FW-Wachen
var AusgedehnteÖlspur = "6x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Öl (100%)</br>2x Funkstreifenwagen (100%)";
var BrennenderBus = "5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (75%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (30%)";
var LKWumgestürzt = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Feuerwehrkran (75%)</br>2x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (50%)";
var GroßerWaldbrand ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Schlauchwagen (70%)</br>1x Funkstreifenwagen (100%)";
var BaumaufGleisen ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Funkstreifenwagen (100%)";
//9 FW-Wachen
var StraßeunterWasser ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Funkstreifenwagen (100%)";
var FeueraufBauernhofMittel ="7x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz(100%)</br>1x GW-L2-Wasser (100%)</br>3x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (33%)";
var VerkehrsunfallmitZug ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (80%)";
var BaumaufOberleitung ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)";
//10 FW-Wachen
var BrennenderGüterwaggon ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Rüstwagen (30%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Messtechnik (20%)</br>1x Dekon P (10%)";
var GroßerFeldbrand ="5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Schlauchwagen (100%)</br>1x Funkstreifenwagen (100%)";
var Baumaschineumgestürzt ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)</br>2x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Öl (100%)</br>1x Feuerwehrkran (100%)</br>3x Funkstreifenwagen (100%)";
//11 FW-Wachen
var Tankstellenbrand ="4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Rüstwagen (30%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (10%)</br>1x GW-Gefahrgut (70%)</br>1x GW-Messtechnik (80%)";
var LKWAuffahrunfall ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (75%)</br>1x GW-Öl (25%)</br>1x GW-Gefahrgut (10%)</br>2x Funkstreifenwagen (100%)</br>Notarzteinsatzfahrzeug (70%)";
//12 FW-Wachen
var BrandinWerkstatt = "4x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (30%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (10%)";
var BewusstloserKranführer = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Höhenrettung (100%)</br>1x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (80%)";
var VerletztePersonaufBaugerüst = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Höhenrettung (100%)</br>1x Drehleiter (30%)</br>1x Rettungstransportwagen (100%)";
var Fassadenteiledrohenzufallen = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Höhenrettung (40%)</br>1x Drehleiter (40%)</br>1x Funkstreifenwagen (100%)";
var BeschädigterDachbereich = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Höhenrettung (20%)</br>1x Drehleiter (50%)</br>1x Funkstreifenwagen (100%)";
var VerletztePersonaufHochspannungsmast = "2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Höhenrettung (100%)</br>1x Drehleiter (20%)</br>1x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (80%) oder</br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (100%)";
var BeschädigterKesselwagen = "10x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x Drehleiter (100%)</br>1x Dekon P (100%)</br>1x GW-Gefahrgut(100%)</br>1x GW-Messtechnik (100%)</br>3x Funkstreifenwagen (100%)</br>1x GKW";
//13 FW-Wachen
var Sporthallenbrand ="7x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (30%)</br>1x Schlauchwagen (30%)</br>1x GW-Atemschutz (50%)";
var LeckinChemikalientank ="8x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x Schlauchwagen (20%)</br>1x GW-Atemschutz (100%)</br>1x GW-Öl (50%)</br>2x GW-Messtechnik (100%)</br>1x GW-Gefahrgut (100%)</br>1x Dekon P (100%)</br>2x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (15%)";
//15 FW-Wachen
var ParkdeckvollWassergelaufen ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Schlauchwagen (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x GW-Öl (100%)</br>2x Funkstreifenwagen (100%)";
//18 FW-Wachen
var Lagerhallenbrand ="5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)</br>1x Drehleiter (100%)</br>1x Schlauchwagen (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x GW-Atemschutz (100%)</br>1x GW-Messtechnik (100%)</br>1x Feuerwehrkran (15%)</br>2x Funkstreifenwagen (100%)</br>1x GKW (100%)</br>1x MTW-TZ (100%)</br>1x LKW K9 (100%)</br>1x BRmG R (100%)</br>1x Anh DLE (100%)</br>Notarzteinsatzfahrzeug (20%)";
var FeuerimLagerraum ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (50%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Messtechnik (20%)";
//20 FW-Wachen
var GroßfeuerimWald = "10x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (10%)</br>1x Schlauchwagen (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (30%)</br>1x GW-Atemschutz (100%)</br>3x Funkstreifenwagen (100%)";
//25 FW-Wachen
var Gasexplosion ="20x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Rüstwagen (100%)</br>2x Schlauchwagen (100%)</br>4x Einsatzleitwagen 1 (100%)</br>2x Einsatzleitwagen 2 (100%)</br>2x GW-Messtechnik (100%)</br>2x GW-Atemschutz (100%)</br>2x Drehleiter (100%)</br>1x Dekon P (10%)</br>1x Feuerwehrkran (40 %)</br>4x Funkstreifenwagen (100%)</br>1x GKW (100%)</br>1x MTW-TZ (100%)</br>1x BRmG R (100%)</br>1x LKW K9 (100%)</br>1x MzKW (100%)</br>1x Anh DLE (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (40%)";
//30 FW-Wachen
var FeueraufBauernhofGroß ="15x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Schlauchwagen (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>2x GW-Atemschutz (100%)</br>4x Drehleiter (100%)</br>1x Feuerwehrkran (15%)</br>3x Funkstreifenwagen (100%)</br>2x GKW (100%)</br>1x MTW-TZ (100%)</br>2x BRmG R (100%)</br>2x LKW K9 (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (50%)";
var BürobrandGroß = "10x Löschfahrzeug (100%)</br>1x Einsatzleitwagen 2 (100%)</br>3x Einsatzleitwagen 1 (100%)</br>2x Drehleiter (100%)</br>2x Rüstwagen (30%)</br>1x GW-A (100%)</br>3x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (40%)";
//Temporär:
//Winter
var BrennenderTannenbaum ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrandaufWeihnachtsmarkt  ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var VerkehrsunfalldurchGlatteis ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Rüstwagen (100%)";
var BrennenderAdventskranz ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var RangeleiaufWeihnachtsmarkt ="2x Funkstreifenwagen (100%)";
var DiebstahlaufWeihnachtsmarkt ="1x Funkstreifenwagen (100%)";
var BrennendeWeihnachtsmarktbude  ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
//Vatertag
var BrennenderBollerwagen = "1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
//Silverster
var BrennenderPKWdurchFeuerwerkskörper ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var SperrmüllbranddurchFeuerwerkskörper ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var KleinerFeldbranddurchFeuerwerkskörper ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var KellerbranddurchFeuerwerkskörper ="3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)";
var BrennendesBusHäuschendurchFeuerwerkskörper ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var FeueraufBalkondurchFeuerwerkskörper ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (30%)";
var BrennendePapiercontainerdurchFeuerwerkskörper ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendeHeckedurchFeuerwerkskörper ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var TrunkenheitsfahrtnachSilvesterparty ="1x Funkstreifenwagen (100%)";
var BrennendesReetdachhausdurchFeuerwerkskörper ="5x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz (30%)</br>2x Funkstreifenwagen (100%)";
var KfzdurchFeuerwerkskörperbeschädigt ="1x Funkstreifenwagen (100%)";
var VerstoßgegenSprengstoffverordnung ="1x Funkstreifenwagen (100%)";
//Halloween
var BrennendeVogelscheuche ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var BrennendesKürbisfeld ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Kürbissuppeübergekocht ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-Atemschutz (100%)";
var HexehängtinBaum ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (100%)";
var Zombiebiss ="1x Rettungstransportwagen (100%)";
var Monsterausgebrochen ="4x Funkstreifenwagen (100%)";
var Kürbissegeklaut ="1x Funkstreifenwagen (100%)";
var Frankensteingesichtet ="3x Funkstreifenwagen (100%)";
var Süßigkeitendiebstahl ="1x Funkstreifenwagen (100%)";
//Sommerlich
var Sonnenstich ="1x Rettungstransportwagen (100%)";
var Hitzschlag ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (40%)";
var Hitzekrampf ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (80%)";
//Ostern
var OstereierDieb ="1x Funkstreifenwagen (100%)";
var PinselausWerkstattentwendet ="1x Funkstreifenwagen (100%)";
var EingestürzterHasenbau ="2x Funkstreifenwagen (100%)</br>1x GKW (100%)</br>1x MTW-TZ (100%)</br>1x BRmG R (100%)</br>1x LKW K9 (100%)";
var AngefahrenerOsterhase ="1x Rettungstransportwagen (100%)</br>1x Funkstreifenwagen (100%)";
var BrennendesOsternest ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var SchokoladenspuraufStrasse ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var Eierkocherbrand ="2x Löschfahrzeug/Tanklöschfahrzeug (100%)";
//Verbandsgroßeinsätze
var Großbrand ="6x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Einsatzleitwagen 1 (100%)</br>2x Drehleiter (100%)</br>1x GW-Atemschutz (100%)</br>1x Schlauchwagen (100%)</br>1x GW-Messtechnik (???%)";
var Massenkarambolage ="10x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Einsatzleitwagen 1 (100%)</br>5x Rüstwagen (100%)</br>2x GW-Öl (100%)";
var Gefahrgutunfall ="20x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Drehleiter (100%)</br>5x Rüstwagen (100%)</br>3x GW-Atemschutz (100%)</br>3x Einsatzleitwagen 1 (100%)</br>4x GW-Messtechnik (100%)</br>4x GW-Gefahrgut (100%)";
var GefahrgutunfallGroß ="20x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Drehleiter (100%)</br>5x Rüstwagen (100%)</br>2x GW-Atemschutz (100%)</br>3x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>4x GW-Messtechnik (100%)</br>4x GW-Gefahrgut (100%)</br>1x Dekon P (100%)</br>2x GKW (100%)</br>1x MTW-TZ (100%)</br>2x BRmG R (100%)</br>2x LKW K9 (100%)</br>3x Funkstreifenwagen (100%)";
var unangekündigteDemonstration ="7x Funkstreifenwagen (100%)";
var Flugzeugabgestürzt ="22x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x GW-Atemschutz (45%)</br>1x GW-Öl (25%)</br>1x GW-Messtechnik (100%)</br>1x Drehleiter (100%)</br>2x Einsatzleitwagen 1 (100%)</br>2x Einsatzleitwagen 2 (100%)</br>6x Rüstwagen (100%)</br>10x Funkstreifenwagen (100%)</br>1x leBefKw (40%)";
var ZugunglückKlein ="20x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x GW-Atemschutz (100%)</br>1x GW-Öl (100%)</br>1x GW-L2-Wasser (100%)</br>2x Drehleiter (100%)</br>3x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>3x Rüstwagen (100%)</br>2x FwK (100%)</br>1x BRmG R (100%)</br>1x LKW K9 (100%)</br>1x MTW-TZ (100%)</br> 6x Funkstreifenwagen (100%)";
var ZugunglückGroß ="30x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>4x GW-Atemschutz (100%)</br>1x GW-Öl (100%)</br>2x GW-L2-Wasser (100%)</br>3x Drehleiter (100%)</br>6x Einsatzleitwagen 1 (100%)</br>3x Einsatzleitwagen 2 (100%)</br>6x Rüstwagen (100%)</br>4x FwK (100%)</br>2x BRmG R (100%)</br>2x LKW K9 (100%)</br>1x MTW-TZ (100%)</br>1x GKW (100%)</br>1x MzKW (100%)</br>12x Funkstreifenwagen (100%)";
var ZusammenstoßzweierBoote ="6x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>6x GW-Taucher (100%)</br>6x Boote (100%)</br>5x Funkstreifenwagen (100%)";
//1 Rettungswache
var Alkoholintoxikation ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var Nasenblutenunstillbar ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var GestürztePerson ="1x Rettungstransportwagen (100%)";
var GestürzterFußgänger  ="1x Rettungstransportwagen (100%)";
var GestürzterRadfahrer ="1x Rettungstransportwagen (100%)";
var Kopfplatzwunde ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var ArbeitsunfallimGarten ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
//3 Rettungswachen
var Herzinfarkt ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var akuterAsthmaAnfall ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var Fieber ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
var Schlaganfall ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (45%)";
var Krampfanfall ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var AngefahrenePerson ="1x Rettungstransportwagen (100%)</br>1x Funkstreifenwagen (100%)";
var Unterzuckerung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
var AkuteBauchschmerzen ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
var ReitunfallmitPkw ="1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1-4x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (50%)";
var Bluthochdruck ="1x Retttungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (50%)";
//4 Rettungswachen
var UnfallmitMotorsäge ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (95%)";
var BewusstlosePerson ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (90%)";
//5 Rettungswachen
var SchwangereinNotsituation ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var BeginnendeGeburt ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var VaginaleBlutung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
var Gehirnerschütterung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
//7 Rettungswachen
var AkuterHarnstau ="1x Rettungstransportwagen (100%)";
var HarnleiterBlutung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (20%)";
var Herzrhythmusstörungen ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (60%)";
//9 Rettungswachen
var Schädelverletzung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
var Wirbelsäulenverletzung ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (100%)";
var SturzausHöhe ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (50%)";
var Stromschlag ="1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)/Rettungshubschrauber (50%)";
//1 Polizei Wache
//var Küchenbrand ="1x Funkstreifenwagen (100%)";
var Ladendiebstahl ="1x Funkstreifenwagen (100%)";
var Taschendiebstahl ="1x Funkstreifenwagen (100%)";
var Metalldiebstahl ="1x Funkstreifenwagen (100%)";
var PersonhinterTür ="1x Funkstreifenwagen (100%)</br>1x Löschfahrzeug/Tanklöschfahrzeug (100%)";
var PersonalienaufnahmevonSchwarzfahrer ="1x Funkstreifenwagen (100%)";
var ParkendesAutogerammt ="1x Funkstreifenwagen (100%)";
var NotebookausSchuleentwendet ="1x Funkstreifenwagen (100%)";
var EinbruchinKeller ="1x Funkstreifenwagen (100%)";
var EinbruchinWohnung ="1x Funkstreifenwagen (100%)";
var Sachbeschädigung ="1x Funkstreifenwagen (100%)";
var Ruhestörung ="1x Funkstreifenwagen (100%)";
var Auffahrunfall ="1x Funkstreifenwagen (100%)</br>1x Löschfahrzeug/Tanklöschfahrzeug (10%)";
var AngefahrenePerson ="1x Funkstreifenwagen (100%)";
var Trunkenheitsfahrt ="1x Funkstreifenwagen (100%)";
var Ampelausfall ="1x Funkstreifenwagen (100%)";
var Pannenfahrzeug ="1x Funkstreifenwagen (100%)";
var Hausfriedensbruch ="1x Funkstreifenwagen (100%)";
var HilflosePerson ="1x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen oder Krankentransportwagen (---%) ";
var Verkehrsbehinderung ="1x Funkstreifenwagen (100%)";
var DiebstahlausKfz ="1x Funkstreifenwagen (100%)";
var Fahrraddiebstahl ="1x Funkstreifenwagen (100%)";
var Wildunfall ="1x Funkstreifenwagen (100%)";
//2 Polizei Wachen
var RandalierendePerson ="2x Funkstreifenwagen (100%)";
var HäuslicheGewalt ="2x Funkstreifenwagen (100%)";
var SuchenachVermissten ="2x Funkstreifenwagen (100%)</br>1x Rettungstransportwagen (100%)</br>1x Polizeihubschrauber (100%)</br>1x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x NEF (100%)";
var Kabeldiebstahl ="2x Funkstreifenwagen (100%)</br>1x Polizeihubschrauber (100%)";
var Tankbetrug ="1x FuStW (100%)";
//3 Polizei Wachen
var Schlägerei ="3x Funkstreifenwagen (100%)";
var Raub ="3x Funkstreifenwagen (100%)";
var Personenkontrolle ="1x Funkstreifenwagen (100%)";
//5 Polizei Wachen
var Massenschlägerei ="5x Funkstreifenwagen (100%)</br>Notarzteinsatzfahrzeug (10%)";
//6 Polizei Wachen
var Tankstellenüberfall ="6x Funkstreifenwagen (100%)";
//7 Polizei Wachen
var EntflohenerGefangener ="10x Funkstreifenwagen (100%)</br>1x Polizeihubschrauber (100%)";
//1 WR Wache
var PersoninWasser ="1x Boot (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (90%)</br>3x Löschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)";
var HilflosePersonaufWasser ="1x Boot (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (90%) / evtl. auch 1x RTH (50%)</br>1x Löschfahrzeuge (20%)</br>1x GW-Taucher (10%)";
var GewässerverschmutzungdurchÖl ="1x Boot (100%)</br>2x Löschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x GW-ÖL (100%)</br>1x Funkstreifenwagen (100%)";
//2 WR Wache
var PkwinWasser ="2x Boote (100%)</br>2x GW-Taucher (100%)</br>2x GW-Wasserrettung</br>3x Löschfahrzeuge/Tanklöschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (90%)</br>2x Funkstreifenwagen (100%)";
//3 WR Wache
var LKWinWasser ="3x Boote (100%)</br>3x GW-Taucher (100%)</br>3x GW-Wasserrettung</br>5x Löschfahrzeuge/Tanklöschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (30%)</br>3x Funkstreifenwagen (100%)";
var BusinWasser ="3x Boote (100%)</br>3x GW-Taucher (100%)</br>3x GW-Wasserrettung</br>5x Löschfahrzeuge/Tanklöschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>min. 1x Rettungstransportwagen</br>Notarzteinsatzfahrzeug (30%)</br>3x Funkstreifenwagen (100%)";
//1 BePo Wache
var SchwerpunkteinsatzTageswohnungseinbrüche ="3x GruKw (100%)</br>1x leBefKw (100%)";
var SchwerpunkteinsatzVerkehrsüberwachung ="3x GruKw (100%)</br>1x leBefKw (100%)";
var PräsenzeinsatzVolksfest ="3x GruKw (100%)</br>1x leBefKw (100%)";
var JugendschutzkontrolleinDiskothek ="3x GruKw (100%)</br>1x leBefKw (100%)</br>2x Funkstreifenwagen (100%)";
var GeländedurchsuchungnachBeweismittel ="3x GruKw (100%)</br>1x leBefKw (100%)";
var GeplanteRazzia ="6x GruKw (100%)</br>2x leBefKw (100%)</br>1x GefKw (100%)</br>2x Funkstreifenwagen (100%)";
var FußballBundesligaSpiel ="9x GruKw (100%)</br>3x leBefKw (100%)</br>1x FüKw (100%)</br>1x GefKw (100%)</br>2x Funkstreifenwagen (100%)";
//KT
var Krankentransport ="1x Krankentransportwagen (100%)";
//THW Einsätze
var Erdrutsch ="1x GKW (100%)</br>1x MTW-TZ (100%)</br>1x LKW K9 (100%)</br>1x BRmG R (100%)</br>2x Funkstreifenwagen (100%)";
var GefahrgutLKWverunglückt ="1x GKW (100%)</br>1x LKW K9 (100%)</br>1x BRmG R (100%)</br>3x Löschfahrzeuge/Tanklöschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (40%)</br>1x Rüstwagen (50%)</br>1x GW-Gefahrgut (100%)</br>1x GW-Messtechnik (30%)</br>1x Dekon P (10%)</br>2x Funkstreifenwagen (100%)";
var LKWinHauswand ="1x GKW (100%)</br>1x MTW-TZ (100%)</br>1x MzKW (100%)</br>2x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Drehleiter (70%)</br>1x Feuerwehrkran (75%)</br>";
var EingestürztesWohnhaus ="2x GKW (100%)</br>2x LKW K9 (100%)</br>2x BRmG R (100%)</br>1x MTW-TZ (100%)</br>1x MzKW (100%)</br>3x Löschfahrzeug/Tanklöschfahrzeug (100%)</br>1x Drehleiter (30%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Feuerwehrkran (75%)</br>1x Rüstwagen (100%)</br>2x Funkstreifenwagen (100%)";
  //Missionchief Einsätze
  var Binfire = "1x Firetruck (100%)";
  var Containerfire = "1x Firetruck (100%)";
  var Burningcar = "1x Firetruck (100%)";
  var Burningmotorbike = "1x Firetruck (100%)";
  var Burninggrass = "1x Firetruck (100%)";
  var Burningleaves = "1x Firetruck (100%)";
  var Bulktrashfire = "1x Firetruck (100%)";
  var Baleofstrawfire = "1x Firetruck (100%)";
  var Tractorfire = "1x Firetruck (100%)";
  var Burningcallbox = "1x Firetruck (100%)";
  var Treeontheroad = "1x Firetruck (100%)";
  var Littlewildfire = "1x Firetruck (100%)";
  var Mailboxonfire = "1x Firetruck (100%)";
  var Brushpile = "1x Firetruck (100%)";
  var Burningtrailer = "1x Firetruck (100%)";
  var GasLeak = "1x Firetruck (100%)";
  var Wastebinfire = "1x Firetruck (100%)";
  var Treeonbikeway = "1x Firetruck (100%)";
  var CarbonMonoxideAlarm = "1x Firetruck (100%)";
  var Roomfire = "2x Firetrucks (100%)</br>1x Platform Truck (30%)";
  var Gardenshedfire = "2x Firetrucks (100%)";
  var Burningtruck = "2x Firetrucks (100%)";
  var Littlefieldfire = "2x Firetrucks (100%)";
  var Caravanfire = "2x Firetrucks (100%)";
  var ManholeFire = "2x Firetrucks (100%)</br> 1x Battalion Chief (100%)";
  var SmokeinCabin = "2x Firetrucks (100%)</br> 1x ARFF (100%)";
  var BrakingOverheat = "1x Firetruck (100%)</br> 1x ARFF (100%)</br> 1x Battalion Chief (100%)";
  var EngineFire = "1x Firetruck (100%)</br> 3x ARFF (100%)</br> 1x Battalion Chief (100%)";
  var Basementfire = "3x Firetrucks (100%)</br> 1x Battalion Chief (90%)";
  var Chimneyfire = "1x Firetruck (100%) </br> 1x Platform Truck (100%) </br>1x Battalion Chief (100%)";
  var Rooffire = "3x Firetrucks (100%) </br> 1x Platform Truck (100%) </br> 1x Battalion Chief (50%)";
  var GreaseFire ="1x Firetruck (100%)";
  var Burningbusshelter ="1x Firetruck (100%)";
  var Roadaccident ="1x Firetruck (100%)";
  var Burningsubstation ="2x Firetrucks (100%) </br>1x Battalion Chief (100%)</br>1x Police Car (100%)";
  var Garagefire ="2x Firetrucks (100%)";
  var MVARollover ="3x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>1x Platform Truck (50%)</br>1x Heavy Resuce (100%)</br>2x Police Cars</br>min. 1x Ambulance(100%)";
  var Burningmachine ="3x Firetrucks (100%)</br> 1x Heavy Rescue (100%)</br> 1x Battalion Chief (100%)</br>1x Mobile Air (20%)</br>1x Water Tanker (30%)";
  var BuildingCollapse ="2x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Battalion Chiefs (100%)</br>2x Heavy Rescues (100%)</br>1x Mobile Command (100%)</br>min. 1x Ambulance (100%)";
  var TrenchRescue  ="3x Firetrucks (100%)</br> 2x Heavy Rescues (100%)</br> 1x Battalion Chief (100%)</br>1x Police Car (100%)</br>min. 2x Ambulance (100%)";
  var Fireplacefire ="1x Firetruck (100%)</br>1x Platform Truck (100%)</br>1x Battalion Chief (100%)";
  var MissingPerson ="2x Firetrucks (100%)</br>1x Battalion Chief (100%)</br>5x Police Cars (100%)</br>1x Police Helicopter</br>1x Ambulance(100%)";
  var Harvesterfire ="2x Firetrucks (100%)";
  var Personundertree ="1x Firetruck (100%)</br>1x Ambulance (100%)";
  var IndustrialFire ="5x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Hazmat (100%)</br>min. 1x Ambulance";
  var ResidentialFire ="3x Firetrucks (100%)</br>1x Platform Truck (100%)</br>1x Battalion Chief (100%)</br>2x Police Cars (100%)</br>min. 1x Ambulance";
  var VehicleAccidentEntrapment ="2x Firetrucks (100%)</br>2x Heavy Rescues (100%)</br>1x Battalion Chief (100%)</br>2x Police Cars (100%)</br>min. 1x Ambulance";
  var Burninglocomotive ="4x Firetrucks (100%)</br>1x Heavy Rescue (50%)</br>1x Battalion Chief (100%)</br>1x Mobile Air (30%)</br>1x Water Tanker (100%)";
  var LargeAircraftCrash ="3x Firetrucks (100%)</br>4x ARFF (100%)</br>1x Battalion Chief (100%)</br>5x Police Cars (100%)</br>min. 1x Ambulance (100%) max. 25 Ambulance";
  var Gasstationfire ="4x Firetrucks (100%)</br>2x Heavy Rescues (30%)</br>1x Platform Trucks (100%)</br>1x Battalion Chief (100%)</br>1x Mobile Command (100%)</br>1x Hazmat (70%)</br>1x Mobile Air(30%)";
  var Dangerousgoodstruckaccident ="3x Firetrucks (100%)</br>1x Heavy Rescue (50%)</br>1x Battalion Chief (100%)</br>1x Hazmat (100%)";
  var UnknownTankerSpill ="4x Firetrucks (100%)</br>2x Heavy Rescues (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>3x Police Cars (100%)</br>2x Hazmat (100%)";
  var CommercialFire ="6x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Heavy Rescues (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>2x Police Cars (100%)";
  var HighRiseFire ="5x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>1x Heavy Rescue (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Water Tanker (100%)</br>2x Mobile Air(50%)</br> min. 4x Ambulance";
  var FireinanOfficeBuilding ="10x Firetrucks (100%)</br>4x Platform Trucks (100%)</br>2x Heavy Rescue (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Water Tanker (100%)</br>1x Mobile Air(50%)</br>3x Police Cars</br> min. 1x Ambulance";
  var Theftatchristmasmarket ="1x Police Car (100%)";
  var Burningchristmasmarketstall ="1x Firetruck (100%)</br>1x Ambulance (??%)";
  var Fireatchristmasmarket ="1x Firetruck (100%)</br>1x Ambulance (??%)";
  var Trafficaccidentice ="1x Firetruck (100%)</br>1x Heavy Resuce (100%)";
  var Burningchristmastree ="1x Firetruck (100%)";
  var Burningadventwreath ="1x Firetruck (100%)";
  var Brawlatchristmasmarket ="2x Police Cars (100%)</br>1x Ambulance (??%)";
  var Burningbogle ="1x Firetruck (100%)";
  var Burningpumpkinfield ="2x Firetrucks (100%)";
  var Pumpkinsoupovercooked ="1x Firetruck (100%)</br>1x Battalion Chief (100%)</br>1x Mobile Air (50%)";
  var Witchintree ="1x Firetruck (100%)</br>1x Platform Trucks (100%)";
  var Zombiebite ="1x Ambulance (100%)";
  var EruptedMonster ="2x Police Cars (100%)";
  var Pumpkinstolen ="1x Police Car (100%)";
  var Frankensteinsighted ="3x Police Cars (100%)";
  var candytheft ="1x Police Car (100%)";
  var Majorfire ="10x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>2x Platform Trucks (100%)</br>1x Mobile Air (100%)</br>1x Water Tanker (100%)</br>2x Heavy Rescues (100%)</br>1x Mobile Command (100%)";
  var Pileup ="10x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>5x Heavy Rescues (100%)</br>2x Hazmats (100%)</br> min. 10x Ambulance(100%)";
  var BombExplosion ="6 Firetruck (100%)</br>2x Platform Trucks (100%)</br>2x Heavy Rescue (100%)</br>1x Mobile Command (100%)</br>2x Battalion Chief (100%)</br>1x Police Helicopter (100%)</br>14x Police Cars (100%)</br> 4x Swat Cars";
  var Unannounceddemonstration ="7x Police Cars (100%)";
  var Alcoholicintoxication ="1x Ambulance (100%)</br>1x Police Car (100%)";
  var Nosebleed ="1x Ambulance (100%)";
  var Fallenperson ="1x Ambulance (100%)";
  var Diabeticproblems  ="1x Ambulance (100%)";
  var FoodPoisoning ="1x Ambulance (100%)";
  var Anaphylaxis ="1x Ambulance (100%)";
  var Overdose ="1x Ambulance (100%)</br>1x Police Car (100%)";
  var Cardiacinfarction ="1x Ambulance (100%)";
  var Acuteasthma ="1x Ambulance (100%)";
  var Seizure ="1x Ambulance (100%)";
  var Fever ="1x Ambulance (100%)";
  var Shoplifting ="1x Police Car (100%)";
  var Parkedcaraccident ="1x Police Car (100%)";
  var Metalburglary ="1x Police Car (100%)";
  var Pickpocketing ="1x Police Car (100%)";
  var Faredodger ="1x Police Car (100%)";
  var Personcheck ="1x Police Car (100%)";
  var Obstructionoftraffic ="1x Police Car (100%)";
  var Theftofpropertyfromvehicles ="1x Police Car (100%)";
  var AnimalAttack ="1x Police Car (100%)</br>1x Ambulance";
  var NoiseComplaint ="1x Police Car (100%)";
  var AggressivePassenger ="1x Police Car (100%)";
  var Rioter ="2x Police Cars (100%)";
  var WarrantStandby ="3x Police Cars (100%)</br>1x Police Helicopter(100%)";
  var Brawl ="3x Police Cars (100%)";
  var DomesticDispute ="2x Police Cars (100%)";
  var FleeingSuspect ="5x Police Cars (100%)</br>1x Police Helicopter (100%)";
  var Shooting ="7x Police Cars (100%)</br>min. 1 Ambulance (100%)";
  var OfficerDown ="6x Police Cars (100%)</br>1x Ambulance (100%)";
  var Stabbing ="5x Police Cars (100%)</br>min. 1x Ambulance (100%)";
  var PrisonerEscape ="10x Police Cars (100%)</br>1x Police Helicopter (100%)";
  var HostageTaken ="4x Police Cars (100%)</br>2x SWAT Cars (100%)</br>1x Ambulance (100%)";
  var DrugWarrant ="1x Police Cars (100%)</br>1x SWAT Car (100%)";
  var BankRobbery ="6x Police Cars (100%)</br>2x SWAT Cars (100%)";
  var ActiveShooter ="4x Police Cars (100%)</br>1x Police Helicopter (100%)</br>4x SWAT Cars (100%)</br>min. 1x Ambulance (100%)";
  var HighRiskWarrant ="1x Police Cars (100%)</br>3x SWAT Cars (100%)";
  var AircraftHijack ="10x Police Cars (100%)</br>4x SWAT Cars (100%)</br>1x Battalion Chief</br>min. 1x Ambulance (100%)";
  //Meldkamerspel
//1 Brandweerpost
var Brandendeafvalbak = "1x Tankautospuit(100%)";
var Brandendecontainer = "1x Tankautospuit (100%)";
var Brandendepersonenauto  = "1x Tankautospuit (100%)";
var Brandendemotorfiets = "1x Tankautospuit (100%)";
var Brandendgras = "1x Tankautospuit (100%)";
var Brandendeboom = "1x Tankautospuit (100%)";
var Brandendafval = "1x Tankautospuit (100%)";
var Brandendhooi = "1x Tankautospuit (100%)";
var Brandendetraktor = "1x Tankautospuit (100%)";
var Brandendebromfiets = "1x Tankautospuit (100%)";
var Boomopdeweg = "1x Tankautospuit (100%)";
var Bosbrand = "1x Tankautospuit (100%)</br>1x Slangenwagen (10%)";
var Brandendedixi = "1x Tankautospuit (100%)";
var Brandendestruik = "1x Tankautospuit (100%)";
var Brandendeaanhangwagen = "1x Tankautospuit (100%)";
var Lekkendedieseltank = "1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (20%)";
var Oliespoor = "1x Tankautospuit (100%)";
var Brandendelandbouwmachine = "1x Tankautospuit (100%)";
var Liftopsluiting = "1x Tankautospuit (100%)";
var Katinboom = "1x Tankautospuit (100%)</br> 1x Redvoertuig (20%)";
var Buitenbrand = "1x Tankautospuit (100%)";
var Takkenopdeweg = "1x Tankautospuit (100%)";
var Boomopfietspad = "1x Tankautospuit (100%)";
var Omgewaaidebouwsteiger = "1x Tankautospuit (100%)</br> 1x Redvoertuig (30%)";
var Boomopauto = "1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (10%)";
var Rookontwikkelinginwinkel = "1x Tankautospuit (100%)</br> 1x Redvoertuig (10%)";
var Brandgerucht = "1x Tankautospuit (100%)";
var Buitensluiting = "1x Tankautospuit (100%)";
var Schaapinsloot = "1x Tankautospuit (100%)";
var Brandendebus = "1x Tankautospuit (100%)";
var Brandendebestelwagen = "1x Tankautospuit (100%)";
var Brandendehaag = "1x Tankautospuit (100%)";
var Brandendepapiercontainer = "1x Tankautospuit (100%)";
var Brandendecaravan = "1x Tankautospuit (100%)";
var Brandinmeterkast = "1x Tankautospuit (100%)</br> 1x Redvoertuig (10%)";
var Straatonderwater = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Parkeerterreinonderwater = "1x Tankautospuit (100%)</br> 1x Slangenwagen (20%)";
var Koeinsloot = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Koeingierput = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Lekkendewoonboot = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Brandinwoonwagen = "1x Tankautospuit (100%)";
var Brandendevrachtwagen = "1x Tankautospuit (100%)";
var Brandinwoonkamer = "1x Tankautospuit (100%)</br> 1x Redvoertuig (10%)";
//2 Brandweerposten
var Brandintuinhuis = "1x Tankautospuits (100%)";
var Heidebrand = "2x Tankautospuits (100%)";
var Brandinslaapkamer = "2x Tankautospuits (100%)</br>1x OvD-B (100%)</br> 1x Redvoertuig (100%)";
//3 Brandweerposten
var Brandinkelder = "3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x HOVD (50%)</br>1x Slangenwagen (10%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Schoorsteenbrand = "1x Tankautospuit (100%) </br> 1x Redvoertuig (100%)";
var Brandincafetaria = "1x Tankautospuits (100%) </br> 1x Redvoertuig (10%)";
var Verkeersongevalmetbeknelling ="1x Tankautospuit (100%)</br>1x OvD-B (100%)</br>1x Hulpverleningsvoertuig (10%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandendbushokje ="1x Tankautospuit (100%)";
var Vrachtwagengekanteld ="1x Tankautospuit (100%)</br>1x OvD-B (100%)</br>1x Hulpverleningsvoertuig (70%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandinvakantiewoning ="2x Tankautospuit (100%)</br>1x Redvoertuig (80%)</br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
//4 Brandweerposten
var Brandinwoonkamer ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Redvoertuig (80%)</br>1x Politieauto (100%)";
var Brandendevrachtwagen ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
var Brandinwoonwagen ="2x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Redvoertuig (80%)</br> 1x Ambulance(100%)";
var Brandinsupermarkt ="3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (30%)</br>1x HOVD (50%)</br>1x Redvoertuig (100%)</br>1x Politieauto (100%)";
var Persoonaangereden ="1x Tankautospuits (100%) </br>1x Hulpverleningsvoertuig (30%)";
var Brandinlandbouwschuur ="2x Tankautospuits (100%)";
var Persoonaangereden ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
var Brandinkeuken = "3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x HOVD (50%)</br>1x Redvoertuig (100%)";
var Parkeergarageonderwater ="1x Tankautospuit (100%)</br>1x Slangenwagen (40%)";
var Kelderonderwater ="1x Tankautospuit (100%)</br>1x Slangenwagen (40%)";
var Gevaarlijkhangendetak ="1x Tankautospuit (100%)</br>1x Redvoertuig (50%)";
var Boomopdak ="1x Tankautospuit (100%)</br>1x Redvoertuig (60%)";
var Losgewaaidedakbedekking ="1x Tankautospuit (100%)</br>1x Redvoertuig (80%)";
//5 Brandweerposten
var Machinebrand ="3x Tankautospuits (100%)</br> 1x Hulpverleningsvoertuig (100%)</br> 1x OvD-B (100%)</br>1x Adembeschermingsvoertuig (20%)</br>1x Slangenwagen (30%)";
var BuildingCollapse ="2x Tankautospuits (100%)</br>2x Redvoertuigs (100%)</br>2x OvD-Bs (100%)</br>2x Hulpverleningsvoertuigs (100%)</br>1x Mobile Command (100%)</br>min. 1x Ambulance (100%)";
var Heidebrand ="3x Tankautospuits (100%)</br>1x HOVD</br> 1x OvD-B (100%)</br>1x Slangenwagen (100%)";
//6 Brandweerposten
var Brandenddak ="3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x HOVD (50%)</br>1x Redvoertuig (100%)</br>1x Politieauto (100%)";
var Schoorsteenbrandwoningmetrietenkap ="2x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Redvoertuig (100%)";
var Persoonbekneldonderboom ="1x Tankautospuits (100%)</br> 1x Hulpverleningsvoertuig (40%)</br> 1x OvD-B (100%)</br>1x Ambulance";
var Kleinvliegtuigneergestort ="2x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (100%)</br>1x OvD-B (100%)</br>1x HOVD (10%)</br>min. 1x Ambulance (100%)</br>2x Politieauto (100%)";
var Persoonbekneldinmachine ="1x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x Politieauto (100%)</br>min. 1x Ambulance";
var Ongevalmettreinenpersoon ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (80%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandenddak ="2x Tankautospuits (100%)</br>1x Redvoertuigs (100%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)";
var Brandinlandbouwschuur ="3x Tankautospuit (100%)</br>1x Redvoertuig (100%)</br>1x OvD-B (100%)</br>1x HOvD (50%)</br>1x Slangenwagen (60%)";
//7 Brandweerposten
var Brandincafetaria ="3x Tankautospuits (100%)</br>1x Redvoertuig (100%)</br>1x HOVD (50%)</br>1x OvD-B (100%)</br>1x Slangenwagen (10%)</br>1x Politie Autos (100%)";
//8 Brandweerposten
var Brandinziekenhuis ="2x Tankautospuits (100%)</br>1x Redvoertuig(50%)</br>1x OvD-B (100%)</br>1x HVOD (10%)</br>1x Commandowagen (10%)";
//10 Brandweerposten
var Ongevalmettreinenpersonenauto ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (90%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandinziekenhuis ="3x Tankautospuit (100%)</br>2x Redvoertuigs (100%)</br>1x OvD-B (100%)</br>1x HVOD (10%)</br>1x Adembeschermingsvoertuig (50%)</br>1x Commandowagen (90%)</br>1x Ambulance (100%)";
//11 Brandweerposten
var Brandendegoederenwagon ="3x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x HVOD (10%)</br>1x Waarschuwings- en Verkenningsdienst (60%)</br>1x Adviseurs Gevaarlijke Stoffen (90%)";
var Vreemdelucht ="1x Tankautospuits (100%)</br>1x Hulpverleningsvoertuig (10%)</br>1x OvD-B (30%)</br>1x Adviseurs Gevaarlijke Stoffen (20%)";
var Stankoverlast ="1x Tankautospuits (100%)</br>1x OvD-B (10%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)";
var Koolmonoxidevrijgekomen ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>1x Politieauto (100%)";
var Lekkendegoederenwagon ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>1x Hulpverleningsvoertuig (100%)";
var Drugslabaangetroffen ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>4x Politieauto (100%)</br>1x Officier van Dienst Politie (100%)";
var Verkeersongevalmetgevaarlijkestoffen ="2x Politieauto's	(100%)</br>1x Tankautospuit (100%)</br>1x OvD-B	(100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Waarschuwings- en Verkenningsdienst(50%)</br>1x HOVD(50%)</br>1x Commandowagen (50%)</br>1x Ambulance (100%)";
//12 Brandweerposten
var Brandingaragebedrijf = "4x Tankautospuits (100%)</br>1x Hulpverleningsvoertuigs (30%)</br>1x OvD-B (100%)</br>1x Redvoertuig(100%)</br>1x Slangenwagen (100%)";
var Bosbrand = "4x Tankautospuits (100%)</br>1x HOVD (100%)</br>1x OvD-B (100%)</br>1x Commandowagen(10%)</br>1x Slangenwagen (100%)";
//14 Brandweerposten
var Ammoniakalarminopslagloods ="1x Tankautospuit (100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Hulpverleningsvoertuig (80%)</br>1x OvD-B (100%)</br>1x HOVD (20%)</br>1x Waarschuwings- en Verkenningsdienst (10%)</br>1x Commandowagen(10%)";
var Natuurbrand = "Hier alleen de grootste brand wordt aangenomen:</br>12x Tankautospuits (100%)</br>2x Hulpverleningsvoertuigs (100%)</br>3x OvD-B (100%)</br>2x HVOD (100%))</br>3x Slangenwagen (100%)</br>1x Adembeschermingsvoertuig(50%)";
var Gaslekkage = "2x Tankautospuits (100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x OvD-B (100%)</br>1x HVOD (50%))</br>1x Commandowagen (50%)</br>1x Adviseurs Gevaarlijke Stoffen(50%)";
//16 Brandweerposten
var Brandinsporthal = "Hier alleen de grootste brand wordt aangenomen:</br>8x Tankautospuits (100%)</br>1x Hulpverleningsvoertuigs (100%)</br>2x OvD-B (100%)</br>1x HVOD (100%)</br>2x Redvoertuigs (100%)</br>1x Slangenwagen (100%)</br>1x Adembeschermingsvoertuig(100%)</br>1x Commandowagen (100%)";
//Temporär:
//Winter
var Brandendecadeautjes ="1x Tankautospuit (100%)";
var Sinterklaasvandakgegleden ="1x Ambulance (100%)";
var Pepernootophoofd ="1x Ambulance (100%)";
var Pietbestolen ="1x Politieauto (100%)";
var Kindgeschrokken ="1x Ambulance (100%)";
var Pietkleminschoorsteen ="1x Tankautospuit (100%)</br>1x Redvoertuigs (100%)";
var Demonstratiezwartepiet ="4x Politieautos (100%)";
var Schoenendief ="1x Politieauto (100%)";
var Verstikkinginpepernoot ="1x Ambulance (100%)";
var Brandendekerstboom ="1x Tankautospuit (100%)";
var Verkeersongevaldoorgladheid ="1x Tankautospuit (100%)</br>1x Politieautos (100%)</br>1x OvD-B (100%)</br>1x Ambulance (100%)";
var Gevallenkerstman ="1x Ambulance (100%)";
var Ruzieopdekerstmarkt ="2x Politieautos (100%)";
var Diefstalopdekerstmarkt ="2x Politieautos (100%)";
var Brandendekerstmarktkraam ="1x Tankautospuit (100%)";
var Gevallenschaatser ="1x Ambulance (100%)";
var Gevallenpersoondoorgladheid ="1x Ambulance (100%)";
var Donkeredagenoffensief ="2x Politieautos (100%)";
var Snijwonddoorgebrokenkerstbal ="1x Ambulance (100%)";
//Halloween
var Brandendevogelverschrikker ="1x Tankautospuit (100%)";
var Brandendpompoenveld ="2x Tankautospuits (100%)</br>1x OvD-B (100%)";
var Overkooktepompoensoep ="1x Tankautospuit (100%)</br>1x Ambulance (100%)";
var Heksvastinboom ="1x Tankautospuit (100%)</br>1x Redvoertuigs (100%)";
var Monsteruitgebroken ="4x Politieautos (100%)";
var Gestolenpompoenen ="1x Politieauto (100%)";
var Frankensteingespot ="3x Politieautos (100%)";
var Snoepdiefstal ="1x Politieauto (100%)";
var Horrorclowngespot ="2x Politieautos (100%)";
//Verbandsgroßeinsätze
var Brandinkantoorpand ="8x Tankautospuits (100%)</br>2x OvD-Bs (100%)</br>2x Redvoertuigs (100%)</br>1x Adembeschermingsvoertuig (100%)</br>1x Slangenwagen (100%)</br>1x Waarschuwings- en Verkenningsdienst(100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x HVOD (100%)";
var Kettingbotsing ="12x Tankautospuits (100%)</br>3x OvD-Bs (100%)</br>3x Hulpverleningsvoertuigs (100%)</br>2x HOVD's (100%)</br>5x Politieauto's</br> min. 8x Ambulance(100%)";
var Brandinopslagloods ="16x Tankautospuit (100%)</br>4x Redvoertuigs (100%)</br>4x Hulpverleningsvoertuig (100%)</br>2x HVOD's (100%)</br>4x OvD-B (100%)</br>3x Slangenwagen(100%)</br>2x Waarschuwings- en Verkenningsdienst(100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Adembeschermingsvoertuig (100%)";
//1 Ambulancestandplaats 
var Overdosisalcohol ="1x Ambulance (100%)";
var Bloedneus ="1x Ambulance (100%)";
var Gevallenpersoon ="1x Ambulance (100%)";
var Gevallenfietser  ="1x Ambulance (100%)";
var Allergischereactie ="1x Ambulance (100%)";
var Botbreuk ="1x Ambulance (100%)";
var Hyperventilatie ="1x Ambulance (100%)";
var Hittekramp ="1x Ambulance (100%)";
var Hoofdwond ="1x Ambulance (100%)";
var Benauwdheid ="1x Ambulance (100%)";
var Valvantrap ="1x Ambulance (100%)";
//2 Ambulancestandplaatsen
var Ontwrichting = "1x Ambulance (100%)";
var Hoofdletsel = "1x Ambulance (100%)";
var Nekwervelletsel = "1x Ambulance (100%)";
var Hoofdletsel ="1x Ambulance (100%)";
//3 Ambulancestandplaatsen
var Pijnopdeborst ="1x Ambulance (100%)";
var Astmaaanval ="1x Ambulance (100%)";
var Beroerte ="1x Ambulance (100%)";
var Koortsstuip ="1x Ambulance (100%)";
var Beginnendegeboorte ="1x Ambulance (100%)";
var Hersenbloeding = "1x Ambulance (100%)";
var Nekwervelletsel = "1x Ambulance (100%)";
//4 Ambulancestandplaatsen
var Gebrokenrib = "1x Ambulance (100%)";
//5 Ambulancestandplaatsen
var Psychiatrischbeeld = "1x Ambulance (100%)";
//10 Ambulancestandplaatsen
var Valvanhoogte = "1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Ernstigebrandwonden = "1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Aanrijdingvoetganger = "1x Ambulance (100%)</br>1x MMT-Auto (100%)</br>1x Politieauto (100%)";
var Aanrijdingdoortrein = "1x Ambulance (100%)</br>1x MMT-Auto (100%)</br>1x Politieauto (100%)";
//1 Politiebureau
var Winkeldiefstal ="1x Politieauto (100%)";
var Tasjesdief ="1x Politieauto (100%)";
var Bestuurderonderinvloed ="1x Politieauto (100%)";
var Verwardpersoon ="1x Politieauto (100%)";
//2 Politiebureaus
var Huiselijkgeweld ="1x Politieautos (100%)";
var Overvalwinkel ="2x Politieautos (100%)";
var Assistentietreinconducteur ="3x Politieautos (100%)";
//3 Politiebureaus
var Achtervolgingpersonenauto ="4x Politieautos (100%)</br>1x Politie Helikopter (100%)";
var Vermistpersoon ="3x Politieautos (100%)</br>1x Politie Helikopter (100%)";
//4 Police Station
var Overvalwinkel ="2x Politieautos (100%)</br>1x Politie Helikopter (100%)";
//5 Politiebureaus
var Inbraakinwoning ="1x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)</br>1x Politie Helikopter (100%)";
var Vechtpartijincafé ="4x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)";
var Steekincident ="3x Politieautos (100%)</br>1x Officier van Dienst Politie (100%)</br>1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Plofkraak ="8x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)</br>1x Politie Helikopter (100%)</br>1x OvD-B (100%)</br>1x Tankautospuit (100%)";
var Invalinwoning ="3x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)";
//1 Waterongevallenbestrijding 
var Bergenobjectuitwatervoorpolitie ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (100%)</br>2x Politieautos (100%)";
var Verkeersongevalmetbeknelling ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(40%)</br>1x Waterongevallenvoertuig (20%)</br>2x Politieautos (100%)</br>1x OvD-B (100%)</br>1x Ambulance (100%)";
var Personenautoinsloot ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(50%)</br>1x Waterongevallenvoertuig (80%)</br>2x Politieautos (100%)</br>1x OvD-B (100%)</br>min. 1x Ambulance (100%)";
var Paardinsloot ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(20%)</br>1x Waterongevallenvoertuig (10%)";
var Eendverstriktinvisdraad ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (10%)";
var Verlatenkinderfietslangswaterkant ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (10%)</br>1x Politieauto (100%)</br>1x OvD-B (100%)";
//2 Waterongevallenbestrijding
var Persoontewater ="1x Tankautospuit (100%)</br>1x Redvoertuig(50%)</br>2x Waterongevallenvoertuig (100%)</br>1x Waterongevallena Anhangers(100%)</br>1x Politieauto (100%)</br>1x OvD-B (100%)</br>1x Ambulance(100%)";
var Personenautotewater ="1x Tankautospuit (100%)</br>1x Redvoertuig(50%)</br>1x Hulpverleningsvoertuig(60%)</br>2x Waterongevallenvoertuig (100%)</br>1x Waterongevallena Anhangers(50%)</br>3x Politieauto (100%)</br>1x OvD-B (100%)</br>min. 1x Ambulance(100%)";
//3 Waterongevallenbestrijding
var Aanvaringmetvrachtschipenmotorboot ="2x Tankautospuit (100%)</br>1x Redvoertuig(80%)</br>1x Hulpverleningsvoertuig(80%)</br>3x Waterongevallenvoertuig (100%)</br>2x Waterongevallena Anhangers(100%)</br>2x Politieauto (100%)</br>1x OvD-B (100%)</br>1x HOvD (50%)</br>1x Commandowagen (50%)</br>min. 3x Ambulance(100%)";
//KT
var Besteldvervoer ="1x Zorgambulance (100%)";  
  
  
  function addInfo(missionName) {
    var info = document.createElement('div');
    info.className = "alert alert-warning";
    var missionString = "";
    try{
      missionString += eval(missionName);
    }catch(err){
      missionString = "Fehler beim laden der Fahrzeuge </br>Bitte an Entwickler weitergeben: "+err;
    }
      info.innerHTML = "<h3>Benötigte Fahrzeuge:</h3> "+missionString + "</br>";

      document.getElementById('mission-form').insertBefore(info,document.getElementById("next_mission"));

    }

    function Normalize(missionname){
      if (!missionname)
          return "nope";
      var longname = missionname;
      var short = longname.innerHTML.trim().split("\n");
      for(var i = 0; i<short.length;i++){
        var current = ""+short[i].toString();
        if(current.search('<') != -1 || current === "" || !(/\S/.test(current))){
          short.splice(i,1);
          i--;
        }
      }
      var shortendname = short[0].trim().replace(/\s/g,'').replace(/[(]/g,'').replace(/[)]/g,'').replace(/[-]/g,'').replace("Brandmeldeanlage","");
      if(shortendname === "Volkslauf"||shortendname === "Dorf/Stadtfest"||shortendname === "BrandsicherheitswachdienstimTheater"||shortendname === "BrandsicherheitswachebeiVolksfest"||shortendname === "AngemeldeteDemonstration"||shortendname === "AbsicherungMusikumzug"||shortendname === "AbsicherungRadrennen"||shortendname === "FeuerprobealarmanSchule"||shortendname === "EntschärfungvonWeltkriegsbombe"||shortendname === "Verkehrsüberwachung"||shortendname === "AbsicherungRockkonzert"||shortendname === "Schwertransport" || shortendname ==="HasentreffeninOstereistedt" || shortendname === "Concert"||shortendname === "SoccerGame"||shortendname === "BaseballGame" || shortendname === "Voetbalwedstrijd"||shortendname === "Voetbalwedstrijd,risicowedstrijd"||shortendname === "Hardloopevenement"||shortendname === "Begeleidingorkest"||shortendname === "Begeleidingwielrenners"||shortendname === "Testbrandalarmschool"||shortendname === "Open dag,klein"||shortendname === "Open dag,groot"){
        return "nope";
      }
      return shortendname;
    }

    var missionname = Normalize(document.getElementById("missionH1"));
    if(missionname != "nope"){
      addInfo(missionname);
    }

  })();
