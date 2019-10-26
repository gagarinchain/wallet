/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Event = (function() {

    /**
     * Properties of an Event.
     * @exports IEvent
     * @interface IEvent
     * @property {Event.EventType|null} [type] Event type
     * @property {Uint8Array|null} [id] Event id
     * @property {google.protobuf.IAny|null} [payload] Event payload
     */

    /**
     * Constructs a new Event.
     * @exports Event
     * @classdesc Represents an Event.
     * @implements IEvent
     * @constructor
     * @param {IEvent=} [properties] Properties to set
     */
    function Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Event type.
     * @member {Event.EventType} type
     * @memberof Event
     * @instance
     */
    Event.prototype.type = 0;

    /**
     * Event id.
     * @member {Uint8Array} id
     * @memberof Event
     * @instance
     */
    Event.prototype.id = $util.newBuffer([]);

    /**
     * Event payload.
     * @member {google.protobuf.IAny|null|undefined} payload
     * @memberof Event
     * @instance
     */
    Event.prototype.payload = null;

    /**
     * Creates a new Event instance using the specified properties.
     * @function create
     * @memberof Event
     * @static
     * @param {IEvent=} [properties] Properties to set
     * @returns {Event} Event instance
     */
    Event.create = function create(properties) {
        return new Event(properties);
    };

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @function encode
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
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
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @function decode
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
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
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Event} Event
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
     * @memberof Event
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
     * @memberof Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Event} Event
     */
    Event.fromObject = function fromObject(object) {
        if (object instanceof $root.Event)
            return object;
        var message = new $root.Event();
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
                throw TypeError(".Event.payload: object expected");
            message.payload = $root.google.protobuf.Any.fromObject(object.payload);
        }
        return message;
    };

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Event
     * @static
     * @param {Event} message Event
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
            object.type = options.enums === String ? $root.Event.EventType[message.type] : message.type;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
        return object;
    };

    /**
     * Converts this Event to JSON.
     * @function toJSON
     * @memberof Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * EventType enum.
     * @name Event.EventType
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

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {Request.RequestType|null} [type] Request type
     * @property {Uint8Array|null} [id] Request id
     * @property {google.protobuf.IAny|null} [payload] Request payload
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request type.
     * @member {Request.RequestType} type
     * @memberof Request
     * @instance
     */
    Request.prototype.type = 0;

    /**
     * Request id.
     * @member {Uint8Array} id
     * @memberof Request
     * @instance
     */
    Request.prototype.id = $util.newBuffer([]);

    /**
     * Request payload.
     * @member {google.protobuf.IAny|null|undefined} payload
     * @memberof Request
     * @instance
     */
    Request.prototype.payload = null;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
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
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
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
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
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
     * @memberof Request
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
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
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
                throw TypeError(".Request.payload: object expected");
            message.payload = $root.google.protobuf.Any.fromObject(object.payload);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
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
            object.type = options.enums === String ? $root.Request.RequestType[message.type] : message.type;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * RequestType enum.
     * @name Request.RequestType
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

