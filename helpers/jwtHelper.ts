// import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

// // create jwt token
// const create_token = (
//   payload_data: object,
//   secret_key: Secret,
//   expire_time: string
// ) => {
//   return jwt.sign(payload_data, secret_key, { expiresIn: expire_time })
// }

// // verify the token
// const verify_token = (token: string, secret_key: Secret): JwtPayload => {
//   return jwt.verify(token, secret_key) as JwtPayload
// }

// export const jwtHelper = {
//   create_token,
//   verify_token,
// }

import jwtDecode from "jwt-decode";

export const decodedToken = (token: string) => {
	return jwtDecode(token);
};
