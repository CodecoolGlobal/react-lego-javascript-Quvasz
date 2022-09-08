import React, { useState } from "react";

export default function Card(props) {
    const [user, setUser] = useState(props.user);
    const [followers, setFollowers] = useState(formatFollowersNumber());
    let followersClass = "subscribers";

    if (user.difference > 0) followersClass += " trend-ascend"
    else if (user.difference < 0) followersClass += " trend-descend"

    function alterFollowesNumber(direction) {
        const newUser = user;
        direction === "+" ? newUser.followers++ : newUser.followers--;
        setUser(newUser);
        setFollowers(formatFollowersNumber());
        props.updateUser(props.userId, user.followers);
    }
    function formatFollowersNumber() {
        return user.followers > 9999 ? user.followers.toString().slice(0, user.followers.toString().length - 3) + "k" : user.followers;
    }

    return (
        <section className="platform">
            <div className="icon" >
                <img src={props.icon}></img>
                <p>{user.name}</p>
            </div>
            <div className="followers">
                <button className="update-followers-button" onClick={() => { alterFollowesNumber("-") }}>-</button>
                {followers}
                <button className="update-followers-button" onClick={() => { alterFollowesNumber("+") }}>+</button>
            </div>
            <div className={followersClass}>
                F O L O W E R S
            </div>
            <div>
                {user.difference > 0 && <span className='trend-ascend'>▲</span>}
                {user.difference < 0 && <span className='trend-descend'>▼</span>}
                {user.difference.toString().slice(1)}
            </div>
        </section>
    );
}