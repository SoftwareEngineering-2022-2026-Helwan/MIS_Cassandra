import { client } from "../db/index.js";

export const task4Controller = async (req, res) => {

    let queryString = `delete from customer where product_name='pc' and id=4;`;
    let selection = `select * from customer where product_name='pc' and id=4;`;
    
    let data = await client.execute(selection);
    await client.execute(queryString);



    res.json({ message: "data deleted!" , data: data.rows });
    
};
