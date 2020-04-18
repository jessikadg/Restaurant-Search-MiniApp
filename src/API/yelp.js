import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer F_6aXRc2thTOga6BVMqhKLvJu8DbTIpRExcSHch7K_uOnAcyq9a-blAqe-AE8C8WFoYzs9hppb1CbJAByKKcys2PIVQs6Mp_yBYEGMrjpG5i8AKsElErP83amouQXnYx'
    }
}); 