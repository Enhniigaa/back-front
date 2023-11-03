import express from "express";
import fs, { readFile } from "fs";
import cors from 'cors'

const port = 8800;
const app = express();
app.use(express.json());
app.use(cors());

//  app.get("/", (request, response) => {
//     response.json("Mondays");
//    });
//    app.put("/night", (request, response) => {
//     response.json("Mondays");
//    });
//    app.post("/", (request, response) => {
//     response.json("Mondays");
//    });
//    app.delete("/", (request, response) => {
//     response.json("Mondays");
//    });

const users = [{
  name: "shagai", age: 17, id: 1
},
{
  name: "tulga", age: 20, id: 2
}, {
  name: "bob", age: 30, id: 3
}]
// app.get("/users/", (req, res) => {
//   res.json({ users: users })

// })
// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;

//   const user = users.filter((user) => user.id == id)[0];


//   res.json(user);

// })
// app.post("/users", (res, req) => {
//   const { name, age, id } = req.body;
//   users.push({ name, age, id });
//   res.json({ users });

// })

app.post("/user", (req, res) => {
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
            data: savedData
          })
        }
      }
    )
  })
})


app.delete("/user", (req, res) => {
  const body = req.body;
  fs.readFile("./data/user.json", (readError, data) => {
    let SavedData = JSON.parse(data);
    if (readError) {
      res.json({
        status: "read file error",
      })
    }
    const deletetData = SavedData.filter((d) => d.id !== body.id);

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
app.get("/user", (req, res) => {
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

app.put("/user", (req, res) => {
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
// app.put("/user/:id", (req, res) => {
//   const body = req.params;
//   fs.readFile("./data/user.json", (readError, data) => {
//    let savedData = JSON.parse(data);
//     if(readError) {
//       res.json({
//         status: "error"
//       })
//     }
//     const filter = savedData.filter((fil) => fil.id == body.id);
//     res.json(filter);
//   })
// });



app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);

})
