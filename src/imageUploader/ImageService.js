// const {pool} = require("../../../config/database");const baseResponse = require("../utility/baseResponseStatus");
const { response, errResponse } = require("../utility/response");
const ImageDao = require("./ImageDao");
const AWS = require("aws-sdk");
const multer = require("multer");
const multers3 = require("multer-s3");

exports.postImagesInConfirmation = async function(confirmationId, fileLocation) {

    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const insertResult = await ImageDao.insertConfirmationImages(connection, confirmationId, fileLocation);

        console.log(insertResult)
    }
    catch(err) {
        return (errResponse(baseResponse.DB_ERROR));
    }

    connection.release();

    return response(baseResponse.SUCCESS);

}