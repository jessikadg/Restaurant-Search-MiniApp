import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer INSERT_HERE_YOUR_API_KEY_GENERATED_AT_YELP_YEAH_IT_IS_VERY_LONG_BTW_DONT_FORGET_ONE_DIGIT_SPACE_BETWEEN_BEARER_AND_THE_FIRST_DIGIT_OF_THE_API_KEY'
    }
}); 
