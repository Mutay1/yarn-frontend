import Axios from "../utils/Axios"

export const UpdateFriend = async (state, friendID, type) => {
    const payload = {
        state,
        friendID
    }
    try {
        await Axios.post(`/friends/${type}`, payload)
        return {
            type: "UPDATE_FRIEND",
            payload:{
                type,
                state,
                friendID
            }
        }
    } catch (error) {
        console.log(error);
    }
}