"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s418 = exports.s417 = exports.s416 = exports.s415 = exports.s414 = exports.s413 = exports.s412 = exports.s411 = exports.s410 = exports.s409 = exports.s408 = exports.s407 = exports.s406 = exports.s405 = exports.s404 = exports.s403 = exports.s402 = exports.s401 = exports.s400 = exports.UNAVAILABLE_FOR_LEGAL_REASONS = exports.REQUEST_HEADER_FIELDS_TOO_LARGE = exports.TOO_MANY_REQUESTS = exports.PRECONDITION_REQUIRED = exports.UPGRADE_REQUIRED = exports.TOO_EARLY = exports.FAILED_DEPENDENCY = exports.LOCKED = exports.UNPROCESSABLE_ENTITY = exports.MISDIRECTED_REQUEST = exports.IM_A_TEAPOT = exports.EXPECTATION_FAILED = exports.RANGE_NOT_SATISFIABLE = exports.UNSUPPORTED_MEDIA_TYPE = exports.URI_TOO_LONG = exports.PAYLOAD_TOO_LARGE = exports.PRECONDITION_FAILED = exports.LENGTH_REQUIRED = exports.GONE = exports.CONFLICT = exports.REQUEST_TIMEOUT = exports.PROXY_AUTHENTICATION_REQUIRED = exports.NOT_ACCEPTABLE = exports.METHOD_NOT_ALLOWED = exports.NOT_FOUND = exports.FORBIDDEN = exports.PAYMENT_REQUIRED = exports.UNAUTHORIZED = exports.BAD_REQUEST = exports.s308 = exports.s307 = exports.s306 = exports.s305 = exports.s304 = exports.s303 = exports.s302 = exports.s301 = exports.s300 = exports.PERMANENT_REDIRECT = exports.TEMPORARY_REDIRECT = exports.UNUSED = exports.USE_PROXY = exports.NOT_MODIFIED = exports.SEE_OTHER = exports.FOUND = exports.MOVED_PERMANENTLY = exports.MULTIPLE_CHOICE = exports.s226 = exports.s208 = exports.s207 = exports.s206 = exports.s205 = exports.s204 = exports.s203 = exports.s202 = exports.s201 = exports.s200 = exports.IM_USED = exports.ALREADY_REPORTED = exports.MULTI_STATUS = exports.PARTIAL_CONTENT = exports.RESET_CONTENT = exports.NO_CONTENT = exports.NON_AUTHORITATIVE = exports.ACCEPTED = exports.CREATED = exports.OK = exports.s103 = exports.s102 = exports.s101 = exports.s100 = exports.EARLY_HINTS = exports.PROCESSING = exports.SWITCHING_PROTOCOL = exports.CONTINUE = exports.FAIL = exports.SERVER_ERROR = exports.CLIENT_ERROR = exports.REDIRECT = exports.SUCCESS = exports.INFORMATIONAL = void 0;
exports.s510 = exports.s508 = exports.s507 = exports.s506 = exports.s505 = exports.s504 = exports.s503 = exports.s502 = exports.s501 = exports.s500 = exports.NETWORK_AUTHENTICATION_REQUIRED = exports.NOT_EXTENDED = exports.LOOP_DETECTED = exports.INSUFFICIENT_STORAGE = exports.VARIANT_ALSO_NEGOTIATES = exports.HTTP_VERSION_NOT_SUPPORTED = exports.GATEWAY_TIMEOUT = exports.SERVICE_UNAVAILABLE = exports.BAD_GATEWAY = exports.NOT_IMPLEMENTED = exports.INTERNAL_SERVER_ERROR = exports.s451 = exports.s431 = exports.s429 = exports.s428 = exports.s426 = exports.s425 = exports.s424 = exports.s423 = exports.s422 = exports.s421 = void 0;

var INFORMATIONAL = function INFORMATIONAL(statusCode) {
  return statusCode >= 100 && statusCode < 200;
};

exports.INFORMATIONAL = INFORMATIONAL;

var SUCCESS = function SUCCESS(statusCode) {
  return statusCode >= 200 && statusCode < 300;
};

exports.SUCCESS = SUCCESS;

var REDIRECT = function REDIRECT(statusCode) {
  return statusCode >= 300 && statusCode < 400;
};

exports.REDIRECT = REDIRECT;

