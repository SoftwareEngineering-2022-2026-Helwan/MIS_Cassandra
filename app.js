import express from "express";
import {taskRouter} from './router/task.router.js';

const app = express();
app.use(express.json());

app.use(taskRouter);

/*
--to get rows in desc order with parition key
    select * from customer where product_name='laptop' ORDER BY id DESC ;

--to create materialize view 
    create materialized view task.customerByOrders 
    as select * from task.customer 
    where id is not null and product_name is not null and order_id is not null
    primary key (order_id,product_name,id);

-- to use materialized view    
    select * from customerByOrders where order_id=100;
*/


app.listen(8000, "127.0.0.1",() => {
    console.log("Server started on port 8000");
})