$root.EpochStartedPayload = (function() {

    /**
     * Properties of an EpochStartedPayload.
     * @exports IEpochStartedPayload
     * @interface IEpochStartedPayload
     * @property {number|null} [epoch] EpochStartedPayload epoch
     */

    /**
     * Constructs a new EpochStartedPayload.
     * @exports EpochStartedPayload
     * @classdesc Represents an EpochStartedPayload.
     * @implements IEpochStartedPayload
     * @constructor
     * @param {IEpochStartedPayload=} [properties] Properties to set
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
     * @memberof EpochStartedPayload
     * @instance
     */
    EpochStartedPayload.prototype.epoch = 0;

    /**
     * Creates a new EpochStartedPayload instance using the specified properties.
     * @function create
     * @memberof EpochStartedPayload
     * @static
     * @param {IEpochStartedPayload=} [properties] Properties to set
     * @returns {EpochStartedPayload} EpochStartedPayload instance
     */
    EpochStartedPayload.create = function create(properties) {
        return new EpochStartedPayload(properties);
    };

    /**
     * Encodes the specified EpochStartedPayload message. Does not implicitly {@link EpochStartedPayload.verify|verify} messages.
     * @function encode
     * @memberof EpochStartedPayload
     * @static
     * @param {IEpochStartedPayload} message EpochStartedPayload message or plain object to encode
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
     * Encodes the specified EpochStartedPayload message, length delimited. Does not implicitly {@link EpochStartedPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpochStartedPayload
     * @static
     * @param {IEpochStartedPayload} message EpochStartedPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpochStartedPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpochStartedPayload message from the specified reader or buffer.
     * @function decode
     * @memberof EpochStartedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpochStartedPayload} EpochStartedPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpochStartedPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpochStartedPayload();
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
     * @memberof EpochStartedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpochStartedPayload} EpochStartedPayload
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
     * @memberof EpochStartedPayload
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
     * @memberof EpochStartedPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpochStartedPayload} EpochStartedPayload
     */
    EpochStartedPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.EpochStartedPayload)
            return object;
        var message = new $root.EpochStartedPayload();
        if (object.epoch != null)
            message.epoch = object.epoch | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpochStartedPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpochStartedPayload
     * @static
     * @param {EpochStartedPayload} message EpochStartedPayload
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
     * @memberof EpochStartedPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpochStartedPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpochStartedPayload;
})();

$root.ViewChangedPayload = (function() {

    /**
     * Properties of a ViewChangedPayload.
     * @exports IViewChangedPayload
     * @interface IViewChangedPayload
     * @property {number|null} [view] ViewChangedPayload view
     */

    /**
     * Constructs a new ViewChangedPayload.
     * @exports ViewChangedPayload
     * @classdesc Represents a ViewChangedPayload.
     * @implements IViewChangedPayload
     * @constructor
     * @param {IViewChangedPayload=} [properties] Properties to set
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
     * @memberof ViewChangedPayload
     * @instance
     */
    ViewChangedPayload.prototype.view = 0;

    /**
     * Creates a new ViewChangedPayload instance using the specified properties.
     * @function create
     * @memberof ViewChangedPayload
     * @static
     * @param {IViewChangedPayload=} [properties] Properties to set
     * @returns {ViewChangedPayload} ViewChangedPayload instance
     */
    ViewChangedPayload.create = function create(properties) {
        return new ViewChangedPayload(properties);
    };

    /**
     * Encodes the specified ViewChangedPayload message. Does not implicitly {@link ViewChangedPayload.verify|verify} messages.
     * @function encode
     * @memberof ViewChangedPayload
     * @static
     * @param {IViewChangedPayload} message ViewChangedPayload message or plain object to encode
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
     * Encodes the specified ViewChangedPayload message, length delimited. Does not implicitly {@link ViewChangedPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ViewChangedPayload
     * @static
     * @param {IViewChangedPayload} message ViewChangedPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewChangedPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ViewChangedPayload message from the specified reader or buffer.
     * @function decode
     * @memberof ViewChangedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ViewChangedPayload} ViewChangedPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewChangedPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ViewChangedPayload();
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
     * @memberof ViewChangedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ViewChangedPayload} ViewChangedPayload
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
     * @memberof ViewChangedPayload
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
     * @memberof ViewChangedPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ViewChangedPayload} ViewChangedPayload
     */
    ViewChangedPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.ViewChangedPayload)
            return object;
        var message = new $root.ViewChangedPayload();
        if (object.view != null)
            message.view = object.view | 0;
        return message;
    };

    /**
     * Creates a plain object from a ViewChangedPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ViewChangedPayload
     * @static
     * @param {ViewChangedPayload} message ViewChangedPayload
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
     * @memberof ViewChangedPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ViewChangedPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ViewChangedPayload;
})();

$root.CommittedPayload = (function() {

    /**
     * Properties of a CommittedPayload.
     * @exports ICommittedPayload
     * @interface ICommittedPayload
     * @property {Uint8Array|null} [hash] CommittedPayload hash
     */

    /**
     * Constructs a new CommittedPayload.
     * @exports CommittedPayload
     * @classdesc Represents a CommittedPayload.
     * @implements ICommittedPayload
     * @constructor
     * @param {ICommittedPayload=} [properties] Properties to set
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
     * @memberof CommittedPayload
     * @instance
     */
    CommittedPayload.prototype.hash = $util.newBuffer([]);

    /**
     * Creates a new CommittedPayload instance using the specified properties.
     * @function create
     * @memberof CommittedPayload
     * @static
     * @param {ICommittedPayload=} [properties] Properties to set
     * @returns {CommittedPayload} CommittedPayload instance
     */
    CommittedPayload.create = function create(properties) {
        return new CommittedPayload(properties);
    };

    /**
     * Encodes the specified CommittedPayload message. Does not implicitly {@link CommittedPayload.verify|verify} messages.
     * @function encode
     * @memberof CommittedPayload
     * @static
     * @param {ICommittedPayload} message CommittedPayload message or plain object to encode
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
     * Encodes the specified CommittedPayload message, length delimited. Does not implicitly {@link CommittedPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommittedPayload
     * @static
     * @param {ICommittedPayload} message CommittedPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommittedPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommittedPayload message from the specified reader or buffer.
     * @function decode
     * @memberof CommittedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommittedPayload} CommittedPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommittedPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommittedPayload();
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
     * @memberof CommittedPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommittedPayload} CommittedPayload
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
     * @memberof CommittedPayload
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
     * @memberof CommittedPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommittedPayload} CommittedPayload
     */
    CommittedPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.CommittedPayload)
            return object;
        var message = new $root.CommittedPayload();
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
     * @memberof CommittedPayload
     * @static
     * @param {CommittedPayload} message CommittedPayload
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
     * @memberof CommittedPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommittedPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommittedPayload;
})();

