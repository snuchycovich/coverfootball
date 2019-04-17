import axios from 'axios'

export default {
    login (login, password) {
        return axios.post(
            '/api/security/login',
            {
                email: login,
                password: password
            }
        )
    }
}