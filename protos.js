/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {Message.MessageType|null} [type] Message type
     * @property {google.protobuf.IAny|null} [payload] Message payload
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message type.
     * @member {Message.MessageType} type
     * @memberof Message
     * @instance
     */
    Message.prototype.type = 0;

    /**
     * Message payload.
     * @member {google.protobuf.IAny|null|undefined} payload
     * @memberof Message
     * @instance
     */
    Message.prototype.payload = null;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
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
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
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
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
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
     * @memberof Message
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
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
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
        }
        if (object.payload != null) {
            if (typeof object.payload !== "object")
                throw TypeError(".Message.payload: object expected");
            message.payload = $root.google.protobuf.Any.fromObject(object.payload);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
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
            object.type = options.enums === String ? $root.Message.MessageType[message.type] : message.type;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageType enum.
     * @name Message.MessageType
     * @enum {string}
     * @property {number} HELLO_REQUEST=0 HELLO_REQUEST value
     * @property {number} HELLO_RESPONSE=1 HELLO_RESPONSE value
     * @property {number} EPOCH_START=2 EPOCH_START value
     * @property {number} VOTE=3 VOTE value
     * @property {number} PROPOSAL=4 PROPOSAL value
     * @property {number} BLOCK_REQUEST=5 BLOCK_REQUEST value
     * @property {number} BLOCK_RESPONSE=6 BLOCK_RESPONSE value
     * @property {number} TRANSACTION=7 TRANSACTION value
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
        return values;
    })();

    return Message;
})();

$root.HelloPayload = (function() {

    /**
     * Properties of a HelloPayload.
     * @exports IHelloPayload
     * @interface IHelloPayload
     * @property {number|null} [version] HelloPayload version
     * @property {number|null} [topBlockHeight] HelloPayload topBlockHeight
     * @property {number|Long|null} [time] HelloPayload time
     */

    /**
     * Constructs a new HelloPayload.
     * @exports HelloPayload
     * @classdesc Represents a HelloPayload.
     * @implements IHelloPayload
     * @constructor
     * @param {IHelloPayload=} [properties] Properties to set
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
     * @memberof HelloPayload
     * @instance
     */
    HelloPayload.prototype.version = 0;

    /**
     * HelloPayload topBlockHeight.
     * @member {number} topBlockHeight
     * @memberof HelloPayload
     * @instance
     */
    HelloPayload.prototype.topBlockHeight = 0;

    /**
     * HelloPayload time.
     * @member {number|Long} time
     * @memberof HelloPayload
     * @instance
     */
    HelloPayload.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new HelloPayload instance using the specified properties.
     * @function create
     * @memberof HelloPayload
     * @static
     * @param {IHelloPayload=} [properties] Properties to set
     * @returns {HelloPayload} HelloPayload instance
     */
    HelloPayload.create = function create(properties) {
        return new HelloPayload(properties);
    };

    /**
     * Encodes the specified HelloPayload message. Does not implicitly {@link HelloPayload.verify|verify} messages.
     * @function encode
     * @memberof HelloPayload
     * @static
     * @param {IHelloPayload} message HelloPayload message or plain object to encode
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
     * Encodes the specified HelloPayload message, length delimited. Does not implicitly {@link HelloPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HelloPayload
     * @static
     * @param {IHelloPayload} message HelloPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HelloPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HelloPayload message from the specified reader or buffer.
     * @function decode
     * @memberof HelloPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HelloPayload} HelloPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HelloPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HelloPayload();
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
     * @memberof HelloPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HelloPayload} HelloPayload
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
     * @memberof HelloPayload
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
     * @memberof HelloPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HelloPayload} HelloPayload
     */
    HelloPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.HelloPayload)
            return object;
        var message = new $root.HelloPayload();
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
     * @memberof HelloPayload
     * @static
     * @param {HelloPayload} message HelloPayload
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
     * @memberof HelloPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HelloPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HelloPayload;
})();

