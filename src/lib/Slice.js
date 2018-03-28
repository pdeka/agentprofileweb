export default class Slice {

  findSlice(sliceBody, sliceName) {
    return sliceBody.find(el => el.slice_type === sliceName);
  }

}
