import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b0278cb404314acb8140acc68f16a0ce'
    }
})

