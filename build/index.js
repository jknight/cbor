!function(t){var e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){"use strict";var i,s=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.View=e.OutOfBoundsError=void 0;var n=function(t){function e(e,r){var i=t.call(this,"View offset out of bounds: "+e+" > "+r)||this;return i.what="View offset out of bounds: "+e+" > "+r,i}return s(e,t),e.prototype.toString=function(){return"OutOfBoundsError: "+this.what},e}(Error);e.OutOfBoundsError=n;var o=function(){function t(t,e){void 0===e&&(e=0),this.buffer=t,this.offset=e,this.view=new DataView(this.buffer,0,this.buffer.byteLength),this.arrayView=new Uint8Array(this.buffer)}return t.prototype.slice=function(t,e){return this.buffer.slice(t,e)},t.prototype.getFloat32=function(){if(this.offset+=4,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getFloat32(this.offset-4,!1)},t.prototype.getFloat64=function(){if(this.offset+=8,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getFloat64(this.offset-8,!1)},t.prototype.getInt8=function(){if(this.offset+=1,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getInt8(this.offset-1)},t.prototype.getInt16=function(){if(this.offset+=2,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getInt16(this.offset-2,!1)},t.prototype.getInt32=function(){if(this.offset+=4,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getInt32(this.offset-4,!1)},t.prototype.getInt64=function(){if(this.offset+=8,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getBigInt64(this.offset-8,!1)},t.prototype.getUint8=function(){if(this.offset+=1,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getUint8(this.offset-1)},t.prototype.getUint16=function(){if(this.offset+=2,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getUint16(this.offset-2,!1)},t.prototype.getUint32=function(){if(this.offset+=4,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getUint32(this.offset-4,!1)},t.prototype.getUint64=function(){if(this.offset+=8,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return this.view.getBigUint64(this.offset-8,!1)},t.prototype.getBytes=function(t){if(this.offset+=t,this.offset>this.arrayView.byteLength)throw new n(this.offset,this.arrayView.byteLength);return new Uint8Array(this.view.buffer.slice(this.offset-t,this.offset))},t.prototype.setFloat32=function(t){this.offset+=4,this.resize(this.offset),this.view.setFloat32(this.offset-4,t,!1)},t.prototype.setFloat64=function(t){this.offset+=8,this.resize(this.offset),this.view.setFloat64(this.offset-8,t,!1)},t.prototype.setInt8=function(t){this.offset+=1,this.resize(this.offset),this.view.setInt8(this.offset-1,t)},t.prototype.setInt16=function(t){this.offset+=2,this.resize(this.offset),this.view.setInt16(this.offset-2,t,!1)},t.prototype.setInt32=function(t){this.offset+=4,this.resize(this.offset),this.view.setInt32(this.offset-4,t,!1)},t.prototype.setInt64=function(t){this.offset+=8,this.resize(this.offset),this.view.setBigInt64(this.offset-8,t,!1)},t.prototype.setUint8=function(t){this.offset+=1,this.resize(this.offset),this.view.setUint8(this.offset-1,t)},t.prototype.setUint16=function(t){this.offset+=2,this.resize(this.offset),this.view.setUint16(this.offset-2,t,!1)},t.prototype.setUint32=function(t){this.offset+=4,this.resize(this.offset),this.view.setUint32(this.offset-4,t,!1)},t.prototype.setUint64=function(t){this.offset+=8,this.resize(this.offset),this.view.setBigUint64(this.offset-8,t,!1)},t.prototype.setBytes=function(t){this.offset+=t.byteLength,this.resize(this.offset),this.arrayView.set(t,this.offset-t.byteLength)},t.prototype.resize=function(t){if(!(this.buffer.byteLength>t)){var e=this.buffer;this.buffer=new ArrayBuffer(t),this.arrayView=new Uint8Array(this.buffer),this.arrayView.set(new Uint8Array(e)),this.view=new DataView(this.buffer)}},t}();e.View=o},function(t,e,r){"use strict";var i,s,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ParseError=e.ErrorCode=void 0,function(t){t[t.UNEXPECTED_EOF=0]="UNEXPECTED_EOF",t[t.REACHED_MAX_NESTING_DEPTH=1]="REACHED_MAX_NESTING_DEPTH",t[t.EMPTY_STACK=2]="EMPTY_STACK",t[t.UNEXPECTED_OBJECT_END=3]="UNEXPECTED_OBJECT_END",t[t.UNEXPECTED_ARRAY_END=4]="UNEXPECTED_ARRAY_END",t[t.UNSUPPORTED_BYTE_STRING=5]="UNSUPPORTED_BYTE_STRING",t[t.WRONG_STRING_FORMAT=6]="WRONG_STRING_FORMAT",t[t.UNSUPPORTED_HALF=7]="UNSUPPORTED_HALF",t[t.UNEXPECTED_TOKEN=8]="UNEXPECTED_TOKEN",t[t.UNEXPECTED_VALUE=9]="UNEXPECTED_VALUE",t[t.UNSUPPORTED_64_BIT=10]="UNSUPPORTED_64_BIT"}(s=e.ErrorCode||(e.ErrorCode={}));var o=function(t){function e(e){var r=t.call(this,e)||this;return r.what=e,r}return n(e,t),e.prototype.toString=function(){return"ParseError: "+this.what},e.build=function(t,r){switch(t){case s.UNEXPECTED_EOF:return new e("Unexpected EOF at offset "+(r?"":r.offset));case s.REACHED_MAX_NESTING_DEPTH:return new e("Max recursion depth reached: "+(r?"":r.depth));case s.EMPTY_STACK:return new e("Unexpected value before the start of an object or array");case s.UNEXPECTED_OBJECT_END:return new e("Unexpected end of object before the start of an object");case s.UNEXPECTED_ARRAY_END:return new e("Unexpected end of array before the start of an array");case s.UNSUPPORTED_BYTE_STRING:return new e("byte strings are unsupported");case s.WRONG_STRING_FORMAT:return new e("Expected string length value range 0x60 to 0x7F, found: "+r.token);case s.UNSUPPORTED_HALF:return new e("Half (IEEE754 binary16) is unsupported");case s.UNEXPECTED_TOKEN:return new e("Unexpected token: "+r.token);case s.UNEXPECTED_VALUE:return new e("Found value before key in object");case s.UNSUPPORTED_64_BIT:return new e("64-bit values are unsupported");default:return new e("Unknown error code")}},e}(Error);e.ParseError=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getType=e.NUMERIC_LIMITS=void 0;var i=r(3);e.NUMERIC_LIMITS={UINT8:Math.pow(2,8)-1,UINT16:Math.pow(2,16)-1,UINT32:Math.pow(2,32)-1,UINT64:BigInt("18446744073709552000"),FLOAT32:Math.pow(2,23)-1,FLOAT64:Number.MAX_SAFE_INTEGER},e.getType=function(t){switch(!0){case void 0===t:return"undefined";case null===t:return"null";case"boolean"==typeof t:return"boolean";case"number"==typeof t:return"number";case"bigint"==typeof t:throw i.WriteError.build(i.ErrorCode.UNSUPPORTED_BIGINT);case"string"==typeof t:return"string";case Array.isArray(t):return"array";case"object"==typeof t:return"object";default:throw i.WriteError.build(i.ErrorCode.UNEXPECTED_TOKEN,{token:t})}}},function(t,e,r){"use strict";var i,s=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.WriteError=e.ErrorCode=void 0;var n,o=r(2);!function(t){t[t.UNEXPECTED_TOKEN=0]="UNEXPECTED_TOKEN",t[t.UNSUPPORTED_BIGINT=1]="UNSUPPORTED_BIGINT",t[t.STRING_TOO_LARGE=2]="STRING_TOO_LARGE",t[t.ARRAY_TOO_LARGE=3]="ARRAY_TOO_LARGE",t[t.OBJECT_TOO_LARGE=4]="OBJECT_TOO_LARGE",t[t.NUMBER_TOO_LARGE=5]="NUMBER_TOO_LARGE"}(n=e.ErrorCode||(e.ErrorCode={}));var u=function(t){function e(e){var r=t.call(this,e)||this;return r.what=e,r}return s(e,t),e.prototype.toString=function(){return"ParseError: "+this.what},e.build=function(t,r){switch(t){case n.UNEXPECTED_TOKEN:return new e("Unexpected token: "+r.token.toString());case n.UNSUPPORTED_BIGINT:return new e("BigInt is unsupported");case n.STRING_TOO_LARGE:return new e("Max String length is "+o.NUMERIC_LIMITS.UINT32+", found: "+r.size);case n.ARRAY_TOO_LARGE:return new e("Max Array length is "+o.NUMERIC_LIMITS.UINT32+", found: "+r.size);case n.OBJECT_TOO_LARGE:return new e("Max Object length is "+o.NUMERIC_LIMITS.UINT32+", found: "+r.size);case n.NUMBER_TOO_LARGE:return new e("Max Number is "+Number.MAX_SAFE_INTEGER+", found: "+r.number);default:return new e("Unknown error code")}},e}(Error);e.WriteError=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CBOR=void 0;var i=r(5),s=r(9),n=function(){function t(){}return t.decode=function(t,e){return void 0===e&&(e=!1),i.decode(t,e)},t.encode=function(t,e){return void 0===e&&(e=!1),s.encode(t,e)},t.encodeInto=function(t,e,r){return void 0===r&&(r=!1),s.encode(t,r,e)},t}();e.CBOR=n,e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.decode=void 0;var i=r(0),s=r(6);e.decode=function(t,e){if(void 0===e&&(e=!1),e)return new s.Parser(new i.View(t)).parse();try{return new s.Parser(new i.View(t)).parse()}catch(t){return null}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Parser=void 0;var i=r(1),s=r(7),n=new TextDecoder,o=function(){function t(t,e){void 0===e&&(e=100),this.view=t,this.sax=new s.SAX(e)}return t.prototype.parse=function(){switch(this.get(),!0){case this.current_value<0:throw i.ParseError.build(i.ErrorCode.UNEXPECTED_EOF,{offset:this.view.offset});case this.current_value<=23:return this.sax.number(this.current_value);case 24===this.current_value:return this.sax.number(this.view.getUint8());case 25===this.current_value:return this.sax.number(this.view.getUint16());case 26===this.current_value:return this.sax.number(this.view.getUint32());case 27===this.current_value:throw i.ParseError.build(i.ErrorCode.UNSUPPORTED_64_BIT);case this.current_value<=55:return this.sax.number(-(1+(31&this.current_value)));case 56===this.current_value:return this.sax.number(-(1+this.view.getUint8()));case 57===this.current_value:return this.sax.number(-(1+this.view.getUint16()));case 58===this.current_value:return this.sax.number(-(1+this.view.getUint32()));case 59===this.current_value:throw i.ParseError.build(i.ErrorCode.UNSUPPORTED_64_BIT);case this.current_value<=95:throw i.ParseError.build(i.ErrorCode.UNSUPPORTED_BYTE_STRING);case this.current_value<=127:return this.sax.string(this.get_string());case this.current_value<=159:return this.get_array();case this.current_value<=191:return this.get_object();case 244===this.current_value:return this.sax.boolean(!1);case 245===this.current_value:return this.sax.boolean(!0);case 246===this.current_value:return this.sax.null();case 247===this.current_value:return this.sax.undefined();case 249===this.current_value:throw i.ParseError.build(i.ErrorCode.UNSUPPORTED_HALF);case 250===this.current_value:return this.sax.number(this.view.getFloat32());case 251===this.current_value:return this.sax.number(this.view.getFloat64())}},t.prototype.get=function(){return this.current_value=this.view.getUint8(),this.current_value},t.prototype.get_string=function(){var t=-1;switch(!0){case this.current_value<=119:t=31&this.current_value;break;case 120===this.current_value:t=this.view.getUint8();break;case 121===this.current_value:t=this.view.getUint16();break;case 122===this.current_value:t=this.view.getUint32();break;case 123===this.current_value:t=this.view.getUint64();break;case 127===this.current_value:break;default:throw i.ParseError.build(i.ErrorCode.WRONG_STRING_FORMAT,{token:"0x"+this.current_value.toString(16).toUpperCase()})}var e=[];if(t>-1)if("bigint"==typeof t){for(var r=[],s=0;s<t;s++)r.push(this.get());e.push(n.decode(new Uint8Array(r)))}else{(r=this.view.getBytes(t)).length>0&&e.push(n.decode(r))}else{for(var o=[];255!=this.get();)o.push(this.get_string());e.push.apply(e,o)}return e.join("")},t.prototype.get_array=function(){this.sax.begin_array();var t=-1;switch(!0){case this.current_value<=151:t=31&this.current_value;break;case 152===this.current_value:t=this.view.getUint8();break;case 153===this.current_value:t=this.view.getUint16();break;case 154===this.current_value:t=this.view.getUint32();break;case 155===this.current_value:t=this.view.getUint64();break;case 159===this.current_value:break;default:throw i.ParseError.build(i.ErrorCode.UNEXPECTED_TOKEN,{token:"0x"+this.current_value.toString(16).toUpperCase()})}if(t>-1)for(var e=0;e<t;e++)this.parse();else for(;255!==this.current_value;)this.parse();return this.sax.end_array()},t.prototype.get_object=function(){this.sax.begin_object();var t=-1;switch(!0){case this.current_value<=183:t=31&this.current_value;break;case 184===this.current_value:t=this.view.getUint8();break;case 185===this.current_value:t=this.view.getUint16();break;case 186===this.current_value:t=this.view.getUint32();break;case 187===this.current_value:t=this.view.getUint64()}if(t>-1)for(var e=0;e<t;e++)this.get(),this.sax.key(this.get_string()),this.parse();else for(;255!=this.get();)this.sax.key(this.get_string()),this.parse();return this.sax.end_object()},t}();e.Parser=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SAX=void 0;var i=r(8),s=r(1),n=function(){function t(t){this.max_depth=t,this.root=null,this.stack=new i.Stack,this.last_key=null}return t.prototype.null=function(){return this.handle(null)},t.prototype.undefined=function(){return this.handle(void 0)},t.prototype.boolean=function(t){return this.handle(t)},t.prototype.number=function(t){return this.handle(t)},t.prototype.string=function(t){return this.handle(t)},t.prototype.begin_object=function(){if(this.stack.push("object",this.handle({})),this.stack.length>this.max_depth)throw s.ParseError.build(s.ErrorCode.REACHED_MAX_NESTING_DEPTH,{depth:this.max_depth})},t.prototype.key=function(t){var e=this.stack.last();if(!e)throw s.ParseError.build(s.ErrorCode.EMPTY_STACK);e.object()[t]=null,this.last_key=t},t.prototype.end_object=function(){if(this.stack.empty()||!this.stack.last().isObject())throw s.ParseError.build(s.ErrorCode.UNEXPECTED_OBJECT_END);return this.stack.pop().object()},t.prototype.begin_array=function(){if(this.stack.push("array",this.handle([])),this.stack.length>this.max_depth)throw s.ParseError.build(s.ErrorCode.REACHED_MAX_NESTING_DEPTH,{depth:this.max_depth})},t.prototype.end_array=function(){if(this.stack.empty()||!this.stack.last().isArray())throw s.ParseError.build(s.ErrorCode.UNEXPECTED_ARRAY_END);return this.stack.pop().array()},t.prototype.handle=function(t){if(0===this.stack.length&&null===this.root)return this.root=t,t;var e=this.stack.last();if(e.isArray())return e.array().push(t),t;if(e.isObject()){if(!this.last_key)throw s.ParseError.build(s.ErrorCode.UNEXPECTED_VALUE);return e.object()[this.last_key]=t,t}},t}();e.SAX=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Stack=e.StackRef=void 0;var i=function(){function t(t,e){this.type=t,this.value=e}return t.prototype.isArray=function(){return"array"===this.type},t.prototype.isObject=function(){return!this.isArray()},t.prototype.array=function(){return this.value},t.prototype.object=function(){return this.value},t}();e.StackRef=i;var s=function(){function t(){this.stack=[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.stack.length},enumerable:!1,configurable:!0}),t.prototype.push=function(t,e){this.stack.push(new i(t,e))},t.prototype.pop=function(){return this.stack.pop()},t.prototype.last=function(){return this.stack[this.stack.length-1]},t.prototype.empty=function(){return 0===this.stack.length},t}();e.Stack=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.encode=void 0;var i=r(10);e.encode=function(t,e,r){var s=null!=r?r:new ArrayBuffer(50),n=new i.Writer(s);if(e)n.write(t);else try{n.write(t)}catch(t){return null}return n.finalize()}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Writer=void 0;var i=r(0),s=r(2),n=r(3),o=new TextEncoder,u=function(){function t(t){this.view=new i.View(t)}return t.prototype.finalize=function(){return this.view.slice(0,this.view.offset)},t.prototype.write=function(t){switch(s.getType(t)){case"undefined":this.view.setUint8(247);break;case"null":this.view.setUint8(246);break;case"boolean":this.view.setUint8(t?245:244);break;case"number":if(Number.isSafeInteger(t))if(t>=0)if(t<=23)this.view.setUint8(t);else if(t<=s.NUMERIC_LIMITS.UINT8)this.view.setUint8(24),this.view.setUint8(t);else if(t<=s.NUMERIC_LIMITS.UINT16)this.view.setUint8(25),this.view.setUint16(t);else{if(!(t<=s.NUMERIC_LIMITS.UINT32))throw n.WriteError.build(n.ErrorCode.NUMBER_TOO_LARGE,{number:t.toString(10)});this.view.setUint8(26),this.view.setUint32(t)}else{var e=-1-t;if(t>=-24)this.view.setUint8(32+e);else if(e<=s.NUMERIC_LIMITS.UINT8)this.view.setUint8(56),this.view.setUint8(e);else if(e<=s.NUMERIC_LIMITS.UINT16)this.view.setUint8(57),this.view.setUint16(e);else{if(!(e<=s.NUMERIC_LIMITS.UINT32))throw n.WriteError.build(n.ErrorCode.NUMBER_TOO_LARGE,{number:t.toString(10)});this.view.setUint8(58),this.view.setUint32(e)}}else isNaN(t)||!isFinite(t)||-s.NUMERIC_LIMITS.FLOAT32<=t&&t<=s.NUMERIC_LIMITS.FLOAT32?(this.view.setUint8(250),this.view.setFloat32(t)):(this.view.setUint8(251),this.view.setFloat64(t));break;case"string":var r=o.encode(t);if((a=r.length)<=23)this.view.setUint8(96+a);else if(a<=s.NUMERIC_LIMITS.UINT8)this.view.setUint8(120),this.view.setUint8(a);else if(a<=s.NUMERIC_LIMITS.UINT16)this.view.setUint8(121),this.view.setUint16(a);else{if(!(a<=s.NUMERIC_LIMITS.UINT32))throw n.WriteError.build(n.ErrorCode.STRING_TOO_LARGE,{size:a});this.view.setUint8(122),this.view.setUint32(a)}a>0&&this.view.setBytes(r);break;case"array":if((a=t.length)<=23)this.view.setUint8(128+a);else if(a<=s.NUMERIC_LIMITS.UINT8)this.view.setUint8(152),this.view.setUint8(a);else if(a<=s.NUMERIC_LIMITS.UINT16)this.view.setUint8(153),this.view.setUint16(a);else{if(!(a<=s.NUMERIC_LIMITS.UINT32))throw n.WriteError.build(n.ErrorCode.ARRAY_TOO_LARGE,{size:a});this.view.setUint8(154),this.view.setUint32(a)}for(var i=0,u=t;i<u.length;i++){var h=u[i];this.write(h)}break;case"object":var a;if((a=Object.keys(t).length)<=23)this.view.setUint8(160+a);else if(a<=s.NUMERIC_LIMITS.UINT8)this.view.setUint8(184),this.view.setUint8(a);else if(a<=s.NUMERIC_LIMITS.UINT16)this.view.setUint8(185),this.view.setUint16(a);else{if(!(a<=s.NUMERIC_LIMITS.UINT32))throw n.WriteError.build(n.ErrorCode.OBJECT_TOO_LARGE,{size:a});this.view.setUint8(186),this.view.setUint32(a)}for(var f=0,c=Object.entries(t);f<c.length;f++){var _=c[f],E=_[0],l=_[1];this.write(E),this.write(l)}}},t}();e.Writer=u}]);