export const loadLocal = () => {
    const db = localStorage.getItem("DBgrowdevers");
    return db !== null ? JSON.parse(db) : [];
}