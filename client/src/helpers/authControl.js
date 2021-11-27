const itemInLocalStorage = 'user';

export const safeUserData = (data) => {
    data = JSON.stringify(data);
    localStorage.setItem(itemInLocalStorage, data);
}

export const deleteUserData = () => localStorage.removeItem(itemInLocalStorage);

export const getUserData = () => JSON.parse(localStorage.getItem(itemInLocalStorage));