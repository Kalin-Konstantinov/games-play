export const safeUserData = (data) => {
    data = JSON.stringify(data);
    localStorage.setItem('user', data);
}