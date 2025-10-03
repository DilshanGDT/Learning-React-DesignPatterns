import React, { useState, useEffect } from "react";
import axios from 'axios';
import { UserInfo } from "./UserInfo";

export const CurrentUserInfo = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/current-user');
            setUser(response.data);
        })()
    }, []);

    return user && <UserInfo user={user} />
}