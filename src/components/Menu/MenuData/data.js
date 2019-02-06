// Dania do 10 PLN
// 1 strona

const firstPage = [
	{
		name: 'Paluchy z masłem',
		price: 10
	},
	{
		name: 'Hamburger',
		price: 7
	},
	{
		name: 'Zapiekanka',
		price: 7
	},
	{
		name: 'Omlet',
		price: 10
	},
	{
		name: 'Frytki',
		price: 6,
		description: 'Ser + 1 PLN'
	},
	{
		name: ' Barszcz z krokiecikiem lub uszkami',
		price: 7
	},
	{
		name: 'Zupa dnia',
		price: 4
	},
	{
		name: 'Dodatki',
		price: 3
	}
];

// Dania za 12 PLN
// 2 strona

const secoundPage = [
	{
		name: 'Makaron z warzywami i kurczakiem',
		price: 12,
		description: 'Do wyboru: na ostro lub łagodnie'
	},
	{
		name: 'Pierogi (10szt)',
		price: 12,
		description: '(Ruskie / z mięsem / z kapustą i grzybami / z owocami)'
	},
	{
		name: 'Toritlla',
		price: 12,
		description: ''
	},
	{
		name: 'Skrzydełka',
		price: 12,
		description: ''
	},
	{
		name: 'Ziemniaki na maśle z omastą, jajko sadzone i kefir',
		price: 12,
		description: ''
	},
	{
		name: 'Ryż pilaw z warzywami i filet z kurczaka',
		price: 12,
		description: ''
	},
	{
		name: 'Gołąbki w sosie pomidorowym',
		price: 12,
		description: ''
	},
	{
		name: 'Opakowanie',
		price: 1
	}
];

// Dania za 13 PLN
// Dania obiadowe
// 3 strona

const thirdPage = [
	{
		name: 'Filet drobiowy',
		price: 13,
		description: '(panierowany / z grilla / po parysku)'
	},
	{
		name: 'Devolay (3 szt)',
		price: 13,
		description: '(z masłem i serem lub na ostro)'
	},
	{
		name: 'Placki ziemniaczane z mięsem w sosie pieczarkowym',
		price: 13,
		description: ''
	},
	{
		name: 'Schabowy tradycyjny',
		price: 13,
		description: ''
	},
	{
		name: 'Sztuka miesą w sosie BBQ',
		price: 13,
		description: ''
	},
	{
		name: 'Do każdego zestawu dodajemy',
		price: 0,
		description: 'Zupa dnia + surówka gratis'
	}
];

// Pizza 32cm
// 4 strona

const pizza = [
	{
		name: '1. Margherita',
		price: 16,
		description: 'Sos pomidorowy, ser mozzarella, pieczarki, oregano'
	},
	{
		name: '2. Vege',
		price: 16,
		description: 'Sos pomidorowy, ser mozzarella, pieczarki, pieczarki, kukurydza, cebula'
	},
	{
		name: '3. Słodka',
		price: 20,
		description: 'Sos pomidorowy, ser mozzarella, pieczarki, cebula, kukurydza + 1 dowolny '
	},
	{
		name: '4. Wiejska',
		price: 25,
		description: 'Sos pomidorowy, ser wędzony, kiełbasa, boczek, ogórek, cebula, pieczarki'
	},
	{
		name: '5. Ostra',
		price: 25,
		description: 'Soso pomidorowy, ser mozzarella, szynka, papryka piri piri, cebula, pieczarki'
	},
	{
		name: '6. Rukola',
		price: 25,
		description: 'Soso pomidorowy, ser mozzarella, salami, rukola, pomidor, pieczarki'
	},
	{
		name: '7. Firmowa',
		price: 25,
		description:
			'Soso pomidorowy, ser mozzarella, pieczarki, kurczak, kukurydza, papryka słodka'
	},
	{
		name: 'Dodatki',
		price: 3
	}
];

const drinks = [
	{
		name: 'Sex on the beach',
		price: 18
	},
	{
		name: 'Malibu',
		price: 16
	},
	{
		name: 'Tequilla sunrise',
		price: 17
	},
	{
		name: 'Long island ice tea',
		price: 21
	},
	{
		name: 'Mojito',
		price: 16
	}
];

const shots = [
	{
		name: 'Kamikaze (6szt)',
		price: '14',
		description: '(niebieskie / czerwone)'
	},
	{
		name: 'Kamikaze (12szt)',
		price: '27',
		description: '(niebieskie / czerwone)'
	},
	{
		name: 'Biała śmierć (6szt)',
		price: '14'
	},
	{
		name: 'Biała śmierć (12szt)',
		price: '27'
	},
	{
		name: 'Chuoa chups (6szt)',
		price: '14'
	},
	{
		name: 'Chuoa chups (12szt)',
		price: '27'
	}
];

const hotDrinks = [
	{
		name: 'Kawa parzona',
		price: 5
	},
	{
		name: 'Herbata',
		price: 3
	},
	{
		name: 'Herbata owocowa',
		price: 4
	}
];

const beverages = [
	{
		name: 'Pepsi 0,25L',
		price: 4
	},
	{
		name: 'Mirinda 0,25L',
		price: 4
	},
	{
		name: '7 UP 0,25L',
		price: 4
	},
	{
		name: 'Sok Toma 0,25L',
		price: 4
	},
	{
		name: 'Tymbark 0,25L',
		price: 4
	},
	{
		name: 'Woda gazowana 0,25L',
		price: 3
	},
	{
		name: 'Woda niegazowana 0,25L',
		price: 3
	},
	{
		name: 'Sok w karafce 0,5L',
		price: 6
	},
	{
		name: 'Sok w karafce 1L',
		price: 10
	},
	{
		name: 'Piwo lane',
		price: 6.5,
		description: 'Piwo z grupy tyskie'
	},
	{
		name: 'Piwo butelka',
		price: 7,
		description: 'Piwo z grupy tyskie'
	}
];

export { firstPage, secoundPage, thirdPage, pizza, drinks, shots, hotDrinks, beverages };
