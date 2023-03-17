import "./resultsPage.scss";
import fakeImg from '../assets/images/vegasMain.jpg'
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";

// const listJson = [
//   {
//     event: "Dinner in the Sky-Las Vegas",
//     time: "2000",
//     zipcode: "89109",
//     attendees: 10,
//     image: "http://localhost:8000/images/image1.jpeg",
//     id: "18482327",
//   },
//   {
//     event: "The Neon Museum Las Vegas",
//     time: "1500",
//     zipcode: "89104",
//     attendees: 3,
//     image: "http://localhost:8000/images/image2.jpeg",
//     id: "32848720",
//   },
//   {
//     event: "Fly LINQ Zipline Las Vegas",
//     time: "1600",
//     zipcode: "89108",
//     attendees: "5",
//     image: "http://localhost:8000/images/image3.jpeg",
//     id: "1092135",
//   },
//   {
//     event: "The Forum Shops at Caesars",
//     time: "1100",
//     zipcode: "89183",
//     attendees: 7,
//     image: "http://localhost:8000/images/image4.jpeg",
//     id: "109219042",
//   },
//   {
//     event: "Vegas Mini Baja Chase Dune Buggy Adventure",
//     time: "1300",
//     zipcode: "89115",
//     attendees: 12,
//     image: "http://localhost:8000/images/image5.jpeg",
//     id: "209831908401",
//   },
//   {
//     event: "Fogo de Chão Brazilian Steakhouse",
//     time: "1900",
//     zipcode: "89104",
//     attendees: 6,
//     image: "http://localhost:8000/images/image6.jpeg",
//     id: "10298842",
//   },
//   {
//     event: "FoodieLand Night Market ",
//     time: "16:00",
//     zipcode: "89104",
//     attendees: 5,
//     image: "http://localhost:8000/images/image7.jpeg",
//     id: "1209841",
//   },
//   {
//     event: "2023 Great Vegas Festival of Beer",
//     time: "1400",
//     zipcode: "89104",
//     attendees: 5,
//     image: "http://localhost:8000/images/image8.jpeg",
//     id: "091273123",
//   },
//   {
//     event: "Wines of the World and Gourmet Food Tasting: CDF",
//     time: "1800",
//     zipcode: "89109",
//     attendees: 14,
//     image: "http://localhost:8000/images/image9.jpeg",
//     id: "12091846",
//   },
//   {
//     event: "Hoop Madness at Chickie's & Pete's",
//     time: "2200",
//     zipcode: "89108",
//     attendees: 9,
//     image: "http://localhost:8000/images/image10.jpeg",
//     id: "123814901",
//   },
//   {
//     event: "Magic Mike live",
//     time: "1900",
//     zipcode: "89109",
//     attendees: 10,
//     image: "http://localhost:8000/images/image11.jpeg",
//     id: "120984192412",
//   },
//   {
//     event: "RuPaul Drag Race Live",
//     time: "2130",
//     zipcode: "89109",
//     attendees: 3,
//     image: "http://localhost:8000/images/image12.jpeg",
//     id: "05939238923",
//   },
//   {
//     event: "Bruno Mars @ Dolby Live",
//     time: "2000",
//     zipcode: "89104",
//     attendees: 15,
//     image: "http://localhost:8000/images/image13.jpeg",
//     id: "10298419",
//   },
//   {
//     event: "Adele @ Caesars Palace",
//     time: "2000",
//     zipcode: "89104",
//     attendees: 15,
//     image: "http://localhost:8000/images/image14.jpeg",
//     id: "7897821",
//   },
//   {
//     event: "Mad Apple by Cirque du Solei @ NY NY",
//     time: "1900",
//     zipcode: "89119",
//     attendees: 5,
//     image: "http://localhost:8000/images/image15.jpeg",
//     id: "1209848127412",
//   },
//   {
//     event: "Jimmy Kimmy Comedy Club @ Linq",
//     time: "1930",
//     zipcode: "89101",
//     attendees: 7,
//     image: "http://localhost:8000/images/image16.jpeg",
//     id: "210838921741",
//   },
//   {
//     event: "Elvis Spirit Of The King",
//     time: "2030",
//     zipcode: "89101",
//     attendees: 3,
//     image: "http://localhost:8000/images/image17.jpeg",
//     id: "129048284",
//   },
//   {
//     event: "Kygo @ Marquee Day Club",
//     time: "1100",
//     zipcode: 89119,
//     attendees: 15,
//     image: "http://localhost:8000/images/image18.jpeg",
//     id: "10834920767",
//   },
//   {
//     event: "Calvin Harris @ Wet Republic",
//     time: "1200",
//     zipcode: 89183,
//     attendees: 13,
//     image: "http://localhost:8000/images/image19.jpeg",
//     id: "29081290421",
//   },
//   {
//     event: "Marshmello @ XS Nightclub",
//     time: "2300",
//     zipcode: 89101,
//     attendees: 15,
//     image: "http://localhost:8000/images/image20.jpeg",
//     id: "120984829741",
//   },
//   {
//     event: "Drake @ XS Hakkasan",
//     time: "2300",
//     zipcode: 89101,
//     attendees: 15,
//     image: "http://localhost:8000/images/image21.jpeg",
//     id: "99689373287",
//   },
// ];

// const Results = ({ list, setList })
const Results = ({ itineraryList, setItineraryList }) => {
  // return listJson.map((obj) => {
  //   return (
  //     <div className="result__card-holder">
  //       <ul className="result__ul-parent">
  //         <li className="result__li">
  //           <ItineraryCard
  //             image={obj.image}
  //             event={obj.event}
  //             time={obj.time}
  //             pplNum={obj.attendees}
  //             id={obj.id}
  //           />
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // });
  console.log(itineraryList)

  return (
    <main className="result">
      {itineraryList.map(itinerary => {

        return <ItineraryCard

          setItineraryList={setItineraryList}
          image={itinerary.image}
          id={itinerary.id}
          event={itinerary.event}
          time={itinerary.time}
          pplNum={itinerary.attendees}
        />
      })}
    </main>
  )
};

export default Results;
