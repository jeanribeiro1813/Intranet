import handlebars from "handlebars";

interface ITemplatesVariables{

    [key: string] : string | number;

}

interface IParserEmailTemplate {

    template:string;
    variables:ITemplatesVariables
}
export default  class handlebarsMailTemplates {
    public async parse({template, variables}:IParserEmailTemplate):Promise<string>{

        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);


    }
}