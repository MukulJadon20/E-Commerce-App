const verifyEmailTemplet = ({name, url}) => {
  return `
    <p>Dear ${name}</p>
    <p>Thank you for registration Binkeyit.</p>
    <a href=${url} style="color:white;background:#071263;margin-top:10px,padding:20px">
    Verify Email</a>`;
};
export default verifyEmailTemplet;
