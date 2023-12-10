import{v4 as uuid4} from "uuid";
const initialState = [
    {
        id:1,
        name:"running",
        duration:" 2 hour",
    },
];

const activitiesReducer = (state=initialState, action)=> {
    const {type, payload} = action;
    switch (type) {
        case "CREATE_ACTIVITY":
        return[...state ,{
            id: uuid4(),
            name: payload.name,
            duration: payload.duration
        }] //สเปส โอบิเลเตอร์ state เอามาให้หมด 

        case "DELETE_ACTIVITY":
            const copyState = [...state];
            return copyState.filter((activity)=>activity.id !== payload.id) //เก็บเฉพาะอันที่ไม่มีไอดี โดยใช้ filter
    
        default:
           return state;
    }
}

export default activitiesReducer;