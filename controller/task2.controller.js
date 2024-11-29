import { client } from "../db/index.js";

export const task2Controller = async (req, res) => {
    let queryString = [
    `insert into customer(id, name,product_name,order_id) values(1,'esmail','laptop',100);`,
    `insert into customer(id, name,product_name,order_id) values(2,'ali','laptop',200);`,
    `insert into customer(id, name,product_name,order_id) values(3,'ahmed','laptop',300);`,
    `insert into customer(id, name,product_name,order_id) values(4,'hassan','pc',400);`,
    `insert into customer(id, name,product_name,order_id) values(5,'mohamed','pc',500);`
    ];

    queryString.forEach( async(query) => {
        await client.execute(query);
    })
    
    let data = await client.execute("select * from customer");
    res.json({ message: "data inserted!" , data: data.rows });
};
