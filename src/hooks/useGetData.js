import { useState } from 'react';

export const useGetData = (url) => {
    const [data, setData] = useState(null);
    const getData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        }
    };

    return { getData, data };
};
