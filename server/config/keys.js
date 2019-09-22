const mlabPw = process.env.MLAB_PW;

module.exports = {
    mongoURI: `mongodb+srv://matchbuilderco:${mlabPw}@mbcluster1-tgqpe.mongodb.net/test?retryWrites=true&w=majority`
  }