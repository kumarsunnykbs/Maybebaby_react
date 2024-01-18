import { SET_FATHER_IMAGE, SET_MOTHER_IMAGES, SET_BABY_IMAGES, SET_FAMILY_IMAGES_DATA, SET_FATHER_BLOB, SET_MOTHER_BLOB , CLEAR_DATA} from "../Types";

export const setFatherImage = (fatherImage) => {
    console.log(fatherImage, "fatherImageaction");
    return {
        type: SET_FATHER_IMAGE,
        payload: fatherImage
    }
}

export const setMotherImage = (motherIMage) => {
    console.log(motherIMage, "motherIMage");
    return {
        type: SET_MOTHER_IMAGES,
        payload: motherIMage
    }
}


export const setAllBabyImages = (babyImages) => {
    return {
        type: SET_BABY_IMAGES,
        payload: babyImages
    }
}

export const setAllFamilyImages = (AllImages) => {
    return {
        type: SET_FAMILY_IMAGES_DATA,
        payload: AllImages
    }
}

export const setFatherImageBlob = (payload) => {
    return {
        type: SET_FATHER_BLOB,
        payload
    }
}

export const setMotherImageBlob = (payload) => {
    return {
        type: SET_MOTHER_BLOB,
        payload
    }
}

export const clearData = (payload) => {
    return {
        type: CLEAR_DATA,
        payload
    }
}