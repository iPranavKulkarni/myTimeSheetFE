const prod = {
    url: {
        API_URL: 'http://159.89.239.215:5000',
        //  http://192.168.1.8:9000/
        // http://159.89.239.215:5000/
    }
};
const dev = {
    url: {
        //  API_URL: 'http://localhost:3000'
        API_URL: 'http://159.89.239.215:5000',
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod