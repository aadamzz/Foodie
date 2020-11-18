import { useState } from 'react';

// const handleQuery = event => {
//     setQuery({ ...query, [event.currentTarget.name]: event.currentTarget.value });
// }

export const useHandleQuery = () => {
    const [query, setQuery] = useState({
        title: "",
        description: ""
    });

}