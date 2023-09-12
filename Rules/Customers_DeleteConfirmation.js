/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Customers_DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/FirstApp/Actions/Customers_DeleteConfirmation.action').then((result) => {
        debugger
        if (result.data) {
            return clientAPI.executeAction('/FirstApp/Actions/Customers_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
