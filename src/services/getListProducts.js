export const getListApple = async () => {
    const response = await fetch(`https://api.apify.com/v2/key-value-stores/Dk3WYwoH9GqWLc6Cm/records/LATEST`)
    const result = await response.json()
    return result.phone.apple;
};

export const getListSamsung = async () => {
    const response = await fetch(`https://api.apify.com/v2/key-value-stores/Dk3WYwoH9GqWLc6Cm/records/LATEST`)
    const result = await response.json()
    return result.phone.samsung;
};
