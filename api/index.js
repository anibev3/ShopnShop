import axios from 'axios';

const baseDonmain = 'https://d-themes.com/vue/porto/server';
// const baseDonmain = 'http://localhost:3000';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = `${baseDonmain}`;
export const currentDemo = 36;

export default axios.create({
    baseUrl,
    headers: customHeader,
});
