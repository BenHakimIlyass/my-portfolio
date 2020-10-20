const pickFromObject = (objId, obj, id) => obj.find((element) => element[id] === objId);
export default pickFromObject;
