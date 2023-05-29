import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./UserInput.css";
import { createUser } from "../store/user-slice";
import { commonSliceActions } from "../store/common-slice";

const contriesWithBudget = new Map();
contriesWithBudget.set("India", 500);
contriesWithBudget.set("Africa", 700);
contriesWithBudget.set("Europe", 900);

const UserInput = () => {
    const dispatch = useDispatch();

    const [totalBudget, settotalBudget] = useState(0);
    const [user, setUser] = useState(0);
    const [isInitial, setIsInitial] = useState(true);
    const [budgetPerCountry, setBugetPerCountry] = useState(500);

    const selectRef = useRef();
    const travelerCountRef = useRef();

    useEffect(() => {
        if (!isInitial) {
            dispatch(createUser(user));
        }
    }, [user]);

    const handleTravelerBudget = (event) => {
        const noOfTraveller = event.target.value;
        const budgetPerCountry = contriesWithBudget.get(
            selectRef.current.value
        );

        settotalBudget(+noOfTraveller * budgetPerCountry);
        setBugetPerCountry(budgetPerCountry);
    };

    const handleCountryChange = () => {
        const noOfTraveller = travelerCountRef.current.value;
        const selectedCountry = selectRef.current.value;
        if (noOfTraveller && selectedCountry) {
            const budgetPerCountry = contriesWithBudget.get(selectedCountry);
            settotalBudget(+noOfTraveller * budgetPerCountry);
        }
        setBugetPerCountry(contriesWithBudget.get(selectRef.current.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = "user-" + Date.now();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const country = event.target.countries.value;
        const travellerCount = +travelerCountRef.current.value;
        setIsInitial(false);
        console.log(totalBudget);
        setUser({
            id,
            name,
            email,
            country,
            travellerCount,
            totalBudget,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" required type="text"></input>
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" required type="email"></input>
            <br />
            <label htmlFor="countries">Select Country</label>
            <select
                id="countries"
                ref={selectRef}
                onChange={handleCountryChange}
                placeholder="Where do you want to go?"
            >
                {Array.from(contriesWithBudget.keys()).map((country) => {
                    return (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    );
                })}
            </select>
            <br />
            <label htmlFor="traveler-count">Traveler Count</label>
            <input
                required
                ref={travelerCountRef}
                id="traveler-count"
                type="number"
                onChange={handleTravelerBudget}
            ></input>
            <div>Budget Per Person: {budgetPerCountry}</div>
            <div>Total Budget: {totalBudget}</div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
export default UserInput;
