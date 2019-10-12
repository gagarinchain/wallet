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
        if (message.payload != null && message.hasOwnProperty("payload"))
            $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
        }
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
            object.payload = null;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Event.EventType[message.type] : message.type;
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
     */
    Event.EventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RESERVED"] = 0;
        values[valuesById[1] = "BLOCK_ADDED"] = 1;
        values[valuesById[2] = "EPOCH_STARTED"] = 2;
        values[valuesById[3] = "VIEW_CHANGED"] = 3;
        values[valuesById[4] = "COMMITTED"] = 4;
        return values;
    })();

    return Event;
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
