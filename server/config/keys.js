const mlabPw = process.env.MLAB_PW;
const secretOrKey = process.env.SECRET_OR_KEY;

module.exports = {
    mongoURI: `mongodb+srv://matchbuilderco:${mlabPw}@mbcluster1-tgqpe.mongodb.net/test?retryWrites=true&w=majority`,
    secretOrKey
  }