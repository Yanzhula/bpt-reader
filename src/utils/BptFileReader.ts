import { TemplateType } from "../types/Template";

const phpUnserialize = require('phpunserialize');

export const readBptFile = (bptFile: File): Promise<TemplateType> =>
{
    const ds = new DecompressionStream('deflate');
    const decompressedStream = bptFile.stream().pipeThrough(ds);

    return new Promise((resolve) => {
        (new Response(decompressedStream))
            .text().then(
                (bptContent) => {
                    resolve(phpUnserialize(bptContent) as TemplateType);
                },
            )
        ;
    });
}
