export type Template = {
    VERSION: number,
    TEMPLATE: Array<TemplateActivity>,
    PARAMETERS: Object,
    VARIABLES: Object,
    CONSTANTS: Object,
    DOCUMENT_FIELDS: Object,

}

export type TemplateActivity = {
    Type: string,
    Name: string,
    Properties: TemplateActivityProperties,
    Children: Array<TemplateActivity>,
}

export type TemplateActivityProperties = {
    Title: string,
    [key: string]: any,
}