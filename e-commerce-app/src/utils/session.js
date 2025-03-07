class Session {
    get token() {
        return localStorage.getItem("token") || null;
    }
    get abbottStaffId() {
        return localStorage.getItem("abbottStaffId") || null;
    }
    
    get loggedInUser() {
        return localStorage.getItem("loggedInUser") || null;
    }
    get userRole() {
        return localStorage.getItem("userRole") || null;
    }
    get userId() {
        return localStorage.getItem("userId") || null;
    }

    setUserId = (userId) => {
        localStorage.setItem("userId", userId);
    }

    setLoggedInUserRole = (roleId) => {
        localStorage.setItem("userRole", roleId);
    }

    setLoggedInUserInfo = (name) =>{
        localStorage.setItem("loggedInUser", name)
    }
    setToken = (token) => {
        localStorage.setItem("token", token);
    }
    setAbbottStaffId = (id) => {
        localStorage.setItem("abbottStaffId", id);
    }
    

    clear = () => {
        localStorage.clear();
    };
}

export default new Session();
