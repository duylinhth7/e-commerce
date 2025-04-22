export const searchSevices = async (keyword, sortKey = "", sortValue = "") => {
    // Xây dựng URL với điều kiện tham số không rỗng
    let url = `https://task-management-duylinh.vercel.app/api/v1/phone?keyword=${keyword}`;
    
    if (sortKey) {
        url += `&sortKey=${sortKey}`;
    }

    if (sortValue) {
        url += `&sortValue=${sortValue}`;
    }

    const response = await fetch(url);
    const res = await response.json();
    return res;
};
