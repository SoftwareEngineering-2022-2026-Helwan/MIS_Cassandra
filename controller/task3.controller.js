import { client } from "../db/index.js";

export const task3Controller = async (req, res) => {

    let queryString = `update customer set name='aya' where product_name='laptop' and id=1;`;
    
     await client.execute(queryString);

    let selection = `select * from customer where product_name='laptop' and id=1;`;

    let data = await client.execute(selection);

    res.json({ message: "data updated!" , data: data.rows });
};
