/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gagarin = (function() {

    /**
     * Namespace gagarin.
     * @exports gagarin
     * @namespace
     */
    var gagarin = {};

    gagarin.network = (function() {

        /**
         * Namespace network.
         * @memberof gagarin
         * @namespace
         */
        var network = {};

        network.core = (function() {

            /**
             * Namespace core.
             * @memberof gagarin.network
             * @namespace
             */
            var core = {};

            core.Message = (function() {

                /**
                 * Properties of a Message.
                 * @memberof gagarin.network.core
                 * @interface IMessage
                 * @property {gagarin.network.core.Message.MessageType|null} [type] Message type
                 * @property {google.protobuf.IAny|null} [payload] Message payload
                 */

                /**
                 * Constructs a new Message.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a Message.
                 * @implements IMessage
                 * @constructor
                 * @param {gagarin.network.core.IMessage=} [properties] Properties to set
                 */
                function Message(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Message type.
                 * @member {gagarin.network.core.Message.MessageType} type
                 * @memberof gagarin.network.core.Message
                 * @instance
                 */
                Message.prototype.type = 0;

                /**
                 * Message payload.
                 * @member {google.protobuf.IAny|null|undefined} payload
                 * @memberof gagarin.network.core.Message
                 * @instance
                 */
                Message.prototype.payload = null;

                /**
                 * Creates a new Message instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {gagarin.network.core.IMessage=} [properties] Properties to set
                 * @returns {gagarin.network.core.Message} Message instance
                 */
                Message.create = function create(properties) {
                    return new Message(properties);
                };

                /**
                 * Encodes the specified Message message. Does not implicitly {@link gagarin.network.core.Message.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {gagarin.network.core.IMessage} message Message message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Message.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link gagarin.network.core.Message.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {gagarin.network.core.IMessage} message Message message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Message.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Message} Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Message.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Message();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 3:
                            message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Message} Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Message.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Message message.
                 * @function verify
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Message.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                            break;
                        }
                    if (message.payload != null && message.hasOwnProperty("payload")) {
                        var error = $root.google.protobuf.Any.verify(message.payload);
                        if (error)
                            return "payload." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Message message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Message} Message
                 */
                Message.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Message)
                        return object;
                    var message = new $root.gagarin.network.core.Message();
                    switch (object.type) {
                    case "HELLO_REQUEST":
                    case 0:
                        message.type = 0;
                        break;
                    case "HELLO_RESPONSE":
                    case 1:
                        message.type = 1;
                        break;
                    case "EPOCH_START":
                    case 2:
                        message.type = 2;
                        break;
                    case "VOTE":
                    case 3:
                        message.type = 3;
                        break;
                    case "PROPOSAL":
                    case 4:
                        message.type = 4;
                        break;
                    case "BLOCK_REQUEST":
                    case 5:
                        message.type = 5;
                        break;
                    case "BLOCK_RESPONSE":
                    case 6:
                        message.type = 6;
                        break;
                    case "TRANSACTION":
                    case 7:
                        message.type = 7;
                        break;
                    case "HEADERS_REQUEST":
                    case 8:
                        message.type = 8;
                        break;
                    case "HEADERS_RESPONSE":
                    case 9:
                        message.type = 9;
                        break;
                    }
                    if (object.payload != null) {
                        if (typeof object.payload !== "object")
                            throw TypeError(".gagarin.network.core.Message.payload: object expected");
                        message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Message
                 * @static
                 * @param {gagarin.network.core.Message} message Message
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Message.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "HELLO_REQUEST" : 0;
                        object.payload = null;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.gagarin.network.core.Message.MessageType[message.type] : message.type;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                    return object;
                };

                /**
                 * Converts this Message to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Message
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Message.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * MessageType enum.
                 * @name gagarin.network.core.Message.MessageType
                 * @enum {string}
                 * @property {number} HELLO_REQUEST=0 HELLO_REQUEST value
                 * @property {number} HELLO_RESPONSE=1 HELLO_RESPONSE value
                 * @property {number} EPOCH_START=2 EPOCH_START value
                 * @property {number} VOTE=3 VOTE value
                 * @property {number} PROPOSAL=4 PROPOSAL value
                 * @property {number} BLOCK_REQUEST=5 BLOCK_REQUEST value
                 * @property {number} BLOCK_RESPONSE=6 BLOCK_RESPONSE value
                 * @property {number} TRANSACTION=7 TRANSACTION value
                 * @property {number} HEADERS_REQUEST=8 HEADERS_REQUEST value
                 * @property {number} HEADERS_RESPONSE=9 HEADERS_RESPONSE value
                 */
                Message.MessageType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "HELLO_REQUEST"] = 0;
                    values[valuesById[1] = "HELLO_RESPONSE"] = 1;
                    values[valuesById[2] = "EPOCH_START"] = 2;
                    values[valuesById[3] = "VOTE"] = 3;
                    values[valuesById[4] = "PROPOSAL"] = 4;
                    values[valuesById[5] = "BLOCK_REQUEST"] = 5;
                    values[valuesById[6] = "BLOCK_RESPONSE"] = 6;
                    values[valuesById[7] = "TRANSACTION"] = 7;
                    values[valuesById[8] = "HEADERS_REQUEST"] = 8;
                    values[valuesById[9] = "HEADERS_RESPONSE"] = 9;
                    return values;
                })();

                return Message;
            })();

            core.HelloPayload = (function() {

                /**
                 * Properties of a HelloPayload.
                 * @memberof gagarin.network.core
                 * @interface IHelloPayload
                 * @property {number|null} [version] HelloPayload version
                 * @property {number|null} [topBlockHeight] HelloPayload topBlockHeight
                 * @property {number|Long|null} [time] HelloPayload time
                 */

                /**
                 * Constructs a new HelloPayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a HelloPayload.
                 * @implements IHelloPayload
                 * @constructor
                 * @param {gagarin.network.core.IHelloPayload=} [properties] Properties to set
                 */
                function HelloPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HelloPayload version.
                 * @member {number} version
                 * @memberof gagarin.network.core.HelloPayload
                 * @instance
                 */
                HelloPayload.prototype.version = 0;

                /**
                 * HelloPayload topBlockHeight.
                 * @member {number} topBlockHeight
                 * @memberof gagarin.network.core.HelloPayload
                 * @instance
                 */
                HelloPayload.prototype.topBlockHeight = 0;

                /**
                 * HelloPayload time.
                 * @member {number|Long} time
                 * @memberof gagarin.network.core.HelloPayload
                 * @instance
                 */
                HelloPayload.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new HelloPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {gagarin.network.core.IHelloPayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.HelloPayload} HelloPayload instance
                 */
                HelloPayload.create = function create(properties) {
                    return new HelloPayload(properties);
                };

                /**
                 * Encodes the specified HelloPayload message. Does not implicitly {@link gagarin.network.core.HelloPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {gagarin.network.core.IHelloPayload} message HelloPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HelloPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && message.hasOwnProperty("version"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                    if (message.topBlockHeight != null && message.hasOwnProperty("topBlockHeight"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.topBlockHeight);
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
                    return writer;
                };

                /**
                 * Encodes the specified HelloPayload message, length delimited. Does not implicitly {@link gagarin.network.core.HelloPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {gagarin.network.core.IHelloPayload} message HelloPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HelloPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HelloPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.HelloPayload} HelloPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HelloPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.HelloPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.version = reader.int32();
                            break;
                        case 2:
                            message.topBlockHeight = reader.int32();
                            break;
                        case 3:
                            message.time = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HelloPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.HelloPayload} HelloPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HelloPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HelloPayload message.
                 * @function verify
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HelloPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isInteger(message.version))
                            return "version: integer expected";
                    if (message.topBlockHeight != null && message.hasOwnProperty("topBlockHeight"))
                        if (!$util.isInteger(message.topBlockHeight))
                            return "topBlockHeight: integer expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                            return "time: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a HelloPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.HelloPayload} HelloPayload
                 */
                HelloPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.HelloPayload)
                        return object;
                    var message = new $root.gagarin.network.core.HelloPayload();
                    if (object.version != null)
                        message.version = object.version | 0;
                    if (object.topBlockHeight != null)
                        message.topBlockHeight = object.topBlockHeight | 0;
                    if (object.time != null)
                        if ($util.Long)
                            (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                        else if (typeof object.time === "string")
                            message.time = parseInt(object.time, 10);
                        else if (typeof object.time === "number")
                            message.time = object.time;
                        else if (typeof object.time === "object")
                            message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a HelloPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.HelloPayload
                 * @static
                 * @param {gagarin.network.core.HelloPayload} message HelloPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HelloPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.version = 0;
                        object.topBlockHeight = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.time = options.longs === String ? "0" : 0;
                    }
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.topBlockHeight != null && message.hasOwnProperty("topBlockHeight"))
                        object.topBlockHeight = message.topBlockHeight;
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time === "number")
                            object.time = options.longs === String ? String(message.time) : message.time;
                        else
                            object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
                    return object;
                };

                /**
                 * Converts this HelloPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.HelloPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HelloPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HelloPayload;
            })();

            core.EpochStartPayload = (function() {

                /**
                 * Properties of an EpochStartPayload.
                 * @memberof gagarin.network.core
                 * @interface IEpochStartPayload
                 * @property {gagarin.network.core.IQuorumCertificate|null} [cert] EpochStartPayload cert
                 * @property {gagarin.network.core.ISignature|null} [genesisSignature] EpochStartPayload genesisSignature
                 * @property {gagarin.network.core.ISignature|null} [signature] EpochStartPayload signature
                 * @property {number|null} [epochNumber] EpochStartPayload epochNumber
                 */

                /**
                 * Constructs a new EpochStartPayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents an EpochStartPayload.
                 * @implements IEpochStartPayload
                 * @constructor
                 * @param {gagarin.network.core.IEpochStartPayload=} [properties] Properties to set
                 */
                function EpochStartPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EpochStartPayload cert.
                 * @member {gagarin.network.core.IQuorumCertificate|null|undefined} cert
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 */
                EpochStartPayload.prototype.cert = null;

                /**
                 * EpochStartPayload genesisSignature.
                 * @member {gagarin.network.core.ISignature|null|undefined} genesisSignature
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 */
                EpochStartPayload.prototype.genesisSignature = null;

                /**
                 * EpochStartPayload signature.
                 * @member {gagarin.network.core.ISignature|null|undefined} signature
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 */
                EpochStartPayload.prototype.signature = null;

                /**
                 * EpochStartPayload epochNumber.
                 * @member {number} epochNumber
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 */
                EpochStartPayload.prototype.epochNumber = 0;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * EpochStartPayload body.
                 * @member {"cert"|"genesisSignature"|undefined} body
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 */
                Object.defineProperty(EpochStartPayload.prototype, "body", {
                    get: $util.oneOfGetter($oneOfFields = ["cert", "genesisSignature"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new EpochStartPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {gagarin.network.core.IEpochStartPayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.EpochStartPayload} EpochStartPayload instance
                 */
                EpochStartPayload.create = function create(properties) {
                    return new EpochStartPayload(properties);
                };

                /**
                 * Encodes the specified EpochStartPayload message. Does not implicitly {@link gagarin.network.core.EpochStartPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {gagarin.network.core.IEpochStartPayload} message EpochStartPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EpochStartPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        $root.gagarin.network.core.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature"))
                        $root.gagarin.network.core.Signature.encode(message.genesisSignature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        $root.gagarin.network.core.Signature.encode(message.signature, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.epochNumber != null && message.hasOwnProperty("epochNumber"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.epochNumber);
                    return writer;
                };

                /**
                 * Encodes the specified EpochStartPayload message, length delimited. Does not implicitly {@link gagarin.network.core.EpochStartPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {gagarin.network.core.IEpochStartPayload} message EpochStartPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EpochStartPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EpochStartPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.EpochStartPayload} EpochStartPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EpochStartPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.EpochStartPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.cert = $root.gagarin.network.core.QuorumCertificate.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.genesisSignature = $root.gagarin.network.core.Signature.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.signature = $root.gagarin.network.core.Signature.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.epochNumber = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EpochStartPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.EpochStartPayload} EpochStartPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EpochStartPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EpochStartPayload message.
                 * @function verify
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EpochStartPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.cert != null && message.hasOwnProperty("cert")) {
                        properties.body = 1;
                        {
                            var error = $root.gagarin.network.core.QuorumCertificate.verify(message.cert);
                            if (error)
                                return "cert." + error;
                        }
                    }
                    if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature")) {
                        if (properties.body === 1)
                            return "body: multiple values";
                        properties.body = 1;
                        {
                            var error = $root.gagarin.network.core.Signature.verify(message.genesisSignature);
                            if (error)
                                return "genesisSignature." + error;
                        }
                    }
                    if (message.signature != null && message.hasOwnProperty("signature")) {
                        var error = $root.gagarin.network.core.Signature.verify(message.signature);
                        if (error)
                            return "signature." + error;
                    }
                    if (message.epochNumber != null && message.hasOwnProperty("epochNumber"))
                        if (!$util.isInteger(message.epochNumber))
                            return "epochNumber: integer expected";
                    return null;
                };

                /**
                 * Creates an EpochStartPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.EpochStartPayload} EpochStartPayload
                 */
                EpochStartPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.EpochStartPayload)
                        return object;
                    var message = new $root.gagarin.network.core.EpochStartPayload();
                    if (object.cert != null) {
                        if (typeof object.cert !== "object")
                            throw TypeError(".gagarin.network.core.EpochStartPayload.cert: object expected");
                        message.cert = $root.gagarin.network.core.QuorumCertificate.fromObject(object.cert);
                    }
                    if (object.genesisSignature != null) {
                        if (typeof object.genesisSignature !== "object")
                            throw TypeError(".gagarin.network.core.EpochStartPayload.genesisSignature: object expected");
                        message.genesisSignature = $root.gagarin.network.core.Signature.fromObject(object.genesisSignature);
                    }
                    if (object.signature != null) {
                        if (typeof object.signature !== "object")
                            throw TypeError(".gagarin.network.core.EpochStartPayload.signature: object expected");
                        message.signature = $root.gagarin.network.core.Signature.fromObject(object.signature);
                    }
                    if (object.epochNumber != null)
                        message.epochNumber = object.epochNumber | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EpochStartPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @static
                 * @param {gagarin.network.core.EpochStartPayload} message EpochStartPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EpochStartPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.signature = null;
                        object.epochNumber = 0;
                    }
                    if (message.cert != null && message.hasOwnProperty("cert")) {
                        object.cert = $root.gagarin.network.core.QuorumCertificate.toObject(message.cert, options);
                        if (options.oneofs)
                            object.body = "cert";
                    }
                    if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature")) {
                        object.genesisSignature = $root.gagarin.network.core.Signature.toObject(message.genesisSignature, options);
                        if (options.oneofs)
                            object.body = "genesisSignature";
                    }
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = $root.gagarin.network.core.Signature.toObject(message.signature, options);
                    if (message.epochNumber != null && message.hasOwnProperty("epochNumber"))
                        object.epochNumber = message.epochNumber;
                    return object;
                };

                /**
                 * Converts this EpochStartPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.EpochStartPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EpochStartPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EpochStartPayload;
            })();

            core.ProposalPayload = (function() {

                /**
                 * Properties of a ProposalPayload.
                 * @memberof gagarin.network.core
                 * @interface IProposalPayload
                 * @property {gagarin.network.core.IQuorumCertificate|null} [cert] ProposalPayload cert
                 * @property {gagarin.network.core.ISignature|null} [signature] ProposalPayload signature
                 * @property {gagarin.network.core.IBlock|null} [block] ProposalPayload block
                 */

                /**
                 * Constructs a new ProposalPayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a ProposalPayload.
                 * @implements IProposalPayload
                 * @constructor
                 * @param {gagarin.network.core.IProposalPayload=} [properties] Properties to set
                 */
                function ProposalPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ProposalPayload cert.
                 * @member {gagarin.network.core.IQuorumCertificate|null|undefined} cert
                 * @memberof gagarin.network.core.ProposalPayload
                 * @instance
                 */
                ProposalPayload.prototype.cert = null;

                /**
                 * ProposalPayload signature.
                 * @member {gagarin.network.core.ISignature|null|undefined} signature
                 * @memberof gagarin.network.core.ProposalPayload
                 * @instance
                 */
                ProposalPayload.prototype.signature = null;

                /**
                 * ProposalPayload block.
                 * @member {gagarin.network.core.IBlock|null|undefined} block
                 * @memberof gagarin.network.core.ProposalPayload
                 * @instance
                 */
                ProposalPayload.prototype.block = null;

                /**
                 * Creates a new ProposalPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {gagarin.network.core.IProposalPayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.ProposalPayload} ProposalPayload instance
                 */
                ProposalPayload.create = function create(properties) {
                    return new ProposalPayload(properties);
                };

                /**
                 * Encodes the specified ProposalPayload message. Does not implicitly {@link gagarin.network.core.ProposalPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {gagarin.network.core.IProposalPayload} message ProposalPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProposalPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        $root.gagarin.network.core.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        $root.gagarin.network.core.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.block != null && message.hasOwnProperty("block"))
                        $root.gagarin.network.core.Block.encode(message.block, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ProposalPayload message, length delimited. Does not implicitly {@link gagarin.network.core.ProposalPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {gagarin.network.core.IProposalPayload} message ProposalPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProposalPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ProposalPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.ProposalPayload} ProposalPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProposalPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.ProposalPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.cert = $root.gagarin.network.core.QuorumCertificate.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.signature = $root.gagarin.network.core.Signature.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.block = $root.gagarin.network.core.Block.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ProposalPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.ProposalPayload} ProposalPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProposalPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ProposalPayload message.
                 * @function verify
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProposalPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cert != null && message.hasOwnProperty("cert")) {
                        var error = $root.gagarin.network.core.QuorumCertificate.verify(message.cert);
                        if (error)
                            return "cert." + error;
                    }
                    if (message.signature != null && message.hasOwnProperty("signature")) {
                        var error = $root.gagarin.network.core.Signature.verify(message.signature);
                        if (error)
                            return "signature." + error;
                    }
                    if (message.block != null && message.hasOwnProperty("block")) {
                        var error = $root.gagarin.network.core.Block.verify(message.block);
                        if (error)
                            return "block." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ProposalPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.ProposalPayload} ProposalPayload
                 */
                ProposalPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.ProposalPayload)
                        return object;
                    var message = new $root.gagarin.network.core.ProposalPayload();
                    if (object.cert != null) {
                        if (typeof object.cert !== "object")
                            throw TypeError(".gagarin.network.core.ProposalPayload.cert: object expected");
                        message.cert = $root.gagarin.network.core.QuorumCertificate.fromObject(object.cert);
                    }
                    if (object.signature != null) {
                        if (typeof object.signature !== "object")
                            throw TypeError(".gagarin.network.core.ProposalPayload.signature: object expected");
                        message.signature = $root.gagarin.network.core.Signature.fromObject(object.signature);
                    }
                    if (object.block != null) {
                        if (typeof object.block !== "object")
                            throw TypeError(".gagarin.network.core.ProposalPayload.block: object expected");
                        message.block = $root.gagarin.network.core.Block.fromObject(object.block);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ProposalPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.ProposalPayload
                 * @static
                 * @param {gagarin.network.core.ProposalPayload} message ProposalPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProposalPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cert = null;
                        object.signature = null;
                        object.block = null;
                    }
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        object.cert = $root.gagarin.network.core.QuorumCertificate.toObject(message.cert, options);
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = $root.gagarin.network.core.Signature.toObject(message.signature, options);
                    if (message.block != null && message.hasOwnProperty("block"))
                        object.block = $root.gagarin.network.core.Block.toObject(message.block, options);
                    return object;
                };

                /**
                 * Converts this ProposalPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.ProposalPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProposalPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ProposalPayload;
            })();

            core.VotePayload = (function() {

                /**
                 * Properties of a VotePayload.
                 * @memberof gagarin.network.core
                 * @interface IVotePayload
                 * @property {gagarin.network.core.IQuorumCertificate|null} [cert] VotePayload cert
                 * @property {gagarin.network.core.ISignature|null} [signature] VotePayload signature
                 * @property {gagarin.network.core.IBlockHeader|null} [header] VotePayload header
                 */

                /**
                 * Constructs a new VotePayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a VotePayload.
                 * @implements IVotePayload
                 * @constructor
                 * @param {gagarin.network.core.IVotePayload=} [properties] Properties to set
                 */
                function VotePayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * VotePayload cert.
                 * @member {gagarin.network.core.IQuorumCertificate|null|undefined} cert
                 * @memberof gagarin.network.core.VotePayload
                 * @instance
                 */
                VotePayload.prototype.cert = null;

                /**
                 * VotePayload signature.
                 * @member {gagarin.network.core.ISignature|null|undefined} signature
                 * @memberof gagarin.network.core.VotePayload
                 * @instance
                 */
                VotePayload.prototype.signature = null;

                /**
                 * VotePayload header.
                 * @member {gagarin.network.core.IBlockHeader|null|undefined} header
                 * @memberof gagarin.network.core.VotePayload
                 * @instance
                 */
                VotePayload.prototype.header = null;

                /**
                 * Creates a new VotePayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {gagarin.network.core.IVotePayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.VotePayload} VotePayload instance
                 */
                VotePayload.create = function create(properties) {
                    return new VotePayload(properties);
                };

                /**
                 * Encodes the specified VotePayload message. Does not implicitly {@link gagarin.network.core.VotePayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {gagarin.network.core.IVotePayload} message VotePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VotePayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        $root.gagarin.network.core.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        $root.gagarin.network.core.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.header != null && message.hasOwnProperty("header"))
                        $root.gagarin.network.core.BlockHeader.encode(message.header, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified VotePayload message, length delimited. Does not implicitly {@link gagarin.network.core.VotePayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {gagarin.network.core.IVotePayload} message VotePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VotePayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a VotePayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.VotePayload} VotePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VotePayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.VotePayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.cert = $root.gagarin.network.core.QuorumCertificate.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.signature = $root.gagarin.network.core.Signature.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.header = $root.gagarin.network.core.BlockHeader.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a VotePayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.VotePayload} VotePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VotePayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a VotePayload message.
                 * @function verify
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                VotePayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cert != null && message.hasOwnProperty("cert")) {
                        var error = $root.gagarin.network.core.QuorumCertificate.verify(message.cert);
                        if (error)
                            return "cert." + error;
                    }
                    if (message.signature != null && message.hasOwnProperty("signature")) {
                        var error = $root.gagarin.network.core.Signature.verify(message.signature);
                        if (error)
                            return "signature." + error;
                    }
                    if (message.header != null && message.hasOwnProperty("header")) {
                        var error = $root.gagarin.network.core.BlockHeader.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    return null;
                };

                /**
                 * Creates a VotePayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.VotePayload} VotePayload
                 */
                VotePayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.VotePayload)
                        return object;
                    var message = new $root.gagarin.network.core.VotePayload();
                    if (object.cert != null) {
                        if (typeof object.cert !== "object")
                            throw TypeError(".gagarin.network.core.VotePayload.cert: object expected");
                        message.cert = $root.gagarin.network.core.QuorumCertificate.fromObject(object.cert);
                    }
                    if (object.signature != null) {
                        if (typeof object.signature !== "object")
                            throw TypeError(".gagarin.network.core.VotePayload.signature: object expected");
                        message.signature = $root.gagarin.network.core.Signature.fromObject(object.signature);
                    }
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".gagarin.network.core.VotePayload.header: object expected");
                        message.header = $root.gagarin.network.core.BlockHeader.fromObject(object.header);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a VotePayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.VotePayload
                 * @static
                 * @param {gagarin.network.core.VotePayload} message VotePayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                VotePayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cert = null;
                        object.signature = null;
                        object.header = null;
                    }
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        object.cert = $root.gagarin.network.core.QuorumCertificate.toObject(message.cert, options);
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = $root.gagarin.network.core.Signature.toObject(message.signature, options);
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.gagarin.network.core.BlockHeader.toObject(message.header, options);
                    return object;
                };

                /**
                 * Converts this VotePayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.VotePayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                VotePayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return VotePayload;
            })();

            core.Signature = (function() {

                /**
                 * Properties of a Signature.
                 * @memberof gagarin.network.core
                 * @interface ISignature
                 * @property {Uint8Array|null} [from] Signature from
                 * @property {Uint8Array|null} [signature] Signature signature
                 */

                /**
                 * Constructs a new Signature.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a Signature.
                 * @implements ISignature
                 * @constructor
                 * @param {gagarin.network.core.ISignature=} [properties] Properties to set
                 */
                function Signature(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Signature from.
                 * @member {Uint8Array} from
                 * @memberof gagarin.network.core.Signature
                 * @instance
                 */
                Signature.prototype.from = $util.newBuffer([]);

                /**
                 * Signature signature.
                 * @member {Uint8Array} signature
                 * @memberof gagarin.network.core.Signature
                 * @instance
                 */
                Signature.prototype.signature = $util.newBuffer([]);

                /**
                 * Creates a new Signature instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {gagarin.network.core.ISignature=} [properties] Properties to set
                 * @returns {gagarin.network.core.Signature} Signature instance
                 */
                Signature.create = function create(properties) {
                    return new Signature(properties);
                };

                /**
                 * Encodes the specified Signature message. Does not implicitly {@link gagarin.network.core.Signature.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {gagarin.network.core.ISignature} message Signature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Signature.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.from != null && message.hasOwnProperty("from"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.from);
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
                    return writer;
                };

                /**
                 * Encodes the specified Signature message, length delimited. Does not implicitly {@link gagarin.network.core.Signature.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {gagarin.network.core.ISignature} message Signature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Signature.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Signature message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Signature} Signature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Signature.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Signature();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.from = reader.bytes();
                            break;
                        case 2:
                            message.signature = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Signature message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Signature} Signature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Signature.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Signature message.
                 * @function verify
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Signature.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.from != null && message.hasOwnProperty("from"))
                        if (!(message.from && typeof message.from.length === "number" || $util.isString(message.from)))
                            return "from: buffer expected";
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                            return "signature: buffer expected";
                    return null;
                };

                /**
                 * Creates a Signature message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Signature} Signature
                 */
                Signature.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Signature)
                        return object;
                    var message = new $root.gagarin.network.core.Signature();
                    if (object.from != null)
                        if (typeof object.from === "string")
                            $util.base64.decode(object.from, message.from = $util.newBuffer($util.base64.length(object.from)), 0);
                        else if (object.from.length)
                            message.from = object.from;
                    if (object.signature != null)
                        if (typeof object.signature === "string")
                            $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                        else if (object.signature.length)
                            message.signature = object.signature;
                    return message;
                };

                /**
                 * Creates a plain object from a Signature message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Signature
                 * @static
                 * @param {gagarin.network.core.Signature} message Signature
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Signature.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.from = "";
                        else {
                            object.from = [];
                            if (options.bytes !== Array)
                                object.from = $util.newBuffer(object.from);
                        }
                        if (options.bytes === String)
                            object.signature = "";
                        else {
                            object.signature = [];
                            if (options.bytes !== Array)
                                object.signature = $util.newBuffer(object.signature);
                        }
                    }
                    if (message.from != null && message.hasOwnProperty("from"))
                        object.from = options.bytes === String ? $util.base64.encode(message.from, 0, message.from.length) : options.bytes === Array ? Array.prototype.slice.call(message.from) : message.from;
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                    return object;
                };

                /**
                 * Converts this Signature to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Signature
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Signature.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Signature;
            })();

            core.SignatureAggregate = (function() {

                /**
                 * Properties of a SignatureAggregate.
                 * @memberof gagarin.network.core
                 * @interface ISignatureAggregate
                 * @property {Uint8Array|null} [bitmap] SignatureAggregate bitmap
                 * @property {Uint8Array|null} [signature] SignatureAggregate signature
                 */

                /**
                 * Constructs a new SignatureAggregate.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a SignatureAggregate.
                 * @implements ISignatureAggregate
                 * @constructor
                 * @param {gagarin.network.core.ISignatureAggregate=} [properties] Properties to set
                 */
                function SignatureAggregate(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SignatureAggregate bitmap.
                 * @member {Uint8Array} bitmap
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @instance
                 */
                SignatureAggregate.prototype.bitmap = $util.newBuffer([]);

                /**
                 * SignatureAggregate signature.
                 * @member {Uint8Array} signature
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @instance
                 */
                SignatureAggregate.prototype.signature = $util.newBuffer([]);

                /**
                 * Creates a new SignatureAggregate instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {gagarin.network.core.ISignatureAggregate=} [properties] Properties to set
                 * @returns {gagarin.network.core.SignatureAggregate} SignatureAggregate instance
                 */
                SignatureAggregate.create = function create(properties) {
                    return new SignatureAggregate(properties);
                };

                /**
                 * Encodes the specified SignatureAggregate message. Does not implicitly {@link gagarin.network.core.SignatureAggregate.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {gagarin.network.core.ISignatureAggregate} message SignatureAggregate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureAggregate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.bitmap);
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
                    return writer;
                };

                /**
                 * Encodes the specified SignatureAggregate message, length delimited. Does not implicitly {@link gagarin.network.core.SignatureAggregate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {gagarin.network.core.ISignatureAggregate} message SignatureAggregate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureAggregate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SignatureAggregate message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.SignatureAggregate} SignatureAggregate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureAggregate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.SignatureAggregate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.bitmap = reader.bytes();
                            break;
                        case 2:
                            message.signature = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SignatureAggregate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.SignatureAggregate} SignatureAggregate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureAggregate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SignatureAggregate message.
                 * @function verify
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignatureAggregate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                        if (!(message.bitmap && typeof message.bitmap.length === "number" || $util.isString(message.bitmap)))
                            return "bitmap: buffer expected";
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                            return "signature: buffer expected";
                    return null;
                };

                /**
                 * Creates a SignatureAggregate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.SignatureAggregate} SignatureAggregate
                 */
                SignatureAggregate.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.SignatureAggregate)
                        return object;
                    var message = new $root.gagarin.network.core.SignatureAggregate();
                    if (object.bitmap != null)
                        if (typeof object.bitmap === "string")
                            $util.base64.decode(object.bitmap, message.bitmap = $util.newBuffer($util.base64.length(object.bitmap)), 0);
                        else if (object.bitmap.length)
                            message.bitmap = object.bitmap;
                    if (object.signature != null)
                        if (typeof object.signature === "string")
                            $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                        else if (object.signature.length)
                            message.signature = object.signature;
                    return message;
                };

                /**
                 * Creates a plain object from a SignatureAggregate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @static
                 * @param {gagarin.network.core.SignatureAggregate} message SignatureAggregate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignatureAggregate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.bitmap = "";
                        else {
                            object.bitmap = [];
                            if (options.bytes !== Array)
                                object.bitmap = $util.newBuffer(object.bitmap);
                        }
                        if (options.bytes === String)
                            object.signature = "";
                        else {
                            object.signature = [];
                            if (options.bytes !== Array)
                                object.signature = $util.newBuffer(object.signature);
                        }
                    }
                    if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                        object.bitmap = options.bytes === String ? $util.base64.encode(message.bitmap, 0, message.bitmap.length) : options.bytes === Array ? Array.prototype.slice.call(message.bitmap) : message.bitmap;
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                    return object;
                };

                /**
                 * Converts this SignatureAggregate to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.SignatureAggregate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignatureAggregate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SignatureAggregate;
            })();

            core.HeadersRequest = (function() {

                /**
                 * Properties of a HeadersRequest.
                 * @memberof gagarin.network.core
                 * @interface IHeadersRequest
                 * @property {number|null} [low] HeadersRequest low
                 * @property {number|null} [high] HeadersRequest high
                 */

                /**
                 * Constructs a new HeadersRequest.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a HeadersRequest.
                 * @implements IHeadersRequest
                 * @constructor
                 * @param {gagarin.network.core.IHeadersRequest=} [properties] Properties to set
                 */
                function HeadersRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HeadersRequest low.
                 * @member {number} low
                 * @memberof gagarin.network.core.HeadersRequest
                 * @instance
                 */
                HeadersRequest.prototype.low = 0;

                /**
                 * HeadersRequest high.
                 * @member {number} high
                 * @memberof gagarin.network.core.HeadersRequest
                 * @instance
                 */
                HeadersRequest.prototype.high = 0;

                /**
                 * Creates a new HeadersRequest instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {gagarin.network.core.IHeadersRequest=} [properties] Properties to set
                 * @returns {gagarin.network.core.HeadersRequest} HeadersRequest instance
                 */
                HeadersRequest.create = function create(properties) {
                    return new HeadersRequest(properties);
                };

                /**
                 * Encodes the specified HeadersRequest message. Does not implicitly {@link gagarin.network.core.HeadersRequest.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {gagarin.network.core.IHeadersRequest} message HeadersRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeadersRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.low != null && message.hasOwnProperty("low"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.low);
                    if (message.high != null && message.hasOwnProperty("high"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.high);
                    return writer;
                };

                /**
                 * Encodes the specified HeadersRequest message, length delimited. Does not implicitly {@link gagarin.network.core.HeadersRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {gagarin.network.core.IHeadersRequest} message HeadersRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeadersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeadersRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.HeadersRequest} HeadersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeadersRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.HeadersRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.low = reader.int32();
                            break;
                        case 2:
                            message.high = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeadersRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.HeadersRequest} HeadersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeadersRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeadersRequest message.
                 * @function verify
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeadersRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.low != null && message.hasOwnProperty("low"))
                        if (!$util.isInteger(message.low))
                            return "low: integer expected";
                    if (message.high != null && message.hasOwnProperty("high"))
                        if (!$util.isInteger(message.high))
                            return "high: integer expected";
                    return null;
                };

                /**
                 * Creates a HeadersRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.HeadersRequest} HeadersRequest
                 */
                HeadersRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.HeadersRequest)
                        return object;
                    var message = new $root.gagarin.network.core.HeadersRequest();
                    if (object.low != null)
                        message.low = object.low | 0;
                    if (object.high != null)
                        message.high = object.high | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a HeadersRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.HeadersRequest
                 * @static
                 * @param {gagarin.network.core.HeadersRequest} message HeadersRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HeadersRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.low = 0;
                        object.high = 0;
                    }
                    if (message.low != null && message.hasOwnProperty("low"))
                        object.low = message.low;
                    if (message.high != null && message.hasOwnProperty("high"))
                        object.high = message.high;
                    return object;
                };

                /**
                 * Converts this HeadersRequest to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.HeadersRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HeadersRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HeadersRequest;
            })();

            core.HeadersResponse = (function() {

                /**
                 * Properties of a HeadersResponse.
                 * @memberof gagarin.network.core
                 * @interface IHeadersResponse
                 * @property {gagarin.network.core.IHeaders|null} [headers] HeadersResponse headers
                 * @property {gagarin.network.core.IError|null} [errorCode] HeadersResponse errorCode
                 */

                /**
                 * Constructs a new HeadersResponse.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a HeadersResponse.
                 * @implements IHeadersResponse
                 * @constructor
                 * @param {gagarin.network.core.IHeadersResponse=} [properties] Properties to set
                 */
                function HeadersResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HeadersResponse headers.
                 * @member {gagarin.network.core.IHeaders|null|undefined} headers
                 * @memberof gagarin.network.core.HeadersResponse
                 * @instance
                 */
                HeadersResponse.prototype.headers = null;

                /**
                 * HeadersResponse errorCode.
                 * @member {gagarin.network.core.IError|null|undefined} errorCode
                 * @memberof gagarin.network.core.HeadersResponse
                 * @instance
                 */
                HeadersResponse.prototype.errorCode = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * HeadersResponse response.
                 * @member {"headers"|"errorCode"|undefined} response
                 * @memberof gagarin.network.core.HeadersResponse
                 * @instance
                 */
                Object.defineProperty(HeadersResponse.prototype, "response", {
                    get: $util.oneOfGetter($oneOfFields = ["headers", "errorCode"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new HeadersResponse instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {gagarin.network.core.IHeadersResponse=} [properties] Properties to set
                 * @returns {gagarin.network.core.HeadersResponse} HeadersResponse instance
                 */
                HeadersResponse.create = function create(properties) {
                    return new HeadersResponse(properties);
                };

                /**
                 * Encodes the specified HeadersResponse message. Does not implicitly {@link gagarin.network.core.HeadersResponse.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {gagarin.network.core.IHeadersResponse} message HeadersResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeadersResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.headers != null && message.hasOwnProperty("headers"))
                        $root.gagarin.network.core.Headers.encode(message.headers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                        $root.gagarin.network.core.Error.encode(message.errorCode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified HeadersResponse message, length delimited. Does not implicitly {@link gagarin.network.core.HeadersResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {gagarin.network.core.IHeadersResponse} message HeadersResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeadersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeadersResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.HeadersResponse} HeadersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeadersResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.HeadersResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.headers = $root.gagarin.network.core.Headers.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.errorCode = $root.gagarin.network.core.Error.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeadersResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.HeadersResponse} HeadersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeadersResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeadersResponse message.
                 * @function verify
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeadersResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.headers != null && message.hasOwnProperty("headers")) {
                        properties.response = 1;
                        {
                            var error = $root.gagarin.network.core.Headers.verify(message.headers);
                            if (error)
                                return "headers." + error;
                        }
                    }
                    if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                        if (properties.response === 1)
                            return "response: multiple values";
                        properties.response = 1;
                        {
                            var error = $root.gagarin.network.core.Error.verify(message.errorCode);
                            if (error)
                                return "errorCode." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a HeadersResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.HeadersResponse} HeadersResponse
                 */
                HeadersResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.HeadersResponse)
                        return object;
                    var message = new $root.gagarin.network.core.HeadersResponse();
                    if (object.headers != null) {
                        if (typeof object.headers !== "object")
                            throw TypeError(".gagarin.network.core.HeadersResponse.headers: object expected");
                        message.headers = $root.gagarin.network.core.Headers.fromObject(object.headers);
                    }
                    if (object.errorCode != null) {
                        if (typeof object.errorCode !== "object")
                            throw TypeError(".gagarin.network.core.HeadersResponse.errorCode: object expected");
                        message.errorCode = $root.gagarin.network.core.Error.fromObject(object.errorCode);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a HeadersResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.HeadersResponse
                 * @static
                 * @param {gagarin.network.core.HeadersResponse} message HeadersResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HeadersResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.headers != null && message.hasOwnProperty("headers")) {
                        object.headers = $root.gagarin.network.core.Headers.toObject(message.headers, options);
                        if (options.oneofs)
                            object.response = "headers";
                    }
                    if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                        object.errorCode = $root.gagarin.network.core.Error.toObject(message.errorCode, options);
                        if (options.oneofs)
                            object.response = "errorCode";
                    }
                    return object;
                };

                /**
                 * Converts this HeadersResponse to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.HeadersResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HeadersResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HeadersResponse;
            })();

            core.Headers = (function() {

                /**
                 * Properties of a Headers.
                 * @memberof gagarin.network.core
                 * @interface IHeaders
                 * @property {Array.<gagarin.network.core.IBlockHeader>|null} [headers] Headers headers
                 */

                /**
                 * Constructs a new Headers.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a Headers.
                 * @implements IHeaders
                 * @constructor
                 * @param {gagarin.network.core.IHeaders=} [properties] Properties to set
                 */
                function Headers(properties) {
                    this.headers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Headers headers.
                 * @member {Array.<gagarin.network.core.IBlockHeader>} headers
                 * @memberof gagarin.network.core.Headers
                 * @instance
                 */
                Headers.prototype.headers = $util.emptyArray;

                /**
                 * Creates a new Headers instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {gagarin.network.core.IHeaders=} [properties] Properties to set
                 * @returns {gagarin.network.core.Headers} Headers instance
                 */
                Headers.create = function create(properties) {
                    return new Headers(properties);
                };

                /**
                 * Encodes the specified Headers message. Does not implicitly {@link gagarin.network.core.Headers.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {gagarin.network.core.IHeaders} message Headers message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Headers.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.headers != null && message.headers.length)
                        for (var i = 0; i < message.headers.length; ++i)
                            $root.gagarin.network.core.BlockHeader.encode(message.headers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Headers message, length delimited. Does not implicitly {@link gagarin.network.core.Headers.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {gagarin.network.core.IHeaders} message Headers message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Headers.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Headers message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Headers} Headers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Headers.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Headers();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.headers && message.headers.length))
                                message.headers = [];
                            message.headers.push($root.gagarin.network.core.BlockHeader.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Headers message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Headers} Headers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Headers.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Headers message.
                 * @function verify
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Headers.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.headers != null && message.hasOwnProperty("headers")) {
                        if (!Array.isArray(message.headers))
                            return "headers: array expected";
                        for (var i = 0; i < message.headers.length; ++i) {
                            var error = $root.gagarin.network.core.BlockHeader.verify(message.headers[i]);
                            if (error)
                                return "headers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Headers message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Headers} Headers
                 */
                Headers.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Headers)
                        return object;
                    var message = new $root.gagarin.network.core.Headers();
                    if (object.headers) {
                        if (!Array.isArray(object.headers))
                            throw TypeError(".gagarin.network.core.Headers.headers: array expected");
                        message.headers = [];
                        for (var i = 0; i < object.headers.length; ++i) {
                            if (typeof object.headers[i] !== "object")
                                throw TypeError(".gagarin.network.core.Headers.headers: object expected");
                            message.headers[i] = $root.gagarin.network.core.BlockHeader.fromObject(object.headers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Headers message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Headers
                 * @static
                 * @param {gagarin.network.core.Headers} message Headers
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Headers.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.headers = [];
                    if (message.headers && message.headers.length) {
                        object.headers = [];
                        for (var j = 0; j < message.headers.length; ++j)
                            object.headers[j] = $root.gagarin.network.core.BlockHeader.toObject(message.headers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Headers to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Headers
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Headers.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Headers;
            })();

            core.BlockRequestPayload = (function() {

                /**
                 * Properties of a BlockRequestPayload.
                 * @memberof gagarin.network.core
                 * @interface IBlockRequestPayload
                 * @property {Uint8Array|null} [hash] BlockRequestPayload hash
                 */

                /**
                 * Constructs a new BlockRequestPayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a BlockRequestPayload.
                 * @implements IBlockRequestPayload
                 * @constructor
                 * @param {gagarin.network.core.IBlockRequestPayload=} [properties] Properties to set
                 */
                function BlockRequestPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BlockRequestPayload hash.
                 * @member {Uint8Array} hash
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @instance
                 */
                BlockRequestPayload.prototype.hash = $util.newBuffer([]);

                /**
                 * Creates a new BlockRequestPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {gagarin.network.core.IBlockRequestPayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.BlockRequestPayload} BlockRequestPayload instance
                 */
                BlockRequestPayload.create = function create(properties) {
                    return new BlockRequestPayload(properties);
                };

                /**
                 * Encodes the specified BlockRequestPayload message. Does not implicitly {@link gagarin.network.core.BlockRequestPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {gagarin.network.core.IBlockRequestPayload} message BlockRequestPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockRequestPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                    return writer;
                };

                /**
                 * Encodes the specified BlockRequestPayload message, length delimited. Does not implicitly {@link gagarin.network.core.BlockRequestPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {gagarin.network.core.IBlockRequestPayload} message BlockRequestPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockRequestPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BlockRequestPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.BlockRequestPayload} BlockRequestPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockRequestPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.BlockRequestPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.hash = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BlockRequestPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.BlockRequestPayload} BlockRequestPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockRequestPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BlockRequestPayload message.
                 * @function verify
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockRequestPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                            return "hash: buffer expected";
                    return null;
                };

                /**
                 * Creates a BlockRequestPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.BlockRequestPayload} BlockRequestPayload
                 */
                BlockRequestPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.BlockRequestPayload)
                        return object;
                    var message = new $root.gagarin.network.core.BlockRequestPayload();
                    if (object.hash != null)
                        if (typeof object.hash === "string")
                            $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                        else if (object.hash.length)
                            message.hash = object.hash;
                    return message;
                };

                /**
                 * Creates a plain object from a BlockRequestPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @static
                 * @param {gagarin.network.core.BlockRequestPayload} message BlockRequestPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockRequestPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.hash = "";
                        else {
                            object.hash = [];
                            if (options.bytes !== Array)
                                object.hash = $util.newBuffer(object.hash);
                        }
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                    return object;
                };

                /**
                 * Converts this BlockRequestPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.BlockRequestPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockRequestPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BlockRequestPayload;
            })();

            core.BlockResponsePayload = (function() {

                /**
                 * Properties of a BlockResponsePayload.
                 * @memberof gagarin.network.core
                 * @interface IBlockResponsePayload
                 * @property {gagarin.network.core.IBlock|null} [block] BlockResponsePayload block
                 * @property {gagarin.network.core.IError|null} [errorCode] BlockResponsePayload errorCode
                 */

                /**
                 * Constructs a new BlockResponsePayload.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a BlockResponsePayload.
                 * @implements IBlockResponsePayload
                 * @constructor
                 * @param {gagarin.network.core.IBlockResponsePayload=} [properties] Properties to set
                 */
                function BlockResponsePayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BlockResponsePayload block.
                 * @member {gagarin.network.core.IBlock|null|undefined} block
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @instance
                 */
                BlockResponsePayload.prototype.block = null;

                /**
                 * BlockResponsePayload errorCode.
                 * @member {gagarin.network.core.IError|null|undefined} errorCode
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @instance
                 */
                BlockResponsePayload.prototype.errorCode = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * BlockResponsePayload response.
                 * @member {"block"|"errorCode"|undefined} response
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @instance
                 */
                Object.defineProperty(BlockResponsePayload.prototype, "response", {
                    get: $util.oneOfGetter($oneOfFields = ["block", "errorCode"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new BlockResponsePayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {gagarin.network.core.IBlockResponsePayload=} [properties] Properties to set
                 * @returns {gagarin.network.core.BlockResponsePayload} BlockResponsePayload instance
                 */
                BlockResponsePayload.create = function create(properties) {
                    return new BlockResponsePayload(properties);
                };

                /**
                 * Encodes the specified BlockResponsePayload message. Does not implicitly {@link gagarin.network.core.BlockResponsePayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {gagarin.network.core.IBlockResponsePayload} message BlockResponsePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockResponsePayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.block != null && message.hasOwnProperty("block"))
                        $root.gagarin.network.core.Block.encode(message.block, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                        $root.gagarin.network.core.Error.encode(message.errorCode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified BlockResponsePayload message, length delimited. Does not implicitly {@link gagarin.network.core.BlockResponsePayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {gagarin.network.core.IBlockResponsePayload} message BlockResponsePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockResponsePayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BlockResponsePayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.BlockResponsePayload} BlockResponsePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockResponsePayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.BlockResponsePayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.block = $root.gagarin.network.core.Block.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.errorCode = $root.gagarin.network.core.Error.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BlockResponsePayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.BlockResponsePayload} BlockResponsePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockResponsePayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BlockResponsePayload message.
                 * @function verify
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockResponsePayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.block != null && message.hasOwnProperty("block")) {
                        properties.response = 1;
                        {
                            var error = $root.gagarin.network.core.Block.verify(message.block);
                            if (error)
                                return "block." + error;
                        }
                    }
                    if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                        if (properties.response === 1)
                            return "response: multiple values";
                        properties.response = 1;
                        {
                            var error = $root.gagarin.network.core.Error.verify(message.errorCode);
                            if (error)
                                return "errorCode." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a BlockResponsePayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.BlockResponsePayload} BlockResponsePayload
                 */
                BlockResponsePayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.BlockResponsePayload)
                        return object;
                    var message = new $root.gagarin.network.core.BlockResponsePayload();
                    if (object.block != null) {
                        if (typeof object.block !== "object")
                            throw TypeError(".gagarin.network.core.BlockResponsePayload.block: object expected");
                        message.block = $root.gagarin.network.core.Block.fromObject(object.block);
                    }
                    if (object.errorCode != null) {
                        if (typeof object.errorCode !== "object")
                            throw TypeError(".gagarin.network.core.BlockResponsePayload.errorCode: object expected");
                        message.errorCode = $root.gagarin.network.core.Error.fromObject(object.errorCode);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BlockResponsePayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @static
                 * @param {gagarin.network.core.BlockResponsePayload} message BlockResponsePayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockResponsePayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.block != null && message.hasOwnProperty("block")) {
                        object.block = $root.gagarin.network.core.Block.toObject(message.block, options);
                        if (options.oneofs)
                            object.response = "block";
                    }
                    if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                        object.errorCode = $root.gagarin.network.core.Error.toObject(message.errorCode, options);
                        if (options.oneofs)
                            object.response = "errorCode";
                    }
                    return object;
                };

                /**
                 * Converts this BlockResponsePayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.BlockResponsePayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockResponsePayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BlockResponsePayload;
            })();

            core.Error = (function() {

                /**
                 * Properties of an Error.
                 * @memberof gagarin.network.core
                 * @interface IError
                 * @property {gagarin.network.core.Error.ErrorCode|null} [code] Error code
                 * @property {string|null} [desc] Error desc
                 */

                /**
                 * Constructs a new Error.
                 * @memberof gagarin.network.core
                 * @classdesc Represents an Error.
                 * @implements IError
                 * @constructor
                 * @param {gagarin.network.core.IError=} [properties] Properties to set
                 */
                function Error(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Error code.
                 * @member {gagarin.network.core.Error.ErrorCode} code
                 * @memberof gagarin.network.core.Error
                 * @instance
                 */
                Error.prototype.code = 0;

                /**
                 * Error desc.
                 * @member {string} desc
                 * @memberof gagarin.network.core.Error
                 * @instance
                 */
                Error.prototype.desc = "";

                /**
                 * Creates a new Error instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {gagarin.network.core.IError=} [properties] Properties to set
                 * @returns {gagarin.network.core.Error} Error instance
                 */
                Error.create = function create(properties) {
                    return new Error(properties);
                };

                /**
                 * Encodes the specified Error message. Does not implicitly {@link gagarin.network.core.Error.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {gagarin.network.core.IError} message Error message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Error.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.code != null && message.hasOwnProperty("code"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                    if (message.desc != null && message.hasOwnProperty("desc"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
                    return writer;
                };

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link gagarin.network.core.Error.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {gagarin.network.core.IError} message Error message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Error.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Error} Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Error.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Error();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.code = reader.int32();
                            break;
                        case 2:
                            message.desc = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Error} Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Error.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Error message.
                 * @function verify
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Error.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.code != null && message.hasOwnProperty("code"))
                        switch (message.code) {
                        default:
                            return "code: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.desc != null && message.hasOwnProperty("desc"))
                        if (!$util.isString(message.desc))
                            return "desc: string expected";
                    return null;
                };

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Error} Error
                 */
                Error.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Error)
                        return object;
                    var message = new $root.gagarin.network.core.Error();
                    switch (object.code) {
                    case "NOT_FOUND":
                    case 0:
                        message.code = 0;
                        break;
                    case "BAD_REQUEST":
                    case 1:
                        message.code = 1;
                        break;
                    }
                    if (object.desc != null)
                        message.desc = String(object.desc);
                    return message;
                };

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Error
                 * @static
                 * @param {gagarin.network.core.Error} message Error
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Error.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.code = options.enums === String ? "NOT_FOUND" : 0;
                        object.desc = "";
                    }
                    if (message.code != null && message.hasOwnProperty("code"))
                        object.code = options.enums === String ? $root.gagarin.network.core.Error.ErrorCode[message.code] : message.code;
                    if (message.desc != null && message.hasOwnProperty("desc"))
                        object.desc = message.desc;
                    return object;
                };

                /**
                 * Converts this Error to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Error
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Error.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * ErrorCode enum.
                 * @name gagarin.network.core.Error.ErrorCode
                 * @enum {string}
                 * @property {number} NOT_FOUND=0 NOT_FOUND value
                 * @property {number} BAD_REQUEST=1 BAD_REQUEST value
                 */
                Error.ErrorCode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NOT_FOUND"] = 0;
                    values[valuesById[1] = "BAD_REQUEST"] = 1;
                    return values;
                })();

                return Error;
            })();

            core.QuorumCertificate = (function() {

                /**
                 * Properties of a QuorumCertificate.
                 * @memberof gagarin.network.core
                 * @interface IQuorumCertificate
                 * @property {gagarin.network.core.IBlockHeader|null} [header] QuorumCertificate header
                 * @property {gagarin.network.core.ISignatureAggregate|null} [signatureAggregate] QuorumCertificate signatureAggregate
                 */

                /**
                 * Constructs a new QuorumCertificate.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a QuorumCertificate.
                 * @implements IQuorumCertificate
                 * @constructor
                 * @param {gagarin.network.core.IQuorumCertificate=} [properties] Properties to set
                 */
                function QuorumCertificate(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QuorumCertificate header.
                 * @member {gagarin.network.core.IBlockHeader|null|undefined} header
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @instance
                 */
                QuorumCertificate.prototype.header = null;

                /**
                 * QuorumCertificate signatureAggregate.
                 * @member {gagarin.network.core.ISignatureAggregate|null|undefined} signatureAggregate
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @instance
                 */
                QuorumCertificate.prototype.signatureAggregate = null;

                /**
                 * Creates a new QuorumCertificate instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {gagarin.network.core.IQuorumCertificate=} [properties] Properties to set
                 * @returns {gagarin.network.core.QuorumCertificate} QuorumCertificate instance
                 */
                QuorumCertificate.create = function create(properties) {
                    return new QuorumCertificate(properties);
                };

                /**
                 * Encodes the specified QuorumCertificate message. Does not implicitly {@link gagarin.network.core.QuorumCertificate.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {gagarin.network.core.IQuorumCertificate} message QuorumCertificate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuorumCertificate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.header != null && message.hasOwnProperty("header"))
                        $root.gagarin.network.core.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
                        $root.gagarin.network.core.SignatureAggregate.encode(message.signatureAggregate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QuorumCertificate message, length delimited. Does not implicitly {@link gagarin.network.core.QuorumCertificate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {gagarin.network.core.IQuorumCertificate} message QuorumCertificate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuorumCertificate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QuorumCertificate message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.QuorumCertificate} QuorumCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuorumCertificate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.QuorumCertificate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.header = $root.gagarin.network.core.BlockHeader.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QuorumCertificate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.QuorumCertificate} QuorumCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuorumCertificate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QuorumCertificate message.
                 * @function verify
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QuorumCertificate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.header != null && message.hasOwnProperty("header")) {
                        var error = $root.gagarin.network.core.BlockHeader.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate")) {
                        var error = $root.gagarin.network.core.SignatureAggregate.verify(message.signatureAggregate);
                        if (error)
                            return "signatureAggregate." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QuorumCertificate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.QuorumCertificate} QuorumCertificate
                 */
                QuorumCertificate.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.QuorumCertificate)
                        return object;
                    var message = new $root.gagarin.network.core.QuorumCertificate();
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".gagarin.network.core.QuorumCertificate.header: object expected");
                        message.header = $root.gagarin.network.core.BlockHeader.fromObject(object.header);
                    }
                    if (object.signatureAggregate != null) {
                        if (typeof object.signatureAggregate !== "object")
                            throw TypeError(".gagarin.network.core.QuorumCertificate.signatureAggregate: object expected");
                        message.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.fromObject(object.signatureAggregate);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QuorumCertificate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @static
                 * @param {gagarin.network.core.QuorumCertificate} message QuorumCertificate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QuorumCertificate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.header = null;
                        object.signatureAggregate = null;
                    }
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.gagarin.network.core.BlockHeader.toObject(message.header, options);
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
                        object.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.toObject(message.signatureAggregate, options);
                    return object;
                };

                /**
                 * Converts this QuorumCertificate to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.QuorumCertificate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QuorumCertificate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QuorumCertificate;
            })();

            core.Block = (function() {

                /**
                 * Properties of a Block.
                 * @memberof gagarin.network.core
                 * @interface IBlock
                 * @property {gagarin.network.core.IBlockHeader|null} [header] Block header
                 * @property {gagarin.network.core.IQuorumCertificate|null} [cert] Block cert
                 * @property {gagarin.network.core.ISignatureAggregate|null} [signatureAggregate] Block signatureAggregate
                 * @property {gagarin.network.core.IBlockData|null} [data] Block data
                 * @property {Array.<gagarin.network.core.ITransaction>|null} [txs] Block txs
                 */

                /**
                 * Constructs a new Block.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a Block.
                 * @implements IBlock
                 * @constructor
                 * @param {gagarin.network.core.IBlock=} [properties] Properties to set
                 */
                function Block(properties) {
                    this.txs = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Block header.
                 * @member {gagarin.network.core.IBlockHeader|null|undefined} header
                 * @memberof gagarin.network.core.Block
                 * @instance
                 */
                Block.prototype.header = null;

                /**
                 * Block cert.
                 * @member {gagarin.network.core.IQuorumCertificate|null|undefined} cert
                 * @memberof gagarin.network.core.Block
                 * @instance
                 */
                Block.prototype.cert = null;

                /**
                 * Block signatureAggregate.
                 * @member {gagarin.network.core.ISignatureAggregate|null|undefined} signatureAggregate
                 * @memberof gagarin.network.core.Block
                 * @instance
                 */
                Block.prototype.signatureAggregate = null;

                /**
                 * Block data.
                 * @member {gagarin.network.core.IBlockData|null|undefined} data
                 * @memberof gagarin.network.core.Block
                 * @instance
                 */
                Block.prototype.data = null;

                /**
                 * Block txs.
                 * @member {Array.<gagarin.network.core.ITransaction>} txs
                 * @memberof gagarin.network.core.Block
                 * @instance
                 */
                Block.prototype.txs = $util.emptyArray;

                /**
                 * Creates a new Block instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {gagarin.network.core.IBlock=} [properties] Properties to set
                 * @returns {gagarin.network.core.Block} Block instance
                 */
                Block.create = function create(properties) {
                    return new Block(properties);
                };

                /**
                 * Encodes the specified Block message. Does not implicitly {@link gagarin.network.core.Block.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {gagarin.network.core.IBlock} message Block message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Block.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.header != null && message.hasOwnProperty("header"))
                        $root.gagarin.network.core.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        $root.gagarin.network.core.QuorumCertificate.encode(message.cert, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
                        $root.gagarin.network.core.SignatureAggregate.encode(message.signatureAggregate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.gagarin.network.core.BlockData.encode(message.data, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.txs != null && message.txs.length)
                        for (var i = 0; i < message.txs.length; ++i)
                            $root.gagarin.network.core.Transaction.encode(message.txs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Block message, length delimited. Does not implicitly {@link gagarin.network.core.Block.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {gagarin.network.core.IBlock} message Block message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Block.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Block message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Block} Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Block.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Block();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.header = $root.gagarin.network.core.BlockHeader.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.cert = $root.gagarin.network.core.QuorumCertificate.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.data = $root.gagarin.network.core.BlockData.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.txs && message.txs.length))
                                message.txs = [];
                            message.txs.push($root.gagarin.network.core.Transaction.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Block message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Block} Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Block.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Block message.
                 * @function verify
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Block.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.header != null && message.hasOwnProperty("header")) {
                        var error = $root.gagarin.network.core.BlockHeader.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    if (message.cert != null && message.hasOwnProperty("cert")) {
                        var error = $root.gagarin.network.core.QuorumCertificate.verify(message.cert);
                        if (error)
                            return "cert." + error;
                    }
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate")) {
                        var error = $root.gagarin.network.core.SignatureAggregate.verify(message.signatureAggregate);
                        if (error)
                            return "signatureAggregate." + error;
                    }
                    if (message.data != null && message.hasOwnProperty("data")) {
                        var error = $root.gagarin.network.core.BlockData.verify(message.data);
                        if (error)
                            return "data." + error;
                    }
                    if (message.txs != null && message.hasOwnProperty("txs")) {
                        if (!Array.isArray(message.txs))
                            return "txs: array expected";
                        for (var i = 0; i < message.txs.length; ++i) {
                            var error = $root.gagarin.network.core.Transaction.verify(message.txs[i]);
                            if (error)
                                return "txs." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Block message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Block} Block
                 */
                Block.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Block)
                        return object;
                    var message = new $root.gagarin.network.core.Block();
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".gagarin.network.core.Block.header: object expected");
                        message.header = $root.gagarin.network.core.BlockHeader.fromObject(object.header);
                    }
                    if (object.cert != null) {
                        if (typeof object.cert !== "object")
                            throw TypeError(".gagarin.network.core.Block.cert: object expected");
                        message.cert = $root.gagarin.network.core.QuorumCertificate.fromObject(object.cert);
                    }
                    if (object.signatureAggregate != null) {
                        if (typeof object.signatureAggregate !== "object")
                            throw TypeError(".gagarin.network.core.Block.signatureAggregate: object expected");
                        message.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.fromObject(object.signatureAggregate);
                    }
                    if (object.data != null) {
                        if (typeof object.data !== "object")
                            throw TypeError(".gagarin.network.core.Block.data: object expected");
                        message.data = $root.gagarin.network.core.BlockData.fromObject(object.data);
                    }
                    if (object.txs) {
                        if (!Array.isArray(object.txs))
                            throw TypeError(".gagarin.network.core.Block.txs: array expected");
                        message.txs = [];
                        for (var i = 0; i < object.txs.length; ++i) {
                            if (typeof object.txs[i] !== "object")
                                throw TypeError(".gagarin.network.core.Block.txs: object expected");
                            message.txs[i] = $root.gagarin.network.core.Transaction.fromObject(object.txs[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Block message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Block
                 * @static
                 * @param {gagarin.network.core.Block} message Block
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Block.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.txs = [];
                    if (options.defaults) {
                        object.header = null;
                        object.cert = null;
                        object.signatureAggregate = null;
                        object.data = null;
                    }
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.gagarin.network.core.BlockHeader.toObject(message.header, options);
                    if (message.cert != null && message.hasOwnProperty("cert"))
                        object.cert = $root.gagarin.network.core.QuorumCertificate.toObject(message.cert, options);
                    if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
                        object.signatureAggregate = $root.gagarin.network.core.SignatureAggregate.toObject(message.signatureAggregate, options);
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = $root.gagarin.network.core.BlockData.toObject(message.data, options);
                    if (message.txs && message.txs.length) {
                        object.txs = [];
                        for (var j = 0; j < message.txs.length; ++j)
                            object.txs[j] = $root.gagarin.network.core.Transaction.toObject(message.txs[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Block to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Block
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Block.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Block;
            })();

            core.BlockHeader = (function() {

                /**
                 * Properties of a BlockHeader.
                 * @memberof gagarin.network.core
                 * @interface IBlockHeader
                 * @property {Uint8Array|null} [hash] BlockHeader hash
                 * @property {Uint8Array|null} [parentHash] BlockHeader parentHash
                 * @property {Uint8Array|null} [qcHash] BlockHeader qcHash
                 * @property {Uint8Array|null} [dataHash] BlockHeader dataHash
                 * @property {Uint8Array|null} [txHash] BlockHeader txHash
                 * @property {Uint8Array|null} [stateHash] BlockHeader stateHash
                 * @property {number|null} [height] BlockHeader height
                 * @property {number|Long|null} [timestamp] BlockHeader timestamp
                 */

                /**
                 * Constructs a new BlockHeader.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a BlockHeader.
                 * @implements IBlockHeader
                 * @constructor
                 * @param {gagarin.network.core.IBlockHeader=} [properties] Properties to set
                 */
                function BlockHeader(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BlockHeader hash.
                 * @member {Uint8Array} hash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.hash = $util.newBuffer([]);

                /**
                 * BlockHeader parentHash.
                 * @member {Uint8Array} parentHash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.parentHash = $util.newBuffer([]);

                /**
                 * BlockHeader qcHash.
                 * @member {Uint8Array} qcHash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.qcHash = $util.newBuffer([]);

                /**
                 * BlockHeader dataHash.
                 * @member {Uint8Array} dataHash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.dataHash = $util.newBuffer([]);

                /**
                 * BlockHeader txHash.
                 * @member {Uint8Array} txHash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.txHash = $util.newBuffer([]);

                /**
                 * BlockHeader stateHash.
                 * @member {Uint8Array} stateHash
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.stateHash = $util.newBuffer([]);

                /**
                 * BlockHeader height.
                 * @member {number} height
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.height = 0;

                /**
                 * BlockHeader timestamp.
                 * @member {number|Long} timestamp
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 */
                BlockHeader.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new BlockHeader instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {gagarin.network.core.IBlockHeader=} [properties] Properties to set
                 * @returns {gagarin.network.core.BlockHeader} BlockHeader instance
                 */
                BlockHeader.create = function create(properties) {
                    return new BlockHeader(properties);
                };

                /**
                 * Encodes the specified BlockHeader message. Does not implicitly {@link gagarin.network.core.BlockHeader.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {gagarin.network.core.IBlockHeader} message BlockHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockHeader.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                    if (message.parentHash != null && message.hasOwnProperty("parentHash"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.parentHash);
                    if (message.qcHash != null && message.hasOwnProperty("qcHash"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.qcHash);
                    if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.dataHash);
                    if (message.txHash != null && message.hasOwnProperty("txHash"))
                        writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.txHash);
                    if (message.stateHash != null && message.hasOwnProperty("stateHash"))
                        writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.stateHash);
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.height);
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
                    return writer;
                };

                /**
                 * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link gagarin.network.core.BlockHeader.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {gagarin.network.core.IBlockHeader} message BlockHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BlockHeader message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.BlockHeader} BlockHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockHeader.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.BlockHeader();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.hash = reader.bytes();
                            break;
                        case 2:
                            message.parentHash = reader.bytes();
                            break;
                        case 3:
                            message.qcHash = reader.bytes();
                            break;
                        case 4:
                            message.dataHash = reader.bytes();
                            break;
                        case 5:
                            message.txHash = reader.bytes();
                            break;
                        case 6:
                            message.stateHash = reader.bytes();
                            break;
                        case 7:
                            message.height = reader.int32();
                            break;
                        case 8:
                            message.timestamp = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.BlockHeader} BlockHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockHeader.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BlockHeader message.
                 * @function verify
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockHeader.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                            return "hash: buffer expected";
                    if (message.parentHash != null && message.hasOwnProperty("parentHash"))
                        if (!(message.parentHash && typeof message.parentHash.length === "number" || $util.isString(message.parentHash)))
                            return "parentHash: buffer expected";
                    if (message.qcHash != null && message.hasOwnProperty("qcHash"))
                        if (!(message.qcHash && typeof message.qcHash.length === "number" || $util.isString(message.qcHash)))
                            return "qcHash: buffer expected";
                    if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                        if (!(message.dataHash && typeof message.dataHash.length === "number" || $util.isString(message.dataHash)))
                            return "dataHash: buffer expected";
                    if (message.txHash != null && message.hasOwnProperty("txHash"))
                        if (!(message.txHash && typeof message.txHash.length === "number" || $util.isString(message.txHash)))
                            return "txHash: buffer expected";
                    if (message.stateHash != null && message.hasOwnProperty("stateHash"))
                        if (!(message.stateHash && typeof message.stateHash.length === "number" || $util.isString(message.stateHash)))
                            return "stateHash: buffer expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height))
                            return "height: integer expected";
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                            return "timestamp: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.BlockHeader} BlockHeader
                 */
                BlockHeader.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.BlockHeader)
                        return object;
                    var message = new $root.gagarin.network.core.BlockHeader();
                    if (object.hash != null)
                        if (typeof object.hash === "string")
                            $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                        else if (object.hash.length)
                            message.hash = object.hash;
                    if (object.parentHash != null)
                        if (typeof object.parentHash === "string")
                            $util.base64.decode(object.parentHash, message.parentHash = $util.newBuffer($util.base64.length(object.parentHash)), 0);
                        else if (object.parentHash.length)
                            message.parentHash = object.parentHash;
                    if (object.qcHash != null)
                        if (typeof object.qcHash === "string")
                            $util.base64.decode(object.qcHash, message.qcHash = $util.newBuffer($util.base64.length(object.qcHash)), 0);
                        else if (object.qcHash.length)
                            message.qcHash = object.qcHash;
                    if (object.dataHash != null)
                        if (typeof object.dataHash === "string")
                            $util.base64.decode(object.dataHash, message.dataHash = $util.newBuffer($util.base64.length(object.dataHash)), 0);
                        else if (object.dataHash.length)
                            message.dataHash = object.dataHash;
                    if (object.txHash != null)
                        if (typeof object.txHash === "string")
                            $util.base64.decode(object.txHash, message.txHash = $util.newBuffer($util.base64.length(object.txHash)), 0);
                        else if (object.txHash.length)
                            message.txHash = object.txHash;
                    if (object.stateHash != null)
                        if (typeof object.stateHash === "string")
                            $util.base64.decode(object.stateHash, message.stateHash = $util.newBuffer($util.base64.length(object.stateHash)), 0);
                        else if (object.stateHash.length)
                            message.stateHash = object.stateHash;
                    if (object.height != null)
                        message.height = object.height | 0;
                    if (object.timestamp != null)
                        if ($util.Long)
                            (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                        else if (typeof object.timestamp === "string")
                            message.timestamp = parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.BlockHeader
                 * @static
                 * @param {gagarin.network.core.BlockHeader} message BlockHeader
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockHeader.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.hash = "";
                        else {
                            object.hash = [];
                            if (options.bytes !== Array)
                                object.hash = $util.newBuffer(object.hash);
                        }
                        if (options.bytes === String)
                            object.parentHash = "";
                        else {
                            object.parentHash = [];
                            if (options.bytes !== Array)
                                object.parentHash = $util.newBuffer(object.parentHash);
                        }
                        if (options.bytes === String)
                            object.qcHash = "";
                        else {
                            object.qcHash = [];
                            if (options.bytes !== Array)
                                object.qcHash = $util.newBuffer(object.qcHash);
                        }
                        if (options.bytes === String)
                            object.dataHash = "";
                        else {
                            object.dataHash = [];
                            if (options.bytes !== Array)
                                object.dataHash = $util.newBuffer(object.dataHash);
                        }
                        if (options.bytes === String)
                            object.txHash = "";
                        else {
                            object.txHash = [];
                            if (options.bytes !== Array)
                                object.txHash = $util.newBuffer(object.txHash);
                        }
                        if (options.bytes === String)
                            object.stateHash = "";
                        else {
                            object.stateHash = [];
                            if (options.bytes !== Array)
                                object.stateHash = $util.newBuffer(object.stateHash);
                        }
                        object.height = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timestamp = options.longs === String ? "0" : 0;
                    }
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                    if (message.parentHash != null && message.hasOwnProperty("parentHash"))
                        object.parentHash = options.bytes === String ? $util.base64.encode(message.parentHash, 0, message.parentHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.parentHash) : message.parentHash;
                    if (message.qcHash != null && message.hasOwnProperty("qcHash"))
                        object.qcHash = options.bytes === String ? $util.base64.encode(message.qcHash, 0, message.qcHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.qcHash) : message.qcHash;
                    if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                        object.dataHash = options.bytes === String ? $util.base64.encode(message.dataHash, 0, message.dataHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataHash) : message.dataHash;
                    if (message.txHash != null && message.hasOwnProperty("txHash"))
                        object.txHash = options.bytes === String ? $util.base64.encode(message.txHash, 0, message.txHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.txHash) : message.txHash;
                    if (message.stateHash != null && message.hasOwnProperty("stateHash"))
                        object.stateHash = options.bytes === String ? $util.base64.encode(message.stateHash, 0, message.stateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateHash) : message.stateHash;
                    if (message.height != null && message.hasOwnProperty("height"))
                        object.height = message.height;
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (typeof message.timestamp === "number")
                            object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                        else
                            object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                    return object;
                };

                /**
                 * Converts this BlockHeader to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.BlockHeader
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockHeader.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BlockHeader;
            })();

            core.BlockData = (function() {

                /**
                 * Properties of a BlockData.
                 * @memberof gagarin.network.core
                 * @interface IBlockData
                 * @property {Uint8Array|null} [data] BlockData data
                 */

                /**
                 * Constructs a new BlockData.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a BlockData.
                 * @implements IBlockData
                 * @constructor
                 * @param {gagarin.network.core.IBlockData=} [properties] Properties to set
                 */
                function BlockData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BlockData data.
                 * @member {Uint8Array} data
                 * @memberof gagarin.network.core.BlockData
                 * @instance
                 */
                BlockData.prototype.data = $util.newBuffer([]);

                /**
                 * Creates a new BlockData instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {gagarin.network.core.IBlockData=} [properties] Properties to set
                 * @returns {gagarin.network.core.BlockData} BlockData instance
                 */
                BlockData.create = function create(properties) {
                    return new BlockData(properties);
                };

                /**
                 * Encodes the specified BlockData message. Does not implicitly {@link gagarin.network.core.BlockData.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {gagarin.network.core.IBlockData} message BlockData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.data != null && message.hasOwnProperty("data"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                    return writer;
                };

                /**
                 * Encodes the specified BlockData message, length delimited. Does not implicitly {@link gagarin.network.core.BlockData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {gagarin.network.core.IBlockData} message BlockData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BlockData message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.BlockData} BlockData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.BlockData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.data = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BlockData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.BlockData} BlockData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BlockData message.
                 * @function verify
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    return null;
                };

                /**
                 * Creates a BlockData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.BlockData} BlockData
                 */
                BlockData.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.BlockData)
                        return object;
                    var message = new $root.gagarin.network.core.BlockData();
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length)
                            message.data = object.data;
                    return message;
                };

                /**
                 * Creates a plain object from a BlockData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.BlockData
                 * @static
                 * @param {gagarin.network.core.BlockData} message BlockData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    return object;
                };

                /**
                 * Converts this BlockData to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.BlockData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BlockData;
            })();

            core.Transaction = (function() {

                /**
                 * Properties of a Transaction.
                 * @memberof gagarin.network.core
                 * @interface ITransaction
                 * @property {gagarin.network.core.Transaction.Type|null} [type] Transaction type
                 * @property {Uint8Array|null} [to] Transaction to
                 * @property {number|Long|null} [nonce] Transaction nonce
                 * @property {number|Long|null} [value] Transaction value
                 * @property {number|Long|null} [fee] Transaction fee
                 * @property {gagarin.network.core.ISignature|null} [signature] Transaction signature
                 * @property {Uint8Array|null} [data] Transaction data
                 * @property {Uint8Array|null} [from] Transaction from
                 */

                /**
                 * Constructs a new Transaction.
                 * @memberof gagarin.network.core
                 * @classdesc Represents a Transaction.
                 * @implements ITransaction
                 * @constructor
                 * @param {gagarin.network.core.ITransaction=} [properties] Properties to set
                 */
                function Transaction(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Transaction type.
                 * @member {gagarin.network.core.Transaction.Type} type
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.type = 0;

                /**
                 * Transaction to.
                 * @member {Uint8Array} to
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.to = $util.newBuffer([]);

                /**
                 * Transaction nonce.
                 * @member {number|Long} nonce
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Transaction value.
                 * @member {number|Long} value
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Transaction fee.
                 * @member {number|Long} fee
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Transaction signature.
                 * @member {gagarin.network.core.ISignature|null|undefined} signature
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.signature = null;

                /**
                 * Transaction data.
                 * @member {Uint8Array} data
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.data = $util.newBuffer([]);

                /**
                 * Transaction from.
                 * @member {Uint8Array} from
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 */
                Transaction.prototype.from = $util.newBuffer([]);

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {gagarin.network.core.ITransaction=} [properties] Properties to set
                 * @returns {gagarin.network.core.Transaction} Transaction instance
                 */
                Transaction.create = function create(properties) {
                    return new Transaction(properties);
                };

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link gagarin.network.core.Transaction.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {gagarin.network.core.ITransaction} message Transaction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Transaction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.to != null && message.hasOwnProperty("to"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.to);
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.nonce);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.value);
                    if (message.fee != null && message.hasOwnProperty("fee"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.fee);
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        $root.gagarin.network.core.Signature.encode(message.signature, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.data);
                    if (message.from != null && message.hasOwnProperty("from"))
                        writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.from);
                    return writer;
                };

                /**
                 * Encodes the specified Transaction message, length delimited. Does not implicitly {@link gagarin.network.core.Transaction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {gagarin.network.core.ITransaction} message Transaction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Transaction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.core.Transaction} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Transaction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.core.Transaction();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.to = reader.bytes();
                            break;
                        case 3:
                            message.nonce = reader.uint64();
                            break;
                        case 4:
                            message.value = reader.int64();
                            break;
                        case 5:
                            message.fee = reader.int64();
                            break;
                        case 6:
                            message.signature = $root.gagarin.network.core.Signature.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.data = reader.bytes();
                            break;
                        case 8:
                            message.from = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Transaction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.core.Transaction} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Transaction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Transaction message.
                 * @function verify
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Transaction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.to != null && message.hasOwnProperty("to"))
                        if (!(message.to && typeof message.to.length === "number" || $util.isString(message.to)))
                            return "to: buffer expected";
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                            return "nonce: integer|Long expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    if (message.fee != null && message.hasOwnProperty("fee"))
                        if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                            return "fee: integer|Long expected";
                    if (message.signature != null && message.hasOwnProperty("signature")) {
                        var error = $root.gagarin.network.core.Signature.verify(message.signature);
                        if (error)
                            return "signature." + error;
                    }
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    if (message.from != null && message.hasOwnProperty("from"))
                        if (!(message.from && typeof message.from.length === "number" || $util.isString(message.from)))
                            return "from: buffer expected";
                    return null;
                };

                /**
                 * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.core.Transaction} Transaction
                 */
                Transaction.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.core.Transaction)
                        return object;
                    var message = new $root.gagarin.network.core.Transaction();
                    switch (object.type) {
                    case "PAYMENT":
                    case 0:
                        message.type = 0;
                        break;
                    case "SLASHING":
                    case 1:
                        message.type = 1;
                        break;
                    case "SETTLEMENT":
                    case 2:
                        message.type = 2;
                        break;
                    case "AGREEMENT":
                    case 3:
                        message.type = 3;
                        break;
                    case "PROOF":
                    case 4:
                        message.type = 4;
                        break;
                    case "REDEEM":
                    case 5:
                        message.type = 5;
                        break;
                    }
                    if (object.to != null)
                        if (typeof object.to === "string")
                            $util.base64.decode(object.to, message.to = $util.newBuffer($util.base64.length(object.to)), 0);
                        else if (object.to.length)
                            message.to = object.to;
                    if (object.nonce != null)
                        if ($util.Long)
                            (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = true;
                        else if (typeof object.nonce === "string")
                            message.nonce = parseInt(object.nonce, 10);
                        else if (typeof object.nonce === "number")
                            message.nonce = object.nonce;
                        else if (typeof object.nonce === "object")
                            message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                    if (object.fee != null)
                        if ($util.Long)
                            (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                        else if (typeof object.fee === "string")
                            message.fee = parseInt(object.fee, 10);
                        else if (typeof object.fee === "number")
                            message.fee = object.fee;
                        else if (typeof object.fee === "object")
                            message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
                    if (object.signature != null) {
                        if (typeof object.signature !== "object")
                            throw TypeError(".gagarin.network.core.Transaction.signature: object expected");
                        message.signature = $root.gagarin.network.core.Signature.fromObject(object.signature);
                    }
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length)
                            message.data = object.data;
                    if (object.from != null)
                        if (typeof object.from === "string")
                            $util.base64.decode(object.from, message.from = $util.newBuffer($util.base64.length(object.from)), 0);
                        else if (object.from.length)
                            message.from = object.from;
                    return message;
                };

                /**
                 * Creates a plain object from a Transaction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.core.Transaction
                 * @static
                 * @param {gagarin.network.core.Transaction} message Transaction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Transaction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "PAYMENT" : 0;
                        if (options.bytes === String)
                            object.to = "";
                        else {
                            object.to = [];
                            if (options.bytes !== Array)
                                object.to = $util.newBuffer(object.to);
                        }
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.nonce = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.fee = options.longs === String ? "0" : 0;
                        object.signature = null;
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                        if (options.bytes === String)
                            object.from = "";
                        else {
                            object.from = [];
                            if (options.bytes !== Array)
                                object.from = $util.newBuffer(object.from);
                        }
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.gagarin.network.core.Transaction.Type[message.type] : message.type;
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = options.bytes === String ? $util.base64.encode(message.to, 0, message.to.length) : options.bytes === Array ? Array.prototype.slice.call(message.to) : message.to;
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        if (typeof message.nonce === "number")
                            object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                        else
                            object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                    if (message.fee != null && message.hasOwnProperty("fee"))
                        if (typeof message.fee === "number")
                            object.fee = options.longs === String ? String(message.fee) : message.fee;
                        else
                            object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = $root.gagarin.network.core.Signature.toObject(message.signature, options);
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    if (message.from != null && message.hasOwnProperty("from"))
                        object.from = options.bytes === String ? $util.base64.encode(message.from, 0, message.from.length) : options.bytes === Array ? Array.prototype.slice.call(message.from) : message.from;
                    return object;
                };

                /**
                 * Converts this Transaction to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.core.Transaction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Transaction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Type enum.
                 * @name gagarin.network.core.Transaction.Type
                 * @enum {string}
                 * @property {number} PAYMENT=0 PAYMENT value
                 * @property {number} SLASHING=1 SLASHING value
                 * @property {number} SETTLEMENT=2 SETTLEMENT value
                 * @property {number} AGREEMENT=3 AGREEMENT value
                 * @property {number} PROOF=4 PROOF value
                 * @property {number} REDEEM=5 REDEEM value
                 */
                Transaction.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PAYMENT"] = 0;
                    values[valuesById[1] = "SLASHING"] = 1;
                    values[valuesById[2] = "SETTLEMENT"] = 2;
                    values[valuesById[3] = "AGREEMENT"] = 3;
                    values[valuesById[4] = "PROOF"] = 4;
                    values[valuesById[5] = "REDEEM"] = 5;
                    return values;
                })();

                return Transaction;
            })();

            return core;
        })();

        network.event = (function() {

            /**
             * Namespace event.
             * @memberof gagarin.network
             * @namespace
             */
            var event = {};

            event.Event = (function() {

                /**
                 * Properties of an Event.
                 * @memberof gagarin.network.event
                 * @interface IEvent
                 * @property {gagarin.network.event.Event.EventType|null} [type] Event type
                 * @property {Uint8Array|null} [id] Event id
                 * @property {google.protobuf.IAny|null} [payload] Event payload
                 */

                /**
                 * Constructs a new Event.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an Event.
                 * @implements IEvent
                 * @constructor
                 * @param {gagarin.network.event.IEvent=} [properties] Properties to set
                 */
                function Event(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Event type.
                 * @member {gagarin.network.event.Event.EventType} type
                 * @memberof gagarin.network.event.Event
                 * @instance
                 */
                Event.prototype.type = 0;

                /**
                 * Event id.
                 * @member {Uint8Array} id
                 * @memberof gagarin.network.event.Event
                 * @instance
                 */
                Event.prototype.id = $util.newBuffer([]);

                /**
                 * Event payload.
                 * @member {google.protobuf.IAny|null|undefined} payload
                 * @memberof gagarin.network.event.Event
                 * @instance
                 */
                Event.prototype.payload = null;

                /**
                 * Creates a new Event instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {gagarin.network.event.IEvent=} [properties] Properties to set
                 * @returns {gagarin.network.event.Event} Event instance
                 */
                Event.create = function create(properties) {
                    return new Event(properties);
                };

                /**
                 * Encodes the specified Event message. Does not implicitly {@link gagarin.network.event.Event.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {gagarin.network.event.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.id);
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link gagarin.network.event.Event.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {gagarin.network.event.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.Event();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.id = reader.bytes();
                            break;
                        case 3:
                            message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Event message.
                 * @function verify
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Event.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                            return "id: buffer expected";
                    if (message.payload != null && message.hasOwnProperty("payload")) {
                        var error = $root.google.protobuf.Any.verify(message.payload);
                        if (error)
                            return "payload." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.Event} Event
                 */
                Event.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.Event)
                        return object;
                    var message = new $root.gagarin.network.event.Event();
                    switch (object.type) {
                    case "RESERVED":
                    case 0:
                        message.type = 0;
                        break;
                    case "BLOCK_ADDED":
                    case 1:
                        message.type = 1;
                        break;
                    case "EPOCH_STARTED":
                    case 2:
                        message.type = 2;
                        break;
                    case "VIEW_CHANGED":
                    case 3:
                        message.type = 3;
                        break;
                    case "COMMITTED":
                    case 4:
                        message.type = 4;
                        break;
                    case "ACCOUNT":
                    case 5:
                        message.type = 5;
                        break;
                    case "BLOCK":
                    case 6:
                        message.type = 6;
                        break;
                    }
                    if (object.id != null)
                        if (typeof object.id === "string")
                            $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                        else if (object.id.length)
                            message.id = object.id;
                    if (object.payload != null) {
                        if (typeof object.payload !== "object")
                            throw TypeError(".gagarin.network.event.Event.payload: object expected");
                        message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.Event
                 * @static
                 * @param {gagarin.network.event.Event} message Event
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Event.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "RESERVED" : 0;
                        if (options.bytes === String)
                            object.id = "";
                        else {
                            object.id = [];
                            if (options.bytes !== Array)
                                object.id = $util.newBuffer(object.id);
                        }
                        object.payload = null;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.gagarin.network.event.Event.EventType[message.type] : message.type;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                    return object;
                };

                /**
                 * Converts this Event to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.Event
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Event.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * EventType enum.
                 * @name gagarin.network.event.Event.EventType
                 * @enum {string}
                 * @property {number} RESERVED=0 RESERVED value
                 * @property {number} BLOCK_ADDED=1 BLOCK_ADDED value
                 * @property {number} EPOCH_STARTED=2 EPOCH_STARTED value
                 * @property {number} VIEW_CHANGED=3 VIEW_CHANGED value
                 * @property {number} COMMITTED=4 COMMITTED value
                 * @property {number} ACCOUNT=5 ACCOUNT value
                 * @property {number} BLOCK=6 BLOCK value
                 */
                Event.EventType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "RESERVED"] = 0;
                    values[valuesById[1] = "BLOCK_ADDED"] = 1;
                    values[valuesById[2] = "EPOCH_STARTED"] = 2;
                    values[valuesById[3] = "VIEW_CHANGED"] = 3;
                    values[valuesById[4] = "COMMITTED"] = 4;
                    values[valuesById[5] = "ACCOUNT"] = 5;
                    values[valuesById[6] = "BLOCK"] = 6;
                    return values;
                })();

                return Event;
            })();

            event.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof gagarin.network.event
                 * @interface IRequest
                 * @property {gagarin.network.event.Request.RequestType|null} [type] Request type
                 * @property {Uint8Array|null} [id] Request id
                 * @property {google.protobuf.IAny|null} [payload] Request payload
                 */

                /**
                 * Constructs a new Request.
                 * @memberof gagarin.network.event
                 * @classdesc Represents a Request.
                 * @implements IRequest
                 * @constructor
                 * @param {gagarin.network.event.IRequest=} [properties] Properties to set
                 */
                function Request(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Request type.
                 * @member {gagarin.network.event.Request.RequestType} type
                 * @memberof gagarin.network.event.Request
                 * @instance
                 */
                Request.prototype.type = 0;

                /**
                 * Request id.
                 * @member {Uint8Array} id
                 * @memberof gagarin.network.event.Request
                 * @instance
                 */
                Request.prototype.id = $util.newBuffer([]);

                /**
                 * Request payload.
                 * @member {google.protobuf.IAny|null|undefined} payload
                 * @memberof gagarin.network.event.Request
                 * @instance
                 */
                Request.prototype.payload = null;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {gagarin.network.event.IRequest=} [properties] Properties to set
                 * @returns {gagarin.network.event.Request} Request instance
                 */
                Request.create = function create(properties) {
                    return new Request(properties);
                };

                /**
                 * Encodes the specified Request message. Does not implicitly {@link gagarin.network.event.Request.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {gagarin.network.event.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.id);
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link gagarin.network.event.Request.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {gagarin.network.event.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.Request();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.id = reader.bytes();
                            break;
                        case 3:
                            message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Request message.
                 * @function verify
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Request.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                            return "id: buffer expected";
                    if (message.payload != null && message.hasOwnProperty("payload")) {
                        var error = $root.google.protobuf.Any.verify(message.payload);
                        if (error)
                            return "payload." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.Request} Request
                 */
                Request.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.Request)
                        return object;
                    var message = new $root.gagarin.network.event.Request();
                    switch (object.type) {
                    case "ACCOUNT":
                    case 0:
                        message.type = 0;
                        break;
                    case "BLOCK":
                    case 1:
                        message.type = 1;
                        break;
                    }
                    if (object.id != null)
                        if (typeof object.id === "string")
                            $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                        else if (object.id.length)
                            message.id = object.id;
                    if (object.payload != null) {
                        if (typeof object.payload !== "object")
                            throw TypeError(".gagarin.network.event.Request.payload: object expected");
                        message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.Request
                 * @static
                 * @param {gagarin.network.event.Request} message Request
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "ACCOUNT" : 0;
                        if (options.bytes === String)
                            object.id = "";
                        else {
                            object.id = [];
                            if (options.bytes !== Array)
                                object.id = $util.newBuffer(object.id);
                        }
                        object.payload = null;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.gagarin.network.event.Request.RequestType[message.type] : message.type;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                    return object;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * RequestType enum.
                 * @name gagarin.network.event.Request.RequestType
                 * @enum {string}
                 * @property {number} ACCOUNT=0 ACCOUNT value
                 * @property {number} BLOCK=1 BLOCK value
                 */
                Request.RequestType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ACCOUNT"] = 0;
                    values[valuesById[1] = "BLOCK"] = 1;
                    return values;
                })();

                return Request;
            })();

            event.EpochStartedPayload = (function() {

                /**
                 * Properties of an EpochStartedPayload.
                 * @memberof gagarin.network.event
                 * @interface IEpochStartedPayload
                 * @property {number|null} [epoch] EpochStartedPayload epoch
                 */

                /**
                 * Constructs a new EpochStartedPayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an EpochStartedPayload.
                 * @implements IEpochStartedPayload
                 * @constructor
                 * @param {gagarin.network.event.IEpochStartedPayload=} [properties] Properties to set
                 */
                function EpochStartedPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EpochStartedPayload epoch.
                 * @member {number} epoch
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @instance
                 */
                EpochStartedPayload.prototype.epoch = 0;

                /**
                 * Creates a new EpochStartedPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {gagarin.network.event.IEpochStartedPayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.EpochStartedPayload} EpochStartedPayload instance
                 */
                EpochStartedPayload.create = function create(properties) {
                    return new EpochStartedPayload(properties);
                };

                /**
                 * Encodes the specified EpochStartedPayload message. Does not implicitly {@link gagarin.network.event.EpochStartedPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {gagarin.network.event.IEpochStartedPayload} message EpochStartedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EpochStartedPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.epoch != null && message.hasOwnProperty("epoch"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.epoch);
                    return writer;
                };

                /**
                 * Encodes the specified EpochStartedPayload message, length delimited. Does not implicitly {@link gagarin.network.event.EpochStartedPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {gagarin.network.event.IEpochStartedPayload} message EpochStartedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EpochStartedPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EpochStartedPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.EpochStartedPayload} EpochStartedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EpochStartedPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.EpochStartedPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.epoch = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EpochStartedPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.EpochStartedPayload} EpochStartedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EpochStartedPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EpochStartedPayload message.
                 * @function verify
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EpochStartedPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.epoch != null && message.hasOwnProperty("epoch"))
                        if (!$util.isInteger(message.epoch))
                            return "epoch: integer expected";
                    return null;
                };

                /**
                 * Creates an EpochStartedPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.EpochStartedPayload} EpochStartedPayload
                 */
                EpochStartedPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.EpochStartedPayload)
                        return object;
                    var message = new $root.gagarin.network.event.EpochStartedPayload();
                    if (object.epoch != null)
                        message.epoch = object.epoch | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EpochStartedPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @static
                 * @param {gagarin.network.event.EpochStartedPayload} message EpochStartedPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EpochStartedPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.epoch = 0;
                    if (message.epoch != null && message.hasOwnProperty("epoch"))
                        object.epoch = message.epoch;
                    return object;
                };

                /**
                 * Converts this EpochStartedPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.EpochStartedPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EpochStartedPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EpochStartedPayload;
            })();

            event.ViewChangedPayload = (function() {

                /**
                 * Properties of a ViewChangedPayload.
                 * @memberof gagarin.network.event
                 * @interface IViewChangedPayload
                 * @property {number|null} [view] ViewChangedPayload view
                 */

                /**
                 * Constructs a new ViewChangedPayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents a ViewChangedPayload.
                 * @implements IViewChangedPayload
                 * @constructor
                 * @param {gagarin.network.event.IViewChangedPayload=} [properties] Properties to set
                 */
                function ViewChangedPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ViewChangedPayload view.
                 * @member {number} view
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @instance
                 */
                ViewChangedPayload.prototype.view = 0;

                /**
                 * Creates a new ViewChangedPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {gagarin.network.event.IViewChangedPayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.ViewChangedPayload} ViewChangedPayload instance
                 */
                ViewChangedPayload.create = function create(properties) {
                    return new ViewChangedPayload(properties);
                };

                /**
                 * Encodes the specified ViewChangedPayload message. Does not implicitly {@link gagarin.network.event.ViewChangedPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {gagarin.network.event.IViewChangedPayload} message ViewChangedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ViewChangedPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.view != null && message.hasOwnProperty("view"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.view);
                    return writer;
                };

                /**
                 * Encodes the specified ViewChangedPayload message, length delimited. Does not implicitly {@link gagarin.network.event.ViewChangedPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {gagarin.network.event.IViewChangedPayload} message ViewChangedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ViewChangedPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ViewChangedPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.ViewChangedPayload} ViewChangedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ViewChangedPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.ViewChangedPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.view = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ViewChangedPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.ViewChangedPayload} ViewChangedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ViewChangedPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ViewChangedPayload message.
                 * @function verify
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ViewChangedPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.view != null && message.hasOwnProperty("view"))
                        if (!$util.isInteger(message.view))
                            return "view: integer expected";
                    return null;
                };

                /**
                 * Creates a ViewChangedPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.ViewChangedPayload} ViewChangedPayload
                 */
                ViewChangedPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.ViewChangedPayload)
                        return object;
                    var message = new $root.gagarin.network.event.ViewChangedPayload();
                    if (object.view != null)
                        message.view = object.view | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ViewChangedPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @static
                 * @param {gagarin.network.event.ViewChangedPayload} message ViewChangedPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ViewChangedPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.view = 0;
                    if (message.view != null && message.hasOwnProperty("view"))
                        object.view = message.view;
                    return object;
                };

                /**
                 * Converts this ViewChangedPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.ViewChangedPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ViewChangedPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ViewChangedPayload;
            })();

            event.CommittedPayload = (function() {

                /**
                 * Properties of a CommittedPayload.
                 * @memberof gagarin.network.event
                 * @interface ICommittedPayload
                 * @property {Uint8Array|null} [hash] CommittedPayload hash
                 */

                /**
                 * Constructs a new CommittedPayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents a CommittedPayload.
                 * @implements ICommittedPayload
                 * @constructor
                 * @param {gagarin.network.event.ICommittedPayload=} [properties] Properties to set
                 */
                function CommittedPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CommittedPayload hash.
                 * @member {Uint8Array} hash
                 * @memberof gagarin.network.event.CommittedPayload
                 * @instance
                 */
                CommittedPayload.prototype.hash = $util.newBuffer([]);

                /**
                 * Creates a new CommittedPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {gagarin.network.event.ICommittedPayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.CommittedPayload} CommittedPayload instance
                 */
                CommittedPayload.create = function create(properties) {
                    return new CommittedPayload(properties);
                };

                /**
                 * Encodes the specified CommittedPayload message. Does not implicitly {@link gagarin.network.event.CommittedPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {gagarin.network.event.ICommittedPayload} message CommittedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommittedPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                    return writer;
                };

                /**
                 * Encodes the specified CommittedPayload message, length delimited. Does not implicitly {@link gagarin.network.event.CommittedPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {gagarin.network.event.ICommittedPayload} message CommittedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommittedPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CommittedPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.CommittedPayload} CommittedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommittedPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.CommittedPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.hash = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CommittedPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.CommittedPayload} CommittedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommittedPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CommittedPayload message.
                 * @function verify
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommittedPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                            return "hash: buffer expected";
                    return null;
                };

                /**
                 * Creates a CommittedPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.CommittedPayload} CommittedPayload
                 */
                CommittedPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.CommittedPayload)
                        return object;
                    var message = new $root.gagarin.network.event.CommittedPayload();
                    if (object.hash != null)
                        if (typeof object.hash === "string")
                            $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                        else if (object.hash.length)
                            message.hash = object.hash;
                    return message;
                };

                /**
                 * Creates a plain object from a CommittedPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.CommittedPayload
                 * @static
                 * @param {gagarin.network.event.CommittedPayload} message CommittedPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommittedPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.hash = "";
                        else {
                            object.hash = [];
                            if (options.bytes !== Array)
                                object.hash = $util.newBuffer(object.hash);
                        }
                    if (message.hash != null && message.hasOwnProperty("hash"))
                        object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                    return object;
                };

                /**
                 * Converts this CommittedPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.CommittedPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommittedPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CommittedPayload;
            })();

            event.AccountRequestPayload = (function() {

                /**
                 * Properties of an AccountRequestPayload.
                 * @memberof gagarin.network.event
                 * @interface IAccountRequestPayload
                 * @property {Uint8Array|null} [address] AccountRequestPayload address
                 * @property {Uint8Array|null} [block] AccountRequestPayload block
                 */

                /**
                 * Constructs a new AccountRequestPayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an AccountRequestPayload.
                 * @implements IAccountRequestPayload
                 * @constructor
                 * @param {gagarin.network.event.IAccountRequestPayload=} [properties] Properties to set
                 */
                function AccountRequestPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AccountRequestPayload address.
                 * @member {Uint8Array} address
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @instance
                 */
                AccountRequestPayload.prototype.address = $util.newBuffer([]);

                /**
                 * AccountRequestPayload block.
                 * @member {Uint8Array} block
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @instance
                 */
                AccountRequestPayload.prototype.block = $util.newBuffer([]);

                /**
                 * Creates a new AccountRequestPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {gagarin.network.event.IAccountRequestPayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.AccountRequestPayload} AccountRequestPayload instance
                 */
                AccountRequestPayload.create = function create(properties) {
                    return new AccountRequestPayload(properties);
                };

                /**
                 * Encodes the specified AccountRequestPayload message. Does not implicitly {@link gagarin.network.event.AccountRequestPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {gagarin.network.event.IAccountRequestPayload} message AccountRequestPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountRequestPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.address != null && message.hasOwnProperty("address"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
                    if (message.block != null && message.hasOwnProperty("block"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.block);
                    return writer;
                };

                /**
                 * Encodes the specified AccountRequestPayload message, length delimited. Does not implicitly {@link gagarin.network.event.AccountRequestPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {gagarin.network.event.IAccountRequestPayload} message AccountRequestPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountRequestPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AccountRequestPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.AccountRequestPayload} AccountRequestPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountRequestPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.AccountRequestPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.address = reader.bytes();
                            break;
                        case 2:
                            message.block = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AccountRequestPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.AccountRequestPayload} AccountRequestPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountRequestPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AccountRequestPayload message.
                 * @function verify
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AccountRequestPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.address != null && message.hasOwnProperty("address"))
                        if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                            return "address: buffer expected";
                    if (message.block != null && message.hasOwnProperty("block"))
                        if (!(message.block && typeof message.block.length === "number" || $util.isString(message.block)))
                            return "block: buffer expected";
                    return null;
                };

                /**
                 * Creates an AccountRequestPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.AccountRequestPayload} AccountRequestPayload
                 */
                AccountRequestPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.AccountRequestPayload)
                        return object;
                    var message = new $root.gagarin.network.event.AccountRequestPayload();
                    if (object.address != null)
                        if (typeof object.address === "string")
                            $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                        else if (object.address.length)
                            message.address = object.address;
                    if (object.block != null)
                        if (typeof object.block === "string")
                            $util.base64.decode(object.block, message.block = $util.newBuffer($util.base64.length(object.block)), 0);
                        else if (object.block.length)
                            message.block = object.block;
                    return message;
                };

                /**
                 * Creates a plain object from an AccountRequestPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @static
                 * @param {gagarin.network.event.AccountRequestPayload} message AccountRequestPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AccountRequestPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.address = "";
                        else {
                            object.address = [];
                            if (options.bytes !== Array)
                                object.address = $util.newBuffer(object.address);
                        }
                        if (options.bytes === String)
                            object.block = "";
                        else {
                            object.block = [];
                            if (options.bytes !== Array)
                                object.block = $util.newBuffer(object.block);
                        }
                    }
                    if (message.address != null && message.hasOwnProperty("address"))
                        object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
                    if (message.block != null && message.hasOwnProperty("block"))
                        object.block = options.bytes === String ? $util.base64.encode(message.block, 0, message.block.length) : options.bytes === Array ? Array.prototype.slice.call(message.block) : message.block;
                    return object;
                };

                /**
                 * Converts this AccountRequestPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.AccountRequestPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AccountRequestPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AccountRequestPayload;
            })();

            event.AccountResponsePayload = (function() {

                /**
                 * Properties of an AccountResponsePayload.
                 * @memberof gagarin.network.event
                 * @interface IAccountResponsePayload
                 * @property {gagarin.network.event.IAccountE|null} [account] AccountResponsePayload account
                 */

                /**
                 * Constructs a new AccountResponsePayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an AccountResponsePayload.
                 * @implements IAccountResponsePayload
                 * @constructor
                 * @param {gagarin.network.event.IAccountResponsePayload=} [properties] Properties to set
                 */
                function AccountResponsePayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AccountResponsePayload account.
                 * @member {gagarin.network.event.IAccountE|null|undefined} account
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @instance
                 */
                AccountResponsePayload.prototype.account = null;

                /**
                 * Creates a new AccountResponsePayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {gagarin.network.event.IAccountResponsePayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.AccountResponsePayload} AccountResponsePayload instance
                 */
                AccountResponsePayload.create = function create(properties) {
                    return new AccountResponsePayload(properties);
                };

                /**
                 * Encodes the specified AccountResponsePayload message. Does not implicitly {@link gagarin.network.event.AccountResponsePayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {gagarin.network.event.IAccountResponsePayload} message AccountResponsePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountResponsePayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.account != null && message.hasOwnProperty("account"))
                        $root.gagarin.network.event.AccountE.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AccountResponsePayload message, length delimited. Does not implicitly {@link gagarin.network.event.AccountResponsePayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {gagarin.network.event.IAccountResponsePayload} message AccountResponsePayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountResponsePayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AccountResponsePayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.AccountResponsePayload} AccountResponsePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountResponsePayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.AccountResponsePayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.account = $root.gagarin.network.event.AccountE.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AccountResponsePayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.AccountResponsePayload} AccountResponsePayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountResponsePayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AccountResponsePayload message.
                 * @function verify
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AccountResponsePayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.account != null && message.hasOwnProperty("account")) {
                        var error = $root.gagarin.network.event.AccountE.verify(message.account);
                        if (error)
                            return "account." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AccountResponsePayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.AccountResponsePayload} AccountResponsePayload
                 */
                AccountResponsePayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.AccountResponsePayload)
                        return object;
                    var message = new $root.gagarin.network.event.AccountResponsePayload();
                    if (object.account != null) {
                        if (typeof object.account !== "object")
                            throw TypeError(".gagarin.network.event.AccountResponsePayload.account: object expected");
                        message.account = $root.gagarin.network.event.AccountE.fromObject(object.account);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AccountResponsePayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @static
                 * @param {gagarin.network.event.AccountResponsePayload} message AccountResponsePayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AccountResponsePayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.account = null;
                    if (message.account != null && message.hasOwnProperty("account"))
                        object.account = $root.gagarin.network.event.AccountE.toObject(message.account, options);
                    return object;
                };

                /**
                 * Converts this AccountResponsePayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.AccountResponsePayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AccountResponsePayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AccountResponsePayload;
            })();

            event.AccountUpdatedPayload = (function() {

                /**
                 * Properties of an AccountUpdatedPayload.
                 * @memberof gagarin.network.event
                 * @interface IAccountUpdatedPayload
                 * @property {gagarin.network.event.IAccountE|null} [old] AccountUpdatedPayload old
                 * @property {gagarin.network.event.IAccountE|null} ["new"] AccountUpdatedPayload new
                 */

                /**
                 * Constructs a new AccountUpdatedPayload.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an AccountUpdatedPayload.
                 * @implements IAccountUpdatedPayload
                 * @constructor
                 * @param {gagarin.network.event.IAccountUpdatedPayload=} [properties] Properties to set
                 */
                function AccountUpdatedPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AccountUpdatedPayload old.
                 * @member {gagarin.network.event.IAccountE|null|undefined} old
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @instance
                 */
                AccountUpdatedPayload.prototype.old = null;

                /**
                 * AccountUpdatedPayload new.
                 * @member {gagarin.network.event.IAccountE|null|undefined} new
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @instance
                 */
                AccountUpdatedPayload.prototype["new"] = null;

                /**
                 * Creates a new AccountUpdatedPayload instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {gagarin.network.event.IAccountUpdatedPayload=} [properties] Properties to set
                 * @returns {gagarin.network.event.AccountUpdatedPayload} AccountUpdatedPayload instance
                 */
                AccountUpdatedPayload.create = function create(properties) {
                    return new AccountUpdatedPayload(properties);
                };

                /**
                 * Encodes the specified AccountUpdatedPayload message. Does not implicitly {@link gagarin.network.event.AccountUpdatedPayload.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {gagarin.network.event.IAccountUpdatedPayload} message AccountUpdatedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountUpdatedPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.old != null && message.hasOwnProperty("old"))
                        $root.gagarin.network.event.AccountE.encode(message.old, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message["new"] != null && message.hasOwnProperty("new"))
                        $root.gagarin.network.event.AccountE.encode(message["new"], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AccountUpdatedPayload message, length delimited. Does not implicitly {@link gagarin.network.event.AccountUpdatedPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {gagarin.network.event.IAccountUpdatedPayload} message AccountUpdatedPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountUpdatedPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AccountUpdatedPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.AccountUpdatedPayload} AccountUpdatedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountUpdatedPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.AccountUpdatedPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.old = $root.gagarin.network.event.AccountE.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message["new"] = $root.gagarin.network.event.AccountE.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AccountUpdatedPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.AccountUpdatedPayload} AccountUpdatedPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountUpdatedPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AccountUpdatedPayload message.
                 * @function verify
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AccountUpdatedPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.old != null && message.hasOwnProperty("old")) {
                        var error = $root.gagarin.network.event.AccountE.verify(message.old);
                        if (error)
                            return "old." + error;
                    }
                    if (message["new"] != null && message.hasOwnProperty("new")) {
                        var error = $root.gagarin.network.event.AccountE.verify(message["new"]);
                        if (error)
                            return "new." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AccountUpdatedPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.AccountUpdatedPayload} AccountUpdatedPayload
                 */
                AccountUpdatedPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.AccountUpdatedPayload)
                        return object;
                    var message = new $root.gagarin.network.event.AccountUpdatedPayload();
                    if (object.old != null) {
                        if (typeof object.old !== "object")
                            throw TypeError(".gagarin.network.event.AccountUpdatedPayload.old: object expected");
                        message.old = $root.gagarin.network.event.AccountE.fromObject(object.old);
                    }
                    if (object["new"] != null) {
                        if (typeof object["new"] !== "object")
                            throw TypeError(".gagarin.network.event.AccountUpdatedPayload.new: object expected");
                        message["new"] = $root.gagarin.network.event.AccountE.fromObject(object["new"]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AccountUpdatedPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @static
                 * @param {gagarin.network.event.AccountUpdatedPayload} message AccountUpdatedPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AccountUpdatedPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.old = null;
                        object["new"] = null;
                    }
                    if (message.old != null && message.hasOwnProperty("old"))
                        object.old = $root.gagarin.network.event.AccountE.toObject(message.old, options);
                    if (message["new"] != null && message.hasOwnProperty("new"))
                        object["new"] = $root.gagarin.network.event.AccountE.toObject(message["new"], options);
                    return object;
                };

                /**
                 * Converts this AccountUpdatedPayload to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.AccountUpdatedPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AccountUpdatedPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AccountUpdatedPayload;
            })();

            event.AccountE = (function() {

                /**
                 * Properties of an AccountE.
                 * @memberof gagarin.network.event
                 * @interface IAccountE
                 * @property {Uint8Array|null} [address] AccountE address
                 * @property {Uint8Array|null} [block] AccountE block
                 * @property {number|Long|null} [nonce] AccountE nonce
                 * @property {number|Long|null} [value] AccountE value
                 * @property {Array.<Uint8Array>|null} [proof] AccountE proof
                 */

                /**
                 * Constructs a new AccountE.
                 * @memberof gagarin.network.event
                 * @classdesc Represents an AccountE.
                 * @implements IAccountE
                 * @constructor
                 * @param {gagarin.network.event.IAccountE=} [properties] Properties to set
                 */
                function AccountE(properties) {
                    this.proof = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AccountE address.
                 * @member {Uint8Array} address
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 */
                AccountE.prototype.address = $util.newBuffer([]);

                /**
                 * AccountE block.
                 * @member {Uint8Array} block
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 */
                AccountE.prototype.block = $util.newBuffer([]);

                /**
                 * AccountE nonce.
                 * @member {number|Long} nonce
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 */
                AccountE.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * AccountE value.
                 * @member {number|Long} value
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 */
                AccountE.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * AccountE proof.
                 * @member {Array.<Uint8Array>} proof
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 */
                AccountE.prototype.proof = $util.emptyArray;

                /**
                 * Creates a new AccountE instance using the specified properties.
                 * @function create
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {gagarin.network.event.IAccountE=} [properties] Properties to set
                 * @returns {gagarin.network.event.AccountE} AccountE instance
                 */
                AccountE.create = function create(properties) {
                    return new AccountE(properties);
                };

                /**
                 * Encodes the specified AccountE message. Does not implicitly {@link gagarin.network.event.AccountE.verify|verify} messages.
                 * @function encode
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {gagarin.network.event.IAccountE} message AccountE message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountE.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.address != null && message.hasOwnProperty("address"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
                    if (message.block != null && message.hasOwnProperty("block"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.block);
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.nonce);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.value);
                    if (message.proof != null && message.proof.length)
                        for (var i = 0; i < message.proof.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.proof[i]);
                    return writer;
                };

                /**
                 * Encodes the specified AccountE message, length delimited. Does not implicitly {@link gagarin.network.event.AccountE.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {gagarin.network.event.IAccountE} message AccountE message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AccountE.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AccountE message from the specified reader or buffer.
                 * @function decode
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {gagarin.network.event.AccountE} AccountE
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountE.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gagarin.network.event.AccountE();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.address = reader.bytes();
                            break;
                        case 2:
                            message.block = reader.bytes();
                            break;
                        case 3:
                            message.nonce = reader.uint64();
                            break;
                        case 4:
                            message.value = reader.uint64();
                            break;
                        case 5:
                            if (!(message.proof && message.proof.length))
                                message.proof = [];
                            message.proof.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AccountE message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {gagarin.network.event.AccountE} AccountE
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AccountE.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AccountE message.
                 * @function verify
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AccountE.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.address != null && message.hasOwnProperty("address"))
                        if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                            return "address: buffer expected";
                    if (message.block != null && message.hasOwnProperty("block"))
                        if (!(message.block && typeof message.block.length === "number" || $util.isString(message.block)))
                            return "block: buffer expected";
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                            return "nonce: integer|Long expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    if (message.proof != null && message.hasOwnProperty("proof")) {
                        if (!Array.isArray(message.proof))
                            return "proof: array expected";
                        for (var i = 0; i < message.proof.length; ++i)
                            if (!(message.proof[i] && typeof message.proof[i].length === "number" || $util.isString(message.proof[i])))
                                return "proof: buffer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates an AccountE message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {gagarin.network.event.AccountE} AccountE
                 */
                AccountE.fromObject = function fromObject(object) {
                    if (object instanceof $root.gagarin.network.event.AccountE)
                        return object;
                    var message = new $root.gagarin.network.event.AccountE();
                    if (object.address != null)
                        if (typeof object.address === "string")
                            $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                        else if (object.address.length)
                            message.address = object.address;
                    if (object.block != null)
                        if (typeof object.block === "string")
                            $util.base64.decode(object.block, message.block = $util.newBuffer($util.base64.length(object.block)), 0);
                        else if (object.block.length)
                            message.block = object.block;
                    if (object.nonce != null)
                        if ($util.Long)
                            (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = true;
                        else if (typeof object.nonce === "string")
                            message.nonce = parseInt(object.nonce, 10);
                        else if (typeof object.nonce === "number")
                            message.nonce = object.nonce;
                        else if (typeof object.nonce === "object")
                            message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                    if (object.proof) {
                        if (!Array.isArray(object.proof))
                            throw TypeError(".gagarin.network.event.AccountE.proof: array expected");
                        message.proof = [];
                        for (var i = 0; i < object.proof.length; ++i)
                            if (typeof object.proof[i] === "string")
                                $util.base64.decode(object.proof[i], message.proof[i] = $util.newBuffer($util.base64.length(object.proof[i])), 0);
                            else if (object.proof[i].length)
                                message.proof[i] = object.proof[i];
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AccountE message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof gagarin.network.event.AccountE
                 * @static
                 * @param {gagarin.network.event.AccountE} message AccountE
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AccountE.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.proof = [];
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.address = "";
                        else {
                            object.address = [];
                            if (options.bytes !== Array)
                                object.address = $util.newBuffer(object.address);
                        }
                        if (options.bytes === String)
                            object.block = "";
                        else {
                            object.block = [];
                            if (options.bytes !== Array)
                                object.block = $util.newBuffer(object.block);
                        }
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.nonce = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    }
                    if (message.address != null && message.hasOwnProperty("address"))
                        object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
                    if (message.block != null && message.hasOwnProperty("block"))
                        object.block = options.bytes === String ? $util.base64.encode(message.block, 0, message.block.length) : options.bytes === Array ? Array.prototype.slice.call(message.block) : message.block;
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        if (typeof message.nonce === "number")
                            object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                        else
                            object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                    if (message.proof && message.proof.length) {
                        object.proof = [];
                        for (var j = 0; j < message.proof.length; ++j)
                            object.proof[j] = options.bytes === String ? $util.base64.encode(message.proof[j], 0, message.proof[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proof[j]) : message.proof[j];
                    }
                    return object;
                };

                /**
                 * Converts this AccountE to JSON.
                 * @function toJSON
                 * @memberof gagarin.network.event.AccountE
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AccountE.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AccountE;
            })();

            return event;
        })();

        return network;
    })();

    return gagarin;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
