import apiService from "./apiservice";

const getAPI = async (url, query, isRows, setFunc) => {
    try {
        const resp = await apiService({method: 'GET', url, query});
        if (resp.success) {
            if (isRows) {
                setFunc(resp.data.rows);
            } else {
                setFunc(resp.data);
            }
            return resp
        } else {
            throw new Error(resp.error);
        }
    } catch (error) {
        console.log(error.message, url);
    }
};



export {
    getAPI
}