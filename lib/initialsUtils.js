export function generateInitials(name) {
    if (typeof name !== 'string' || !name) {
        return 'AN'; // Default initials for undefined or empty name
    }

    // Split the name into words
    const words = name.split(' ');

    // Get the first letter of each word and capitalize it
    const initials = words.map((word) => word.charAt(0).toUpperCase());

    // Join the initials to create the abbreviation
    return initials.join('');
}
