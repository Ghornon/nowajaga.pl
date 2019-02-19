// Dania do 10 PLN
// 1 strona

const firstPage = [
	{
		name: 'Zupa dnia',
		price: 4
	},
	{
		name: 'Frytki',
		price: 6,
		description: 'Ser + 1 PLN'
	},
	{
		name: 'Zapiekanka',
		price: 7,
		description: 'ser, pieczarki'
	},
	{
		name: 'Hamburger',
		price: 7
	},
	{
		name: 'Barszcz z krokiecikiem lub uszkami',
		price: 7
	},
	{
		name: 'Tortilla vege',
		price: 7
	},
	{
		name: 'Omlet z 1 dodatkiem',
		price: 10
	},
	{
		name: 'Paluchy z masłem czosnkowym',
		price: 10
	},
	{
		name: 'Dodatkowy składnik',
		price: 3
	}
];

// Dania za 12 PLN
// 2 strona

const secoundPage = [
	{
		name: 'Opakowanie na wynos',
		price: 1
	},
	{
		name: 'Makaron z warzywami i kurczakiem',
		price: 12,
		description: '(na ostro / łagodnie)'
	},
	{
		name: 'Pierogi (10szt)',
		price: 12,
		description: '(Ruskie / z mięsem / z kapustą i grzybami / z owocami)'
	},
	{
		name: 'Toritlla',
		price: 12,
		description: '(na ostro / łagodnie)'
	},
	{
		name: 'Skrzydełka',
		price: 12,
		description: '(na ostro / łagodnie)'
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
	}
];

// Dania za 13 PLN
// Dania obiadowe
// 3 strona

const thirdPage = [
	{
		name: 'Do każdego zestawu dodajemy',
		price: 0,
		description: 'ZUPA DNIA + SURÓWKA'
	},
	{
		name: 'Filet drobiowy',
		price: 13,
		description: '(panierowany / po parysku / z grilla)'
	},
	{
		name: 'Devolay z masłem i serem',
		price: 13,
		description: '(łagodny / na ostro, ze szpinakiem lub z pieczarkami)'
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
		name: '3. Jaga',
		price: 20,
		description:
			'Sos pomidorowy, ser mozzarella, pieczarki, cebula, kukurydza + 1 dowolny składnik'
	},
	{
		name: '4. Wiejska',
		price: 25,
		description: 'Sos pomidorowy, ser wędzony, kiełbasa, boczek, ogórek, cebula, pieczarki'
	},
	{
		name: '5. Ostra',
		price: 25,
		description: 'Sos pomidorowy, ser mozzarella, szynka, papryka piri piri, cebula, pieczarki'
	},
	{
		name: '6. Rukola',
		price: 25,
		description: 'Sos pomidorowy, ser mozzarella, salami, rukola, pomidor, pieczarki, oliwki'
	},
	{
		name: '7. Firmowa',
		price: 25,
		description: 'Sos pomidorowy, ser mozzarella, pieczarki, kurczak, kukurydza, papryka słodka'
	},
	{
		name: 'Dodatki do pizzy',
		price: 3
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
		price: 6,
		description: 'Piwo z grupy tyskie'
	},
	{
		name: 'Piwo butelka',
		price: 7,
		description: 'Piwo z grupy tyskie'
	}
];

export { firstPage, secoundPage, thirdPage, pizza, hotDrinks, beverages };
