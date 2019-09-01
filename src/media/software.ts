export enum SoftwareEntity {
    Software = 'software',
    IPadSoftware = 'iPadSoftware',
    MacSoftware = 'macSoftware',
}

export enum SoftwareAttribute {
    SoftwareDeveloper = 'softwareDeveloper',
}

export class Software {
    readonly type = 'software';

    constructor(readonly entity?: SoftwareEntity, readonly attribute?: SoftwareAttribute) {}
}