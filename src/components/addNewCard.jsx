import React, { useState } from "react";

const AddNewCard = (props) => {
    const [name, setName] = useState("")
    const [followers, setFollowers] = useState("")
    const [difference, setDifference] = useState("")

    function createCard() {
        if (name !== "" && !isNaN(followers) && !isNaN(difference)) {
            props.addUser({ name: name, followers: Number(followers), difference: Number(difference) });
        }
        resetCard();
    }

    function resetCard() {
        setName("");
        setFollowers("");
        setDifference("");
    }

    return (
        <div className="add-card">
            <input type='text' value={name} placeholder="name" onChange={e => setName(e.target.value)}></input>
            <input type='text' value={followers} placeholder="followers" onChange={e => setFollowers(e.target.value)}></input>
            <input type='text' value={difference} placeholder="difference" onChange={e => setDifference(e.target.value)}></input>
            <button onClick={createCard}>Create New Card</button>
        </div>
    )
}

export default AddNewCard
