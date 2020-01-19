export const uid = () => {
    return Number(Math.random().toString().substr(3, 10) + Date.now()).toString(36);
};
