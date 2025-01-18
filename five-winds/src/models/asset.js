/*
* @typedef {Object} Asset
    * @property {string} id
    * @property {string name
    * @


*/



export function createAssetFromFile(file){
    return {
        id: crypto.randomUUID(),
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        size: file.size
    };
}
