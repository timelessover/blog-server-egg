
import { uid } from '../utils/uuid';

export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        uuid: {
            type: String,
            default: uid(),
        },
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        create_time: { type: Date, default: Date.now },
    });
    return mongoose.model('User', UserSchema);
};
