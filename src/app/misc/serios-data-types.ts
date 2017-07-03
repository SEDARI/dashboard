/**
 * These specifications are copied from the serios documentation.
 * https://github.com/SEDARI/serios-docs/blob/master/serios.apib
 */

export class Gateway {
    private name: string;
    private URL: string;
    private protocol: string;
    private port: number;
}

export class ServiceObject {
    public soID: string;
    public name: string;
    public description: string;
    public public: string;
    public streams: Stream[];
    public gateway: GatewaySO;
}

export class Stream {
    private name: string;
    private description: string;
    private channels: Channel[];
}

export class Channel {
    private name: string;
    private type: string;
    private unit: string;
}

export class GatewaySO {
    private gatewayID: string;
    private name: string;
    private URL: string;
}

export class SensorData {
    private channels: SensorDataChannel[];
}

export class SensorDataChannel {
    private name: string;
    private value: string;
}
