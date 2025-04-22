export const getDetailProduct = async (id) => {
    const response = await fetch(`https://task-management-duylinh.vercel.app/api/v1/phone/detail/${id}`)
    const result =  await response.json();
    return result
} 