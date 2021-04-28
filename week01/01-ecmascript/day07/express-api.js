const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sql9",
    password: "admin",
    port: 5432
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

// get 
app.get("/api/v1/regions", (req, res) => {
    pool.query(
        "select region_id, region_name from regions",
        [],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows);
        }
    );
});

// findOne
app.get("/api/v1/regions/:id/:nama", (req, res) => {
    const {id} = req.params;
    pool.query(
        "select region_id, region_name from regions where region_id=$1 and region_name=$2",
        [id,nama],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows);
        }
    );
});

//Insert into region
app.post("/api/v1/regions/", (req, res) => {
    const {region_name} = req.body;
    pool.query(
        "Insert into regions (region_name) values ($1)",
        [region_name],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount);
        }
    );
});

// UPDATE
app.put("/api/v1/regions/:id", (req, res) => {
    const {id} = req.params;
    const {region_name} = req.body;
    pool.query(
        "update regions set region_name=$1 where region_id=$2",
        [region_name,id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount);
        }
    );
});

// DELETE
app.delete("/api/v1/regions/:id", (req, res) => {
    const {id} = req.params;
    pool.query(
        "delete from regions where region_id=$1",
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount);
        }
    );
});
