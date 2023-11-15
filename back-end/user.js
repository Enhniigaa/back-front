import express from "express";
import fs from "fs";
const router = express.Router();

router.use((req, res, next) => {
    next()
    // if (req.header.token) {
    // } else {
    //     res.status(401).json({
    //         "message": "Please login"
    //     })
    // }
})

router.get("/user", (req, res) => {
    const body = req.body;
    fs.readFile("./data/user.json", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({
                status: "error",
            })
        } res.json({
            status: "success",
            data: savedData
        })
    })
});

router.post("/user", (req, res) => {
    const body = req.body;
    fs.readFile("./data/user.json", (readError, data) => {
        if (readError) {
            res.json({
                status: "read file error",
            })
        }
        let savedData = JSON.parse(data);
        const newUser = {
            id: Date.now().toString(),
            username: body.username,
            age: body.age,
        };

        savedData.push(newUser);

        fs.writeFile(
            "./data/user.json",
            JSON.stringify(savedData),
            (writeError) => {
                if (writeError) {
                    res.json({
                        status: "error",
                    })
                } else {
                    res.json({
                        status: "task successfully done",
                        data: savedData,
                    })
                }
            }
        )
    })
})


router.delete("/user", (req, res) => {
    const body = req.body;

    fs.readFile("./data/user.json", "utf8", (readError, data) => {
        let SavedData = JSON.parse(data);
        if (readError) {
            res.json({
                status: "read file error",
            })
        }

        console.log('body', body);

        const deletetData = SavedData.filter((d) => d.id !== body.userId);

        console.log('deletetData', deletetData);
        console.log(JSON.stringify(deletetData));

        fs.writeFile(
            "./data/user.json",
            JSON.stringify(deletetData),
            (writeError) => {
                if (writeError) {
                    res.json({
                        status: "error",
                    })
                } else {
                    res.json({
                        status: "task done successfully",
                        data: deletetData
                    })
                }
            }
        )
    })
})

router.put("/user", (req, res) => {
    const body = req.body;
    fs.readFile("./data/user.json", (readError, data) => {
        let SavedData = JSON.parse(data);
        if (readError) {
            res.json({
                status: "error",
            })
        }
        const update = SavedData.map((upd) => {
            if (body.id === upd.id) {
                return {
                    ...upd,
                    ...body
                }

            } return upd;

        });
        fs.writeFile("./data/user.json",
            JSON.stringify(update),
            (writeError) => {
                if (writeError) {
                    res.json({
                        status: "error"
                    })
                } else {
                    res.json({
                        status: "task done successfully",
                        data: update
                    })
                }
            }

        )
    })
});

export default router;

// module.exports = router;
// require("")