import axios from 'axios';

class RoleService {
    getRoles(){
        return axios.get('http://localhost:8887/roles');
    }
}

export default new RoleService();
