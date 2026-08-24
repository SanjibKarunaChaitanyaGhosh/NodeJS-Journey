// user.js
function createUser(name, email) {
  return {
    name,
    email,
    role: "student"
  };
}

module.exports = {
  createUser
};

