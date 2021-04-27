import S3 from 'react-aws-s3';

const config = {
  bucketName: process.env.REACT_APP_AMAZON_S3_BUCKET_NAME,
  region: process.env.REACT_APP_AMAZON_S3_REGION,
  accessKeyId: process.env.REACT_APP_AMAZON_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AMAZON_S3_SECURITY_KEY,
  Version: '2012-10-17',
  Id: 'PolicyForCloudFrontPrivateContent',
  Statement: [
    {
      Effect: 'Allow',
      Principal: {
        AWS: `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${process.env.REACT_APP_AMAZON_S3_OAI_ID}`
      },
      Action: 's3:GetObject',
      Resource: `arn:aws:s3:::${process.env.REACT_APP_AMAZON_S3_BUCKET_NAME}/*`
    }
  ]
};

const S3Client = new S3(config);

export const uploadImgToAmazon = async (file, fileName) => {
  try {
    const response = await S3Client.uploadFile(file, fileName);

    return response.location;
  } catch (e) {
    throw new Error(e);
  }
};
