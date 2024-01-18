import { SET_FATHER_IMAGE, SET_MOTHER_IMAGES, SET_BABY_IMAGES, SET_FAMILY_IMAGES_DATA, SET_FATHER_BLOB, SET_MOTHER_BLOB, CLEAR_DATA } from "../Types";

const initialState = {
  fatherImage: null,
  motherImage: null,
  childImages: [],
  fatherBlob: null,
  motherBlob: null,
};


const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FATHER_IMAGE:
      return {
        ...state,
        fatherImage: action.payload,
      };
    case SET_MOTHER_IMAGES:
      return {
        ...state,
        motherImage: action.payload,
      };

    case SET_BABY_IMAGES:
      return {
        ...state,
        childImages: action.payload,
      };

    case SET_FAMILY_IMAGES_DATA:
      const { fatherImage, motherImage, childImages } = action.payload
      return {
        ...state,
        fatherImage, motherImage, childImages
      };
    case SET_FATHER_BLOB:
      return {
        ...state,
        fatherBlob: action.payload
      };
    case SET_MOTHER_BLOB:
      return {
        ...state,
        motherBlob: action.payload
      }

      case CLEAR_DATA:
      return {
        ...state,
        fatherImage: action.payload,
        motherImage: action.payload,
        childImages: []
      }

    default:
      return state;
  }
};

export default imageReducer

