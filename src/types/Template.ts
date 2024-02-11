export type TemplateType = {
    VERSION: number,
    TEMPLATE: Array<TemplateActivityType>,
    PARAMETERS: Object,
    VARIABLES: Object,
    CONSTANTS: Object,
    DOCUMENT_FIELDS: Object,

}

export type TemplateActivityType = {
    Type: string,
    Name: string,
    Properties: TemplateActivityPropertiesType,
    Children: Array<TemplateActivityType>,
}

export type TemplateActivityPropertiesType = {
    Title: string,
    _DesMinimized: 'N' | 'Y',
    [key: string]: any,
}