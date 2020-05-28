export const INFORMATIONAL = statusCode => statusCode >= 100 && statusCode < 200
export const SUCCESS = statusCode => statusCode >= 200 && statusCode < 300
export const REDIRECT = statusCode => statusCode >= 300 && statusCode < 400
export const CLIENT_ERROR = statusCode => statusCode >= 400 && statusCode < 500
export const SERVER_ERROR = statusCode => statusCode >= 500 && statusCode < 600

export const FAIL = statusCode => statusCode < 200 || statusCode >= 300

export const CONTINUE = statusCode => statusCode === 100
export const SWITCHING_PROTOCOL = statusCode => statusCode === 101
export const PROCESSING = statusCode => statusCode === 102
export const EARLY_HINTS = statusCode => statusCode === 103

export const OK = statusCode => statusCode === 200
export const CREATED = statusCode => statusCode === 201
export const ACCEPTED = statusCode => statusCode === 202
export const NON_AUTHORITATIVE = statusCode => statusCode === 203
export const NO_CONTENT = statusCode => statusCode === 204
export const RESET_CONTENT = statusCode => statusCode === 205
export const PARTIAL_CONTENT = statusCode => statusCode === 206
export const MULTI_STATUS = statusCode => statusCode === 207
export const ALREADY_REPORTED = statusCode => statusCode === 208
export const IM_USED = statusCode => statusCode === 226

export const MULTIPLE_CHOICE = statusCode => statusCode === 300
export const MOVED_PERMANENTLY = statusCode => statusCode === 301
export const FOUND = statusCode => statusCode === 302
export const SEE_OTHER = statusCode => statusCode === 303
export const NOT_MODIFIED = statusCode => statusCode === 304
export const USE_PROXY = statusCode => statusCode === 305
export const UNUSED = statusCode => statusCode === 306
export const TEMPORARY_REDIRECT = statusCode => statusCode === 307
export const PERMANENT_REDIRECT = statusCode => statusCode === 308

export const BAD_REQUEST = statusCode => statusCode === 400
export const UNAUTHORIZED = statusCode => statusCode === 401
export const PAYMENT_REQUIRED = statusCode => statusCode === 402
export const FORBIDDEN = statusCode => statusCode === 403
export const NOT_FOUND = statusCode => statusCode === 404
export const METHOD_NOT_ALLOWED = statusCode => statusCode === 405
export const NOT_ACCEPTABLE = statusCode => statusCode === 406
export const PROXY_AUTHENTICATION_REQUIRED = statusCode => statusCode === 407
export const REQUEST_TIMEOUT = statusCode => statusCode === 408
export const CONFLICT = statusCode => statusCode === 409
export const GONE = statusCode => statusCode === 410
export const LENGTH_REQUIRED = statusCode => statusCode === 411
export const PRECONDITION_FAILED = statusCode => statusCode === 412
export const PAYLOAD_TOO_LARGE = statusCode => statusCode === 413
export const URI_TOO_LONG = statusCode => statusCode === 414
export const UNSUPPORTED_MEDIA_TYPE = statusCode => statusCode === 415
export const RANGE_NOT_SATISFIABLE = statusCode => statusCode === 416
export const EXPECTATION_FAILED = statusCode => statusCode === 417
export const IM_A_TEAPOT = statusCode => statusCode === 418
export const MISDIRECTED_REQUEST = statusCode => statusCode === 421
export const UNPROCESSABLE_ENTITY = statusCode => statusCode === 422
export const LOCKED = statusCode => statusCode === 423
export const FAILED_DEPENDENCY = statusCode => statusCode === 424
export const TOO_EARLY = statusCode => statusCode === 425
export const UPGRADE_REQUIRED = statusCode => statusCode === 426
export const PRECONDITION_REQUIRED = statusCode => statusCode === 428
export const TOO_MANY_REQUESTS = statusCode => statusCode === 429
export const REQUEST_HEADER_FIELDS_TOO_LARGE = statusCode => statusCode === 431
export const UNAVAILABLE_FOR_LEGAL_REASONS = statusCode => statusCode === 451

export const INTERNAL_SERVER_ERROR = statusCode => statusCode === 500
export const NOT_IMPLEMENTED = statusCode => statusCode === 501
export const BAD_GATEWAY = statusCode => statusCode === 502
export const SERVICE_UNAVAILABLE = statusCode => statusCode === 503
export const GATEWAY_TIMEOUT = statusCode => statusCode === 504
export const HTTP_VERSION_NOT_SUPPORTED = statusCode => statusCode === 505
export const VARIANT_ALSO_NEGOTIATES = statusCode => statusCode === 506
export const INSUFFICIENT_STOREAGE = statusCode => statusCode === 507
export const LOOP_DETECTED = statusCode => statusCode === 508
export const NOT_EXTENDED = statusCode => statusCode === 510
export const NETWORK_AUTHENTICATION_REQUIRED = statusCode => statusCode === 511