var CLIENT_ERROR = function CLIENT_ERROR(statusCode) {
  return statusCode >= 400 && statusCode < 500;
};

exports.CLIENT_ERROR = CLIENT_ERROR;

var SERVER_ERROR = function SERVER_ERROR(statusCode) {
  return statusCode >= 500 && statusCode < 600;
};

exports.SERVER_ERROR = SERVER_ERROR;

var FAIL = function FAIL(statusCode) {
  return statusCode < 200 || statusCode >= 300;
};

exports.FAIL = FAIL;

var CONTINUE = function CONTINUE(statusCode) {
  return statusCode === 100;
};

exports.CONTINUE = CONTINUE;

var SWITCHING_PROTOCOL = function SWITCHING_PROTOCOL(statusCode) {
  return statusCode === 101;
};

exports.SWITCHING_PROTOCOL = SWITCHING_PROTOCOL;

var PROCESSING = function PROCESSING(statusCode) {
  return statusCode === 102;
};

exports.PROCESSING = PROCESSING;

var EARLY_HINTS = function EARLY_HINTS(statusCode) {
  return statusCode === 103;
};

exports.EARLY_HINTS = EARLY_HINTS;
var s100 = CONTINUE;
exports.s100 = s100;
var s101 = SWITCHING_PROTOCOL;
exports.s101 = s101;
var s102 = PROCESSING;
exports.s102 = s102;
var s103 = EARLY_HINTS;
exports.s103 = s103;

var OK = function OK(statusCode) {
  return statusCode === 200;
};

exports.OK = OK;

var CREATED = function CREATED(statusCode) {
  return statusCode === 201;
};

exports.CREATED = CREATED;

var ACCEPTED = function ACCEPTED(statusCode) {
  return statusCode === 202;
};

exports.ACCEPTED = ACCEPTED;

var NON_AUTHORITATIVE = function NON_AUTHORITATIVE(statusCode) {
  return statusCode === 203;
};

exports.NON_AUTHORITATIVE = NON_AUTHORITATIVE;

var NO_CONTENT = function NO_CONTENT(statusCode) {
  return statusCode === 204;
};

exports.NO_CONTENT = NO_CONTENT;

var RESET_CONTENT = function RESET_CONTENT(statusCode) {
  return statusCode === 205;
};

exports.RESET_CONTENT = RESET_CONTENT;

var PARTIAL_CONTENT = function PARTIAL_CONTENT(statusCode) {
  return statusCode === 206;
};

exports.PARTIAL_CONTENT = PARTIAL_CONTENT;

var MULTI_STATUS = function MULTI_STATUS(statusCode) {
  return statusCode === 207;
};

exports.MULTI_STATUS = MULTI_STATUS;

var ALREADY_REPORTED = function ALREADY_REPORTED(statusCode) {
  return statusCode === 208;
};

exports.ALREADY_REPORTED = ALREADY_REPORTED;

var IM_USED = function IM_USED(statusCode) {
  return statusCode === 226;
};

exports.IM_USED = IM_USED;
var s200 = OK;
exports.s200 = s200;
var s201 = CREATED;
exports.s201 = s201;
var s202 = ACCEPTED;
exports.s202 = s202;
var s203 = NON_AUTHORITATIVE;
exports.s203 = s203;
var s204 = NO_CONTENT;
exports.s204 = s204;
var s205 = RESET_CONTENT;
exports.s205 = s205;
var s206 = PARTIAL_CONTENT;
exports.s206 = s206;
var s207 = MULTI_STATUS;
exports.s207 = s207;
var s208 = ALREADY_REPORTED;
exports.s208 = s208;
var s226 = IM_USED;
exports.s226 = s226;

var MULTIPLE_CHOICE = function MULTIPLE_CHOICE(statusCode) {
  return statusCode === 300;
};

exports.MULTIPLE_CHOICE = MULTIPLE_CHOICE;

var MOVED_PERMANENTLY = function MOVED_PERMANENTLY(statusCode) {
  return statusCode === 301;
};

exports.MOVED_PERMANENTLY = MOVED_PERMANENTLY;

var FOUND = function FOUND(statusCode) {
  return statusCode === 302;
};

exports.FOUND = FOUND;

var SEE_OTHER = function SEE_OTHER(statusCode) {
  return statusCode === 303;
};

exports.SEE_OTHER = SEE_OTHER;

