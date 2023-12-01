const moduleGlob = import.meta.glob('./*.mjs');

const cm = {};

for (const key in moduleGlob){
    if (Object.prototype.hasOwnProperty.call(moduleGlob, key)) {
        const moduleName = key.replace(/^.\//,'').replace(/\.mjs/,'');
        moduleGlob[key]().then((module)=>{
            cm[moduleName] = module;
        });
    }
}
export default cm