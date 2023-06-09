import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Button from "./Button/Button";
import "./Main.scss";


const Main = ({ setItineraryList, itineraryList, setArrLength, arrLength }) => {
    const [zipcode, setZipcode] = useState('')
    const navigate = useNavigate()


    const zipcodeHandler = (e) => {
        setZipcode(e.target.value)
    }


    const sumbitZipcode = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/${zipcode}`)
            .then((res) => {

                setArrLength(res.data.length)
                // console.log(res.data.length);

                setItineraryList([...itineraryList, ...res.data])
                // setItineraryList(newlist)
            }
            )
            .catch(err => console.log(err))
        navigate('/itinerary')
    }

    console.log(arrLength);

    return (
        <>
            <section className="main">
                <h2 className="main__title">WELCOME TO VEGAS</h2>
                <form className="form" onSubmit={sumbitZipcode}>
                    <label htmlFor="form__zipcode" className="form__title">Select your Zipcode</label>
                    <select
                        name="zipcode"
                        placeholder="Zipcode"
                        id="zipcode"
                        className="form__zipcode"
                        value={zipcode}
                        onChange={zipcodeHandler}>
                        <option value=''>Zipcode</option>
                        <option value={89104}>89104</option>
                        <option value={89101}>89101</option>
                        <option value={89183}>89183</option>
                        <option value={89108}>89108</option>
                        <option value={89109}>89109</option>
                    </select>
                    <div className="button">
                        <Button value={'EXPLORE'} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Main