$root.AccountRequestPayload = (function() {

    /**
     * Properties of an AccountRequestPayload.
     * @exports IAccountRequestPayload
     * @interface IAccountRequestPayload
     * @property {Uint8Array|null} [address] AccountRequestPayload address
     * @property {Uint8Array|null} [block] AccountRequestPayload block
     */

    /**
     * Constructs a new AccountRequestPayload.
     * @exports AccountRequestPayload
     * @classdesc Represents an AccountRequestPayload.
     * @implements IAccountRequestPayload
     * @constructor
     * @param {IAccountRequestPayload=} [properties] Properties to set
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
     * @memberof AccountRequestPayload
     * @instance
     */
    AccountRequestPayload.prototype.address = $util.newBuffer([]);

    /**
     * AccountRequestPayload block.
     * @member {Uint8Array} block
     * @memberof AccountRequestPayload
     * @instance
     */
    AccountRequestPayload.prototype.block = $util.newBuffer([]);

    /**
     * Creates a new AccountRequestPayload instance using the specified properties.
     * @function create
     * @memberof AccountRequestPayload
     * @static
     * @param {IAccountRequestPayload=} [properties] Properties to set
     * @returns {AccountRequestPayload} AccountRequestPayload instance
     */
    AccountRequestPayload.create = function create(properties) {
        return new AccountRequestPayload(properties);
    };

    /**
     * Encodes the specified AccountRequestPayload message. Does not implicitly {@link AccountRequestPayload.verify|verify} messages.
     * @function encode
     * @memberof AccountRequestPayload
     * @static
     * @param {IAccountRequestPayload} message AccountRequestPayload message or plain object to encode
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
     * Encodes the specified AccountRequestPayload message, length delimited. Does not implicitly {@link AccountRequestPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountRequestPayload
     * @static
     * @param {IAccountRequestPayload} message AccountRequestPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountRequestPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountRequestPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AccountRequestPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountRequestPayload} AccountRequestPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountRequestPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountRequestPayload();
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
     * @memberof AccountRequestPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountRequestPayload} AccountRequestPayload
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
     * @memberof AccountRequestPayload
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
     * @memberof AccountRequestPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountRequestPayload} AccountRequestPayload
     */
    AccountRequestPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountRequestPayload)
            return object;
        var message = new $root.AccountRequestPayload();
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
     * @memberof AccountRequestPayload
     * @static
     * @param {AccountRequestPayload} message AccountRequestPayload
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
     * @memberof AccountRequestPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountRequestPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountRequestPayload;
})();

