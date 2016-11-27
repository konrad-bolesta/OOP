var SamsungGalaxyS6 = new Telefon("Samsung", 1050, "czarny", 2015);
var iPhone6S = new Telefon("Apple", 2250, "srebrny", 2015);
var OnePlusOne = new Telefon("OnePlus", 750, "biały", 2014);
var XPeriaXZ = new Telefon("Sony", 2500, "kremowy", 2016)

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
XPeriaXZ.printInfo();

function Telefon(marka, cena, kolor, rok) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.rok = rok;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", a rok produkcji to " + this.rok + ".");
}