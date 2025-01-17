import { Schema, model, Document } from 'mongoose';


interface Stats extends Document {
  
  role: string;
  user?: Schema.Types.ObjectId,
  group?: Schema.Types.ObjectId,


}

const statSchema = new Schema<Stats>({
  
  role: {
    type: String,
    enum:["user","group"]
    
  },

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  
});

const Stat = model<Stats>('Stat', statSchema);

export default Stat;