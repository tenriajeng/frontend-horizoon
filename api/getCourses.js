async function getCourses() {
    const res = await fetch('https://sejawat.co.id/api/event-test', {
        cache: 'no-store',
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    console.log(res);
    return res.json();
}

export default getCourses;
