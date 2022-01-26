import { configureStore} from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"
export default configureStore({
    reducer:{
        car: carReducer
    },
});