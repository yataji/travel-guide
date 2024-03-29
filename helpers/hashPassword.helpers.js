const bcrypt = require('bcrypt')

exports.hashedPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}
exports.matshPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}