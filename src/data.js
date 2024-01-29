const data= [{
    id:1,
    image:"tirupati.jpg",
    country:"India",
    mainplace: "Tirupathi",
    dateofupload:"01 Jan, 2222 - 3 Jan, 4444",
    discription:"Tirupati, the holy city is located in the southeastern part of Andhra Pradesh, in Chittoor district. Known as the abode of the 'Kaliyuga' deity Lord Venkateswara popularly known as Balaji, Tirupati is famous for the Venkateswara temple in the sacred Tirumala hills at an elevation of 860m.",
    comments:[{
        id: 1,
        text: "This is a comment on the first item.",
        user: "John Doe",
        timestamp: "2024-01-25T12:00:00Z"
      }]
},{
    id:2,
    image:"hampi.jpg",
    country:"India",
    mainplace:"Hampi",
    dateofupload:"01 Jan, 2222 - 3 Jan, 4444",
    discription:"Hampi is a cultural and architectural heritage site built more than 200 years ago. The site was constructed between 1336 AD to 1565 AD. This location is famous for its temples, palaces, market streets and monuments, making up the Vijayanagara Empire.",
    comments:[]
},{
    id:3,
    image:"golden-temple.jpg",
    country:"India",
    mainplace:"Golden Temple",
    dateofupload:"01 Jan, 2222 - 3 Jan, 4444",
    discription:"The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf.",
    comments:[]
},{
    id: 7,
    image: "japan-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Mount+Fuji/@35.3606247,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634?hl=en",
    country:"JAPAN",
    mainplace:"Mount Fuji",
    dateofupload:"12 Jan, 2021 - 24 Jan, 2021",
    discription:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
},{
    id:8,
    image:"australia-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967?hl=en",
    country: "AUSTRALIA",
    mainplace:"Sydney Opera House",
    dateofupload:"27 May, 2021 - 8 Jun, 2021",
    discription:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
},{
    id:9,
    image:"norway-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Geirangerfjord/@62.104831,7.0051739,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817?hl=en",
    country:"NORWAY", 
    mainplace:"Geirangerfjord",
    dateofupload:"01 Oct, 2021 - 18 Nov, 2021",
    discription:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
},{
    id: 4,
    image: "japan-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Mount+Fuji/@35.3606247,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634?hl=en",
    country:"JAPAN",
    mainplace:"Mount Fuji",
    dateofupload:"12 Jan, 2021 - 24 Jan, 2021",
    discription:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
},{
    id:5,
    image:"australia-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967?hl=en",
    country: "AUSTRALIA",
    mainplace:"Sydney Opera House",
    dateofupload:"27 May, 2021 - 8 Jun, 2021",
    discription:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
},{
    id:6,
    image:"norway-photo.jpg",
    locationlink:"https://www.google.co.in/maps/place/Geirangerfjord/@62.104831,7.0051739,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817?hl=en",
    country:"NORWAY", 
    mainplace:"Geirangerfjord",
    dateofupload:"01 Oct, 2021 - 18 Nov, 2021",
    discription:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
}]
export default data ;