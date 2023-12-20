import React, { useEffect, useState } from 'react';

function getBackendMessage() {
    const promise = fetch('http://localhost:8000');
    return promise
}

function App() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getBackendMessage();
                const data = await result.json();
                setMessage(data.message);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    
    return (
        <div>
            {message}
        </div>
    )
}

export default App