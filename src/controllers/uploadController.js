const s3 = require("./../../config/s3Client");

exports.uploadFile = async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const fileName = `${Date.now()}-${file.originalname}`;
    const s3Params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    try {
        const uploadResult = await s3.upload(s3Params).promise();
        res.json({ fileUrl: uploadResult.Location });
    } catch (error) {
        console.error("Error uploading file to S3:", error);
        res.status(500).json({ error: "Error uploading file" });
    }
};