$root.EpochStartPayload = (function() {

    /**
     * Properties of an EpochStartPayload.
     * @exports IEpochStartPayload
     * @interface IEpochStartPayload
     * @property {IQuorumCertificate|null} [cert] EpochStartPayload cert
     * @property {ISignature|null} [genesisSignature] EpochStartPayload genesisSignature
     * @property {ISignature|null} [signature] EpochStartPayload signature
     * @property {number|null} [epochNumber] EpochStartPayload epochNumber
     */

    /**
     * Constructs a new EpochStartPayload.
     * @exports EpochStartPayload
     * @classdesc Represents an EpochStartPayload.
     * @implements IEpochStartPayload
     * @constructor
     * @param {IEpochStartPayload=} [properties] Properties to set
     */
    function EpochStartPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpochStartPayload cert.
     * @member {IQuorumCertificate|null|undefined} cert
     * @memberof EpochStartPayload
     * @instance
     */
    EpochStartPayload.prototype.cert = null;

    /**
     * EpochStartPayload genesisSignature.
     * @member {ISignature|null|undefined} genesisSignature
     * @memberof EpochStartPayload
     * @instance
     */
    EpochStartPayload.prototype.genesisSignature = null;

    /**
     * EpochStartPayload signature.
     * @member {ISignature|null|undefined} signature
     * @memberof EpochStartPayload
     * @instance
     */
    EpochStartPayload.prototype.signature = null;

    /**
     * EpochStartPayload epochNumber.
     * @member {number} epochNumber
     * @memberof EpochStartPayload
     * @instance
     */
    EpochStartPayload.prototype.epochNumber = 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * EpochStartPayload body.
     * @member {"cert"|"genesisSignature"|undefined} body
     * @memberof EpochStartPayload
     * @instance
     */
    Object.defineProperty(EpochStartPayload.prototype, "body", {
        get: $util.oneOfGetter($oneOfFields = ["cert", "genesisSignature"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new EpochStartPayload instance using the specified properties.
     * @function create
     * @memberof EpochStartPayload
     * @static
     * @param {IEpochStartPayload=} [properties] Properties to set
     * @returns {EpochStartPayload} EpochStartPayload instance
     */
    EpochStartPayload.create = function create(properties) {
        return new EpochStartPayload(properties);
    };

    /**
     * Encodes the specified EpochStartPayload message. Does not implicitly {@link EpochStartPayload.verify|verify} messages.
     * @function encode
     * @memberof EpochStartPayload
     * @static
     * @param {IEpochStartPayload} message EpochStartPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpochStartPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cert != null && message.hasOwnProperty("cert"))
            $root.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature"))
            $root.Signature.encode(message.genesisSignature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.signature != null && message.hasOwnProperty("signature"))
            $root.Signature.encode(message.signature, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.epochNumber != null && message.hasOwnProperty("epochNumber"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.epochNumber);
        return writer;
    };

    /**
     * Encodes the specified EpochStartPayload message, length delimited. Does not implicitly {@link EpochStartPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpochStartPayload
     * @static
     * @param {IEpochStartPayload} message EpochStartPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpochStartPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpochStartPayload message from the specified reader or buffer.
     * @function decode
     * @memberof EpochStartPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpochStartPayload} EpochStartPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpochStartPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpochStartPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cert = $root.QuorumCertificate.decode(reader, reader.uint32());
                break;
            case 2:
                message.genesisSignature = $root.Signature.decode(reader, reader.uint32());
                break;
            case 3:
                message.signature = $root.Signature.decode(reader, reader.uint32());
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
     * @memberof EpochStartPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpochStartPayload} EpochStartPayload
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
     * @memberof EpochStartPayload
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
                var error = $root.QuorumCertificate.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
        }
        if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.Signature.verify(message.genesisSignature);
                if (error)
                    return "genesisSignature." + error;
            }
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            var error = $root.Signature.verify(message.signature);
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
     * @memberof EpochStartPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpochStartPayload} EpochStartPayload
     */
    EpochStartPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.EpochStartPayload)
            return object;
        var message = new $root.EpochStartPayload();
        if (object.cert != null) {
            if (typeof object.cert !== "object")
                throw TypeError(".EpochStartPayload.cert: object expected");
            message.cert = $root.QuorumCertificate.fromObject(object.cert);
        }
        if (object.genesisSignature != null) {
            if (typeof object.genesisSignature !== "object")
                throw TypeError(".EpochStartPayload.genesisSignature: object expected");
            message.genesisSignature = $root.Signature.fromObject(object.genesisSignature);
        }
        if (object.signature != null) {
            if (typeof object.signature !== "object")
                throw TypeError(".EpochStartPayload.signature: object expected");
            message.signature = $root.Signature.fromObject(object.signature);
        }
        if (object.epochNumber != null)
            message.epochNumber = object.epochNumber | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpochStartPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpochStartPayload
     * @static
     * @param {EpochStartPayload} message EpochStartPayload
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
            object.cert = $root.QuorumCertificate.toObject(message.cert, options);
            if (options.oneofs)
                object.body = "cert";
        }
        if (message.genesisSignature != null && message.hasOwnProperty("genesisSignature")) {
            object.genesisSignature = $root.Signature.toObject(message.genesisSignature, options);
            if (options.oneofs)
                object.body = "genesisSignature";
        }
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = $root.Signature.toObject(message.signature, options);
        if (message.epochNumber != null && message.hasOwnProperty("epochNumber"))
            object.epochNumber = message.epochNumber;
        return object;
    };

    /**
     * Converts this EpochStartPayload to JSON.
     * @function toJSON
     * @memberof EpochStartPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpochStartPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpochStartPayload;
})();

$root.ProposalPayload = (function() {

    /**
     * Properties of a ProposalPayload.
     * @exports IProposalPayload
     * @interface IProposalPayload
     * @property {IQuorumCertificate|null} [cert] ProposalPayload cert
     * @property {ISignature|null} [signature] ProposalPayload signature
     * @property {IBlock|null} [block] ProposalPayload block
     */

    /**
     * Constructs a new ProposalPayload.
     * @exports ProposalPayload
     * @classdesc Represents a ProposalPayload.
     * @implements IProposalPayload
     * @constructor
     * @param {IProposalPayload=} [properties] Properties to set
     */
    function ProposalPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProposalPayload cert.
     * @member {IQuorumCertificate|null|undefined} cert
     * @memberof ProposalPayload
     * @instance
     */
    ProposalPayload.prototype.cert = null;

    /**
     * ProposalPayload signature.
     * @member {ISignature|null|undefined} signature
     * @memberof ProposalPayload
     * @instance
     */
    ProposalPayload.prototype.signature = null;

    /**
     * ProposalPayload block.
     * @member {IBlock|null|undefined} block
     * @memberof ProposalPayload
     * @instance
     */
    ProposalPayload.prototype.block = null;

    /**
     * Creates a new ProposalPayload instance using the specified properties.
     * @function create
     * @memberof ProposalPayload
     * @static
     * @param {IProposalPayload=} [properties] Properties to set
     * @returns {ProposalPayload} ProposalPayload instance
     */
    ProposalPayload.create = function create(properties) {
        return new ProposalPayload(properties);
    };

    /**
     * Encodes the specified ProposalPayload message. Does not implicitly {@link ProposalPayload.verify|verify} messages.
     * @function encode
     * @memberof ProposalPayload
     * @static
     * @param {IProposalPayload} message ProposalPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProposalPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cert != null && message.hasOwnProperty("cert"))
            $root.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.signature != null && message.hasOwnProperty("signature"))
            $root.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.block != null && message.hasOwnProperty("block"))
            $root.Block.encode(message.block, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProposalPayload message, length delimited. Does not implicitly {@link ProposalPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProposalPayload
     * @static
     * @param {IProposalPayload} message ProposalPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProposalPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProposalPayload message from the specified reader or buffer.
     * @function decode
     * @memberof ProposalPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProposalPayload} ProposalPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProposalPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProposalPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cert = $root.QuorumCertificate.decode(reader, reader.uint32());
                break;
            case 2:
                message.signature = $root.Signature.decode(reader, reader.uint32());
                break;
            case 3:
                message.block = $root.Block.decode(reader, reader.uint32());
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
     * @memberof ProposalPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProposalPayload} ProposalPayload
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
     * @memberof ProposalPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProposalPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cert != null && message.hasOwnProperty("cert")) {
            var error = $root.QuorumCertificate.verify(message.cert);
            if (error)
                return "cert." + error;
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            var error = $root.Signature.verify(message.signature);
            if (error)
                return "signature." + error;
        }
        if (message.block != null && message.hasOwnProperty("block")) {
            var error = $root.Block.verify(message.block);
            if (error)
                return "block." + error;
        }
        return null;
    };

    /**
     * Creates a ProposalPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProposalPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProposalPayload} ProposalPayload
     */
    ProposalPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.ProposalPayload)
            return object;
        var message = new $root.ProposalPayload();
        if (object.cert != null) {
            if (typeof object.cert !== "object")
                throw TypeError(".ProposalPayload.cert: object expected");
            message.cert = $root.QuorumCertificate.fromObject(object.cert);
        }
        if (object.signature != null) {
            if (typeof object.signature !== "object")
                throw TypeError(".ProposalPayload.signature: object expected");
            message.signature = $root.Signature.fromObject(object.signature);
        }
        if (object.block != null) {
            if (typeof object.block !== "object")
                throw TypeError(".ProposalPayload.block: object expected");
            message.block = $root.Block.fromObject(object.block);
        }
        return message;
    };

    /**
     * Creates a plain object from a ProposalPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProposalPayload
     * @static
     * @param {ProposalPayload} message ProposalPayload
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
            object.cert = $root.QuorumCertificate.toObject(message.cert, options);
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = $root.Signature.toObject(message.signature, options);
        if (message.block != null && message.hasOwnProperty("block"))
            object.block = $root.Block.toObject(message.block, options);
        return object;
    };

    /**
     * Converts this ProposalPayload to JSON.
     * @function toJSON
     * @memberof ProposalPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProposalPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProposalPayload;
})();

$root.VotePayload = (function() {

    /**
     * Properties of a VotePayload.
     * @exports IVotePayload
     * @interface IVotePayload
     * @property {IQuorumCertificate|null} [cert] VotePayload cert
     * @property {ISignature|null} [signature] VotePayload signature
     * @property {IBlockHeader|null} [header] VotePayload header
     */

    /**
     * Constructs a new VotePayload.
     * @exports VotePayload
     * @classdesc Represents a VotePayload.
     * @implements IVotePayload
     * @constructor
     * @param {IVotePayload=} [properties] Properties to set
     */
    function VotePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VotePayload cert.
     * @member {IQuorumCertificate|null|undefined} cert
     * @memberof VotePayload
     * @instance
     */
    VotePayload.prototype.cert = null;

    /**
     * VotePayload signature.
     * @member {ISignature|null|undefined} signature
     * @memberof VotePayload
     * @instance
     */
    VotePayload.prototype.signature = null;

    /**
     * VotePayload header.
     * @member {IBlockHeader|null|undefined} header
     * @memberof VotePayload
     * @instance
     */
    VotePayload.prototype.header = null;

    /**
     * Creates a new VotePayload instance using the specified properties.
     * @function create
     * @memberof VotePayload
     * @static
     * @param {IVotePayload=} [properties] Properties to set
     * @returns {VotePayload} VotePayload instance
     */
    VotePayload.create = function create(properties) {
        return new VotePayload(properties);
    };

    /**
     * Encodes the specified VotePayload message. Does not implicitly {@link VotePayload.verify|verify} messages.
     * @function encode
     * @memberof VotePayload
     * @static
     * @param {IVotePayload} message VotePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VotePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cert != null && message.hasOwnProperty("cert"))
            $root.QuorumCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.signature != null && message.hasOwnProperty("signature"))
            $root.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.header != null && message.hasOwnProperty("header"))
            $root.BlockHeader.encode(message.header, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified VotePayload message, length delimited. Does not implicitly {@link VotePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VotePayload
     * @static
     * @param {IVotePayload} message VotePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VotePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VotePayload message from the specified reader or buffer.
     * @function decode
     * @memberof VotePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VotePayload} VotePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VotePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VotePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cert = $root.QuorumCertificate.decode(reader, reader.uint32());
                break;
            case 2:
                message.signature = $root.Signature.decode(reader, reader.uint32());
                break;
            case 3:
                message.header = $root.BlockHeader.decode(reader, reader.uint32());
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
     * @memberof VotePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VotePayload} VotePayload
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
     * @memberof VotePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VotePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cert != null && message.hasOwnProperty("cert")) {
            var error = $root.QuorumCertificate.verify(message.cert);
            if (error)
                return "cert." + error;
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            var error = $root.Signature.verify(message.signature);
            if (error)
                return "signature." + error;
        }
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.BlockHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        return null;
    };

    /**
     * Creates a VotePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VotePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VotePayload} VotePayload
     */
    VotePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.VotePayload)
            return object;
        var message = new $root.VotePayload();
        if (object.cert != null) {
            if (typeof object.cert !== "object")
                throw TypeError(".VotePayload.cert: object expected");
            message.cert = $root.QuorumCertificate.fromObject(object.cert);
        }
        if (object.signature != null) {
            if (typeof object.signature !== "object")
                throw TypeError(".VotePayload.signature: object expected");
            message.signature = $root.Signature.fromObject(object.signature);
        }
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".VotePayload.header: object expected");
            message.header = $root.BlockHeader.fromObject(object.header);
        }
        return message;
    };

    /**
     * Creates a plain object from a VotePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VotePayload
     * @static
     * @param {VotePayload} message VotePayload
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
            object.cert = $root.QuorumCertificate.toObject(message.cert, options);
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = $root.Signature.toObject(message.signature, options);
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.BlockHeader.toObject(message.header, options);
        return object;
    };

    /**
     * Converts this VotePayload to JSON.
     * @function toJSON
     * @memberof VotePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VotePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VotePayload;
})();

$root.Signature = (function() {

    /**
     * Properties of a Signature.
     * @exports ISignature
     * @interface ISignature
     * @property {Uint8Array|null} [from] Signature from
     * @property {Uint8Array|null} [signature] Signature signature
     */

    /**
     * Constructs a new Signature.
     * @exports Signature
     * @classdesc Represents a Signature.
     * @implements ISignature
     * @constructor
     * @param {ISignature=} [properties] Properties to set
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
     * @memberof Signature
     * @instance
     */
    Signature.prototype.from = $util.newBuffer([]);

    /**
     * Signature signature.
     * @member {Uint8Array} signature
     * @memberof Signature
     * @instance
     */
    Signature.prototype.signature = $util.newBuffer([]);

    /**
     * Creates a new Signature instance using the specified properties.
     * @function create
     * @memberof Signature
     * @static
     * @param {ISignature=} [properties] Properties to set
     * @returns {Signature} Signature instance
     */
    Signature.create = function create(properties) {
        return new Signature(properties);
    };

    /**
     * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encode
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
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
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @function decode
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Signature} Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Signature();
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
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Signature} Signature
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
     * @memberof Signature
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
     * @memberof Signature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Signature} Signature
     */
    Signature.fromObject = function fromObject(object) {
        if (object instanceof $root.Signature)
            return object;
        var message = new $root.Signature();
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
     * @memberof Signature
     * @static
     * @param {Signature} message Signature
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
     * @memberof Signature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Signature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Signature;
})();

