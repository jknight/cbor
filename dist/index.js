// Copyright (C) 2020 Jan Procházka. 
// This code is licensed under the MIT license. (see LICENSE for more details)
import { decode } from './decode/index';
import { encode } from './encode/index';
var CBOR = /** @class */ (function () {
    function CBOR() {
    }
    /**
     * Decodes a CBOR object into JSON
     *
     * @param buffer The bytes to decode
     * @param allowErrors Whether to throw errors (true) or return null on failure (false). False by default
     */
    CBOR.decode = function (buffer, allowErrors) {
        if (allowErrors === void 0) { allowErrors = false; }
        return decode(buffer, allowErrors);
    };
    /**
     * Encodes a JSON value into CBOR
     *
     * @param data The value to encode
     * @param allowErrors Whether to throw errors (true) or return null on failure (false). False by default
     */
    CBOR.encode = function (data, allowErrors) {
        if (allowErrors === void 0) { allowErrors = false; }
        return encode(data, allowErrors);
    };
    /**
     * Same as `CBOR.encode`, but writes to the supplied buffer.
     *
     * This function can be used to avoid many small allocations by supplying
     * a sufficiently large buffer.
     *
     * @param data The value to encode
     * @param buffer The buffer to write to
     * @param allowErrors Whether to throw errors (true) or return null on failure (false). False by default
     */
    CBOR.encodeInto = function (data, buffer, allowErrors) {
        if (allowErrors === void 0) { allowErrors = false; }
        return encode(data, allowErrors, buffer);
    };
    return CBOR;
}());
export { CBOR };
export default CBOR;
