
export type Conditional<T> = (input: T) => boolean;
export type Scope<T, U> = (input: T) => U;
export type Case<T, U> = [Conditional<T>, Scope<T, U>]; 

export type ErrorCallback = (error: Error) => void; 
export type Catcher<U> = (onError: ErrorCallback) => U | undefined;

export interface FSwitch {
  <T = any, U = any>(input: T, ...cases: Case<T, U>[]): U;
  try: <T = any, U = any>(input: T, ...cases: Case<T, U>[]) => { catch: Catcher<U> }; 
}

export declare const fSwitch: FSwitch;
export declare const fCase: <T, U>(conditional: Conditional<T>, scope: Scope<T, U>) => Case<T, U>;
export declare const fDefault: <T, U>(scope: Scope<T, U>) => Scope<T, U>;
 
export declare const INFORMATIONAL: Conditional<number> 
export declare const SUCCESS: Conditional<number> 
export declare const REDIRECT: Conditional<number> 
export declare const CLIENT_ERROR: Conditional<number> 
export declare const SERVER_ERROR: Conditional<number> 

export declare const FAIL: Conditional<number> 

export declare const CONTINUE: Conditional<number> 
export declare const SWITCHING_PROTOCOL: Conditional<number> 
export declare const PROCESSING: Conditional<number> 
export declare const EARLY_HINTS: Conditional<number> 

export declare const s100: Conditional<number> 
export declare const s101: Conditional<number> 
export declare const s102: Conditional<number> 
export declare const s103: Conditional<number> 

export declare const OK: Conditional<number> 
export declare const CREATED: Conditional<number> 
export declare const ACCEPTED: Conditional<number> 
export declare const NON_AUTHORITATIVE: Conditional<number> 
export declare const NO_CONTENT: Conditional<number> 
export declare const RESET_CONTENT: Conditional<number> 
export declare const PARTIAL_CONTENT: Conditional<number> 
export declare const MULTI_STATUS: Conditional<number> 
export declare const ALREADY_REPORTED: Conditional<number> 
export declare const IM_USED: Conditional<number> 

export declare const s200: Conditional<number> 
export declare const s201: Conditional<number> 
export declare const s202: Conditional<number> 
export declare const s203: Conditional<number> 
export declare const s204: Conditional<number> 
export declare const s205: Conditional<number> 
export declare const s206: Conditional<number> 
export declare const s207: Conditional<number> 
export declare const s208: Conditional<number> 
export declare const s226: Conditional<number> 

export declare const MULTIPLE_CHOICE: Conditional<number>
export declare const MOVED_PERMANENTLY: Conditional<number>
export declare const FOUND: Conditional<number>
export declare const SEE_OTHER: Conditional<number>
export declare const NOT_MODIFIED: Conditional<number>
export declare const USE_PROXY: Conditional<number>
export declare const UNUSED: Conditional<number>
export declare const TEMPORARY_REDIRECT: Conditional<number>
export declare const PERMANENT_REDIRECT: Conditional<number>

export declare const s300: Conditional<number>
export declare const s301: Conditional<number>
export declare const s302: Conditional<number>
export declare const s303: Conditional<number>
export declare const s304: Conditional<number>
export declare const s305: Conditional<number>
export declare const s306: Conditional<number>
export declare const s307: Conditional<number>
export declare const s308: Conditional<number>

export declare const BAD_REQUEST: Conditional<number> 
export declare const UNAUTHORIZED: Conditional<number> 
export declare const PAYMENT_REQUIRED: Conditional<number> 
export declare const FORBIDDEN: Conditional<number> 
export declare const NOT_FOUND: Conditional<number> 
export declare const METHOD_NOT_ALLOWED: Conditional<number> 
export declare const NOT_ACCEPTABLE: Conditional<number> 
export declare const PROXY_AUTHENTICATION_REQUIRED: Conditional<number> 
export declare const REQUEST_TIMEOUT: Conditional<number> 
export declare const CONFLICT: Conditional<number> 
export declare const GONE: Conditional<number> 
export declare const LENGTH_REQUIRED: Conditional<number> 
export declare const PRECONDITION_FAILED: Conditional<number> 
export declare const PAYLOAD_TOO_LARGE: Conditional<number> 
export declare const URI_TOO_LONG: Conditional<number> 
export declare const UNSUPPORTED_MEDIA_TYPE: Conditional<number> 
export declare const RANGE_NOT_SATISFIABLE: Conditional<number> 
export declare const EXPECTATION_FAILED: Conditional<number> 
export declare const IM_A_TEAPOT: Conditional<number> 
export declare const MISDIRECTED_REQUEST: Conditional<number> 
export declare const UNPROCESSABLE_ENTITY: Conditional<number> 
export declare const LOCKED: Conditional<number> 
export declare const FAILED_DEPENDENCY: Conditional<number> 
export declare const TOO_EARLY: Conditional<number> 
export declare const UPGRADE_REQUIRED: Conditional<number> 
export declare const PRECONDITION_REQUIRED: Conditional<number> 
export declare const TOO_MANY_REQUESTS: Conditional<number> 
export declare const REQUEST_HEADER_FIELDS_TOO_LARGE: Conditional<number> 
export declare const UNAVAILABLE_FOR_LEGAL_REASONS: Conditional<number> 

export declare const s400: Conditional<number>
export declare const s401: Conditional<number>
export declare const s402: Conditional<number>
export declare const s403: Conditional<number>
export declare const s404: Conditional<number>
export declare const s405: Conditional<number>
export declare const s406: Conditional<number>
export declare const s407: Conditional<number>
export declare const s408: Conditional<number>
export declare const s409: Conditional<number>
export declare const s410: Conditional<number>
export declare const s411: Conditional<number>
export declare const s412: Conditional<number>
export declare const s413: Conditional<number>
export declare const s414: Conditional<number>
export declare const s415: Conditional<number>
export declare const s416: Conditional<number>
export declare const s417: Conditional<number>
export declare const s418: Conditional<number>
export declare const s421: Conditional<number>
export declare const s422: Conditional<number>
export declare const s423: Conditional<number>
export declare const s424: Conditional<number>
export declare const s425: Conditional<number>
export declare const s426: Conditional<number>
export declare const s428: Conditional<number>
export declare const s429: Conditional<number>
export declare const s431: Conditional<number>
export declare const s451: Conditional<number>

export declare const INTERNAL_SERVER_ERROR: Conditional<number> 
export declare const NOT_IMPLEMENTED: Conditional<number> 
export declare const BAD_GATEWAY: Conditional<number> 
export declare const SERVICE_UNAVAILABLE: Conditional<number> 
export declare const GATEWAY_TIMEOUT: Conditional<number> 
export declare const HTTP_VERSION_NOT_SUPPORTED: Conditional<number> 
export declare const VARIANT_ALSO_NEGOTIATES: Conditional<number> 
export declare const INSUFFICIENT_STORAGE: Conditional<number> 
export declare const LOOP_DETECTED: Conditional<number> 
export declare const NOT_EXTENDED: Conditional<number> 
export declare const NETWORK_AUTHENTICATION_REQUIRED: Conditional<number> 

export declare const s500: Conditional<number>
export declare const s501: Conditional<number>
export declare const s502: Conditional<number>
export declare const s503: Conditional<number>
export declare const s504: Conditional<number>
export declare const s505: Conditional<number>
export declare const s506: Conditional<number>
export declare const s507: Conditional<number>
export declare const s508: Conditional<number>
export declare const s510: Conditional<number>
