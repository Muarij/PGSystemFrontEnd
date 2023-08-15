import axios from'axios'
const TENANT_API_BASE_URL = "http://localhost:8087/tenant/getAll"
class TenantService {
    getTenants() {
        return axios.get(TENANT_API_BASE_URL);
    }


 }

export default new TenantService;