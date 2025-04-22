export const getListApple = async () => {
    const response = await fetch(`https://task-management-duylinh.vercel.app/api/v1/phone?keyword=iphone`)
    const result = await response.json()
    return result;
};

export const getListSamsung = async () => {
    const response = await fetch(`https://task-management-duylinh.vercel.app/api/v1/phone?keyword=samsung`)
    const result = await response.json()
    return result;
};

export const getListOppo = async () => {
    const response = await fetch(`https://task-management-duylinh.vercel.app/api/v1/phone?keyword=oppo`)
    const result = await response.json()
    return result
};