$root.AccountResponsePayload = (function() {

    /**
     * Properties of an AccountResponsePayload.
     * @exports IAccountResponsePayload
     * @interface IAccountResponsePayload
     * @property {Uint8Array|null} [address] AccountResponsePayload address
     * @property {Uint8Array|null} [block] AccountResponsePayload block
     * @property {number|Long|null} [nonce] AccountResponsePayload nonce
     * @property {number|Long|null} [value] AccountResponsePayload value
     * @property {Array.<Uint8Array>|null} [proof] AccountResponsePayload proof
     */

    /**
     * Constructs a new AccountResponsePayload.
     * @exports AccountResponsePayload
     * @classdesc Represents an AccountResponsePayload.
     * @implements IAccountResponsePayload
     * @constructor
     * @param {IAccountResponsePayload=} [properties] Properties to set
     */
    function AccountResponsePayload(properties) {
        this.proof = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AccountResponsePayload address.
     * @member {Uint8Array} address
     * @memberof AccountResponsePayload
     * @instance
     */
    AccountResponsePayload.prototype.address = $util.newBuffer([]);

    /**
     * AccountResponsePayload block.
     * @member {Uint8Array} block
     * @memberof AccountResponsePayload
     * @instance
     */
    AccountResponsePayload.prototype.block = $util.newBuffer([]);

    /**
     * AccountResponsePayload nonce.
     * @member {number|Long} nonce
     * @memberof AccountResponsePayload
     * @instance
     */
    AccountResponsePayload.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AccountResponsePayload value.
     * @member {number|Long} value
     * @memberof AccountResponsePayload
     * @instance
     */
    AccountResponsePayload.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AccountResponsePayload proof.
     * @member {Array.<Uint8Array>} proof
     * @memberof AccountResponsePayload
     * @instance
     */
    AccountResponsePayload.prototype.proof = $util.emptyArray;

    /**
     * Creates a new AccountResponsePayload instance using the specified properties.
     * @function create
     * @memberof AccountResponsePayload
     * @static
     * @param {IAccountResponsePayload=} [properties] Properties to set
     * @returns {AccountResponsePayload} AccountResponsePayload instance
     */
    AccountResponsePayload.create = function create(properties) {
        return new AccountResponsePayload(properties);
    };

    /**
     * Encodes the specified AccountResponsePayload message. Does not implicitly {@link AccountResponsePayload.verify|verify} messages.
     * @function encode
     * @memberof AccountResponsePayload
     * @static
     * @param {IAccountResponsePayload} message AccountResponsePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountResponsePayload.encode = function encode(message, writer) {
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
     * Encodes the specified AccountResponsePayload message, length delimited. Does not implicitly {@link AccountResponsePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountResponsePayload
     * @static
     * @param {IAccountResponsePayload} message AccountResponsePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountResponsePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountResponsePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AccountResponsePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountResponsePayload} AccountResponsePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountResponsePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountResponsePayload();
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
     * Decodes an AccountResponsePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountResponsePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountResponsePayload} AccountResponsePayload
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
     * @memberof AccountResponsePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountResponsePayload.verify = function verify(message) {
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
     * Creates an AccountResponsePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountResponsePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountResponsePayload} AccountResponsePayload
     */
    AccountResponsePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountResponsePayload)
            return object;
        var message = new $root.AccountResponsePayload();
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
                throw TypeError(".AccountResponsePayload.proof: array expected");
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
     * Creates a plain object from an AccountResponsePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountResponsePayload
     * @static
     * @param {AccountResponsePayload} message AccountResponsePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountResponsePayload.toObject = function toObject(message, options) {
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
     * Converts this AccountResponsePayload to JSON.
     * @function toJSON
     * @memberof AccountResponsePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountResponsePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountResponsePayload;
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