var NOT_MODIFIED = function NOT_MODIFIED(statusCode) {
  return statusCode === 304;
};

exports.NOT_MODIFIED = NOT_MODIFIED;

var USE_PROXY = function USE_PROXY(statusCode) {
  return statusCode === 305;
};

exports.USE_PROXY = USE_PROXY;

var UNUSED = function UNUSED(statusCode) {
  return statusCode === 306;
};

exports.UNUSED = UNUSED;

var TEMPORARY_REDIRECT = function TEMPORARY_REDIRECT(statusCode) {
  return statusCode === 307;
};

exports.TEMPORARY_REDIRECT = TEMPORARY_REDIRECT;

var PERMANENT_REDIRECT = function PERMANENT_REDIRECT(statusCode) {
  return statusCode === 308;
};

exports.PERMANENT_REDIRECT = PERMANENT_REDIRECT;
var s300 = MULTIPLE_CHOICE;
exports.s300 = s300;
var s301 = MOVED_PERMANENTLY;
exports.s301 = s301;
var s302 = FOUND;
exports.s302 = s302;
var s303 = SEE_OTHER;
exports.s303 = s303;
var s304 = NOT_MODIFIED;
exports.s304 = s304;
var s305 = USE_PROXY;
exports.s305 = s305;
var s306 = UNUSED;
exports.s306 = s306;
var s307 = TEMPORARY_REDIRECT;
exports.s307 = s307;
var s308 = PERMANENT_REDIRECT;
exports.s308 = s308;

var BAD_REQUEST = function BAD_REQUEST(statusCode) {
  return statusCode === 400;
};

exports.BAD_REQUEST = BAD_REQUEST;

var UNAUTHORIZED = function UNAUTHORIZED(statusCode) {
  return statusCode === 401;
};

exports.UNAUTHORIZED = UNAUTHORIZED;

var PAYMENT_REQUIRED = function PAYMENT_REQUIRED(statusCode) {
  return statusCode === 402;
};

exports.PAYMENT_REQUIRED = PAYMENT_REQUIRED;

var FORBIDDEN = function FORBIDDEN(statusCode) {
  return statusCode === 403;
};

exports.FORBIDDEN = FORBIDDEN;

var NOT_FOUND = function NOT_FOUND(statusCode) {
  return statusCode === 404;
};

exports.NOT_FOUND = NOT_FOUND;

var METHOD_NOT_ALLOWED = function METHOD_NOT_ALLOWED(statusCode) {
  return statusCode === 405;
};

exports.METHOD_NOT_ALLOWED = METHOD_NOT_ALLOWED;

var NOT_ACCEPTABLE = function NOT_ACCEPTABLE(statusCode) {
  return statusCode === 406;
};

exports.NOT_ACCEPTABLE = NOT_ACCEPTABLE;

var PROXY_AUTHENTICATION_REQUIRED = function PROXY_AUTHENTICATION_REQUIRED(statusCode) {
  return statusCode === 407;
};

exports.PROXY_AUTHENTICATION_REQUIRED = PROXY_AUTHENTICATION_REQUIRED;

var REQUEST_TIMEOUT = function REQUEST_TIMEOUT(statusCode) {
  return statusCode === 408;
};

exports.REQUEST_TIMEOUT = REQUEST_TIMEOUT;

var CONFLICT = function CONFLICT(statusCode) {
  return statusCode === 409;
};

exports.CONFLICT = CONFLICT;

var GONE = function GONE(statusCode) {
  return statusCode === 410;
};

exports.GONE = GONE;

var LENGTH_REQUIRED = function LENGTH_REQUIRED(statusCode) {
  return statusCode === 411;
};

exports.LENGTH_REQUIRED = LENGTH_REQUIRED;

var PRECONDITION_FAILED = function PRECONDITION_FAILED(statusCode) {
  return statusCode === 412;
};

exports.PRECONDITION_FAILED = PRECONDITION_FAILED;

var PAYLOAD_TOO_LARGE = function PAYLOAD_TOO_LARGE(statusCode) {
  return statusCode === 413;
};

exports.PAYLOAD_TOO_LARGE = PAYLOAD_TOO_LARGE;

var URI_TOO_LONG = function URI_TOO_LONG(statusCode) {
  return statusCode === 414;
};

exports.URI_TOO_LONG = URI_TOO_LONG;

