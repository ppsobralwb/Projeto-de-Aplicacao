export type Application = {
    id?: string;
    name: string,
    applicationCall: string,
    parameters: [{
        parameterName: string,
        parameterTag: string,
        parameterType: string,
    }],
}