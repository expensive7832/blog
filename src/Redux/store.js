export const initialState = {
    user: null,
    blogData: null,
    getData: null,
}

const reducer = (state, action) =>{
    switch (action.type) {
        case "SET_USER":
            return{
                ...state, 
                user : action.payload
    
            };
            
        case "SET_BLOGDATA":
            return{
                ...state, 
                blogData : action.payload
    
            };

        default:
            return{
                state
            }
    }
}

export default reducer;