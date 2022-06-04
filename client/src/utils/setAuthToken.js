import axios from 'axios'

// send it with every request
const setAuthToken = token => {
    if (token) {
        // x-auth-token is used in server auth middleware
        axios.defaults.headers.common['authorization'] = token;
    } else {
        delete axios.defaults.headers.common['authorization']
    }
}

export default setAuthToken