var UNSUPPORTED_MEDIA_TYPE = function UNSUPPORTED_MEDIA_TYPE(statusCode) {
  return statusCode === 415;
};

exports.UNSUPPORTED_MEDIA_TYPE = UNSUPPORTED_MEDIA_TYPE;

var RANGE_NOT_SATISFIABLE = function RANGE_NOT_SATISFIABLE(statusCode) {
  return statusCode === 416;
};

exports.RANGE_NOT_SATISFIABLE = RANGE_NOT_SATISFIABLE;

var EXPECTATION_FAILED = function EXPECTATION_FAILED(statusCode) {
  return statusCode === 417;
};

exports.EXPECTATION_FAILED = EXPECTATION_FAILED;

var IM_A_TEAPOT = function IM_A_TEAPOT(statusCode) {
  return statusCode === 418;
};

exports.IM_A_TEAPOT = IM_A_TEAPOT;

var MISDIRECTED_REQUEST = function MISDIRECTED_REQUEST(statusCode) {
  return statusCode === 421;
};

exports.MISDIRECTED_REQUEST = MISDIRECTED_REQUEST;

var UNPROCESSABLE_ENTITY = function UNPROCESSABLE_ENTITY(statusCode) {
  return statusCode === 422;
};

exports.UNPROCESSABLE_ENTITY = UNPROCESSABLE_ENTITY;

var LOCKED = function LOCKED(statusCode) {
  return statusCode === 423;
};

exports.LOCKED = LOCKED;

var FAILED_DEPENDENCY = function FAILED_DEPENDENCY(statusCode) {
  return statusCode === 424;
};

exports.FAILED_DEPENDENCY = FAILED_DEPENDENCY;

var TOO_EARLY = function TOO_EARLY(statusCode) {
  return statusCode === 425;
};

exports.TOO_EARLY = TOO_EARLY;

var UPGRADE_REQUIRED = function UPGRADE_REQUIRED(statusCode) {
  return statusCode === 426;
};

exports.UPGRADE_REQUIRED = UPGRADE_REQUIRED;

var PRECONDITION_REQUIRED = function PRECONDITION_REQUIRED(statusCode) {
  return statusCode === 428;
};

exports.PRECONDITION_REQUIRED = PRECONDITION_REQUIRED;

var TOO_MANY_REQUESTS = function TOO_MANY_REQUESTS(statusCode) {
  return statusCode === 429;
};

exports.TOO_MANY_REQUESTS = TOO_MANY_REQUESTS;

var REQUEST_HEADER_FIELDS_TOO_LARGE = function REQUEST_HEADER_FIELDS_TOO_LARGE(statusCode) {
  return statusCode === 431;
};

exports.REQUEST_HEADER_FIELDS_TOO_LARGE = REQUEST_HEADER_FIELDS_TOO_LARGE;

var UNAVAILABLE_FOR_LEGAL_REASONS = function UNAVAILABLE_FOR_LEGAL_REASONS(statusCode) {
  return statusCode === 451;
};

exports.UNAVAILABLE_FOR_LEGAL_REASONS = UNAVAILABLE_FOR_LEGAL_REASONS;
var s400 = BAD_REQUEST;
exports.s400 = s400;
var s401 = UNAUTHORIZED;
exports.s401 = s401;
var s402 = PAYMENT_REQUIRED;
exports.s402 = s402;
var s403 = FORBIDDEN;
exports.s403 = s403;
var s404 = NOT_FOUND;
exports.s404 = s404;
var s405 = METHOD_NOT_ALLOWED;
exports.s405 = s405;
var s406 = NOT_ACCEPTABLE;
exports.s406 = s406;
var s407 = PROXY_AUTHENTICATION_REQUIRED;
exports.s407 = s407;
var s408 = REQUEST_TIMEOUT;
exports.s408 = s408;
var s409 = CONFLICT;
exports.s409 = s409;
var s410 = GONE;
exports.s410 = s410;
var s411 = LENGTH_REQUIRED;
exports.s411 = s411;
var s412 = PRECONDITION_FAILED;
exports.s412 = s412;
var s413 = PAYLOAD_TOO_LARGE;
exports.s413 = s413;
var s414 = URI_TOO_LONG;
exports.s414 = s414;
var s415 = UNSUPPORTED_MEDIA_TYPE;
exports.s415 = s415;
var s416 = RANGE_NOT_SATISFIABLE;
exports.s416 = s416;
var s417 = EXPECTATION_FAILED;
exports.s417 = s417;
var s418 = IM_A_TEAPOT;
exports.s418 = s418;
var s421 = MISDIRECTED_REQUEST;
exports.s421 = s421;
var s422 = UNPROCESSABLE_ENTITY;
exports.s422 = s422;
var s423 = LOCKED;
exports.s423 = s423;
var s424 = FAILED_DEPENDENCY;
exports.s424 = s424;
var s425 = TOO_EARLY;
exports.s425 = s425;
var s426 = UPGRADE_REQUIRED;
exports.s426 = s426;
var s428 = PRECONDITION_REQUIRED;
exports.s428 = s428;
var s429 = TOO_MANY_REQUESTS;
exports.s429 = s429;
var s431 = REQUEST_HEADER_FIELDS_TOO_LARGE;
exports.s431 = s431;
var s451 = UNAVAILABLE_FOR_LEGAL_REASONS;
exports.s451 = s451;

