import axios from 'axios';

class Request {
  static async Get(url){
    const result = await axios.get(url);
    return result;
  }
  static async Post(url, data){
    const result = await axios.post(url, data);
    return result;
  }
}

export default Request;
