// Global type define
declare namespace NodeJS {
    export interface Global {
        env: any, // Hold env value
        errorCodes: any, // Error codes and messages data
        configs: any, // Hold all current configs data
        socket: any // Hold current socket io instance,
        logger: any,
        i18n: any
    }
}

