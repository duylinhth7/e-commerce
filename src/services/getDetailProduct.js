export const getDetailProduct = async (name, index) => {
    const response = await fetch("https://api.apify.com/v2/key-value-stores/Dk3WYwoH9GqWLc6Cm/records/LATEST")
    const result =  await response.json();
    return result.phone[name][index]
} 