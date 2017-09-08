const userData = require("./userData.json");

module.exports = {
  getAllUsers: (req, res, next) => {
    let foundUsers = [];
    if (req.query.age) {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].age < req.query.age) foundUsers.push(userData[i]);
      }
      res.status(200).json(foundUsers);
    }
    if (req.query.lastname) {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].last_name == req.query.lastname) {
          foundUsers.push(userData[i]);
        }
      }
      res.status(200).json(foundUsers);
    }
    if (req.query.email) {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == req.query.email) {
          foundUsers.push(userData[i]);
        }
      }
      res.status(200).json(foundUsers);
    }
    if (req.query.favorites) {
      for (var i = 0; i < userData.length; i++) {
        for (var j = 0; j < userData[i].favorites.length; j++) {
          if (userData[i].favorites[j] == req.query.favorites) {
            foundUsers.push(userData[i]);
          }
        }
      }
      res.status(200).json(foundUsers);
    } else {
      res.status(200).json(userData);
    }
  },
  addUser: (req, res, next) => {
    let userId = userData.length + 1;
    req.body.id = userId;
    userData.push(req.body);
    res.status(200).json(userData);
  },
  deleteUser: (req, res, next) => {
    let deleteId = Number(req.params.userId);
    for (var i = 0; i < userData.length; i++) {
      if (deleteId === userData[i].id) {
        userData.splice(i, 1);
      }
    }
    res.status(200).json(userData);
  },
  getUserById: (req, res, next) => {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].id === Number(req.params.userId)) {
        res.status(200).json(userData[i]);
      }
    }

    res.status(404).json(null);
  },
  getAdmins: (req, res, next) => {
    let myArr = [];
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].type === "admin") {
        myArr.push(userData[i]);
      }
    }
    res.status(200).json(myArr);
  },
  getNonAdmins: (req, res, next) => {
    let myArr = [];
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].type != "admin") {
        myArr.push(userData[i]);
      }
    }
    res.status(200).json(myArr);
  },
  getByType: (req, res, next) => {
    let myArr = [];
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].type === req.params.userType) {
        myArr.push(userData[i]);
      }
    }
    res.status(200).json(myArr);
  },
  updateUser: (req, res, next) => {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].id === Number(req.params.userId)) {
        if (req.body.id) {
          userData[i].id = req.body.id;
        }
        if (req.body.first_name) {
          userData[i].first_name = req.body.first_name;
        }

        if (req.body.last_name) {
          userData[i].last_name = req.body.last_name;
        }

        if (req.body.email) {
          userData[i].email = req.body.email;
        }

        if (req.body.gender) {
          userData[i].gender = req.body.gender;
        }

        if (req.body.language) {
          userData[i].language = req.body.language;
        }

        if (req.body.age) {
          userData[i].age = req.body.age;
        }

        if (req.body.city) {
          userData[i].city = req.body.city;
        }

        if (req.body.state) {
          userData[i].state = req.body.state;
        }
        if (req.body.type) {
          userData[i].type = req.body.type;
        }

        if (req.body.favorites) {
          userData[i].favorites = req.body.favorites;
        }
      }
    }
    res.status(200).json(userData);
  }
};
