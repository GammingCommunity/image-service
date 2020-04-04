const { uploader } = require('cloudinary').v2;

const uploadImage= async (file,roomID)=>{
    var resultUrl = '';
    return uploader.upload(file, {
        tags: roomID,
        folder: "group-media/" + roomID,
    }).then((result) => {

        resultUrl = result.url;
        return resultUrl;
    })
}
module.exports = uploadImage;