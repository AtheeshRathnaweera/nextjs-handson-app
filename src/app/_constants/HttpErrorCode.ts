export enum HttpErrorCode {
  // User-related errors
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXIST = 1002,
  INCORRECT_PASSWORD = 1003,
  // API/fetch errors
  FETCH_FAILED = 2001, // General fetch failure
  EXTERNAL_API_ERROR = 2002, // Error with an external API call
  DATA_RETRIEVAL_FAILED = 2003, // Failure in retrieving specific data
  // request errors
  INVALID_REQUEST = 4001
}