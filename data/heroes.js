// data/heroes.js

// Створюємо змінну з довгим текстом, щоб легко використовувати її повторно.
const fakeBiography =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nНародився у чудовому місті, де провів свої дитячі та юнацькі роки. Був опорою для своєї родини, вірним другом для багатьох. З дитинства мріяв про справедливість і завжди ставав на захист слабших. Після закінчення школи здобув професію, працював, будував плани на майбутнє. Та коли ворог прийшов на нашу землю, без вагань став на захист Батьківщини. \n\nЙого мужність, відвага та самопожертва назавжди залишаться у наших серцях. Він був справжнім патріотом, який до останнього подиху вірив у перемогу України. Пам'ять про нього житиме вічно. Слава Україні! Героям Слава! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// Фейкові свічки для демонстрації
const generateCandles = (heroName) => [
  {
    id: 1,
    authorName: "Марія Петрівна",
    message: `Спасибі тобі, ${
      heroName.split(" ")[1]
    }, за те, що захищав нашу Україну. Твоя жертва не буде забута. Вічна пам'ять герою!`,
    date: "2024-01-15",
  },
  {
    id: 2,
    authorName: "Олександр",
    message: "Світла пам'ять воїну. Дякую за мир над головою. Героям слава!",
    date: "2024-01-20",
  },
  {
    id: 3,
    authorName: "Родина Коваленків",
    message:
      "Ми пам'ятаємо і не забудемо. Спасибі за свободу, яку ти подарував нашим дітям.",
    date: "2024-02-01",
  },
  {
    id: 4,
    authorName: "Анна Василівна",
    message:
      "Вічна пам'ять нашому захиснику. Твоя мужність надихає нас жити далі.",
    date: "2024-02-14",
  },
  {
    id: 5,
    authorName: "Учні 10-А класу",
    message:
      "Ми вивчаємо історію heroes наших днів. Ти один з них. Пам'ятаємо, шануємо, пишаємося!",
    date: "2024-03-01",
  },
];

export const heroes = [
  {
    id: 1,
    name: "Петренко Іван Васильович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1990 – 2022",
    dateOfBirth: "15 травня 1990",
    dateOfDeath: "10 березня 2022",
    biography: fakeBiography,
    place: "93-тя окрема механізована бригада «Холодний Яр»",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Петренко Іван Васильович"),
  },
  {
    id: 2,
    name: "Ковальчук Андрій Ігорович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1985 – 2023",
    dateOfBirth: "21 серпня 1985",
    dateOfDeath: "05 липня 2023",
    biography: fakeBiography,
    place: "80-та окрема десантно-штурмова бригада",
    yearOfDeath: 2023,
    placeOfBirth: "с. Уріж",
    candles: generateCandles("Ковальчук Андрій Ігорович"),
  },
  {
    id: 3,
    name: "Шевченко Олег Богданович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1995 – 2022",
    dateOfBirth: "03 січня 1995",
    dateOfDeath: "18 жовтня 2022",
    biography: fakeBiography,
    place: "24-та окрема механізована бригада імені короля Данила",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Шевченко Олег Богданович"),
  },
  {
    id: 4,
    name: "Григоренко Сергій Михайлович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1998 – 2024",
    dateOfBirth: "30 листопада 1998",
    dateOfDeath: "01 лютого 2024",
    biography: fakeBiography,
    place: "3-тя окрема штурмова бригада",
    yearOfDeath: 2024,
    placeOfBirth: "м. Трускавець",
    candles: generateCandles("Григоренко Сергій Михайлович"),
  },
  {
    id: 5,
    name: "Левченко Василь Петрович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1991 – 2022",
    dateOfBirth: "11 квітня 1991",
    dateOfDeath: "25 травня 2022",
    biography: fakeBiography,
    place: "93-тя окрема механізована бригада «Холодний Яр»",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Левченко Василь Петрович"),
  },
  {
    id: 6,
    name: "Мельник Олексій Данилович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1988 – 2023",
    dateOfBirth: "19 вересня 1988",
    dateOfDeath: "12 серпня 2023",
    biography: fakeBiography,
    place: "80-та окрема десантно-штурмова бригада",
    yearOfDeath: 2023,
    placeOfBirth: "с. Уріж",
    candles: generateCandles("Мельник Олексій Данилович"),
  },
  {
    id: 7,
    name: "Бондаренко Тарас Іванович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1996 – 2022",
    dateOfBirth: "07 лютого 1996",
    dateOfDeath: "29 листопада 2022",
    biography: fakeBiography,
    place: "24-та окрема механізована бригада імені короля Данила",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Бондаренко Тарас Іванович"),
  },
  {
    id: 8,
    name: "Ткаченко Ігор Сергійович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1999 – 2024",
    dateOfBirth: "14 грудня 1999",
    dateOfDeath: "10 березня 2024",
    biography: fakeBiography,
    place: "3-тя окрема штурмова бригада",
    yearOfDeath: 2024,
    placeOfBirth: "м. Трускавець",
    candles: generateCandles("Ткаченко Ігор Сергійович"),
  },
  {
    id: 9,
    name: "Кравченко Максим Олегович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1992 – 2022",
    dateOfBirth: "01 червня 1992",
    dateOfDeath: "14 квітня 2022",
    biography: fakeBiography,
    place: "93-тя окрема механізована бригада «Холодний Яр»",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Кравченко Максим Олегович"),
  },
  {
    id: 10,
    name: "Пономаренко Денис Вікторович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1987 – 2023",
    dateOfBirth: "25 жовтня 1987",
    dateOfDeath: "20 вересня 2023",
    biography: fakeBiography,
    place: "80-та окрема десантно-штурмова бригада",
    yearOfDeath: 2023,
    placeOfBirth: "с. Уріж",
    candles: generateCandles("Пономаренко Денис Вікторович"),
  },
  {
    id: 11,
    name: "Савченко Юрій Романович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "1994 – 2022",
    dateOfBirth: "18 березня 1994",
    dateOfDeath: "22 грудня 2022",
    biography: fakeBiography,
    place: "24-та окрема механізована бригада імені короля Данила",
    yearOfDeath: 2022,
    placeOfBirth: "м. Борислав",
    candles: generateCandles("Савченко Юрій Романович"),
  },
  {
    id: 12,
    name: "Дяченко Роман Орестович",
    photoUrl:
      "https://aleya-heroyiv.boryslavrada.gov.ua/wp-content/uploads/2025/07/88.-Паращак-Назар.jpg",
    lifeDates: "2000 – 2024",
    dateOfBirth: "02 липня 2000",
    dateOfDeath: "15 квітня 2024",
    biography: fakeBiography,
    place: "3-тя окрема штурмова бригада",
    yearOfDeath: 2024,
    placeOfBirth: "м. Трускавець",
    candles: generateCandles("Дяченко Роман Орестович"),
  },
];