var INTERNAL_SERVER_ERROR = function INTERNAL_SERVER_ERROR(statusCode) {
  return statusCode === 500;
};

exports.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;

var NOT_IMPLEMENTED = function NOT_IMPLEMENTED(statusCode) {
  return statusCode === 501;
};

exports.NOT_IMPLEMENTED = NOT_IMPLEMENTED;

var BAD_GATEWAY = function BAD_GATEWAY(statusCode) {
  return statusCode === 502;
};

exports.BAD_GATEWAY = BAD_GATEWAY;

var SERVICE_UNAVAILABLE = function SERVICE_UNAVAILABLE(statusCode) {
  return statusCode === 503;
};

exports.SERVICE_UNAVAILABLE = SERVICE_UNAVAILABLE;

var GATEWAY_TIMEOUT = function GATEWAY_TIMEOUT(statusCode) {
  return statusCode === 504;
};

exports.GATEWAY_TIMEOUT = GATEWAY_TIMEOUT;

var HTTP_VERSION_NOT_SUPPORTED = function HTTP_VERSION_NOT_SUPPORTED(statusCode) {
  return statusCode === 505;
};

exports.HTTP_VERSION_NOT_SUPPORTED = HTTP_VERSION_NOT_SUPPORTED;

var VARIANT_ALSO_NEGOTIATES = function VARIANT_ALSO_NEGOTIATES(statusCode) {
  return statusCode === 506;
};

exports.VARIANT_ALSO_NEGOTIATES = VARIANT_ALSO_NEGOTIATES;

var INSUFFICIENT_STORAGE = function INSUFFICIENT_STORAGE(statusCode) {
  return statusCode === 507;
};

exports.INSUFFICIENT_STORAGE = INSUFFICIENT_STORAGE;

var LOOP_DETECTED = function LOOP_DETECTED(statusCode) {
  return statusCode === 508;
};

exports.LOOP_DETECTED = LOOP_DETECTED;

var NOT_EXTENDED = function NOT_EXTENDED(statusCode) {
  return statusCode === 510;
};

exports.NOT_EXTENDED = NOT_EXTENDED;

var NETWORK_AUTHENTICATION_REQUIRED = function NETWORK_AUTHENTICATION_REQUIRED(statusCode) {
  return statusCode === 511;
};

exports.NETWORK_AUTHENTICATION_REQUIRED = NETWORK_AUTHENTICATION_REQUIRED;
var s500 = INTERNAL_SERVER_ERROR;
exports.s500 = s500;
var s501 = NOT_IMPLEMENTED;
exports.s501 = s501;
var s502 = BAD_GATEWAY;
exports.s502 = s502;
var s503 = SERVICE_UNAVAILABLE;
exports.s503 = s503;
var s504 = GATEWAY_TIMEOUT;
exports.s504 = s504;
var s505 = HTTP_VERSION_NOT_SUPPORTED;
exports.s505 = s505;
var s506 = VARIANT_ALSO_NEGOTIATES;
exports.s506 = s506;
var s507 = INSUFFICIENT_STORAGE;
exports.s507 = s507;
var s508 = LOOP_DETECTED;
exports.s508 = s508;
var s510 = NOT_EXTENDED;
exports.s510 = s510;