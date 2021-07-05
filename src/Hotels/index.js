import React from "react";

/*In the index module of the Hotels folder, 
import the Hotel component (in Hotel.js).*/
import Hotel from "./Hotel.js";

/*Complete the renderHotel callback function
that takes the hotel JavaScript object as 
an argument and returns a Hotel component.
The Hotel component will need a key prop 
which contains the hotel id and a hotel 
prop that contains the hotel object.*/
const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

/*In the HotelsList functional component, 
map over the hotels prop to call your 
renderHotel callback function for each 
hotel in the hotels array.*/
const HotelsList = (props) => {
  if (!props.hotels.map(renderHotel)) {
    return <div>{renderHotel}</div>;
  }

  /*Save the result of this to a variable 
called hotelListElements*/
  var hotelListElements = props.hotels.map(renderHotel);

  /*At the bottom of the component, return 
the hotelListElements inside the unordered 
list.*/
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
