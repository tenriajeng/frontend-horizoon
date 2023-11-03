export function getAuthToken() {
    try {
        const token = localStorage.getItem('authToken');
        if (token === null) {
            return null;
        }
        return token;
    } catch (error) {
        console.error('Error while getting the authentication token:', error);
        return null;
    }
}

export function setAuthToken(token) {
    try {
        const tokenToStore =
            typeof token === 'object' ? JSON.stringify(token) : token;
        localStorage.setItem('authToken', tokenToStore);
    } catch (error) {
        console.error('Error while setting the authentication token:', error);
    }
}
