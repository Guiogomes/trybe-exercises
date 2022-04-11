enum StatusCode {
  OK = 200,
  CREATED,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export default StatusCode; 