$root.SignatureAggregate = (function() {

    /**
     * Properties of a SignatureAggregate.
     * @exports ISignatureAggregate
     * @interface ISignatureAggregate
     * @property {Uint8Array|null} [bitmap] SignatureAggregate bitmap
     * @property {Uint8Array|null} [signature] SignatureAggregate signature
     */

    /**
     * Constructs a new SignatureAggregate.
     * @exports SignatureAggregate
     * @classdesc Represents a SignatureAggregate.
     * @implements ISignatureAggregate
     * @constructor
     * @param {ISignatureAggregate=} [properties] Properties to set
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
     * @memberof SignatureAggregate
     * @instance
     */
    SignatureAggregate.prototype.bitmap = $util.newBuffer([]);

    /**
     * SignatureAggregate signature.
     * @member {Uint8Array} signature
     * @memberof SignatureAggregate
     * @instance
     */
    SignatureAggregate.prototype.signature = $util.newBuffer([]);

    /**
     * Creates a new SignatureAggregate instance using the specified properties.
     * @function create
     * @memberof SignatureAggregate
     * @static
     * @param {ISignatureAggregate=} [properties] Properties to set
     * @returns {SignatureAggregate} SignatureAggregate instance
     */
    SignatureAggregate.create = function create(properties) {
        return new SignatureAggregate(properties);
    };

    /**
     * Encodes the specified SignatureAggregate message. Does not implicitly {@link SignatureAggregate.verify|verify} messages.
     * @function encode
     * @memberof SignatureAggregate
     * @static
     * @param {ISignatureAggregate} message SignatureAggregate message or plain object to encode
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
     * Encodes the specified SignatureAggregate message, length delimited. Does not implicitly {@link SignatureAggregate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignatureAggregate
     * @static
     * @param {ISignatureAggregate} message SignatureAggregate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignatureAggregate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignatureAggregate message from the specified reader or buffer.
     * @function decode
     * @memberof SignatureAggregate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SignatureAggregate} SignatureAggregate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignatureAggregate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignatureAggregate();
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
     * @memberof SignatureAggregate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignatureAggregate} SignatureAggregate
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
     * @memberof SignatureAggregate
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
     * @memberof SignatureAggregate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SignatureAggregate} SignatureAggregate
     */
    SignatureAggregate.fromObject = function fromObject(object) {
        if (object instanceof $root.SignatureAggregate)
            return object;
        var message = new $root.SignatureAggregate();
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
     * @memberof SignatureAggregate
     * @static
     * @param {SignatureAggregate} message SignatureAggregate
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
     * @memberof SignatureAggregate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignatureAggregate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignatureAggregate;
})();

$root.BlockRequestPayload = (function() {

    /**
     * Properties of a BlockRequestPayload.
     * @exports IBlockRequestPayload
     * @interface IBlockRequestPayload
     * @property {Uint8Array|null} [hash] BlockRequestPayload hash
     * @property {number|null} [height] BlockRequestPayload height
     */

    /**
     * Constructs a new BlockRequestPayload.
     * @exports BlockRequestPayload
     * @classdesc Represents a BlockRequestPayload.
     * @implements IBlockRequestPayload
     * @constructor
     * @param {IBlockRequestPayload=} [properties] Properties to set
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
     * @memberof BlockRequestPayload
     * @instance
     */
    BlockRequestPayload.prototype.hash = $util.newBuffer([]);

    /**
     * BlockRequestPayload height.
     * @member {number} height
     * @memberof BlockRequestPayload
     * @instance
     */
    BlockRequestPayload.prototype.height = 0;

    /**
     * Creates a new BlockRequestPayload instance using the specified properties.
     * @function create
     * @memberof BlockRequestPayload
     * @static
     * @param {IBlockRequestPayload=} [properties] Properties to set
     * @returns {BlockRequestPayload} BlockRequestPayload instance
     */
    BlockRequestPayload.create = function create(properties) {
        return new BlockRequestPayload(properties);
    };

    /**
     * Encodes the specified BlockRequestPayload message. Does not implicitly {@link BlockRequestPayload.verify|verify} messages.
     * @function encode
     * @memberof BlockRequestPayload
     * @static
     * @param {IBlockRequestPayload} message BlockRequestPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockRequestPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hash != null && message.hasOwnProperty("hash"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
        if (message.height != null && message.hasOwnProperty("height"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
        return writer;
    };

    /**
     * Encodes the specified BlockRequestPayload message, length delimited. Does not implicitly {@link BlockRequestPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockRequestPayload
     * @static
     * @param {IBlockRequestPayload} message BlockRequestPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockRequestPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockRequestPayload message from the specified reader or buffer.
     * @function decode
     * @memberof BlockRequestPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockRequestPayload} BlockRequestPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockRequestPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockRequestPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hash = reader.bytes();
                break;
            case 2:
                message.height = reader.int32();
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
     * @memberof BlockRequestPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockRequestPayload} BlockRequestPayload
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
     * @memberof BlockRequestPayload
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
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        return null;
    };

    /**
     * Creates a BlockRequestPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlockRequestPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockRequestPayload} BlockRequestPayload
     */
    BlockRequestPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockRequestPayload)
            return object;
        var message = new $root.BlockRequestPayload();
        if (object.hash != null)
            if (typeof object.hash === "string")
                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
            else if (object.hash.length)
                message.hash = object.hash;
        if (object.height != null)
            message.height = object.height | 0;
        return message;
    };

    /**
     * Creates a plain object from a BlockRequestPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlockRequestPayload
     * @static
     * @param {BlockRequestPayload} message BlockRequestPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockRequestPayload.toObject = function toObject(message, options) {
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
            object.height = 0;
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        return object;
    };

    /**
     * Converts this BlockRequestPayload to JSON.
     * @function toJSON
     * @memberof BlockRequestPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockRequestPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockRequestPayload;
})();

$root.BlockResponsePayload = (function() {

    /**
     * Properties of a BlockResponsePayload.
     * @exports IBlockResponsePayload
     * @interface IBlockResponsePayload
     * @property {IBlocks|null} [blocks] BlockResponsePayload blocks
     * @property {IError|null} [errorCode] BlockResponsePayload errorCode
     */

    /**
     * Constructs a new BlockResponsePayload.
     * @exports BlockResponsePayload
     * @classdesc Represents a BlockResponsePayload.
     * @implements IBlockResponsePayload
     * @constructor
     * @param {IBlockResponsePayload=} [properties] Properties to set
     */
    function BlockResponsePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BlockResponsePayload blocks.
     * @member {IBlocks|null|undefined} blocks
     * @memberof BlockResponsePayload
     * @instance
     */
    BlockResponsePayload.prototype.blocks = null;

    /**
     * BlockResponsePayload errorCode.
     * @member {IError|null|undefined} errorCode
     * @memberof BlockResponsePayload
     * @instance
     */
    BlockResponsePayload.prototype.errorCode = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * BlockResponsePayload response.
     * @member {"blocks"|"errorCode"|undefined} response
     * @memberof BlockResponsePayload
     * @instance
     */
    Object.defineProperty(BlockResponsePayload.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["blocks", "errorCode"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new BlockResponsePayload instance using the specified properties.
     * @function create
     * @memberof BlockResponsePayload
     * @static
     * @param {IBlockResponsePayload=} [properties] Properties to set
     * @returns {BlockResponsePayload} BlockResponsePayload instance
     */
    BlockResponsePayload.create = function create(properties) {
        return new BlockResponsePayload(properties);
    };

    /**
     * Encodes the specified BlockResponsePayload message. Does not implicitly {@link BlockResponsePayload.verify|verify} messages.
     * @function encode
     * @memberof BlockResponsePayload
     * @static
     * @param {IBlockResponsePayload} message BlockResponsePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockResponsePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.blocks != null && message.hasOwnProperty("blocks"))
            $root.Blocks.encode(message.blocks, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            $root.Error.encode(message.errorCode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BlockResponsePayload message, length delimited. Does not implicitly {@link BlockResponsePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockResponsePayload
     * @static
     * @param {IBlockResponsePayload} message BlockResponsePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockResponsePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockResponsePayload message from the specified reader or buffer.
     * @function decode
     * @memberof BlockResponsePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockResponsePayload} BlockResponsePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockResponsePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockResponsePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.blocks = $root.Blocks.decode(reader, reader.uint32());
                break;
            case 2:
                message.errorCode = $root.Error.decode(reader, reader.uint32());
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
     * @memberof BlockResponsePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockResponsePayload} BlockResponsePayload
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
     * @memberof BlockResponsePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockResponsePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.blocks != null && message.hasOwnProperty("blocks")) {
            properties.response = 1;
            {
                var error = $root.Blocks.verify(message.blocks);
                if (error)
                    return "blocks." + error;
            }
        }
        if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
            if (properties.response === 1)
                return "response: multiple values";
            properties.response = 1;
            {
                var error = $root.Error.verify(message.errorCode);
                if (error)
                    return "errorCode." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BlockResponsePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlockResponsePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockResponsePayload} BlockResponsePayload
     */
    BlockResponsePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockResponsePayload)
            return object;
        var message = new $root.BlockResponsePayload();
        if (object.blocks != null) {
            if (typeof object.blocks !== "object")
                throw TypeError(".BlockResponsePayload.blocks: object expected");
            message.blocks = $root.Blocks.fromObject(object.blocks);
        }
        if (object.errorCode != null) {
            if (typeof object.errorCode !== "object")
                throw TypeError(".BlockResponsePayload.errorCode: object expected");
            message.errorCode = $root.Error.fromObject(object.errorCode);
        }
        return message;
    };

    /**
     * Creates a plain object from a BlockResponsePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlockResponsePayload
     * @static
     * @param {BlockResponsePayload} message BlockResponsePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockResponsePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.blocks != null && message.hasOwnProperty("blocks")) {
            object.blocks = $root.Blocks.toObject(message.blocks, options);
            if (options.oneofs)
                object.response = "blocks";
        }
        if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
            object.errorCode = $root.Error.toObject(message.errorCode, options);
            if (options.oneofs)
                object.response = "errorCode";
        }
        return object;
    };

    /**
     * Converts this BlockResponsePayload to JSON.
     * @function toJSON
     * @memberof BlockResponsePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockResponsePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockResponsePayload;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {Error.ErrorCode|null} [code] Error code
     * @property {string|null} [desc] Error desc
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error code.
     * @member {Error.ErrorCode} code
     * @memberof Error
     * @instance
     */
    Error.prototype.code = 0;

    /**
     * Error desc.
     * @member {string} desc
     * @memberof Error
     * @instance
     */
    Error.prototype.desc = "";

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
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
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
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
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
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
     * @memberof Error
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
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
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
     * @memberof Error
     * @static
     * @param {Error} message Error
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
            object.code = options.enums === String ? $root.Error.ErrorCode[message.code] : message.code;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ErrorCode enum.
     * @name Error.ErrorCode
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

$root.QuorumCertificate = (function() {

    /**
     * Properties of a QuorumCertificate.
     * @exports IQuorumCertificate
     * @interface IQuorumCertificate
     * @property {IBlockHeader|null} [header] QuorumCertificate header
     * @property {ISignatureAggregate|null} [signatureAggregate] QuorumCertificate signatureAggregate
     */

    /**
     * Constructs a new QuorumCertificate.
     * @exports QuorumCertificate
     * @classdesc Represents a QuorumCertificate.
     * @implements IQuorumCertificate
     * @constructor
     * @param {IQuorumCertificate=} [properties] Properties to set
     */
    function QuorumCertificate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuorumCertificate header.
     * @member {IBlockHeader|null|undefined} header
     * @memberof QuorumCertificate
     * @instance
     */
    QuorumCertificate.prototype.header = null;

    /**
     * QuorumCertificate signatureAggregate.
     * @member {ISignatureAggregate|null|undefined} signatureAggregate
     * @memberof QuorumCertificate
     * @instance
     */
    QuorumCertificate.prototype.signatureAggregate = null;

    /**
     * Creates a new QuorumCertificate instance using the specified properties.
     * @function create
     * @memberof QuorumCertificate
     * @static
     * @param {IQuorumCertificate=} [properties] Properties to set
     * @returns {QuorumCertificate} QuorumCertificate instance
     */
    QuorumCertificate.create = function create(properties) {
        return new QuorumCertificate(properties);
    };

    /**
     * Encodes the specified QuorumCertificate message. Does not implicitly {@link QuorumCertificate.verify|verify} messages.
     * @function encode
     * @memberof QuorumCertificate
     * @static
     * @param {IQuorumCertificate} message QuorumCertificate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuorumCertificate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            $root.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
            $root.SignatureAggregate.encode(message.signatureAggregate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified QuorumCertificate message, length delimited. Does not implicitly {@link QuorumCertificate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuorumCertificate
     * @static
     * @param {IQuorumCertificate} message QuorumCertificate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuorumCertificate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuorumCertificate message from the specified reader or buffer.
     * @function decode
     * @memberof QuorumCertificate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuorumCertificate} QuorumCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuorumCertificate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuorumCertificate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.BlockHeader.decode(reader, reader.uint32());
                break;
            case 2:
                message.signatureAggregate = $root.SignatureAggregate.decode(reader, reader.uint32());
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
     * @memberof QuorumCertificate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuorumCertificate} QuorumCertificate
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
     * @memberof QuorumCertificate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuorumCertificate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.BlockHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate")) {
            var error = $root.SignatureAggregate.verify(message.signatureAggregate);
            if (error)
                return "signatureAggregate." + error;
        }
        return null;
    };

    /**
     * Creates a QuorumCertificate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuorumCertificate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuorumCertificate} QuorumCertificate
     */
    QuorumCertificate.fromObject = function fromObject(object) {
        if (object instanceof $root.QuorumCertificate)
            return object;
        var message = new $root.QuorumCertificate();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".QuorumCertificate.header: object expected");
            message.header = $root.BlockHeader.fromObject(object.header);
        }
        if (object.signatureAggregate != null) {
            if (typeof object.signatureAggregate !== "object")
                throw TypeError(".QuorumCertificate.signatureAggregate: object expected");
            message.signatureAggregate = $root.SignatureAggregate.fromObject(object.signatureAggregate);
        }
        return message;
    };

    /**
     * Creates a plain object from a QuorumCertificate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuorumCertificate
     * @static
     * @param {QuorumCertificate} message QuorumCertificate
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
            object.header = $root.BlockHeader.toObject(message.header, options);
        if (message.signatureAggregate != null && message.hasOwnProperty("signatureAggregate"))
            object.signatureAggregate = $root.SignatureAggregate.toObject(message.signatureAggregate, options);
        return object;
    };

    /**
     * Converts this QuorumCertificate to JSON.
     * @function toJSON
     * @memberof QuorumCertificate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuorumCertificate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuorumCertificate;
})();

$root.Block = (function() {

    /**
     * Properties of a Block.
     * @exports IBlock
     * @interface IBlock
     * @property {IBlockHeader|null} [header] Block header
     * @property {IQuorumCertificate|null} [cert] Block cert
     * @property {IBlockData|null} [data] Block data
     * @property {Array.<ITransaction>|null} [txs] Block txs
     */

    /**
     * Constructs a new Block.
     * @exports Block
     * @classdesc Represents a Block.
     * @implements IBlock
     * @constructor
     * @param {IBlock=} [properties] Properties to set
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
     * @member {IBlockHeader|null|undefined} header
     * @memberof Block
     * @instance
     */
    Block.prototype.header = null;

    /**
     * Block cert.
     * @member {IQuorumCertificate|null|undefined} cert
     * @memberof Block
     * @instance
     */
    Block.prototype.cert = null;

    /**
     * Block data.
     * @member {IBlockData|null|undefined} data
     * @memberof Block
     * @instance
     */
    Block.prototype.data = null;

    /**
     * Block txs.
     * @member {Array.<ITransaction>} txs
     * @memberof Block
     * @instance
     */
    Block.prototype.txs = $util.emptyArray;

    /**
     * Creates a new Block instance using the specified properties.
     * @function create
     * @memberof Block
     * @static
     * @param {IBlock=} [properties] Properties to set
     * @returns {Block} Block instance
     */
    Block.create = function create(properties) {
        return new Block(properties);
    };

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @function encode
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            $root.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.cert != null && message.hasOwnProperty("cert"))
            $root.QuorumCertificate.encode(message.cert, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.data != null && message.hasOwnProperty("data"))
            $root.BlockData.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.txs != null && message.txs.length)
            for (var i = 0; i < message.txs.length; ++i)
                $root.Transaction.encode(message.txs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @function decode
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Block();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.BlockHeader.decode(reader, reader.uint32());
                break;
            case 2:
                message.cert = $root.QuorumCertificate.decode(reader, reader.uint32());
                break;
            case 3:
                message.data = $root.BlockData.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.txs && message.txs.length))
                    message.txs = [];
                message.txs.push($root.Transaction.decode(reader, reader.uint32()));
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
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Block} Block
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
     * @memberof Block
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Block.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.BlockHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.cert != null && message.hasOwnProperty("cert")) {
            var error = $root.QuorumCertificate.verify(message.cert);
            if (error)
                return "cert." + error;
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.BlockData.verify(message.data);
            if (error)
                return "data." + error;
        }
        if (message.txs != null && message.hasOwnProperty("txs")) {
            if (!Array.isArray(message.txs))
                return "txs: array expected";
            for (var i = 0; i < message.txs.length; ++i) {
                var error = $root.Transaction.verify(message.txs[i]);
                if (error)
                    return "txs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Block
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Block} Block
     */
    Block.fromObject = function fromObject(object) {
        if (object instanceof $root.Block)
            return object;
        var message = new $root.Block();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".Block.header: object expected");
            message.header = $root.BlockHeader.fromObject(object.header);
        }
        if (object.cert != null) {
            if (typeof object.cert !== "object")
                throw TypeError(".Block.cert: object expected");
            message.cert = $root.QuorumCertificate.fromObject(object.cert);
        }
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".Block.data: object expected");
            message.data = $root.BlockData.fromObject(object.data);
        }
        if (object.txs) {
            if (!Array.isArray(object.txs))
                throw TypeError(".Block.txs: array expected");
            message.txs = [];
            for (var i = 0; i < object.txs.length; ++i) {
                if (typeof object.txs[i] !== "object")
                    throw TypeError(".Block.txs: object expected");
                message.txs[i] = $root.Transaction.fromObject(object.txs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Block
     * @static
     * @param {Block} message Block
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
            object.data = null;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.BlockHeader.toObject(message.header, options);
        if (message.cert != null && message.hasOwnProperty("cert"))
            object.cert = $root.QuorumCertificate.toObject(message.cert, options);
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.BlockData.toObject(message.data, options);
        if (message.txs && message.txs.length) {
            object.txs = [];
            for (var j = 0; j < message.txs.length; ++j)
                object.txs[j] = $root.Transaction.toObject(message.txs[j], options);
        }
        return object;
    };

    /**
     * Converts this Block to JSON.
     * @function toJSON
     * @memberof Block
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Block.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Block;
})();

$root.Blocks = (function() {

    /**
     * Properties of a Blocks.
     * @exports IBlocks
     * @interface IBlocks
     * @property {Array.<IBlock>|null} [blocks] Blocks blocks
     */

    /**
     * Constructs a new Blocks.
     * @exports Blocks
     * @classdesc Represents a Blocks.
     * @implements IBlocks
     * @constructor
     * @param {IBlocks=} [properties] Properties to set
     */
    function Blocks(properties) {
        this.blocks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Blocks blocks.
     * @member {Array.<IBlock>} blocks
     * @memberof Blocks
     * @instance
     */
    Blocks.prototype.blocks = $util.emptyArray;

    /**
     * Creates a new Blocks instance using the specified properties.
     * @function create
     * @memberof Blocks
     * @static
     * @param {IBlocks=} [properties] Properties to set
     * @returns {Blocks} Blocks instance
     */
    Blocks.create = function create(properties) {
        return new Blocks(properties);
    };

    /**
     * Encodes the specified Blocks message. Does not implicitly {@link Blocks.verify|verify} messages.
     * @function encode
     * @memberof Blocks
     * @static
     * @param {IBlocks} message Blocks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Blocks.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.blocks != null && message.blocks.length)
            for (var i = 0; i < message.blocks.length; ++i)
                $root.Block.encode(message.blocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Blocks message, length delimited. Does not implicitly {@link Blocks.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Blocks
     * @static
     * @param {IBlocks} message Blocks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Blocks.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Blocks message from the specified reader or buffer.
     * @function decode
     * @memberof Blocks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Blocks} Blocks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Blocks.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Blocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.blocks && message.blocks.length))
                    message.blocks = [];
                message.blocks.push($root.Block.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Blocks message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Blocks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Blocks} Blocks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Blocks.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Blocks message.
     * @function verify
     * @memberof Blocks
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Blocks.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.blocks != null && message.hasOwnProperty("blocks")) {
            if (!Array.isArray(message.blocks))
                return "blocks: array expected";
            for (var i = 0; i < message.blocks.length; ++i) {
                var error = $root.Block.verify(message.blocks[i]);
                if (error)
                    return "blocks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Blocks message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Blocks
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Blocks} Blocks
     */
    Blocks.fromObject = function fromObject(object) {
        if (object instanceof $root.Blocks)
            return object;
        var message = new $root.Blocks();
        if (object.blocks) {
            if (!Array.isArray(object.blocks))
                throw TypeError(".Blocks.blocks: array expected");
            message.blocks = [];
            for (var i = 0; i < object.blocks.length; ++i) {
                if (typeof object.blocks[i] !== "object")
                    throw TypeError(".Blocks.blocks: object expected");
                message.blocks[i] = $root.Block.fromObject(object.blocks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Blocks message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Blocks
     * @static
     * @param {Blocks} message Blocks
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Blocks.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.blocks = [];
        if (message.blocks && message.blocks.length) {
            object.blocks = [];
            for (var j = 0; j < message.blocks.length; ++j)
                object.blocks[j] = $root.Block.toObject(message.blocks[j], options);
        }
        return object;
    };

    /**
     * Converts this Blocks to JSON.
     * @function toJSON
     * @memberof Blocks
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Blocks.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Blocks;
})();

$root.BlockHeader = (function() {

    /**
     * Properties of a BlockHeader.
     * @exports IBlockHeader
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
     * @exports BlockHeader
     * @classdesc Represents a BlockHeader.
     * @implements IBlockHeader
     * @constructor
     * @param {IBlockHeader=} [properties] Properties to set
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
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.hash = $util.newBuffer([]);

    /**
     * BlockHeader parentHash.
     * @member {Uint8Array} parentHash
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.parentHash = $util.newBuffer([]);

    /**
     * BlockHeader qcHash.
     * @member {Uint8Array} qcHash
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.qcHash = $util.newBuffer([]);

    /**
     * BlockHeader dataHash.
     * @member {Uint8Array} dataHash
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.dataHash = $util.newBuffer([]);

    /**
     * BlockHeader txHash.
     * @member {Uint8Array} txHash
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.txHash = $util.newBuffer([]);

    /**
     * BlockHeader stateHash.
     * @member {Uint8Array} stateHash
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.stateHash = $util.newBuffer([]);

    /**
     * BlockHeader height.
     * @member {number} height
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.height = 0;

    /**
     * BlockHeader timestamp.
     * @member {number|Long} timestamp
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BlockHeader instance using the specified properties.
     * @function create
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader=} [properties] Properties to set
     * @returns {BlockHeader} BlockHeader instance
     */
    BlockHeader.create = function create(properties) {
        return new BlockHeader(properties);
    };

    /**
     * Encodes the specified BlockHeader message. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @function encode
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader} message BlockHeader message or plain object to encode
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
     * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader} message BlockHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockHeader message from the specified reader or buffer.
     * @function decode
     * @memberof BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockHeader} BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockHeader();
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
     * @memberof BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockHeader} BlockHeader
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
     * @memberof BlockHeader
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
     * @memberof BlockHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockHeader} BlockHeader
     */
    BlockHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockHeader)
            return object;
        var message = new $root.BlockHeader();
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
     * @memberof BlockHeader
     * @static
     * @param {BlockHeader} message BlockHeader
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
     * @memberof BlockHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockHeader;
})();

$root.BlockData = (function() {

    /**
     * Properties of a BlockData.
     * @exports IBlockData
     * @interface IBlockData
     * @property {Uint8Array|null} [data] BlockData data
     */

    /**
     * Constructs a new BlockData.
     * @exports BlockData
     * @classdesc Represents a BlockData.
     * @implements IBlockData
     * @constructor
     * @param {IBlockData=} [properties] Properties to set
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
     * @memberof BlockData
     * @instance
     */
    BlockData.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new BlockData instance using the specified properties.
     * @function create
     * @memberof BlockData
     * @static
     * @param {IBlockData=} [properties] Properties to set
     * @returns {BlockData} BlockData instance
     */
    BlockData.create = function create(properties) {
        return new BlockData(properties);
    };

    /**
     * Encodes the specified BlockData message. Does not implicitly {@link BlockData.verify|verify} messages.
     * @function encode
     * @memberof BlockData
     * @static
     * @param {IBlockData} message BlockData message or plain object to encode
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
     * Encodes the specified BlockData message, length delimited. Does not implicitly {@link BlockData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockData
     * @static
     * @param {IBlockData} message BlockData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockData message from the specified reader or buffer.
     * @function decode
     * @memberof BlockData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockData} BlockData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockData();
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
     * @memberof BlockData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockData} BlockData
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
     * @memberof BlockData
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
     * @memberof BlockData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockData} BlockData
     */
    BlockData.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockData)
            return object;
        var message = new $root.BlockData();
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
     * @memberof BlockData
     * @static
     * @param {BlockData} message BlockData
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
     * @memberof BlockData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockData;
})();

$root.Transaction = (function() {

    /**
     * Properties of a Transaction.
     * @exports ITransaction
     * @interface ITransaction
     * @property {Transaction.Type|null} [type] Transaction type
     * @property {Uint8Array|null} [to] Transaction to
     * @property {number|Long|null} [nonce] Transaction nonce
     * @property {number|Long|null} [value] Transaction value
     * @property {number|Long|null} [fee] Transaction fee
     * @property {ISignature|null} [signature] Transaction signature
     * @property {Uint8Array|null} [data] Transaction data
     */

    /**
     * Constructs a new Transaction.
     * @exports Transaction
     * @classdesc Represents a Transaction.
     * @implements ITransaction
     * @constructor
     * @param {ITransaction=} [properties] Properties to set
     */
    function Transaction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Transaction type.
     * @member {Transaction.Type} type
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.type = 0;

    /**
     * Transaction to.
     * @member {Uint8Array} to
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.to = $util.newBuffer([]);

    /**
     * Transaction nonce.
     * @member {number|Long} nonce
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Transaction value.
     * @member {number|Long} value
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Transaction fee.
     * @member {number|Long} fee
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Transaction signature.
     * @member {ISignature|null|undefined} signature
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.signature = null;

    /**
     * Transaction data.
     * @member {Uint8Array} data
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Transaction instance using the specified properties.
     * @function create
     * @memberof Transaction
     * @static
     * @param {ITransaction=} [properties] Properties to set
     * @returns {Transaction} Transaction instance
     */
    Transaction.create = function create(properties) {
        return new Transaction(properties);
    };

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encode
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
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
            $root.Signature.encode(message.signature, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @function decode
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Transaction();
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
                message.signature = $root.Signature.decode(reader, reader.uint32());
                break;
            case 7:
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
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Transaction} Transaction
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
     * @memberof Transaction
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
            var error = $root.Signature.verify(message.signature);
            if (error)
                return "signature." + error;
        }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Transaction} Transaction
     */
    Transaction.fromObject = function fromObject(object) {
        if (object instanceof $root.Transaction)
            return object;
        var message = new $root.Transaction();
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
                throw TypeError(".Transaction.signature: object expected");
            message.signature = $root.Signature.fromObject(object.signature);
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Transaction
     * @static
     * @param {Transaction} message Transaction
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
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Transaction.Type[message.type] : message.type;
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
            object.signature = $root.Signature.toObject(message.signature, options);
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Transaction to JSON.
     * @function toJSON
     * @memberof Transaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Transaction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name Transaction.Type
     * @enum {string}
     * @property {number} PAYMENT=0 PAYMENT value
     * @property {number} SLASHING=1 SLASHING value
     * @property {number} SETTLEMENT=2 SETTLEMENT value
     * @property {number} AGREEMENT=3 AGREEMENT value
     * @property {number} PROOF=4 PROOF value
     */
    Transaction.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PAYMENT"] = 0;
        values[valuesById[1] = "SLASHING"] = 1;
        values[valuesById[2] = "SETTLEMENT"] = 2;
        values[valuesById[3] = "AGREEMENT"] = 3;
        values[valuesById[4] = "PROOF"] = 4;
        return values;
    })();

    return Transaction;
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
