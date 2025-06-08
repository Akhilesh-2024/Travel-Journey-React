const travel = [
    {
        id: crypto.randomUUID(),
        img: {
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
        },
        title: "Mount Fuji",
        country: "Japan",
        googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
        dates: "12 Jan, 2021 - 24 Jan, 2021",
        text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        id: crypto.randomUUID(), 
        img: {
            src: "https://scrimba.com/links/travel-journal-australia-image-url",
            alt: "Sydney Opera House"
        },
        title: "Sydney Opera House",
        country: "Australia",
        googleMapsLink: "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",
        dates: "27 May, 2021 - 8 Jun, 2021",
        text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    {
        id: crypto.randomUUID(),
        img: {
            src: "https://scrimba.com/links/travel-journal-norway-image-url",
            alt: "Geirangerfjord"
        },
        title: "Geirangerfjord",
        country: "Norway",
        googleMapsLink: "https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    },
    {
        id: crypto.randomUUID(),
        img: {
            src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Schloss_Lichtenstein_04-2010.jpg",
            alt: "Lichtenstein Castle"
        },
        title: "Lichtenstein Castle",
        country: "Germany",
        googleMapsLink: "https://maps.app.goo.gl/dPc88uYURtyYw2re7",
        dates: "04 Oct, 2023 - 23 Nov, 2023",
        text: `Lichtenstein Castle is a privately owned Gothic Revival castle located in the Swabian Jura of southern Germany. It was designed by Carl Alexander Heideloff and its name means "Shining Stone" or "Bright Stone".`
    },
]

export default travel;