import React, { useEffect, useState } from "react";

export default function Header(props) {
    //const [users, setUsers] = useState(props.users);
    let followers = props.users.reduce((tot, curr) => { return tot += curr.followers }, 0);

    return (
        <div className="header">
            Social Media Dashboard
            <div className="sub-header">
                Total followers: {followers}
            </div>
        </div>
    )
}