async function getData() {
    const res = await fetch('http://127.0.0.1:8001/api/home', {
        cache: 'no-store',
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default getData;
