import * as mongoose from 'mongoose';
export declare const ItemSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    description?: string;
    qty?: number;
}, mongoose.Document<unknown, {}, {
    name?: string;
    description?: string;
    qty?: number;
}> & {
    name?: string;
    description?: string;
    qty?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
