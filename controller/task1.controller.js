import {client} from "../db/index.js";

export const task1Controller = async(req, res) => 
{
    let queryString = `create table customer(id int , name text ,order_id int ,product_name text ,primary key(product_name,id));`
    
    await client.execute(queryString);

    res.json({message: "table Created!"});
};